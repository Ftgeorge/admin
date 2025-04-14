import { Booking } from "@/lib/props";

export const recentBookings: Booking[] = [
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

export const overviewButtons = [
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

export const salesTrendData = [
    { month: 'Jan', properties: 40, revenue: 12000000, transactions: 35 },
    { month: 'Feb', properties: 28, revenue: 8500000, transactions: 22 },
    { month: 'Mar', properties: 45, revenue: 15000000, transactions: 42 },
    { month: 'Apr', properties: 55, revenue: 18500000, transactions: 48 },
    { month: 'May', properties: 60, revenue: 21000000, transactions: 55 },
    { month: 'Jun', properties: 65, revenue: 24000000, transactions: 62 },
    { month: 'Jul', properties: 70, revenue: 25000000, transactions: 68 },
];
