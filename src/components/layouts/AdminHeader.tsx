"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // For mobile sidebar potentially
import { cn } from "@/lib/utils";
import { Menu, Search, Bell, User, LayoutGrid, LogOut } from "lucide-react";
import Link from "next/link";

interface AdminHeaderProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export function AdminHeader({ isSidebarOpen, onToggleSidebar }: AdminHeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6 bg-white">
      {/* Sidebar Toggle - Hidden on larger screens, shown on smaller */}
      {/* <Button
        variant="outline"
        size="icon"
        className="shrink-0 md:hidden"
        // onClick={onToggleSidebar} // Link this if using Sheet for mobile
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button> */}

      {/* Sidebar Toggle for Desktop */}
      <Button
        variant="ghost"
        size="icon"
        className="shrink-0 hidden md:flex" // Use hidden md:flex or similar based on desired breakpoint
        onClick={onToggleSidebar}
        aria-label="Toggle sidebar"
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Header Content */}
      <div className="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
        {/* Search Bar */}
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-gray-100 rounded-full" // Adjust width and style as needed
            />
          </div>
        </form>

        {/* Action Buttons/Icons */}
        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <LogOut className="h-5 w-5" />
          <span className="sr-only">Logout</span>
        </Button>

        {/* User Menu */}
        <div className="flex items-center gap-2">
           <span className="hidden sm:inline-block text-sm text-muted-foreground">Welcome back, Admin</span>
           <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" /> {/* Replace with actual image or remove src for fallback */}
            <AvatarFallback>AD</AvatarFallback> {/* Or use user initials */}
          </Avatar>
        </div>
         {/* Consider wrapping user menu in DropdownMenu for options */}
         {/* <DropdownMenu>
           <DropdownMenuTrigger asChild>
               ... avatar logic ...
           </DropdownMenuTrigger>
           <DropdownMenuContent align="end">
             <DropdownMenuLabel>My Account</DropdownMenuLabel>
             <DropdownMenuSeparator />
             <DropdownMenuItem>Settings</DropdownMenuItem>
             <DropdownMenuItem>Support</DropdownMenuItem>
             <DropdownMenuSeparator />
             <DropdownMenuItem>Logout</DropdownMenuItem>
           </DropdownMenuContent>
         </DropdownMenu> */}
      </div>
    </header>
  );
} 