"use client";

import { messages, type Message, type MessageStatus } from "@/components/data/Message";
import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";
import PageHeading from "@/components/PageHeading";
import { Button } from "@/components/ui/button";
import { ReplyIcon, Search, Filter, Bell, Calendar, User, MessageSquare, ChevronRight, Clock, Home } from "lucide-react";
import React, { useState } from "react";

// Helper function for status styles
const getMessageStatusStyle = (status: MessageStatus): { bg: string; text: string; dot: string } => {
  switch (status) {
    case "pending":
      return {
        bg: "bg-amber-50",
        text: "text-amber-700",
        dot: "bg-amber-500"
      };
    case "progress":
      return {
        bg: "bg-blue-50",
        text: "text-blue-700",
        dot: "bg-blue-500"
      };
    default:
      const _exhaustiveCheck: never = status;
      return {
        bg: "bg-gray-100",
        text: "text-gray-700",
        dot: "bg-gray-500"
      };
  }
};

// Convert timestamp to relative time
const getRelativeTime = () => {
  const times = ["2 hours ago", "3 days ago", "Just now", "1 day ago", "5 hours ago"];
  return times[Math.floor(Math.random() * times.length)];
};

export default function Page() {
  const [activeFilter, setActiveFilter] = useState<'open' | 'closed'>('open');
  const [searchQuery, setSearchQuery] = useState("");

  // Pending and in-progress counts
  const pendingCount = messages.filter(msg => msg.status === "pending").length;
  const inProgressCount = messages.filter(msg => msg.status === "progress").length;

  return (
    <PageContainer>
      <PageHeader className="mb-6">
        <div>
          <PageHeading>Communication Hub</PageHeading>
          <p className="text-gray-500 mt-1">Manage all your property communications in one place</p>
        </div>
        <div className="flex gap-3">
          <Button 
            variant={activeFilter === 'open' ? "default" : "outline"} 
            className={`px-4 ${activeFilter === 'open' ? 'bg-[#7B4F3A] hover:bg-[#6A432F]' : 'border-[#7B4F3A] text-[#7B4F3A] hover:bg-[#F9F5F2]'}`}
            onClick={() => setActiveFilter('open')}
          >
            Open Tickets
          </Button>
          <Button 
            variant={activeFilter === 'closed' ? "default" : "outline"} 
            className={`px-4 ${activeFilter === 'closed' ? 'bg-[#7B4F3A] hover:bg-[#6A432F]' : 'border-[#7B4F3A] text-[#7B4F3A] hover:bg-[#F9F5F2]'}`}
            onClick={() => setActiveFilter('closed')}
          >
            Closed Tickets
          </Button>
        </div>
      </PageHeader>

      {/* Stats and Search Bar Row */}
      <div className="grid grid-cols-12 gap-6 mb-6">
        {/* Stats Cards */}
        <div className="col-span-7 grid grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-[#F9F5F2]">
                <MessageSquare size={20} className="text-[#7B4F3A]" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Total Tickets</p>
                <p className="text-2xl font-semibold text-gray-800">{messages.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-amber-50">
                <Clock size={20} className="text-amber-600" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Pending</p>
                <p className="text-2xl font-semibold text-gray-800">{pendingCount}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-blue-50">
                <User size={20} className="text-blue-600" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">In Progress</p>
                <p className="text-2xl font-semibold text-gray-800">{inProgressCount}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Search and Filter */}
        <div className="col-span-5 flex gap-3">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7B4F3A] focus:border-transparent"
              placeholder="Search communications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" className="border-gray-300 text-gray-700 px-3 gap-2">
            <Filter size={16} />
            Filter
          </Button>
        </div>
      </div>

      {/* Messages List */}
      <div className="flex flex-col gap-4">
        {messages.map((message, index) => {
          const statusStyle = getMessageStatusStyle(message.status);
          return (
            <div
              className="flex flex-col p-6 rounded-lg bg-white border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow transition-all"
              key={index}
            >
              <div className="flex justify-between border-b border-gray-100 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#F9F5F2] flex items-center justify-center text-[#7B4F3A] font-semibold">
                    {message.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{message.name}</h3>
                    <div className="text-sm text-gray-500 flex items-center gap-2">
                      <Calendar size={12} />
                      {getRelativeTime()}
                    </div>
                  </div>
                </div>

                <div className={`px-3 py-1 rounded-full flex items-center ${statusStyle.bg} ${statusStyle.text} text-sm font-medium`}>
                  <span className={`w-2 h-2 rounded-full mr-2 ${statusStyle.dot}`}></span>
                  {message.status.charAt(0).toUpperCase() + message.status.slice(1)}
                </div>
              </div>
              
              <div className="flex justify-between">
                <div className="flex flex-col flex-grow pr-10">
                  <h2 className="font-semibold text-xl text-gray-900 mb-2">{message.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">{message.description}</p>
                  <div className="flex items-center gap-4">
                    <Button 
                      variant="outline" 
                      className="border-[#7B4F3A] text-[#7B4F3A] hover:bg-[#F9F5F2] px-4 gap-2"
                    >
                      <ChevronRight size={16} />
                      View Details
                    </Button>
                    <Button
                      variant="default"
                      className="bg-[#7B4F3A] hover:bg-[#6A432F] px-4 gap-2"
                    >
                      <ReplyIcon size={16} />
                      Reply
                    </Button>
                  </div>
                </div>
                
                {/* Property Image Placeholder */}
                <div className="w-24 h-24 rounded-md bg-[#F9F5F2] flex items-center justify-center">
                  <Home size={24} className="text-[#7B4F3A]" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6 py-4">
        <p className="text-sm text-gray-500">Showing 1-{messages.length} of {messages.length} tickets</p>
        <div className="flex gap-2">
          <Button variant="outline" className="border-gray-300 text-gray-700 px-4 py-2" disabled>
            Previous
          </Button>
          <Button variant="outline" className="border-gray-300 bg-[#F9F5F2] text-[#7B4F3A] px-4 py-2">
            1
          </Button>
          <Button variant="outline" className="border-gray-300 text-gray-700 px-4 py-2">
            2
          </Button>
          <Button variant="outline" className="border-gray-300 text-gray-700 px-4 py-2">
            Next
          </Button>
        </div>
      </div>
    </PageContainer>
  );
}
