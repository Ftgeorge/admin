import { settings } from "@/components/data/Settings";
import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";
import PageHeading from "@/components/PageHeading";

export default function Page() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeading>Platform Settings</PageHeading> 
      </PageHeader>

      <div className="flex flex-col">
        {settings.map((setting, index) => (
          <div className='flex border border-[#E3E2D9] p-6 rounded-lg hover:bg-[#e0e0dd] transition-all' key={index}>
            <setting.icon />
            {setting.title}
          </div>
        ))}
      </div>
    </PageContainer>
  );
}
