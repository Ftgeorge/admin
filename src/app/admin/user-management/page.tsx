"use client"

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
import { CheckCircle2, XCircle, CircleOff, Pencil, Trash2, Eye, X, UserCheck } from "lucide-react";
import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";
import PageHeading from "@/components/PageHeading";
import React, { useState } from "react";

// Type Definitions
type UserStatus = "Active" | "Pending" | "Banned";
type UserRole = "Landlord" | "Tenant" | "Admin";

interface User {
  id: number;
  profile: string;
  name: string;
  email: string;
  contact: string;
  role: UserRole;
  status: UserStatus;
  dateJoined: string;
}

// Helper function to get status info
const getStatusInfo = (status: UserStatus): { 
  icon: React.ReactNode, 
  color: string,
  badgeClass: string
} => {
  switch (status) {
    case "Active":
      return { 
        icon: <CheckCircle2 className="h-4 w-4 text-green-500" />, 
        color: "text-green-600",
        badgeClass: "text-green-600 border-green-300 bg-green-50"
      };
    case "Pending":
      return { 
        icon: <CircleOff className="h-4 w-4 text-orange-500" />, 
        color: "text-orange-600",
        badgeClass: "text-orange-600 border-orange-300 bg-orange-50"
      };
    case "Banned":
      return { 
        icon: <XCircle className="h-4 w-4 text-red-500" />, 
        color: "text-red-600",
        badgeClass: "text-red-600 border-red-300 bg-red-50"
      };
    default:
      const _exhaustiveCheck: never = status;
      return { 
        icon: null, 
        color: "text-gray-600",
        badgeClass: "text-gray-600 border-gray-300 bg-gray-50"
      };
  }
};

// Helper function to get role badge class
const getRoleBadgeClass = (role: UserRole): string => {
  switch (role) {
    case "Landlord":
      return "text-blue-700 border-blue-300 bg-blue-50";
    case "Tenant":
      return "text-purple-700 border-purple-300 bg-purple-50";
    case "Admin":
      return "text-gray-700 border-gray-300 bg-gray-50";
    default:
      const _exhaustiveCheck: never = role;
      return "text-gray-600 border-gray-300 bg-gray-50";
  }
};

