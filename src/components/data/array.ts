import { Booking, Property } from "@/lib/props";

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


export const properties: Property[] = [
    {
        id: 1,
        image: "/placeholder-property.jpg",
        name: "Semi-Detached Duplex",
        owner: "June Smith",
        status: "Pending",
        locationType: "Abuja - Duplex",
        dateAdded: "2023-03-22",
    },
    {
        id: 2,
        image: "/placeholder-property.jpg",
        name: "Luxury Apartment",
        owner: "Alex Johnson",
        status: "Active",
        locationType: "Lagos - Apartment",
        dateAdded: "2023-05-14",
    },
    {
        id: 3,
        image: "/placeholder-property.jpg",
        name: "Beachfront Villa",
        owner: "Michael Chen",
        status: "Inactive",
        locationType: "Port Harcourt - Villa",
        dateAdded: "2023-02-08",
    },
    {
        id: 4,
        image: "/placeholder-property.jpg",
        name: "Modern Bungalow",
        owner: "Sarah Williams",
        status: "Pending",
        locationType: "Abuja - Bungalow",
        dateAdded: "2023-07-30",
    },
    {
        id: 5,
        image: "/placeholder-property.jpg",
        name: "Executive Office Space",
        owner: "David Okonkwo",
        status: "Active",
        locationType: "Lagos - Commercial",
        dateAdded: "2023-04-19",
    },
    {
        id: 6,
        image: "/placeholder-property.jpg",
        name: "Terraced House",
        owner: "Grace Adebayo",
        status: "Archived",
        locationType: "Ibadan - Terraced",
        dateAdded: "2022-11-05",
    },
    {
        id: 7,
        image: "/placeholder-property.jpg",
        name: "Waterfront Penthouse",
        owner: "Omar Suleiman",
        status: "Pending",
        locationType: "Lagos - Penthouse",
        dateAdded: "2023-06-12",
    },
    {
        id: 8,
        image: "/placeholder-property.jpg",
        name: "Studio Apartment",
        owner: "Chioma Eze",
        status: "Inactive",
        locationType: "Abuja - Studio",
        dateAdded: "2023-01-25",
    }
];

export const propertyManagementButtons = [
    {
        name: "All",
        link: "/all"
    },
    {
        name: "Pending",
        link: "/pending"
    },
    {
        name: "Active",
        link: "/active"
    },
    {
        name: "Inctive",
        link: "/inactive"
    },
    {
        name: "Archived",
        link: "/archived"
    },
];