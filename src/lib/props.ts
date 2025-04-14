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