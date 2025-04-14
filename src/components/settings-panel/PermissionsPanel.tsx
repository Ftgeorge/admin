import { useState } from "react";
import { Lock } from "lucide-react";
import { permissionGroups } from "../data/array";

export default function PermissionsPanel() {
    const [roles, setRoles] = useState([
        { id: 1, name: "Super Admin", description: "Full access to all features" },
        { id: 2, name: "Property Manager", description: "Manage properties and bookings" },
        { id: 3, name: "Support Agent", description: "Handle customer support inquiries" },
        { id: 4, name: "Billing Administrator", description: "Manage financial transactions" },
        { id: 5, name: "Content Manager", description: "Manage site content and blogs" },
    ]);

    const [selectedRole, setSelectedRole] = useState(roles[0]);
    const [rolePermissions, setRolePermissions] = useState<{ [key: string]: string[] }>({
        "1": permissionGroups.flatMap(group => group.permissions.map(p => p.id)),
        "2": ["prop_view", "prop_create", "prop_edit", "book_view", "book_create", "book_edit", "book_cancel", "user_view"],
        "3": ["prop_view", "user_view", "book_view", "book_edit", "book_cancel"],
        "4": ["book_view", "book_refund", "set_view", "set_billing"],
        "5": ["prop_view", "set_view"],
    });

    const togglePermission = (permissionId: string) => {
        const roleId = selectedRole.id.toString();
        const currentPermissions = rolePermissions[roleId] ?? [];

        const newPermissions = currentPermissions.includes(permissionId)
            ? currentPermissions.filter(id => id !== permissionId)
            : [...currentPermissions, permissionId];

        setRolePermissions({
            ...rolePermissions,
            [roleId]: newPermissions,
        });
    };



    return (
        <div className="space-y-6">
            <div className="border-b border-[#E3E2D9] pb-5 mb-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900 flex items-center gap-2">
                    <Lock className="h-5 w-5 text-[#7B4F3A]" />
                    Role-Based Permissions
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                    Configure access permissions for different admin roles
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-1">
                    <div className="space-y-2">
                        <h4 className="text-md font-medium text-gray-700 mb-4">User Roles</h4>
                        {roles.map(role => (
                            <div
                                key={role.id}
                                onClick={() => setSelectedRole(role)}
                                className={`flex flex-col p-3 border rounded-md cursor-pointer transition-all ${selectedRole.id === role.id
                                    ? 'border-[#7B4F3A] bg-[#7B4F3A44]'
                                    : 'border-[#E3E2D9] hover:bg-[#E3E2D955]'
                                    }`}
                            >
                                <span className="text-sm font-medium text-gray-900">{role.name}</span>
                                <span className="text-xs text-gray-500">{role.description}</span>
                            </div>
                        ))}

                        <button
                            type="button"
                            className="mt-4 w-full inline-flex justify-center items-center px-4 py-2 border border-[#E3E2D9] text-sm font-medium rounded-md text-white bg-[#7B4F3A]"
                        >
                            Add New Role
                        </button>
                    </div>
                </div>

                <div className="md:col-span-3">
                    <h4 className="text-md font-medium text-gray-700 mb-4">
                        Permissions for <span className="text-[#7B4F3A]">{selectedRole.name}</span>
                    </h4>

                    <div className="space-y-6">
                        {permissionGroups.map(group => (
                            <div key={group.name} className="space-y-2">
                                <h5 className="text-sm font-medium text-gray-700 border-b border-[#E3E2D9] pb-2">
                                    {group.name}
                                </h5>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-2">
                                    {group.permissions.map(permission => (
                                        <div key={permission.id} className="flex items-center">
                                            <input
                                                id={`permission-${permission.id}`}
                                                name={`permission-${permission.id}`}
                                                type="checkbox"
                                                checked={(rolePermissions[selectedRole.id.toString()] ?? []).includes(permission.id)}
                                                onChange={() => togglePermission(permission.id)}
                                                className="h-4 w-4 text-[#7B4F3A] focus:ring-[#7B4F3A] border-[#E3E2D9] rounded"
                                            />
                                            <label htmlFor={`permission-${permission.id}`} className="ml-3 text-sm text-gray-700">
                                                {permission.name}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 flex justify-end">
                        <button
                            type="button"
                            className="bg-transparent py-2 px-4 border border-[#E3E2D9] rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7B4F3A]"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#7B4F3A] hover:bg-[#7B4F3A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7B4F3A]"
                        >
                            Save Permissions
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}