"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Building,
  Users,
  BarChart,
  Mail,
  Settings,
} from "lucide-react";
import { HeuveraLogo } from "../logo/HeuveraLogo";

interface AdminSidebarProps {
  isOpen: boolean;
}

export function AdminSidebar({ isOpen }: AdminSidebarProps) {
  const pathname = usePathname();

  const navItems = [
    { href: "/overview", label: "Overview", icon: LayoutDashboard },
    { href: "/property-management", label: "Property Management", icon: Building },
    { href: "/user-management", label: "User Management", icon: Users },
    { href: "/analytics", label: "Analytics & Reports", icon: BarChart },
    { href: "/communication", label: "Communication Hub", icon: Mail },
    { href: "/settings", label: "Platform Settings", icon: Settings },
  ];

  return (
    <aside
      className={cn(
        "h-screen fixed left-0 top-0 z-10 border-r bg-[#F9F6F1] flex flex-col transition-all duration-300 ease-in-out",
        isOpen ? "w-64 p-6" : "w-20 p-4 items-center"
      )}
    >
      <div className={cn("mb-8", isOpen ? "" : "flex justify-center")}>
        <h1
          className={cn(
            "font-semibold text-[#7B5B40] transition-all duration-300",
            isOpen ? "text-2xl" : "text-lg" 
          )}
        >
          {isOpen ?
            <HeuveraLogo height={30} width={30} />
            :
            <HeuveraLogo height={30} width={30} />
          }
        </h1>
      </div>

      <nav className="flex flex-col space-y-4 flex-grow">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={`/admin${item.href}`}
            title={isOpen ? undefined : item.label}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-[#5C5C5C] transition-all hover:bg-[#7B4F3A33] hover:text-[#7B4F3A]",
              pathname === `/admin${item.href}`
                ? "bg-[#7B4F3A33] text-[#7B4F3A] border border-[#7B4F3A] font-medium"
                : "",
              !isOpen ? "justify-center" : ""
            )}
          >
            <item.icon className="h-5 w-5 flex-shrink-0" />
            <span
              className={cn(
                "overflow-hidden transition-opacity duration-200 ease-in-out text-sm",
                isOpen ? "opacity-100 max-w-full" : "opacity-0 max-w-0 hidden" 
              )}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </nav>
    </aside>
  );
} 