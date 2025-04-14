import { Booking, Property, User } from "@/lib/props";
import {
    Settings,
    FileText,
    Home,
    DollarSign,
    Users,
    Lock,
} from "lucide-react";
import AdminManagementPanel from "../settings-panel/AdminManagementPanel";
import { CancellationPolicyPanel } from "../settings-panel/CancellationPolicyPanel";
import GeneralSettingsPanel from "../settings-panel/GeneralSettingsPanel";
import PaymentSettingsPanel from "../settings-panel/PaymentSettingsPanel";
import PermissionsPanel from "../settings-panel/PermissionsPanel";
import PropertyManagementPanel from "../settings-panel/PropertyManagementPanel";

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

export const userManagementButtons = [
    {
        name: "All Users",
        link: "All"
    },
    {
        name: "Hosts",
        link: "Hosts"
    },
    {
        name: "Tenant",
        link: "Tenant"
    },
    {
        name: "Admin",
        link: "Admin"
    },
]

export const UserData: User[] = [
    {
        id: 1,
        profile: "FG",
        name: "Fabumni George",
        email: "fgace@gmail.com",
        contact: "9903474742",
        role: "Landlord",
        status: "Active",
        dateJoined: "2023-03-22",
    },
    {
        id: 2,
        profile: "AJ",
        name: "Ayo Joel",
        email: "Joelayo@gmail.com",
        contact: "8103485262",
        role: "Tenant",
        status: "Pending",
        dateJoined: "2023-04-15",
    },
    {
        id: 3,
        profile: "SJ",
        name: "Sarjas James",
        email: "sarjas@gmail.com",
        contact: "8112347830",
        role: "Admin",
        status: "Banned",
        dateJoined: "2023-01-10",
    },
    {
        id: 4,
        profile: "ML",
        name: "Mary Lawrence",
        email: "mary.lawrence@example.com",
        contact: "7034569821",
        role: "Landlord",
        status: "Active",
        dateJoined: "2023-05-18",
    },
    {
        id: 5,
        profile: "TG",
        name: "Tom Green",
        email: "tom.green@example.com",
        contact: "9056782314",
        role: "Tenant",
        status: "Active",
        dateJoined: "2023-06-22",
    },
    {
        id: 6,
        profile: "SA",
        name: "Sarah Adebayo",
        email: "sarah.adebayo@example.com",
        contact: "8012345678",
        role: "Tenant",
        status: "Pending",
        dateJoined: "2023-07-14",
    },
    {
        id: 7,
        profile: "MO",
        name: "Michael Okonkwo",
        email: "michael.o@example.com",
        contact: "7023456789",
        role: "Landlord",
        status: "Banned",
        dateJoined: "2023-02-05",
    },
    {
        id: 8,
        profile: "JD",
        name: "Jane Doe",
        email: "jane.doe@example.com",
        contact: "9012345678",
        role: "Admin",
        status: "Active",
        dateJoined: "2023-01-30",
    }
];

export const settingsCategories = [
    {
        icon: Settings,
        title: "General Settings",
        description: "Configure basic platform settings",
        component: GeneralSettingsPanel
    },
    {
        icon: FileText,
        title: "Cancellation Policies",
        description: "Manage guest cancellation rules and refund options",
        component: CancellationPolicyPanel
    },
    {
        icon: Home,
        title: "Property Management Settings",
        description: "Configure property listing rules and requirements",
        component: PropertyManagementPanel
    },
    {
        icon: DollarSign,
        title: "Currency & Payment Settings",
        description: "Manage supported currencies and payment methods",
        component: PaymentSettingsPanel
    },
    {
        icon: Users,
        title: "Admin Management",
        description: "Add and manage administrator accounts",
        component: AdminManagementPanel
    },
    {
        icon: Lock,
        title: "Role-Based Permissions",
        description: "Configure access controls for different user roles",
        component: PermissionsPanel
    },
];