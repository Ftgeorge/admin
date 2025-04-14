"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AlertTriangle, BarChart } from 'lucide-react';
import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";
import PageHeading from "@/components/PageHeading";
import React, { useState } from "react";
import { MdApartment } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { BsHourglassSplit } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";
import { IoMdTrendingUp } from "react-icons/io";
import { LineChart, Line, BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ComposedChart } from 'recharts';

interface MetricValueObject {
  landlords: number;
  renters: number;
}

interface Metric {
  title: string;
  value: number | string | MetricValueObject;
  icon: React.ReactNode;
}

interface Booking {
  name: string;
  details: string;
  date: string;
  amount: string;
  status: "Completed" | "Pending";
  avatar: string;
}

type ChartType = 'properties' | 'revenue' | 'transactions';

const chartTypes: ChartType[] = ['properties', 'revenue', 'transactions'];

const chartLabels: Record<ChartType, string> = {
  properties: 'Properties Listed',
  revenue: 'Revenue',
  transactions: 'Transactions'
};


const metrics: Metric[] = [
  { title: "Total Property Listed", value: 672, icon: <MdApartment className="size-4" /> },
  { title: "Active Users", value: 964, icon: <FaRegUser className="size-4" /> },
  { title: "Pending Approvals", value: 215, icon: <BsHourglassSplit className="size-4" /> },
  { title: "Pending Bookings", value: 126, icon: <AlertTriangle className="size-4" /> },
  { title: "Total Revenue", value: "₦24,120,931", icon: <BarChart className="size-4" /> },
];

const recentBookings: Booking[] = [
  {
    name: "John Doe",
    details: "2 Bedroom Apartment, Lagos",
    date: "Mar 28 - Mar 24",
    amount: "₦50,000",
    status: "Completed",
    avatar: "/placeholder-user.jpg",
  },
  {
    name: "Achara Favour",
    details: "3 Bedroom Semi Detached, Abuja",
    date: "Mar 16 - Mar 24",
    amount: "₦40,000",
    status: "Pending",
    avatar: "/placeholder-user.jpg",
  },
  {
    name: "Sarah Okafor",
    details: "1 Bedroom Studio, Port Harcourt",
    date: "Apr 2 - Apr 9",
    amount: "₦35,000",
    status: "Completed",
    avatar: "/placeholder-user.jpg",
  },
  {
    name: "Michael Ibrahim",
    details: "4 Bedroom Duplex, Kano",
    date: "Apr 5 - Apr 12",
    amount: "₦75,000",
    status: "Pending",
    avatar: "/placeholder-user.jpg",
  },
];

const overviewButtons = [
  {
    name: "Review New Users",
    link: "/reviewusers"
  },
  {
    name: "Review Disputes",
    link: "/resolvedisputes"
  },
  {
    name: "Approve Pending Properties",
    link: "/approvepending"
  },
]

const salesTrendData = [
  { month: 'Jan', properties: 40, revenue: 12000000, transactions: 35 },
  { month: 'Feb', properties: 28, revenue: 8500000, transactions: 22 },
  { month: 'Mar', properties: 45, revenue: 15000000, transactions: 42 },
  { month: 'Apr', properties: 55, revenue: 18500000, transactions: 48 },
  { month: 'May', properties: 60, revenue: 21000000, transactions: 55 },
  { month: 'Jun', properties: 65, revenue: 24000000, transactions: 62 },
  { month: 'Jul', properties: 70, revenue: 25000000, transactions: 68 },
];

