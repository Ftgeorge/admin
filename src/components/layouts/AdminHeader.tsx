"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Search, Bell, LogOut } from "lucide-react";


export function AdminHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center gap-4 border-b border-b-[#E3E2D9] bg-background px-6 bg-[#F8F7F2]">
      <div className="flex w-full items-center justify-between gap-4 md:gap-2 lg:gap-4">
        <span className="hidden sm:inline-block text-base text-[#323232]">Welcome back, Admin</span>

        <div className="flex gap-2 px-2 items-center rounded-full border border-[#E3E2D9]">
          <Search className="size-4 text-[#55555555]" />
          <input
            className="w-80 py-2 text-[#555555] focused:border-none"
            placeholder="search"
          />
        </div>

        <div className="flex gap-3">
          <div className="flex items-center gap-2">
            <h2 className="text-[#323232] text-xs font-medium">Admin</h2>
            <Avatar className="size-8">
              <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Bell className="size-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <LogOut className="size-5" />
            <span className="sr-only">Logout</span>
          </Button>
        </div>
      </div>
    </header>
  );
} 