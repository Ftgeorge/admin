import { Users } from "lucide-react";
import { useState } from "react";

export default function AdminManagementPanel() {
    const [admins, setAdmins] = useState([
        { id: 1, name: "John Smith", email: "john@propertyvista.com", role: "Super Admin", lastLogin: "2 hours ago" },
        { id: 2, name: "Sarah Johnson", email: "sarah@propertyvista.com", role: "Property Manager", lastLogin: "Yesterday" },
        { id: 3, name: "Michael Brown", email: "michael@propertyvista.com", role: "Support Agent", lastLogin: "3 days ago" },
    ]);

    const [showAddForm, setShowAddForm] = useState(false);

    return (
        <div className="space-y-6">
            <div className="border-b border-[#E3E2D9] pb-5 mb-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900 flex items-center gap-2">
                    <Users className="h-5 w-5 text-[#7B4F3A]" />
                    Admin Management
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                    Manage administrator accounts and their access levels
                </p>
            </div>

            <div className="flex justify-between items-center">
                <div>
                    <h4 className="text-md font-medium text-gray-700">Administrators</h4>
                    <p className="text-sm text-gray-500">
                        {admins.length} administrators configured
                    </p>
                </div>
                <button
                    type="button"
                    onClick={() => setShowAddForm(!showAddForm)}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md  text-white bg-[#7B4F3A] hover:bg-[#7B4F3A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E3E2D9]"
                >
                    Add Administrator
                </button>
            </div>

            {showAddForm && (
                <div className="bg-transparent p-4 rounded-md border border-[#E3E2D9] mt-4">
                    <h5 className="text-md font-medium text-gray-700 mb-4">Add New Administrator</h5>
                    <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="admin-name" className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="admin-name"
                                    id="admin-name"
                                    className=" focus:ring-[#E3E2D9] focus:border-[#E3E2D9] block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="admin-email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <div className="mt-1">
                                <input
                                    type="email"
                                    name="admin-email"
                                    id="admin-email"
                                    className=" focus:ring-[#E3E2D9] focus:border-[#E3E2D9] block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="admin-password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    type="password"
                                    name="admin-password"
                                    id="admin-password"
                                    className=" focus:ring-[#E3E2D9] focus:border-[#E3E2D9] block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="admin-role" className="block text-sm font-medium text-gray-700">
                                Role
                            </label>
                            <div className="mt-1">
                                <select
                                    id="admin-role"
                                    name="admin-role"
                                    className=" focus:ring-[#E3E2D9] focus:border-[#E3E2D9] block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                                >
                                    <option>Super Admin</option>
                                    <option>Property Manager</option>
                                    <option>Support Agent</option>
                                    <option>Billing Administrator</option>
                                    <option>Content Manager</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end mt-4">
                        <button
                            type="button"
                            onClick={() => setShowAddForm(false)}
                            className="bg-transparent py-2 px-4 border border-gray-300 rounded-md  text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E3E2D9]"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent  text-sm font-medium rounded-md text-white bg-[#7B4F3A] hover:bg-[#7B4F3A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E3E2D9]"
                        >
                            Add Administrator
                        </button>
                    </div>
                </div>
            )}

            <div className="mt-4">
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden border border-[#E3E2D9] sm:rounded-lg">
                                <table className="min-w-full divide-y divide-[#E3E2D9]">
                                    <thead className="bg-[#E3E2D955]">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Name
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Role
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Last Login
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-transparent divide-y divide-[#E3E2D9]">
                                        {admins.map((admin) => (
                                            <tr key={admin.id}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0 h-10 w-10">
                                                            <div className="h-10 w-10 rounded-full bg-[#7B4F3A55] flex items-center justify-center">
                                                                <span className="text-[#7B4F3A] font-medium">
                                                                    {admin.name.split(' ').map(n => n[0]).join('')}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900">{admin.name}</div>
                                                            <div className="text-sm text-gray-500">{admin.email}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-[#7B4F3A55] text-[#7B4F3A]">
                                                        {admin.role}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {admin.lastLogin}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <button className="text-[#7B4F3A] hover:text-[#7B4F3A] mr-4">
                                                        Edit
                                                    </button>
                                                    <button className="text-red-600 hover:text-red-900">
                                                        Deactivate
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}