export default function UserManagementPage() {
  const [activeTab, setActiveTab] = useState<UserRole | "All">("All");
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      profile: "FG",
      name: "Fabumni George",
      email: "fgace@gmail.com",
      contact: "9903474742",
      role: "Landlord",
      status: "Active",
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
      dateJoined: "2023-04-15",
    },
    {
      id: 3,
      profile: "SJ",
      name: "Sarjas James",
      email: "sarjas@gmail.com",
      contact: "8112347830",
      role: "Admin",
      status: "Banned",
      dateJoined: "2023-01-10",
    },
    {
      id: 4,
      profile: "ML",
      name: "Mary Lawrence",
      email: "mary.lawrence@example.com",
      contact: "7034569821",
      role: "Landlord",
      status: "Active",
      dateJoined: "2023-05-18",
    },
    {
      id: 5,
      profile: "TG",
      name: "Tom Green",
      email: "tom.green@example.com",
      contact: "9056782314",
      role: "Tenant",
      status: "Active",
      dateJoined: "2023-06-22",
    },
    {
      id: 6,
      profile: "SA",
      name: "Sarah Adebayo",
      email: "sarah.adebayo@example.com",
      contact: "8012345678",
      role: "Tenant",
      status: "Pending",
      dateJoined: "2023-07-14",
    },
    {
      id: 7,
      profile: "MO",
      name: "Michael Okonkwo",
      email: "michael.o@example.com",
      contact: "7023456789",
      role: "Landlord",
      status: "Banned",
      dateJoined: "2023-02-05",
    },
    {
      id: 8,
      profile: "JD",
      name: "Jane Doe",
      email: "jane.doe@example.com",
      contact: "9012345678",
      role: "Admin",
      status: "Active",
      dateJoined: "2023-01-30",
    }
  ]);

  // Function to handle user approval
  const handleApprove = (id: number) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, status: "Active" } : user
    ));
  };

  // Function to handle user rejection/banning
  const handleReject = (id: number) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, status: "Banned" } : user
    ));
  };

  // Function to handle user deletion
  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  // Function to handle tab changes
  const handleTabChange = (value: string) => {
    setActiveTab(value as UserRole | "All");
  };

  // Filter users based on active tab
  const filteredUsers = activeTab === "All" 
    ? users 
    : users.filter(user => user.role === activeTab);

  return (
    <PageContainer>
      <PageHeader>
        <PageHeading>User Management</PageHeading>
        <Tabs defaultValue="All" onValueChange={handleTabChange}>
          <TabsList className="grid w-full grid-cols-4 max-w-xl bg-transparent p-0">
            <TabsTrigger 
              value="All" 
              className="data-[state=active]:bg-[#7B4F3A] data-[state=active]:text-white rounded-md mx-1 bg-transparent border border-[#E3E2D9] text-[#5C5C5C]"
            >
              All Users
            </TabsTrigger>
            <TabsTrigger 
              value="Landlord" 
              className="data-[state=active]:bg-[#7B4F3A] data-[state=active]:text-white rounded-md mx-1 bg-transparent border border-[#E3E2D9] text-[#5C5C5C]"
            >
              Landlord
            </TabsTrigger>
            <TabsTrigger 
              value="Tenant" 
              className="data-[state=active]:bg-[#7B4F3A] data-[state=active]:text-white rounded-md mx-1 bg-transparent border border-[#E3E2D9] text-[#5C5C5C]"
            >
              Tenant
            </TabsTrigger>
            <TabsTrigger 
              value="Admin" 
              className="data-[state=active]:bg-[#7B4F3A] data-[state=active]:text-white rounded-md mx-1 bg-transparent border border-[#E3E2D9] text-[#5C5C5C]"
            >
              Admin
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </PageHeader>
      
      <div className="space-y-6 mt-6">
        <Tabs defaultValue="All" value={activeTab}>
          <TabsContent value="All">
            <UserTable 
              users={filteredUsers} 
              onApprove={handleApprove} 
              onReject={handleReject} 
              onDelete={handleDelete} 
            />
          </TabsContent>
          <TabsContent value="Landlord">
            <UserTable 
              users={filteredUsers} 
              onApprove={handleApprove} 
              onReject={handleReject} 
              onDelete={handleDelete} 
            />
          </TabsContent>
          <TabsContent value="Tenant">
            <UserTable 
              users={filteredUsers} 
              onApprove={handleApprove} 
              onReject={handleReject} 
              onDelete={handleDelete} 
            />
          </TabsContent>
          <TabsContent value="Admin">
            <UserTable 
              users={filteredUsers} 
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

interface UserTableProps {
  users: User[];
  onApprove: (id: number) => void;
  onReject: (id: number) => void;
  onDelete: (id: number) => void;
}

function UserTable({ users, onApprove, onReject, onDelete }: UserTableProps) {
  const [editMode, setEditMode] = useState<number | null>(null);
  
  // Display a message if no users match the current filter
  if (users.length === 0) {
    return (
      <div className="rounded-lg border border-[#E3E2D9] bg-[#F8F7F2] mt-4 p-8 text-center">
        <p className="text-gray-500">No users found matching the current filter.</p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-[#E3E2D9] bg-[#F8F7F2] overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-[#E3E2D944] hover:bg-[#E3E2D955]">
            <TableHead>Profile</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date Joined</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => {
            const statusInfo = getStatusInfo(user.status);
            const roleBadgeClass = getRoleBadgeClass(user.role);
            
            return (
              <TableRow key={user.id} className="hover:bg-[#F0EFE9]">
                <TableCell>
                  <Avatar className="h-10 w-10 bg-[#EBE6DD] text-[#7B5B40]">
                    <AvatarFallback className="font-medium">{user.profile}</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.contact}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={roleBadgeClass}>
                    {user.role}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {statusInfo.icon}
                    <Badge variant="outline" className={statusInfo.badgeClass}>
                      {user.status}
                    </Badge>
                  </div>
                </TableCell>
                <TableCell>{user.dateJoined}</TableCell>
                <TableCell>
                  <div className="flex justify-center items-center space-x-2">
                    {user.status === "Pending" && (
                      <>
                        <Button 
                          onClick={() => onApprove(user.id)}
                          size="sm" 
                          className="bg-green-100 hover:bg-green-200 text-green-700 border border-green-300 rounded px-3 py-1 h-8 text-xs font-medium flex items-center gap-1"
                        >
                          <UserCheck className="h-3.5 w-3.5" />
                          Approve
                        </Button>
                        <Button 
                          onClick={() => onReject(user.id)}
                          size="sm" 
                          className="bg-red-100 hover:bg-red-200 text-red-700 border border-red-300 rounded px-3 py-1 h-8 text-xs font-medium flex items-center gap-1"
                        >
                          <X className="h-3.5 w-3.5" />
                          Reject
                        </Button>
                      </>
                    )}
                    {user.status === "Active" && (
                      <Button 
                        onClick={() => onReject(user.id)}
                        size="sm" 
                        className="bg-red-100 hover:bg-red-200 text-red-700 border border-red-300 rounded px-3 py-1 h-8 text-xs font-medium flex items-center gap-1"
                      >
                        <XCircle className="h-3.5 w-3.5" />
                        Ban User
                      </Button>
                    )}
                    {user.status === "Banned" && (
                      <Button 
                        onClick={() => onApprove(user.id)}
                        size="sm" 
                        className="bg-green-100 hover:bg-green-200 text-green-700 border border-green-300 rounded px-3 py-1 h-8 text-xs font-medium flex items-center gap-1"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        Reactivate
                      </Button>
                    )}
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                      onClick={() => setEditMode(user.id === editMode ? null : user.id)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-100"
                      onClick={() => onDelete(user.id)}
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