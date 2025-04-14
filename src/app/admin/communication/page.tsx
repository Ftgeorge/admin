import { messages, type Message, type MessageStatus } from "@/components/data/Message";
import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";
import PageHeading from "@/components/PageHeading";
import { Button } from "@/components/ui/button";
import { ReplyIcon } from "lucide-react";
import React from "react";

// --- Type Definitions ---
// Removed - Now imported from data file
// type MessageStatus = "pending" | "progress";
//
// interface Message {
//   name: string;
//   title: string;
//   description: string;
//   status: MessageStatus;
// }
// --- End Type Definitions ---

// Helper function for status styles
const getMessageStatusStyle = (status: MessageStatus): string => {
  switch (status) {
    case "pending":
      return "bg-yellow-300";
    case "progress":
      return "bg-blue-300";
    default:
      const _exhaustiveCheck: never = status;
      return "bg-gray-300"; // Fallback
  }
};

export default function Page() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeading>Communication Hub</PageHeading>
        <div className="flex gap-2 text-white">
          <Button variant="default" className="bg-[#7B4F3A]">
            Open Tickets
          </Button>
          <Button variant="outline" className="border-[#7B4F3A] text-[#7B4F3A]">
            Closed Tcikets
          </Button>
        </div>
      </PageHeader>

      <div className="flex flex-col gap-4">
        {messages.map((message, index) => {
          const statusStyle = getMessageStatusStyle(message.status);
          return (
            <div
              className="flex flex-col p-6 rounded-lg bg-[#E3E2D966] hover:bg-[#e0e0dd] transition-all gap-2"
              key={index}
            >
              <div className="flex justify-between border-b border-[#E3E2D9] pb-2">
                <h2>{message.name}</h2>

                <div className="flex justify-center items-center">
                  <span
                    className={`w-3 h-3 rounded-full mr-2 ${statusStyle}`}
                  ></span>
                  {message.status.charAt(0).toUpperCase() + message.status.slice(1)}
                </div>
              </div>
              <div className="flex relative">
                <div className="flex flex-col text-lg">
                  <h2 className="font-semibold">{message.title}</h2>
                  <p className="mb-3">{message.description}</p>
                  <p className="text-[#323232B2] text-sm font-semibold hover:cursor-pointer">
                    View More
                  </p>
                </div>
                <Button
                  variant="default"
                  className="bg-[#7B4F3A] ml-auto absolute top-14 right-0 text-white"
                >
                  <ReplyIcon />
                  Reply
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </PageContainer>
  );
}
