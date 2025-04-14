"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; // Assuming ShadCN setup includes this utility
import {
  LayoutDashboard,
  Building,
  Users,
  BarChart,
  Mail,
  Settings,
  ChevronLeft, // Icon for collapsed state indicator (optional)
} from "lucide-react"; // Using lucide-react icons

interface AdminSidebarProps {
  isOpen: boolean;
}

export function AdminSidebar({ isOpen }: AdminSidebarProps) {
  const pathname = usePathname();

  const navItems = [
    { href: "/overview", label: "Overview", icon: LayoutDashboard },
    { href: "/property-management", label: "Property Management", icon: Building },
    { href: "/user-management", label: "User Management", icon: Users },
    { href: "/analytics", label: "Analytics & Reports", icon: BarChart }, // Added based on mockup hint
    { href: "/communication", label: "Communication Hub", icon: Mail }, // Added based on mockup hint
    { href: "/settings", label: "Platform Settings", icon: Settings }, // Added based on mockup hint
  ];

  return (
    <aside
      className={cn(
        "h-screen fixed left-0 top-0 z-10 border-r bg-[#F9F6F1] flex flex-col transition-all duration-300 ease-in-out",
        isOpen ? "w-64 p-6" : "w-20 p-4 items-center" // Adjust width and padding
      )}
    >
      {/* Logo/Title Area */}
      <div className={cn("mb-8", isOpen ? "" : "flex justify-center")}>
        {/* Placeholder for Logo - Show full logo/title when open, icon/initial when closed */}
        <h1
          className={cn(
            "font-semibold text-[#7B5B40] transition-all duration-300",
            isOpen ? "text-2xl" : "text-lg" // Smaller text or just icon when collapsed
          )}
        >
          {isOpen ? "Admin Dashboard" : "A"} {/* Example: Show initial when closed */}
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-2 flex-grow">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={`/admin${item.href}`}
            title={isOpen ? undefined : item.label} // Add tooltip for collapsed state
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-[#5C5C5C] transition-all hover:bg-[#EBE6DD] hover:text-[#7B5B40]",
              pathname === `/admin${item.href}`
                ? "bg-[#EBE6DD] text-[#7B5B40] font-medium"
                : "",
              !isOpen ? "justify-center" : "" // Center icons when collapsed
            )}
          >
            <item.icon className="h-5 w-5 flex-shrink-0" /> {/* Slightly larger icons */}
            <span
              className={cn(
                "overflow-hidden transition-opacity duration-200 ease-in-out",
                isOpen ? "opacity-100 max-w-full" : "opacity-0 max-w-0" // Hide text smoothly
              )}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </nav>

      {/* Optional: Add other sidebar elements like user profile, logout etc. here */}
      {/* Example: Collapsed state indicator */}
      {/* <div className={cn("mt-auto", !isOpen ? "flex justify-center" : "")}>
        {!isOpen && <ChevronLeft className="h-5 w-5 text-[#5C5C5C]" />}
      </div> */}
    </aside>
  );
} 