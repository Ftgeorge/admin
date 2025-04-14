"use client";

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
import { Pencil, Trash2, Eye, X } from "lucide-react";
import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";
import PageHeading from "@/components/PageHeading";
import React, { useState } from "react";

type PropertyStatus = "Pending" | "Active" | "Inactive" | "Archived";

interface Property {
  id: number;
  image: string;
  name: string;
  owner: string;
  status: PropertyStatus;
  locationType: string;
  dateAdded: string;
}

const properties: Property[] = [
  {
    id: 1,
    image: "/placeholder-property.jpg",
    name: "Semi-Detached Duplex",
    owner: "June Smith",
    status: "Pending",
    locationType: "Abuja - Duplex",
    dateAdded: "2023-03-22",
  },
  {
    id: 2,
    image: "/placeholder-property.jpg",
    name: "Luxury Apartment",
    owner: "Alex Johnson",
    status: "Active",
    locationType: "Lagos - Apartment",
    dateAdded: "2023-05-14",
  },
  {
    id: 3,
    image: "/placeholder-property.jpg",
    name: "Beachfront Villa",
    owner: "Michael Chen",
    status: "Inactive",
    locationType: "Port Harcourt - Villa",
    dateAdded: "2023-02-08",
  },
  {
    id: 4,
    image: "/placeholder-property.jpg",
    name: "Modern Bungalow",
    owner: "Sarah Williams",
    status: "Pending",
    locationType: "Abuja - Bungalow",
    dateAdded: "2023-07-30",
  },
  {
    id: 5,
    image: "/placeholder-property.jpg",
    name: "Executive Office Space",
    owner: "David Okonkwo",
    status: "Active",
    locationType: "Lagos - Commercial",
    dateAdded: "2023-04-19",
  },
  {
    id: 6,
    image: "/placeholder-property.jpg",
    name: "Terraced House",
    owner: "Grace Adebayo",
    status: "Archived",
    locationType: "Ibadan - Terraced",
    dateAdded: "2022-11-05",
  },
  {
    id: 7,
    image: "/placeholder-property.jpg",
    name: "Waterfront Penthouse",
    owner: "Omar Suleiman",
    status: "Pending",
    locationType: "Lagos - Penthouse",
    dateAdded: "2023-06-12",
  },
  {
    id: 8,
    image: "/placeholder-property.jpg",
    name: "Studio Apartment",
    owner: "Chioma Eze",
    status: "Inactive",
    locationType: "Abuja - Studio",
    dateAdded: "2023-01-25",
  }
];

const getPropertyStatusInfo = (status: PropertyStatus): { variant: "default" | "secondary" | "destructive" | "outline", className: string } => {
  switch (status) {
    case "Pending":
      return { variant: "outline", className: "text-orange-600 border-orange-300 bg-orange-50" };
    case "Active":
      return { variant: "outline", className: "text-green-600 border-green-300 bg-green-50" };
    case "Inactive":
      return { variant: "outline", className: "text-gray-600 border-gray-300 bg-gray-50" };
    case "Archived":
      return { variant: "secondary", className: "text-gray-500 border-gray-200 bg-gray-100" };
    default:
      const _exhaustiveCheck: never = status;
      return { variant: "secondary", className: "" };
  }
};

