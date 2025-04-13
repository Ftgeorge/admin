import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Eye, XCircle, Pencil, Trash2 } from "lucide-react"; // Icons for actions

// Placeholder data for properties
const properties = [
  {
    id: 1,
    image: "/placeholder-property.jpg",
    name: "Semi-Detached Duplex",
    owner: "June Smith",
    status: "Pending",
    locationType: "Abuja - Duplex",
    dateAdded: "2023-03-22",
  },
  // Add more property data as needed
];

export default function PropertyManagementPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Property Management</h2>

      <Tabs defaultValue="pending" className="w-full">
        <TabsList className="grid w-full grid-cols-4 max-w-md bg-transparent p-0">
          {/* Using custom styles to match the brown active tab */}
          <TabsTrigger value="pending" className="data-[state=active]:bg-[#7B5B40] data-[state=active]:text-white rounded-md mx-1 bg-[#EBE6DD] text-[#5C5C5C]">Pending</TabsTrigger>
          <TabsTrigger value="active" className="data-[state=active]:bg-[#7B5B40] data-[state=active]:text-white rounded-md mx-1 bg-[#EBE6DD] text-[#5C5C5C]">Active</TabsTrigger>
          <TabsTrigger value="inactive" className="data-[state=active]:bg-[#7B5B40] data-[state=active]:text-white rounded-md mx-1 bg-[#EBE6DD] text-[#5C5C5C]">Inactive</TabsTrigger>
          <TabsTrigger value="archived" className="data-[state=active]:bg-[#7B5B40] data-[state=active]:text-white rounded-md mx-1 bg-[#EBE6DD] text-[#5C5C5C]">Archived</TabsTrigger>
        </TabsList>

        {/* Content for Pending Tab */}
        <TabsContent value="pending">
          <div className="rounded-lg border bg-white mt-4"> {/* Added border and bg-white */}
            <Table>
              <TableHeader>
                <TableRow className="bg-[#F9F6F1] hover:bg-[#F9F6F1]"> {/* Header background */}
                  <TableHead>Image</TableHead>
                  <TableHead>Property Name</TableHead>
                  <TableHead>Owner</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Location & Type</TableHead>
                  <TableHead>Date Added</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {properties.map((prop) => (
                  <TableRow key={prop.id}>
                    <TableCell>
                      <Avatar className="h-10 w-10 rounded-md"> {/* Rounded image */} 
                        <AvatarImage src={prop.image} alt={prop.name} className="object-cover"/>
                        <AvatarFallback>{prop.name.substring(0, 1)}</AvatarFallback>
                      </Avatar>
                    </TableCell>
                    <TableCell className="font-medium">{prop.name}</TableCell>
                    <TableCell>{prop.owner}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-orange-600 border-orange-300 bg-orange-50">{prop.status}</Badge>
                    </TableCell>
                    <TableCell>{prop.locationType}</TableCell>
                    <TableCell>{prop.dateAdded}</TableCell>
                    <TableCell className="space-x-1">
                       {/* Action Buttons - using green/red from mockup */}
                      <Button variant="outline" size="sm" className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 h-auto">
                        Preview {/* Changed from icon to text like mockup */}
                      </Button>
                      <Button variant="outline" size="sm" className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 h-auto">
                        Reject {/* Changed from icon to text like mockup */}
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600 hover:text-red-700">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        {/* Add TabsContent for active, inactive, archived with similar table structure */}
        <TabsContent value="active"> <div className="rounded-lg border bg-white mt-4 p-4">Active Properties Table Placeholder</div> </TabsContent>
        <TabsContent value="inactive"> <div className="rounded-lg border bg-white mt-4 p-4">Inactive Properties Table Placeholder</div> </TabsContent>
        <TabsContent value="archived"> <div className="rounded-lg border bg-white mt-4 p-4">Archived Properties Table Placeholder</div> </TabsContent>
      </Tabs>
    </div>
  );
} 