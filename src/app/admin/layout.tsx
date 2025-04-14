"use client";

import { useState } from "react";
import { AdminSidebar } from "@/components/layouts/AdminSidebar";
import { AdminHeader } from "@/components/layouts/AdminHeader";
import { cn } from "@/lib/utils";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Default to open

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-[#FAFAFA]"> {/* Slightly updated bg color based on screenshot */}
      <AdminSidebar isOpen={isSidebarOpen} />
      <div className={cn("flex flex-col flex-1 transition-all duration-300 ease-in-out", isSidebarOpen ? "pl-64" : "pl-20")}>
        <AdminHeader isSidebarOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />
        <main className="flex-1">
          <div className="p-6"> {/* Padding for the main content area */}
            {children}
          </div>
        </main>
      </div>
    </div>
  );
} 