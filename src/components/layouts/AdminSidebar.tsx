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
} from "lucide-react"; // Using lucide-react icons

export function AdminSidebar() {
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
    <aside className="w-64 h-screen fixed left-0 top-0 z-10 border-r bg-[#F9F6F1] p-6 flex flex-col">
      {/* Logo/Title Area */}
      <div className="mb-8">
        {/* Placeholder for Logo - replace with actual logo component or img tag */}
        <h1 className="text-2xl font-semibold text-[#7B5B40]">h</h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={`/admin${item.href}`} // Adjust href based on actual routing if needed
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-[#5C5C5C] transition-all hover:bg-[#EBE6DD] hover:text-[#7B5B40]",
              pathname === `/admin${item.href}`
                ? "bg-[#EBE6DD] text-[#7B5B40] font-medium"
                : ""
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Optional: Add other sidebar elements like user profile, logout etc. here */}
    </aside>
  );
} 