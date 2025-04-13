"use client";

import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";
import PageHeading from "@/components/PageHeading";
import { Button } from "@/components/ui/button";
import { File, Sheet } from "lucide-react";
import { useState } from "react";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from "recharts";

// Sample data
const totalBookingsData = Array.from({ length: 30 }, (_, i) => ({
  date: i + 1,
  value: Math.random() * 30 + 15 - i * 0.3,
}));

const userGrowthData = Array.from({ length: 5 }, (_, i) => {
  return {
    month: `0${i + 1}`,
    blue: Math.random() * 100,
    purple: Math.random() * 100,
    orange: Math.random() * 100,
    green: Math.random() * 100,
  };
});

const revenueData = [
  { name: "Segment 1", value: 75 },
  { name: "Segment 2", value: 25 },
];

const locationData = [
  { name: "Location 1", value: 25 },
  { name: "Location 2", value: 35 },
  { name: "Location 3", value: 20 },
  { name: "Location 4", value: 20 },
];

const COLORS = ["#a855f7", "#3b82f6", "#f97316", "#22c55e"];

// Custom tooltip components
const BookingTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-200 rounded shadow-sm text-xs">
        <p className="font-medium">{`Day ${payload[0].payload.date}`}</p>
        <p>{`Bookings: ${payload[0].value.toFixed(0)}`}</p>
      </div>
    );
  }
  return null;
};

const UserGrowthTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-200 rounded shadow-sm text-xs">
        <p className="font-medium">{`Month ${label}`}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value.toFixed(0)}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const RevenueTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-200 rounded shadow-sm text-xs">
        <p className="font-medium">{payload[0].name}</p>
        <p>{`Value: ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

export default function Page() {
  const [bookingTimeframe, setBookingTimeframe] = useState("1D");

  return (
    <PageContainer>
      <PageHeader>
        <PageHeading>Analytics & Reports</PageHeading>
        <div className="flex gap-2 text-white">
          <Button variant="default" className="bg-green-600">
            <Sheet /> Export CSV
          </Button>
          <Button variant="default" className="bg-red-600">
            <File /> Export PDF
          </Button>
        </div>
      </PageHeader>

      <div className="grid grid-cols-2 gap-4">
        {/* Total Bookings Chart */}
        <div className="bg-white rounded-lg p-4 border border-gray-200 flex flex-col">
          <div className="flex flex-col mb-2">
            <span className="text-gray-500 text-sm">Total bookings</span>
            <span className="text-3xl font-semibold">00</span>
          </div>
          <div className="h-40 mt-auto">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={totalBookingsData}
                margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
              >
                <Tooltip content={<BookingTooltip />} />
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis dataKey="date" hide />
                <YAxis hide />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 4, fill: "#3b82f6" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex gap-2 mt-2">
            <button
              className={`text-xs px-2 py-1 rounded ${
                bookingTimeframe === "1D" ? "bg-gray-200" : "bg-white"
              }`}
              onClick={() => setBookingTimeframe("1D")}
            >
              1 Day
            </button>
            <button
              className={`text-xs px-2 py-1 rounded ${
                bookingTimeframe === "1M" ? "bg-gray-200" : "bg-white"
              }`}
              onClick={() => setBookingTimeframe("1M")}
            >
              1 Month
            </button>
          </div>
        </div>

        {/* User Growth Chart */}
        <div className="bg-white rounded-lg p-4 border border-gray-200 flex flex-col">
          <div className="flex flex-col mb-2">
            <span className="text-gray-500 text-sm">User Growth</span>
            <span className="text-3xl font-semibold">00</span>
          </div>
          <div className="h-40 mt-auto">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={userGrowthData}
                margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis dataKey="month" />
                <YAxis hide />
                <Tooltip content={<UserGrowthTooltip />} />
                <Line
                  type="monotone"
                  name="User Type 1"
                  dataKey="blue"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ fill: "#3b82f6", r: 4 }}
                  activeDot={{ r: 6, fill: "#3b82f6" }}
                />
                <Line
                  type="monotone"
                  name="User Type 2"
                  dataKey="purple"
                  stroke="#a855f7"
                  strokeWidth={2}
                  dot={{ fill: "#a855f7", r: 4 }}
                  activeDot={{ r: 6, fill: "#a855f7" }}
                />
                <Line
                  type="monotone"
                  name="User Type 3"
                  dataKey="orange"
                  stroke="#f97316"
                  strokeWidth={2}
                  dot={{ fill: "#f97316", r: 4 }}
                  activeDot={{ r: 6, fill: "#f97316" }}
                />
                <Line
                  type="monotone"
                  name="User Type 4"
                  dataKey="green"
                  stroke="#22c55e"
                  strokeWidth={2}
                  dot={{ fill: "#22c55e", r: 4 }}
                  activeDot={{ r: 6, fill: "#22c55e" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {[
              "Key title goes here",
              "Key title goes here",
              "Key title goes here",
              "Key title goes here",
            ].map((text, index) => (
              <div key={index} className="flex items-center text-xs">
                <div
                  className="w-3 h-3 rounded-full mr-1"
                  style={{ backgroundColor: COLORS[index] }}
                ></div>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Breakdown Chart */}
        <div className="bg-white rounded-lg p-4 border border-gray-200 flex flex-col">
          <div className="flex flex-col mb-2">
            <span className="text-gray-500 text-sm">Revenue breakdown</span>
            <span className="text-3xl font-semibold">00</span>
          </div>
          <div className="h-40 mt-auto flex justify-center">
            <ResponsiveContainer width="70%" height="100%">
              <PieChart>
                <Tooltip content={<RevenueTooltip />} />
                <Pie
                  data={revenueData}
                  cx="50%"
                  cy="50%"
                  innerRadius={0}
                  outerRadius={70}
                  fill="#8884d8"
                  dataKey="value"
                  paddingAngle={0}
                  isAnimationActive={true}
                >
                  <Cell fill="#3b82f6" />
                  <Cell fill="#a855f7" />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Popular Locations Chart */}
        <div className="bg-white rounded-lg p-4 border border-gray-200 flex flex-col">
          <div className="flex flex-col mb-2">
            <span className="text-gray-500 text-sm">Popular Locations</span>
            <span className="text-3xl font-semibold">00</span>
          </div>
          <div className="h-16 mt-4 relative">
            <div className="w-full h-6 flex">
              {locationData.map((entry, index) => (
                <div
                  key={index}
                  className="group relative"
                  style={{
                    width: `${entry.value}%`,
                    backgroundColor: COLORS[index],
                    height: "100%",
                  }}
                >
                  <div className="opacity-0 group-hover:opacity-100 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-white p-1 border border-gray-200 rounded shadow-sm text-xs transition-opacity">
                    {entry.name}: {entry.value}%
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-6">
            {locationData.map((entry, index) => (
              <div
                key={index}
                className="flex items-center justify-between text-xs"
              >
                <div className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-1"
                    style={{ backgroundColor: COLORS[index] }}
                  ></div>
                  <span>Key title goes here</span>
                </div>
                <span>{entry.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
