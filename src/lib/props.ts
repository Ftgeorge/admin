export interface MetricValueObject {
    landlords: number;
    renters: number;
}

export interface Metric {
    title: string;
    value: number | string | MetricValueObject;
    icon: React.ReactNode;
}

export interface Booking {
    name: string;
    details: string;
    date: string;
    amount: string;
    status: "Completed" | "Pending";
    avatar: string;
}

export type ChartType = 'properties' | 'revenue' | 'transactions';

export const chartTypes: ChartType[] = ['properties', 'revenue', 'transactions'];

export const chartLabels: Record<ChartType, string> = {
    properties: 'Properties Listed',
    revenue: 'Revenue',
    transactions: 'Transactions'
};

export type PropertyStatus = "Pending" | "Active" | "Inactive" | "Archived";

export interface Property {
    id: number;
    image: string;
    name: string;
    owner: string;
    status: PropertyStatus;
    locationType: string;
    dateAdded: string;
}

export interface PropertyTableProps {
    properties: Property[];
    onApprove: (id: number) => void;
    onReject: (id: number) => void;
    onDelete: (id: number) => void;
}