function RealEstateTrendChart() {
  const [chartType, setChartType] = useState('properties');

  const formatRevenue = (value: any) => {
    return `₦${(value / 1000000).toFixed(1)}M`;
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between mb-4">
        <div className="flex space-x-2">
          {chartTypes.map(type => (
            <button
              key={type}
              className={`px-4 py-2 text-xs rounded-md ${chartType === type ? 'bg-[#7B4F3A] text-white' : 'bg-transparent border border-[#E3E2D9] text-[#7B4F3A]'
                }`}
              onClick={() => setChartType(type)}
            >
              {chartLabels[type]}
            </button>
          ))}
        </div>

        <select className="text-xs text-[#7B4F3A] rounded-md flex items-center justify-center px-4 py-2 border border-[#E3E2D9]">
          <option>Last 7 months</option>
          <option>Last 12 months</option>
          <option>This year</option>
        </select>
      </div>

      <div className="flex-1 w-full min-h-64">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === 'properties' ? (
            <RechartsBarChart data={salesTrendData} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E3E2D9" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip formatter={(value) => [value, 'Properties']} />
              <Bar dataKey="properties" fill="#7B4F3A" radius={[4, 4, 0, 0]} />
            </RechartsBarChart>
          ) : chartType === 'revenue' ? (
            <ComposedChart data={salesTrendData} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E3E2D9" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} tickFormatter={formatRevenue} />
              <Tooltip formatter={(value) => [formatRevenue(value), 'Revenue']} />
              <Bar dataKey="revenue" fill="#C7B09D" radius={[4, 4, 0, 0]} />
              <Line type="monotone" dataKey="revenue" stroke="#7B4F3A" strokeWidth={2} dot={{ r: 4 }} />
            </ComposedChart>
          ) : (
            <LineChart data={salesTrendData} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E3E2D9" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip formatter={(value) => [value, 'Transactions']} />
              <Line type="monotone" dataKey="transactions" stroke="#7B4F3A" strokeWidth={2} dot={{ fill: "#C7B09D", stroke: "#7B4F3A", strokeWidth: 2, r: 4 }} />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default function OverviewPage() {
  return (
    <PageContainer>
      <PageHeader className="flex justify-between">
        <PageHeading>Overview</PageHeading>
        <div className="flex gap-3">
          {overviewButtons.map((button, index) => (
            <button key={index} className="px-6 py-2 border border-[#E3E2D9] rounded-lg text-[#323232] text-sm bg-transparent">{button.name}</button>
          ))}
        </div>
      </PageHeader>
      <div className="space-y-6 flex-1 flex flex-col">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {metrics.map((metric, index) => (
            <Card key={index} className="bg-[#F8F7F2] border-[#E3E2D9] transition-transform duration-300 hover:scale-102 hover:shadow-sm cursor-pointer">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm text-[#898989] font-medium">{metric.title}</CardTitle>
                <div className="rounded-lg border-2 border-[#7B4F3A] bg-[#7B4F3A44] text-[#7B4F3A] flex items-center justify-center size-10">
                  {metric.icon}
                </div>
              </CardHeader>
              <CardContent className="w-full flex items-start justify-center">
                {typeof metric.value === 'object' ? (
                  <div className="text-3xl font-semibold">{metric.value.landlords}</div>
                ) : (
                  <div className="text-3xl font-semibold">{metric.value}</div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Chart and Recent Bookings - with flex-1 to fill remaining space */}
        <div className="grid gap-6 lg:grid-cols-3 flex-1 min-h-0">
          <Card className="lg:col-span-2 bg-[#F8F7F2] border-[#E3E2D9] transition-transform duration-300 hover:scale-102 hover:shadow-sm cursor-pointer flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle>Sales Trend</CardTitle>
              <div className="rounded-lg border-2 border-[#7B4F3A] bg-[#7B4F3A44] text-[#7B4F3A] flex items-center justify-center size-10">
                <IoMdTrendingUp className="size-4" />
              </div>
            </CardHeader>
            <CardContent className="flex-1 pb-6">
              <RealEstateTrendChart />
            </CardContent>
          </Card>
          <Card className="bg-[#F8F7F2] border-[#E3E2D9] transition-transform duration-300 hover:scale-102 hover:shadow-sm cursor-pointer flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle>Recent Bookings</CardTitle>
              <div className="rounded-lg border-2 border-[#7B4F3A] bg-[#7B4F3A44] text-[#7B4F3A] flex items-center justify-center size-10">
                <IoCalendarOutline className="size-4" />
              </div>
            </CardHeader>
            <CardContent className="space-y-4 flex-1 overflow-auto">
              {recentBookings.map((booking, index) => (
                <div key={index} className="flex items-center gap-4">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={booking.avatar} alt="Avatar" />
                    <AvatarFallback>{booking.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 truncate">
                    <p className="text-sm font-medium leading-none truncate">{booking.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{booking.details}</p>
                    <p className="text-xs text-muted-foreground truncate">{booking.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{booking.amount}</p>
                    <Badge variant={booking.status === 'Completed' ? 'default' : 'secondary'} className={booking.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}>
                      {booking.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}