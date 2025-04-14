import { settings } from "@/components/data/Settings";
import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";
import PageHeading from "@/components/PageHeading";
import React from "react";
import type { LucideIcon } from "lucide-react";

interface Setting {
  icon: LucideIcon;
  title: string;
}

export default function Page() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeading>Platform Settings</PageHeading>
      </PageHeader>

      <div className="flex flex-col gap-4">
        {settings.map((setting: Setting, index: number) => {
          const IconComponent = setting.icon;
          return (
            <div className='flex items-center gap-4 border border-[#E3E2D9] p-4 rounded-lg hover:bg-[#e0e0dd] transition-all cursor-pointer' key={index}>
              <IconComponent className="h-5 w-5 text-[#7B4F3A]" />
              <span className="text-sm font-medium text-[#323232]">{setting.title}</span>
            </div>
          );
        })}
      </div>
    </PageContainer>
  );
}