export default function PropertyManagementPage() {
  const [activeTab, setActiveTab] = useState<PropertyStatus | "All">("Pending");
  const [properties, setProperties] = useState<Property[]>([
    {
      id: 1,
      image: "/placeholder-property.jpg",
      name: "Semi-Detached Duplex",
      owner: "June Smith",
      status: "Pending",
      locationType: "Abuja - Duplex",
      dateAdded: "2023-03-22",
    },
    {
      id: 2,
      image: "/placeholder-property.jpg",
      name: "Luxury Apartment",
      owner: "Alex Johnson",
      status: "Active",
      locationType: "Lagos - Apartment",
      dateAdded: "2023-05-14",
    },
    {
      id: 3,
      image: "/placeholder-property.jpg",
      name: "Beachfront Villa",
      owner: "Michael Chen",
      status: "Inactive",
      locationType: "Port Harcourt - Villa",
      dateAdded: "2023-02-08",
    },
    {
      id: 4,
      image: "/placeholder-property.jpg",
      name: "Modern Bungalow",
      owner: "Sarah Williams",
      status: "Pending",
      locationType: "Abuja - Bungalow",
      dateAdded: "2023-07-30",
    },
    {
      id: 5,
      image: "/placeholder-property.jpg",
      name: "Executive Office Space",
      owner: "David Okonkwo",
      status: "Active",
      locationType: "Lagos - Commercial",
      dateAdded: "2023-04-19",
    },
    {
      id: 6,
      image: "/placeholder-property.jpg",
      name: "Terraced House",
      owner: "Grace Adebayo",
      status: "Archived",
      locationType: "Ibadan - Terraced",
      dateAdded: "2022-11-05",
    },
    {
      id: 7,
      image: "/placeholder-property.jpg",
      name: "Waterfront Penthouse",
      owner: "Omar Suleiman",
      status: "Pending",
      locationType: "Lagos - Penthouse",
      dateAdded: "2023-06-12",
    },
    {
      id: 8,
      image: "/placeholder-property.jpg",
      name: "Studio Apartment",
      owner: "Chioma Eze",
      status: "Inactive",
      locationType: "Abuja - Studio",
      dateAdded: "2023-01-25",
    }
  ]);

  // Function to handle property approval
  const handleApprove = (id: number) => {
    setProperties(properties.map(property => 
      property.id === id ? { ...property, status: "Active" } : property
    ));
  };

  // Function to handle property rejection
  const handleReject = (id: number) => {
    setProperties(properties.map(property => 
      property.id === id ? { ...property, status: "Inactive" } : property
    ));
  };

  // Function to handle property deletion
  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this property?")) {
      setProperties(properties.filter(property => property.id !== id));
    }
  };

  // Function to handle tab changes
  const handleTabChange = (value: string) => {
    setActiveTab(value as PropertyStatus | "All");
  };

  // Filter properties based on active tab
  const filteredProperties = activeTab === "All" 
    ? properties 
    : properties.filter(property => property.status === activeTab);

  return (
    <PageContainer>
      <PageHeader>
        <PageHeading>Property Management</PageHeading>
        <Tabs defaultValue="Pending" onValueChange={handleTabChange}>
          <TabsList className="grid w-full grid-cols-5 max-w-2xl bg-transparent p-0">
            <TabsTrigger 
              value="All" 
              className="data-[state=active]:bg-[#7B4F3A] data-[state=active]:text-white rounded-md mx-1 bg-transparent border border-[#E3E2D9] text-[#5C5C5C]"
            >
              All
            </TabsTrigger>
            <TabsTrigger 
              value="Pending" 
              className="data-[state=active]:bg-[#7B4F3A] data-[state=active]:text-white rounded-md mx-1 bg-transparent border border-[#E3E2D9] text-[#5C5C5C]"
            >
              Pending
            </TabsTrigger>
            <TabsTrigger 
              value="Active" 
              className="data-[state=active]:bg-[#7B4F3A] data-[state=active]:text-white rounded-md mx-1 bg-transparent border border-[#E3E2D9] text-[#5C5C5C]"
            >
              Active
            </TabsTrigger>
            <TabsTrigger 
              value="Inactive" 
              className="data-[state=active]:bg-[#7B4F3A] data-[state=active]:text-white rounded-md mx-1 bg-transparent border border-[#E3E2D9] text-[#5C5C5C]"
            >
              Inactive
            </TabsTrigger>
            <TabsTrigger 
              value="Archived" 
              className="data-[state=active]:bg-[#7B4F3A] data-[state=active]:text-white rounded-md mx-1 bg-transparent border border-[#E3E2D9] text-[#5C5C5C]"
            >
              Archived
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </PageHeader>
      
      <div className="space-y-6 mt-6">
        <Tabs defaultValue="Pending" value={activeTab}>
          <TabsContent value="All">
            <PropertyTable 
              properties={filteredProperties} 
              onApprove={handleApprove} 
              onReject={handleReject} 
              onDelete={handleDelete} 
            />
          </TabsContent>
          <TabsContent value="Pending">
            <PropertyTable 
              properties={filteredProperties} 
              onApprove={handleApprove} 
              onReject={handleReject} 
              onDelete={handleDelete} 
            />
          </TabsContent>
          <TabsContent value="Active">
            <PropertyTable 
              properties={filteredProperties} 
              onApprove={handleApprove} 
              onReject={handleReject} 
              onDelete={handleDelete} 
            />
          </TabsContent>
          <TabsContent value="Inactive">
            <PropertyTable 
              properties={filteredProperties} 
              onApprove={handleApprove} 
              onReject={handleReject} 
              onDelete={handleDelete} 
            />
          </TabsContent>
          <TabsContent value="Archived">
            <PropertyTable 
              properties={filteredProperties} 
              onApprove={handleApprove} 
              onReject={handleReject} 
              onDelete={handleDelete} 
            />
          </TabsContent>
        </Tabs>
      </div>
    </PageContainer>
  );
}

