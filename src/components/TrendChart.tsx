import { chartTypes, chartLabels } from "@/lib/props";
import { useState } from "react";
import { salesTrendData } from "./data/array";
import { LineChart, Line, BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ComposedChart } from 'recharts';

export default function     TrendChart() {
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