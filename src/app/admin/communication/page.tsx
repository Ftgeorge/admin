"use client";

import { messages as initialMessages, type Message, type MessageStatus } from "@/components/data/Message";
import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";
import PageHeading from "@/components/PageHeading";
import { Button } from "@/components/ui/button";
import { ReplyIcon, Search, Filter, Bell, Calendar, User, MessageSquare, ChevronRight, Clock, Home } from "lucide-react";
import React, { useState, useEffect } from "react";

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
  const [activeFilter, setActiveFilter] = useState<'open' | 'resolved'>('open');
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredMessages, setFilteredMessages] = useState<Message[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [statusFilter, setStatusFilter] = useState<MessageStatus | 'all'>('all');
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [replyText, setReplyText] = useState("");

  const itemsPerPage = 5;

  // Filter messages based on activeFilter, searchQuery, and statusFilter
  useEffect(() => {
    let filtered = [...initialMessages];
    
    // Filter by open/resolved status
    if (activeFilter === 'open') {
      filtered = filtered.filter(msg => msg.status === 'pending' || msg.status === 'progress');
    } else if (activeFilter === 'resolved') {
      // Since there's no "closed" status, we'll assume resolved tickets aren't shown in the original data
      // In a real app, you would have a "resolved" or "closed" status
      filtered = [];
    }
    
    // Apply search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(msg => 
        msg.title.toLowerCase().includes(query) || 
        msg.description.toLowerCase().includes(query) ||
        msg.name.toLowerCase().includes(query)
      );
    }
    
    // Apply status filter if not set to 'all'
    if (statusFilter !== 'all') {
      filtered = filtered.filter(msg => msg.status === statusFilter);
    }
    
    setFilteredMessages(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [activeFilter, searchQuery, statusFilter]);

  // Get current page data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMessages = filteredMessages.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredMessages.length / itemsPerPage);

  // Handle pagination
  const goToPage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Pending and in-progress counts
  const pendingCount = initialMessages.filter(msg => msg.status === "pending").length;
  const inProgressCount = initialMessages.filter(msg => msg.status === "progress").length;

  // Handle message reply
  const handleReply = (message: Message) => {
    setSelectedMessage(message);
  };

  // Close message details
  const closeMessageDetails = () => {
    setSelectedMessage(null);
    setReplyText("");
  };

  // Submit reply
  const submitReply = () => {
    if (replyText.trim() !== "" && selectedMessage) {
      // Here you would typically make an API call to save the reply
      alert(`Reply submitted: "${replyText}"`);
      setReplyText("");
      // If the message was pending, move it to in-progress
      if (selectedMessage.status === "pending") {
        // In a real app, you'd update the backend as well
        alert("Message status updated from Pending to In Progress");
      }
      closeMessageDetails();
    }
  };

  // Handle resolving a message
  const resolveMessage = (message: Message) => {
    // In a real application, you would update the message status in your database
    alert(`Message "${message.title}" marked as resolved`);
    closeMessageDetails();
    
    // Optionally refresh the filtered messages to remove the resolved one
    setFilteredMessages(prevMessages => 
      prevMessages.filter(msg => msg !== message)
    );
  };

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
            variant={activeFilter === 'resolved' ? "default" : "outline"} 
            className={`px-4 ${activeFilter === 'resolved' ? 'bg-[#7B4F3A] hover:bg-[#6A432F]' : 'border-[#7B4F3A] text-[#7B4F3A] hover:bg-[#F9F5F2]'}`}
            onClick={() => setActiveFilter('resolved')}
          >
            Resolved Tickets
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
                <p className="text-2xl font-semibold text-gray-800">{initialMessages.length}</p>
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
          <Button 
            variant="outline" 
            className="border-gray-300 text-gray-700 px-3 gap-2"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={16} />
            Filter
          </Button>
        </div>
      </div>

      {/* Filters panel */}
      {showFilters && (
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6 border border-gray-200">
          <h3 className="font-medium mb-3">Filter by Status</h3>
          <div className="flex gap-2">
            <Button 
              variant={statusFilter === 'all' ? "default" : "outline"}
              className={statusFilter === 'all' ? 'bg-[#7B4F3A] hover:bg-[#6A432F]' : 'border-gray-300'}
              onClick={() => setStatusFilter('all')}
            >
              All
            </Button>
            <Button 
              variant={statusFilter === 'pending' ? "default" : "outline"}
              className={statusFilter === 'pending' ? 'bg-amber-500 hover:bg-amber-600' : 'border-gray-300 text-amber-700'}
              onClick={() => setStatusFilter('pending')}
            >
              Pending
            </Button>
            <Button 
              variant={statusFilter === 'progress' ? "default" : "outline"}
              className={statusFilter === 'progress' ? 'bg-blue-500 hover:bg-blue-600' : 'border-gray-300 text-blue-700'}
              onClick={() => setStatusFilter('progress')}
            >
              In Progress
            </Button>
          </div>
        </div>
      )}

      {/* Messages List */}
      {currentMessages.length > 0 ? (
        <div className="flex flex-col gap-4">
          {currentMessages.map((message, index) => {
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
                    {message.status === 'pending' ? 'Pending' : 'In Progress'}
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
                        onClick={() => setSelectedMessage(message)}
                      >
                        <ChevronRight size={16} />
                        View Details
                      </Button>
                      <Button
                        variant="default"
                        className="bg-[#7B4F3A] hover:bg-[#6A432F] px-4 gap-2"
                        onClick={() => handleReply(message)}
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
      ) : (
        <div className="p-10 text-center bg-white rounded-lg shadow-sm">
          <MessageSquare size={48} className="text-gray-300 mx-auto mb-3" />
          <h3 className="text-xl font-medium text-gray-700">No messages found</h3>
          <p className="text-gray-500 mt-1">Try adjusting your search or filters</p>
        </div>
      )}

      {/* Pagination */}
      {filteredMessages.length > 0 && (
        <div className="flex justify-between items-center mt-6 py-4">
          <p className="text-sm text-gray-500">
            Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredMessages.length)} of {filteredMessages.length} tickets
          </p>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              className="border-gray-300 text-gray-700 px-4 py-2" 
              disabled={currentPage === 1}
              onClick={() => goToPage(currentPage - 1)}
            >
              Previous
            </Button>
            
            {Array.from({ length: Math.min(totalPages, 5) }, (_, index) => {
              // Logic to keep current page in the middle when possible
              let pageNum = currentPage;
              if (currentPage <= 3) {
                pageNum = index + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + index;
              } else {
                pageNum = currentPage - 2 + index;
              }
              
              // Ensure we don't show negative or too large page numbers
              if (pageNum > 0 && pageNum <= totalPages) {
                return (
                  <Button 
                    key={pageNum}
                    variant="outline" 
                    className={`border-gray-300 ${currentPage === pageNum ? 'bg-[#F9F5F2] text-[#7B4F3A]' : 'text-gray-700'} px-4 py-2`}
                    onClick={() => goToPage(pageNum)}
                  >
                    {pageNum}
                  </Button>
                );
              }
              return null;
            })}
            
            <Button 
              variant="outline" 
              className="border-gray-300 text-gray-700 px-4 py-2"
              disabled={currentPage === totalPages || totalPages === 0}
              onClick={() => goToPage(currentPage + 1)}
            >
              Next
            </Button>
          </div>
        </div>
      )}

      {/* Message Details Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#F9F5F2] flex items-center justify-center text-[#7B4F3A] font-semibold">
                  {selectedMessage.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{selectedMessage.name}</h3>
                  <div className="text-sm text-gray-500 flex items-center gap-2">
                    <Calendar size={12} />
                    {getRelativeTime()}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  className="border-green-500 text-green-600 hover:bg-green-50"
                  onClick={() => resolveMessage(selectedMessage)}
                >
                  Mark as Resolved
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-300"
                  onClick={closeMessageDetails}
                >
                  Close
                </Button>
              </div>
            </div>
            
            <h2 className="font-semibold text-2xl text-gray-900 mb-3">{selectedMessage.title}</h2>
            
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">{selectedMessage.description}</p>
            </div>
            
            <h4 className="font-medium text-gray-800 mb-2">Reply to this message</h4>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7B4F3A] focus:border-transparent min-h-32"
              placeholder="Type your reply here..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
            ></textarea>
            
            <div className="flex justify-end mt-4 gap-3">
              <Button
                variant="outline"
                className="border-gray-300"
                onClick={closeMessageDetails}
              >
                Cancel
              </Button>
              <Button
                variant="default"
                className="bg-[#7B4F3A] hover:bg-[#6A432F]"
                onClick={submitReply}
                disabled={replyText.trim() === ""}
              >
                Send Reply
              </Button>
            </div>
          </div>
        </div>
      )}
    </PageContainer>
  );
}