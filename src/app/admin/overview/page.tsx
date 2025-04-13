import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell } from 'lucide-react'; // Example icon

// Placeholder data - replace with actual data fetching later
const metrics = [
  { title: "Total Property Listed", value: 672, icon: <Bell className="h-4 w-4 text-muted-foreground" /> },
  { title: "Active Users", value: { landlords: 355, renters: 792 }, icon: <Bell className="h-4 w-4 text-muted-foreground" /> },
  { title: "Pending Approvals", value: 215, icon: <Bell className="h-4 w-4 text-muted-foreground" /> },
  { title: "Pending Bookings", value: 126, icon: <Bell className="h-4 w-4 text-muted-foreground" /> },
  { title: "Total Revenue", value: "₦24,120,931", icon: <Bell className="h-4 w-4 text-muted-foreground" /> },
];

const recentBookings = [
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
  // Add more bookings as needed
];

// Placeholder for chart component
function OverviewChart() {
  // Replace with actual chart implementation (e.g., using Recharts, Chart.js)
  return (
    <div className="bg-white p-4 rounded-lg shadow flex items-center justify-center h-64 text-gray-500">
      [Chart Placeholder]
      {/* Example bar chart structure matching the mockup */}
      <div className="flex items-end space-x-4 h-full pb-4">
        {[40, 70, 50, 80, 60, 75, 55].map((height, index) => (
          <div key={index} className="flex flex-col items-center space-y-1">
            <div className="w-8 bg-[#C7B09D] rounded-t-sm" style={{ height: `${height * 0.7}%` }}></div>
            <div className="w-8 bg-[#7B5B40] rounded-b-sm" style={{ height: `${height * 0.3}%` }}></div>
            <span className="text-xs text-gray-500">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function OverviewPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p className="text-sm text-muted-foreground">Welcome back, Admin</p>
        </div>
        {/* Top right elements (Search, User, Notifications, etc.) - Add as needed */}
      </div>

      {/* Metric Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {metrics.map((metric, index) => (
          <Card key={index} className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              {metric.icon}
            </CardHeader>
            <CardContent>
              {typeof metric.value === 'object' ? (
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Landlords</p>
                    <div className="text-2xl font-bold">{metric.value.landlords}</div>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Renters</p>
                    <div className="text-2xl font-bold">{metric.value.renters}</div>
                  </div>
                </div>
              ) : (
                <div className="text-2xl font-bold">{metric.value}</div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Chart and Recent Bookings */}
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 bg-white">
          <CardHeader>
            <CardTitle>Sales Trend</CardTitle> { /* Updated title to match mockup hint */}
          </CardHeader>
          <CardContent>
            <OverviewChart />
          </CardContent>
        </Card>
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Recent Bookings</CardTitle>
            {/* Optional: Add action like 'View All' */}
          </CardHeader>
          <CardContent className="space-y-4">
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
  );
} 