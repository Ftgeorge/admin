import { FileText } from "lucide-react";
import { useState } from "react";

export function CancellationPolicyPanel() {
    const [policies, setPolicies] = useState([
        { id: 1, name: "Flexible", refundPercent: 100, cutoffHours: 24, isDefault: true },
        { id: 2, name: "Moderate", refundPercent: 50, cutoffHours: 48, isDefault: false },
        { id: 3, name: "Strict", refundPercent: 0, cutoffHours: 72, isDefault: false },
    ]);

    const [editingPolicy, setEditingPolicy] = useState(null);

    const handleSetDefault = (id: any) => {
        const updatedPolicies = policies.map(policy => ({
            ...policy,
            isDefault: policy.id === id
        }));
        setPolicies(updatedPolicies);
    };

    const handleEdit = (policy: any) => {
        setEditingPolicy({ ...policy });
    };

    return (
        <div className="space-y-6">
            <div className="border-b border-gray-200 pb-5 mb-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-amber-600" />
                    Cancellation Policies
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                    Configure the cancellation policies that hosts can select for their properties
                </p>
            </div>

            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <h4 className="text-md font-medium text-gray-700">Available Policies</h4>
                    <button
                        type="button"
                        className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                    >
                        Add New Policy
                    </button>
                </div>

                <div className="bg-white shadow overflow-hidden border-b border-gray-200 rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Policy Name
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Refund
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Cutoff Period
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Default
                                </th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {policies.map((policy) => (
                                <tr key={policy.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {policy.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {policy.refundPercent}% Refund
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {policy.cutoffHours} hours before check-in
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {policy.isDefault ? (
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                Default
                                            </span>
                                        ) : (
                                            <button
                                                onClick={() => handleSetDefault(policy.id)}
                                                className="text-xs text-amber-600 hover:text-amber-900"
                                            >
                                                Set as default
                                            </button>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button
                                            onClick={() => handleEdit(policy)}
                                            className="text-amber-600 hover:text-amber-900 mr-4"
                                        >
                                            Edit
                                        </button>
                                        <button className="text-red-600 hover:text-red-900">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}