import { AdminSidebar } from "@/components/layouts/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#F9F6F1]">
      <AdminSidebar />
      <main className="flex-1 pl-64"> {/* Adjust padding-left to match sidebar width */}
        {/* Optional: Add a header component here if needed */}
        <div className="p-6"> {/* Padding for the main content area */}
          {children}
        </div>
      </main>
    </div>
  );
} 