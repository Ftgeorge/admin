import { useState } from "react";
import { Lock } from "lucide-react";

export default function PermissionsPanel() {
    const [roles, setRoles] = useState([
        { id: 1, name: "Super Admin", description: "Full access to all features" },
        { id: 2, name: "Property Manager", description: "Manage properties and bookings" },
        { id: 3, name: "Support Agent", description: "Handle customer support inquiries" },
        { id: 4, name: "Billing Administrator", description: "Manage financial transactions" },
        { id: 5, name: "Content Manager", description: "Manage site content and blogs" },
    ]);

    const permissionGroups = [
        {
            name: "Properties",
            permissions: [
                { id: "prop_view", name: "View Properties" },
                { id: "prop_create", name: "Create Properties" },
                { id: "prop_edit", name: "Edit Properties" },
                { id: "prop_delete", name: "Delete Properties" },
                { id: "prop_approve", name: "Approve Properties" },
            ]
        },
        {
            name: "Users",
            permissions: [
                { id: "user_view", name: "View Users" },
                { id: "user_create", name: "Create Users" },
                { id: "user_edit", name: "Edit Users" },
                { id: "user_delete", name: "Delete Users" },
                { id: "user_suspend", name: "Suspend Users" },
            ]
        },
        {
            name: "Bookings",
            permissions: [
                { id: "book_view", name: "View Bookings" },
                { id: "book_create", name: "Create Bookings" },
                { id: "book_edit", name: "Edit Bookings" },
                { id: "book_cancel", name: "Cancel Bookings" },
                { id: "book_refund", name: "Process Refunds" },
            ]
        },
        {
            name: "Settings",
            permissions: [
                { id: "set_view", name: "View Settings" },
                { id: "set_edit", name: "Edit Settings" },
                { id: "set_roles", name: "Manage Roles" },
                { id: "set_billing", name: "Billing Settings" },
            ]
        },
    ];

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
            <div className="border-b border-gray-200 pb-5 mb-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900 flex items-center gap-2">
                    <Lock className="h-5 w-5 text-amber-600" />
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
                                    ? 'border-amber-500 bg-amber-50'
                                    : 'border-gray-200 hover:bg-gray-50'
                                    }`}
                            >
                                <span className="text-sm font-medium text-gray-900">{role.name}</span>
                                <span className="text-xs text-gray-500">{role.description}</span>
                            </div>
                        ))}

                        <button
                            type="button"
                            className="mt-4 w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                        >
                            Add New Role
                        </button>
                    </div>
                </div>

                <div className="md:col-span-3">
                    <h4 className="text-md font-medium text-gray-700 mb-4">
                        Permissions for <span className="text-amber-700">{selectedRole.name}</span>
                    </h4>

                    <div className="space-y-6">
                        {permissionGroups.map(group => (
                            <div key={group.name} className="space-y-2">
                                <h5 className="text-sm font-medium text-gray-700 border-b border-gray-200 pb-2">
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
                                                className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
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
                            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                        >
                            Save Permissions
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}