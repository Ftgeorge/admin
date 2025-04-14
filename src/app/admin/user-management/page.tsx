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
import { CheckCircle2, XCircle, CircleOff, Pencil, Trash2 } from "lucide-react"; // Icons for status and actions
import PageContainer from "@/components/PageContainer"; // Import shared components
import PageHeader from "@/components/PageHeader";
import PageHeading from "@/components/PageHeading";
import React from "react"; // Import React

// --- Type Definitions ---
type UserStatus = "Active" | "Pending" | "Banned";

interface User {
  id: number;
  profile: string; // Assuming initials or similar
  name: string;
  email: string;
  contact: string;
  role: "Landlord" | "Tenant" | "Admin";
  status: UserStatus;
  dateJoined: string;
  // avatarUrl?: string; // Optional: If using real image URLs
}
// --- End Type Definitions ---

// Placeholder data for users
const users: User[] = [
  {
    id: 1,
    profile: "FG",
    name: "Fabumni George",
    email: "fgace@gmail.com",
    contact: "9903474742",
    role: "Landlord",
    status: "Active", // Active, Pending, Banned/Inactive
    dateJoined: "2023-03-22",
  },
  {
    id: 2,
    profile: "AJ",
    name: "Ayo Joel",
    email: "Joelayo@gmail.com",
    contact: "8103485262",
    role: "Tenant",
    status: "Pending",
    dateJoined: "2023-03-22",
  },
  {
    id: 3,
    profile: "SJ",
    name: "Sarjas James",
    email: "sarjas@gmail.com",
    contact: "8112347830",
    role: "Admin",
    status: "Banned",
    dateJoined: "2023-03-22",
  },
  // Add more user data as needed
];

// Helper to get status icon and color
const getStatusInfo = (status: UserStatus): { icon: React.ReactNode, color: string } => {
  switch (status) { // No need for toLowerCase() if using defined types
    case "Active":
      return { icon: <CheckCircle2 className="h-4 w-4 text-green-500" />, color: "text-green-600" };
    case "Pending":
      return { icon: <CircleOff className="h-4 w-4 text-yellow-500" />, color: "text-yellow-600" };
    case "Banned":
      return { icon: <XCircle className="h-4 w-4 text-red-500" />, color: "text-red-600" };
    default:
      // Optional: Handle unexpected status, though TypeScript should help prevent this
      const _exhaustiveCheck: never = status;
      return { icon: null, color: "text-gray-600" };
  }
};

export default function UserManagementPage() {
  return (
    <PageContainer> {/* Wrap with PageContainer */}
      <PageHeader> {/* Add shared PageHeader */}
        <PageHeading>User Management</PageHeading> {/* Add shared PageHeading */}
      </PageHeader>
      <div className="space-y-6"> {/* Keep spacing for content below header */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 max-w-md bg-transparent p-0">
            {/* Using custom styles to match the brown active tab */}
            <TabsTrigger value="all" className="data-[state=active]:bg-[#7B5B40] data-[state=active]:text-white rounded-md mx-1 bg-[#EBE6DD] text-[#5C5C5C]">All</TabsTrigger>
            <TabsTrigger value="landlord" className="data-[state=active]:bg-[#7B5B40] data-[state=active]:text-white rounded-md mx-1 bg-[#EBE6DD] text-[#5C5C5C]">Landlord</TabsTrigger>
            <TabsTrigger value="tenant" className="data-[state=active]:bg-[#7B5B40] data-[state=active]:text-white rounded-md mx-1 bg-[#EBE6DD] text-[#5C5C5C]">Tenant</TabsTrigger>
            <TabsTrigger value="admin" className="data-[state=active]:bg-[#7B5B40] data-[state=active]:text-white rounded-md mx-1 bg-[#EBE6DD] text-[#5C5C5C]">Admin</TabsTrigger>
          </TabsList>

          {/* Content for All Users Tab */}
          <TabsContent value="all">
            <div className="rounded-lg border bg-white mt-4">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#F9F6F1] hover:bg-[#F9F6F1]">
                    <TableHead>Profile</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date Joined</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => {
                    const statusInfo = getStatusInfo(user.status);
                    return (
                      <TableRow key={user.id}>
                        <TableCell>
                          <Avatar className="h-10 w-10 bg-[#EBE6DD] text-[#7B5B40]"> {/* Using mockup colors */} 
                            {/* <AvatarImage src={user.avatarUrl} alt={user.name} /> */}
                            <AvatarFallback className="font-medium">{user.profile}</AvatarFallback>
                          </Avatar>
                        </TableCell>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.contact}</TableCell>
                        <TableCell>
                          {/* You might want different badge styles based on role */}
                          <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">{user.role}</Badge>
                        </TableCell>
                        <TableCell className="flex items-center gap-2">
                           {statusInfo.icon}
                           <span className={statusInfo.color}>{user.status}</span>
                        </TableCell>
                        <TableCell>{user.dateJoined}</TableCell>
                        <TableCell className="space-x-1">
                          {/* Action buttons adjusted based on mockup */}
                          {user.status === 'Pending' && (
                            <>
                              <Button variant="outline" size="sm" className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 h-auto">
                                Preview
                              </Button>
                              <Button variant="outline" size="sm" className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 h-auto">
                                Reject
                              </Button>
                            </>
                          )}
                          {user.status !== 'Pending' && (
                            <>
                               {/* Placeholder green/red/green buttons from mockup */}
                               <Button variant="outline" size="sm" className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 h-auto">Action1</Button>
                               <Button variant="outline" size="sm" className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 h-auto">Action2</Button>
                               <Button variant="outline" size="sm" className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 h-auto">Action3</Button>
                            </>
                          )}
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600 hover:text-red-700">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          {/* Add TabsContent for landlord, tenant, admin with similar table structure, filtering the users array */}
          <TabsContent value="landlord"> <div className="rounded-lg border bg-white mt-4 p-4">Landlord Users Table Placeholder</div> </TabsContent>
          <TabsContent value="tenant"> <div className="rounded-lg border bg-white mt-4 p-4">Tenant Users Table Placeholder</div> </TabsContent>
          <TabsContent value="admin"> <div className="rounded-lg border bg-white mt-4 p-4">Admin Users Table Placeholder</div> </TabsContent>
        </Tabs>
      </div>
    </PageContainer>
  );
} 