interface PropertyTableProps {
  properties: Property[];
  onApprove: (id: number) => void;
  onReject: (id: number) => void;
  onDelete: (id: number) => void;
}

function PropertyTable({ properties, onApprove, onReject, onDelete }: PropertyTableProps) {
  const [editMode, setEditMode] = useState<number | null>(null);
  
  // Display a message if no properties match the current filter
  if (properties.length === 0) {
    return (
      <div className="rounded-lg border border-[#E3E2D9] bg-[#F8F7F2] mt-4 p-8 text-center">
        <p className="text-gray-500">No properties found matching the current filter.</p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-[#E3E2D9] bg-[#F8F7F2] overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-[#E3E2D944] hover:bg-[#E3E2D955]">
            <TableHead>Image</TableHead>
            <TableHead>Property Name</TableHead>
            <TableHead>Owner</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Location & Type</TableHead>
            <TableHead>Date Added</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {properties.map((prop) => {
            const statusInfo = getPropertyStatusInfo(prop.status);
            return (
              <TableRow key={prop.id} className="hover:bg-[#F0EFE9]">
                <TableCell>
                  <Avatar className="h-10 w-10 rounded-md">
                    <AvatarImage src={prop.image} alt={prop.name} className="object-cover" />
                    <AvatarFallback className="bg-[#7B4F3A] text-white">{prop.name.substring(0, 1)}</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="font-medium">{prop.name}</TableCell>
                <TableCell>{prop.owner}</TableCell>
                <TableCell>
                  <Badge variant={statusInfo.variant} className={statusInfo.className}>
                    {prop.status}
                  </Badge>
                </TableCell>
                <TableCell>{prop.locationType}</TableCell>
                <TableCell>{prop.dateAdded}</TableCell>
                <TableCell>
                  <div className="flex justify-center items-center space-x-2">
                    {prop.status === "Pending" && (
                      <>
                        <Button 
                          onClick={() => onApprove(prop.id)}
                          size="sm" 
                          className="bg-green-100 hover:bg-green-200 text-green-700 border border-green-300 rounded px-3 py-1 h-8 text-xs font-medium flex items-center gap-1"
                        >
                          <Eye className="h-3.5 w-3.5" />
                          Approve
                        </Button>
                        <Button 
                          onClick={() => onReject(prop.id)}
                          size="sm" 
                          className="bg-red-100 hover:bg-red-200 text-red-700 border border-red-300 rounded px-3 py-1 h-8 text-xs font-medium flex items-center gap-1"
                        >
                          <X className="h-3.5 w-3.5" />
                          Reject
                        </Button>
                      </>
                    )}
                    {prop.status !== "Pending" && (
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="bg-blue-100 hover:bg-blue-200 text-blue-700 border border-blue-300 rounded px-3 py-1 h-8 text-xs font-medium flex items-center gap-1"
                      >
                        <Eye className="h-3.5 w-3.5" />
                        Preview
                      </Button>
                    )}
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                      onClick={() => setEditMode(prop.id === editMode ? null : prop.id)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-100"
                      onClick={() => onDelete(prop.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}