"use client";

import React, { useState } from "react";
import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";
import PageHeading from "@/components/PageHeading";
import { settingsCategories } from "@/components/data/array";


export default function SettingsPage() {
  const [activeSettingIndex, setActiveSettingIndex] = useState(0);
  const ActiveSettingComponent = settingsCategories[activeSettingIndex].component;

  return (
    <PageContainer>
      <PageHeader>
        <PageHeading>Platform Settings</PageHeading>
        <p className="text-gray-500">Manage your platform configuration and policies</p>
      </PageHeader>

      <div className="flex flex-col gap-6 mt-6">

        <div className="md:col-span-1 w-full">
          <nav className="flex flex-row bg-transparent border-b border-[#E3E2D9]">
            {settingsCategories.map((setting, index) => {
              const IconComponent = setting.icon;
              const isActive = index === activeSettingIndex;

              return (
                <button
                  key={index}
                  onClick={() => setActiveSettingIndex(index)}
                  className={`flex items-center gap-3 px-4 h-12 text-left transition-all ${isActive
                    ? 'border-b-2 border-[#7B4F3A] text-[#7B4F3A]'
                    : 'border-b-2 border-transparent text-gray-700'
                    }`}
                >
                  <IconComponent className={`h-5 w-5 ${isActive ? 'text-[#7B4F3A]' : 'text-gray-500'}`} />
                  <div className="flex flex-col">
                    <span className={`text-sm font-medium ${isActive ? 'text-[#7B4F3A]' : 'text-gray-700'}`}>
                      {setting.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="md:col-span-3 bg-transparent p-6 rounded-lg border border-[#E3E2D9]">
          <ActiveSettingComponent />
        </div>
      </div>
    </PageContainer>
  );
}


