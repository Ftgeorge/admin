"use client";

import { COLORS } from "@/components/data/constants";
import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";
import PageHeading from "@/components/PageHeading";
import { Button } from "@/components/ui/button";
import { FileDown, FileText, TrendingUp, Home, Users, DollarSign, MapPin } from "lucide-react";
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
  Area,
  AreaChart
} from "recharts";
import type { TooltipProps } from 'recharts';
import type { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';

const propertyBookingsData = Array.from({ length: 30 }, (_, i) => ({
  date: i + 1,
  value: Math.floor(Math.random() * 20 + 35 - i * 0.2),
}));


const userAcquisitionData = Array.from({ length: 5 }, (_, i) => {
  return {
    month: `0${i + 1}`,
    hosts: Math.floor(Math.random() * 50 + 20),
    renters: Math.floor(Math.random() * 120 + 50),
    agents: Math.floor(Math.random() * 30 + 10),
    investors: Math.floor(Math.random() * 25 + 5),
  };
});

const revenueSourcesData = [
  { name: "Booking Fees", value: 45 },
  { name: "Premium Listings", value: 25 },
  { name: "Verified Host Fees", value: 20 },
  { name: "Ad Revenue", value: 10 },
];

const popularLocationsData = [
  { name: "Los Angeles", value: 32 },
  { name: "New York", value: 28 },
  { name: "Miami", value: 22 },
  { name: "Chicago", value: 18 },
];

const occupancyRateData = Array.from({ length: 7 }, (_, i) => ({
  day: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i],
  rate: Math.floor(Math.random() * 30 + 70),
}));

const BookingTooltip = ({ active, payload }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const value = payload[0].value;
    return (
      <div className="bg-white p-2 border border-gray-200 rounded shadow-sm text-xs">
        <p className="font-medium">{`Day ${data?.date}`}</p>
        <p>{`Bookings: ${Number(value || 0).toFixed(0)}`}</p>
      </div>
    );
  }
  return null;
};

const UserAcquisitionTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-200 rounded shadow-sm text-xs">
        <p className="font-medium">{`Month ${label}`}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color }}>
            {`${entry.name}: ${Number(entry.value || 0).toFixed(0)}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const RevenueTooltip = ({ active, payload }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    return (
      <div className="bg-white p-2 border border-gray-200 rounded shadow-sm text-xs">
        <p className="font-medium">{data?.name}</p>
        <p>{`Value: ${data?.value}%`}</p>
      </div>
    );
  }
  return null;
};

const OccupancyTooltip = ({ active, payload }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-2 border border-gray-200 rounded shadow-sm text-xs">
        <p className="font-medium">{data?.day}</p>
        <p>{`Occupancy: ${data?.rate}%`}</p>
      </div>
    );
  }
  return null;
};

export default function Page() {
  const [bookingTimeframe, setBookingTimeframe] = useState("30D");
  const [revenueTimeframe, setRevenueTimeframe] = useState("Q1");

  const totalBookings = propertyBookingsData.reduce((sum, item) => sum + item.value, 0);

  const totalUsers = userAcquisitionData.reduce((sum, item) =>
    sum + item.hosts + item.renters + item.agents + item.investors, 0);

  const totalRevenue = "$384,592";

  const avgOccupancy = occupancyRateData.reduce((sum, item) => sum + item.rate, 0) / occupancyRateData.length;

  return (
    <PageContainer>
      <PageHeader className="mb-6">
        <div>
          <PageHeading>Analytics Dashboard</PageHeading>
          <p className="text-gray-500 mt-1">Real-time insights for your property marketplace</p>
        </div>
        <div className="flex gap-3 text-white">
          <Button variant="default" className="bg-green-700 hover:bg-green-800 gap-2">
            <FileDown size={16} /> Export CSV
          </Button>
          <Button variant="default" className="bg-red-700 hover:bg-red-800 gap-2">
            <FileText size={16} /> Export PDF
          </Button>
        </div>
      </PageHeader>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-transparent rounded-lg p-4 border border-[#E3E2D9]  flex items-center gap-4">
          <div className="p-3 rounded-full bg-[#F0E5D8]" >
            <Home size={20} style={{ color: COLORS.primary }} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Bookings</p>
            <p className="text-2xl font-semibold text-gray-800">{totalBookings}</p>
          </div>
        </div>

        <div className="bg-transparent rounded-lg p-4 border border-[#E3E2D9]  flex items-center gap-4">
          <div className="p-3 rounded-full bg-[#F0E5D8]" >
            <Users size={20} style={{ color: COLORS.primary }} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Users</p>
            <p className="text-2xl font-semibold text-gray-800">{totalUsers}</p>
          </div>
        </div>

        <div className="bg-transparent rounded-lg p-4 border border-[#E3E2D9]  flex items-center gap-4">
          <div className="p-3 rounded-full bg-[#F0E5D8]" >
            <DollarSign size={20} style={{ color: COLORS.primary }} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Revenue</p>
            <p className="text-2xl font-semibold text-gray-800">{totalRevenue}</p>
          </div>
        </div>

        <div className="bg-transparent rounded-lg p-4 border border-[#E3E2D9]  flex items-center gap-4">
          <div className="p-3 rounded-full bg-[#F0E5D8]" >
            <TrendingUp size={20} style={{ color: COLORS.primary }} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Avg. Occupancy</p>
            <p className="text-2xl font-semibold text-gray-800">{avgOccupancy.toFixed(1)}%</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-transparent rounded-lg p-6 border border-[#E3E2D9]">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800">Property Bookings Trend</h3>
              <p className="text-sm text-gray-500">Daily booking activity</p>
            </div>
            <div className="flex gap-2">
              <button
                className={`text-xs px-3 py-1 rounded-full transition ${bookingTimeframe === "7D"
                    ? `text-white`
                    : `text-gray-500 hover:bg-gray-100`
                  }`}
                style={{ backgroundColor: bookingTimeframe === "7D" ? COLORS.primary : "transparent" }}
                onClick={() => setBookingTimeframe("7D")}
              >
                7D
              </button>
              <button
                className={`text-xs px-3 py-1 rounded-full transition ${bookingTimeframe === "30D"
                    ? `text-white`
                    : `text-gray-500 hover:bg-gray-100`
                  }`}
                style={{ backgroundColor: bookingTimeframe === "30D" ? COLORS.primary : "transparent" }}
                onClick={() => setBookingTimeframe("30D")}
              >
                30D
              </button>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={propertyBookingsData}
                margin={{ top: 10, right: 10, bottom: 10, left: 0 }}
              >
                <defs>
                  <linearGradient id="colorBookings" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={COLORS.primary} stopOpacity={0.8} />
                    <stop offset="95%" stopColor={COLORS.primary} stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis dataKey="date" stroke={COLORS.text} />
                <YAxis stroke={COLORS.text} />
                <Tooltip content={<BookingTooltip />} />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke={COLORS.primary}
                  fillOpacity={1}
                  fill="url(#colorBookings)"
                  strokeWidth={2}
                  activeDot={{ r: 6, fill: COLORS.primary }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* User Acquisition Chart */}
        <div className="bg-transparent rounded-lg p-6 border border-[#E3E2D9]">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800">User Acquisition</h3>
              <p className="text-sm text-gray-500">Monthly user growth by type</p>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={userAcquisitionData}
                margin={{ top: 10, right: 10, bottom: 10, left: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis dataKey="month" stroke={COLORS.text} />
                <YAxis stroke={COLORS.text} />
                <Tooltip content={<UserAcquisitionTooltip />} />
                <Legend />
                <Line
                  type="monotone"
                  name="Hosts"
                  dataKey="hosts"
                  stroke={COLORS.primary}
                  strokeWidth={2}
                  dot={{ fill: COLORS.primary, r: 4 }}
                  activeDot={{ r: 6, fill: COLORS.primary }}
                />
                <Line
                  type="monotone"
                  name="Renters"
                  dataKey="renters"
                  stroke={COLORS.secondary}
                  strokeWidth={2}
                  dot={{ fill: COLORS.secondary, r: 4 }}
                  activeDot={{ r: 6, fill: COLORS.secondary }}
                />
                <Line
                  type="monotone"
                  name="Agents"
                  dataKey="agents"
                  stroke={COLORS.accent1}
                  strokeWidth={2}
                  dot={{ fill: COLORS.accent1, r: 4 }}
                  activeDot={{ r: 6, fill: COLORS.accent1 }}
                />
                <Line
                  type="monotone"
                  name="Investors"
                  dataKey="investors"
                  stroke={COLORS.accent2}
                  strokeWidth={2}
                  dot={{ fill: COLORS.accent2, r: 4 }}
                  activeDot={{ r: 6, fill: COLORS.accent2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">

        <div className="bg-transparent rounded-lg p-6 border border-[#E3E2D9]">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800">Revenue Sources</h3>
              <p className="text-sm text-gray-500">Breakdown by category</p>
            </div>
            <div className="flex gap-2">
              <button
                className={`text-xs px-3 py-1 rounded-full transition ${revenueTimeframe === "Q1"
                    ? `text-white`
                    : `text-gray-500 hover:bg-gray-100`
                  }`}
                style={{ backgroundColor: revenueTimeframe === "Q1" ? COLORS.primary : "transparent" }}
                onClick={() => setRevenueTimeframe("Q1")}
              >
                Q1 2025
              </button>
              <button
                className={`text-xs px-3 py-1 rounded-full transition ${revenueTimeframe === "YTD"
                    ? `text-white`
                    : `text-gray-500 hover:bg-gray-100`
                  }`}
                style={{ backgroundColor: revenueTimeframe === "YTD" ? COLORS.primary : "transparent" }}
                onClick={() => setRevenueTimeframe("YTD")}
              >
                Year to Date
              </button>
            </div>
          </div>
          <div className="grid grid-cols-5 h-64">
            <div className="col-span-2">
              <div className="grid grid-cols-1 gap-4">
                {revenueSourcesData.map((entry, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div
                        className="w-3 h-3 rounded-full mr-2"
                        style={{ backgroundColor: [COLORS.primary, COLORS.secondary, COLORS.accent1, COLORS.accent2][index] }}
                      ></div>
                      <span className="text-sm">{entry.name}</span>
                    </div>
                    <span className="text-sm font-medium">{entry.value}%</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-3 flex justify-center items-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Tooltip content={<RevenueTooltip />} />
                  <Pie
                    data={revenueSourcesData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    fill="#8884d8"
                    dataKey="value"
                    paddingAngle={2}
                    isAnimationActive={true}
                  >
                    <Cell fill={COLORS.primary} />
                    <Cell fill={COLORS.secondary} />
                    <Cell fill={COLORS.accent1} />
                    <Cell fill={COLORS.accent2} />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        {/* User Acquisition */}
        <div className="grid grid-rows-2 gap-6">
          <div className="bg-transparent rounded-lg p-6 border border-[#E3E2D9]">
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-800">Popular Locations</h3>
              <p className="text-sm text-gray-500">Property distribution by city</p>
            </div>
            <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden mb-4">
              {popularLocationsData.map((entry, index) => (
                <div
                  key={index}
                  className="h-full float-left"
                  style={{
                    width: `${entry.value}%`,
                    backgroundColor: [COLORS.primary, COLORS.secondary, COLORS.accent1, COLORS.accent2][index],
                  }}
                  title={`${entry.name}: ${entry.value}%`}
                ></div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {popularLocationsData.map((entry, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: [COLORS.primary, COLORS.secondary, COLORS.accent1, COLORS.accent2][index] }}
                    ></div>
                    <span className="text-sm">{entry.name}</span>
                  </div>
                  <span className="text-sm font-medium">{entry.value}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Occupancy Rate */}
          <div className="bg-transparent rounded-lg p-6 border border-[#E3E2D9]">
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-800">Average Occupancy Rate</h3>
              <p className="text-sm text-gray-500">Weekly property occupancy</p>
            </div>
            <div className="h-24">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={occupancyRateData}
                  margin={{ top: 10, right: 10, bottom: 0, left: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                  <XAxis dataKey="day" stroke={COLORS.text} />
                  <YAxis domain={[0, 100]} stroke={COLORS.text} />
                  <Tooltip content={<OccupancyTooltip />} />
                  <Bar dataKey="rate" radius={[4, 4, 0, 0]}>
                    {occupancyRateData.map((entry, index) => (
                      <Cell key={index} fill={COLORS.accent3} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}