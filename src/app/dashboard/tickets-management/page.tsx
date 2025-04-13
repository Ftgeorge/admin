import { messages } from "@/components/data/Message";
import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";
import PageHeading from "@/components/PageHeading";
import { Button } from "@/components/ui/button";
import { ReplyIcon } from "lucide-react";

export default function Page() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeading>Ticket Management</PageHeading>
        <div className="flex gap-2 text-white">
          <Button variant="default" className="bg-[#7B4F3A]">
            Open Tickets
          </Button>
          <Button variant="outline" className="bg-[#7B4F3A]">
            Closed Tcikets
          </Button>
        </div>
      </PageHeader>

      <div className="flex flex-col gap-4">
        {messages.map((message, index) => (
          <div
            className="flex flex-col p-6 rounded-lg bg-[#E3E2D966] hover:bg-[#e0e0dd] transition-all gap-2"
            key={index}
          >
            <div className="flex justify-between border-b border-[#E3E2D9] pb-2">
              <h2>{message.name}</h2>
              <p>{message.status}</p>
            </div>
            <div className="flex relative">
              <div className="flex flex-col text-lg">
                <h2 className="font-semibold">{message.title}</h2>
                <p className="mb-3">{message.description}</p>
                <p className="text-[#323232B2] text-sm font-semibold hover:cursor-pointer">
                  View More
                </p>
              </div>
              <Button variant="default" className="bg-[#7B4F3A] ml-auto absolute top-14 right-0 text-white">
                <ReplyIcon />
                Reply
              </Button>
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}
