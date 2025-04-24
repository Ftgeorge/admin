"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AlertTriangle, BarChart } from "lucide-react";
import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";
import PageHeading from "@/components/PageHeading";
import React from "react";
import { MdApartment } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { BsHourglassSplit } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";
import { IoMdTrendingUp } from "react-icons/io";
import { Metric } from "@/lib/props";
import { overviewButtons, recentBookings } from "@/components/data/array";
import TrendChart from "@/components/TrendChart";

const metrics: Metric[] = [
  {
    title: "Total Property Listed",
    value: 672,
    icon: <MdApartment className="size-4" />,
  },
  { title: "Active Users", value: 964, icon: <FaRegUser className="size-4" /> },
  {
    title: "Pending Approvals",
    value: 215,
    icon: <BsHourglassSplit className="size-4" />,
  },
  {
    title: "Pending Bookings",
    value: 126,
    icon: <AlertTriangle className="size-4" />,
  },
  {
    title: "Total Revenue",
    value: "₦24,120,931",
    icon: <BarChart className="size-4" />,
  },
];

export default function OverviewPage() {
  return (
    <PageContainer>
      <PageHeader className="flex justify-between">
        <PageHeading>Overview</PageHeading>
        <div className="flex gap-3">
          {overviewButtons.map((button, index) => (
            <button
              key={index}
              className="px-6 py-2 border border-[#E3E2D9] rounded-lg text-[#323232] text-sm bg-transparent"
            >
              {button.name}
            </button>
          ))}
        </div>
      </PageHeader>
      <div className="space-y-6 flex-1 flex flex-col">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {metrics.map((metric, index) => (
            <Card
              key={index}
              className="bg-mutedBackground border-primaryBorder transition-transform duration-300 hover:scale-102 hover:shadow-sm cursor-pointer"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm text-mutedText font-medium">
                  {metric.title}
                </CardTitle>
                <div className="rounded-lg border-2 border-primary bg-primaryLight text-primary flex items-center justify-center size-10">
                  {metric.icon}
                </div>
              </CardHeader>
              <CardContent className="w-full flex items-start justify-center">
                {typeof metric.value === "object" ? (
                  <div className="text-3xl font-semibold">
                    {metric.value.landlords}
                  </div>
                ) : (
                  <div className="text-3xl font-semibold">{metric.value}</div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-3 flex-1 min-h-0">
          <Card className="lg:col-span-2 bg-[#F8F7F2] border-[#E3E2D9] transition-transform duration-300 hover:scale-102 hover:shadow-sm cursor-pointer flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle>Sales Trend</CardTitle>
              <div className="rounded-lg border-2 border-[#7B4F3A] bg-[#7B4F3A44] text-[#7B4F3A] flex items-center justify-center size-10">
                <IoMdTrendingUp className="size-4" />
              </div>
            </CardHeader>
            <CardContent className="flex-1 pb-6">
              <TrendChart />
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
                    <AvatarFallback>
                      {booking.name.substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 truncate">
                    <p className="text-sm font-medium leading-none truncate">
                      {booking.name}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {booking.details}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {booking.date}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{booking.amount}</p>
                    <Badge
                      variant={
                        booking.status === "Completed" ? "default" : "secondary"
                      }
                      className={
                        booking.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }
                    >
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
