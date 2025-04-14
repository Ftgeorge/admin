import { Home } from "lucide-react";

export default function PropertyManagementPanel() {
    return (
        <div className="space-y-6">
            <div className="border-b border-gray-200 pb-5 mb-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900 flex items-center gap-2">
                    <Home className="h-5 w-5 text-amber-600" />
                    Property Management Settings
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                    Configure property listing requirements and management rules
                </p>
            </div>

            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                    <label htmlFor="min-photos" className="block text-sm font-medium text-gray-700">
                        Minimum Photos Required
                    </label>
                    <div className="mt-1">
                        <input
                            type="number"
                            name="min-photos"
                            id="min-photos"
                            defaultValue={5}
                            min={1}
                            className="shadow-sm focus:ring-amber-500 focus:border-amber-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                        />
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                        Minimum number of photos hosts must upload for each property
                    </p>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="max-guests" className="block text-sm font-medium text-gray-700">
                        Maximum Guests Per Property
                    </label>
                    <div className="mt-1">
                        <input
                            type="number"
                            name="max-guests"
                            id="max-guests"
                            defaultValue={16}
                            min={1}
                            className="shadow-sm focus:ring-amber-500 focus:border-amber-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                        />
                    </div>
                </div>
            </div>

            <div className="space-y-4 mt-6">
                <h4 className="text-md font-medium text-gray-700">Required Property Information</h4>

                <div className="space-y-2">
                    {[
                        "Basic Info (title, description)",
                        "Property Type",
                        "Address",
                        "Pricing",
                        "Photos",
                        "Amenities",
                        "House Rules"
                    ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                            <input
                                id={`required-${index}`}
                                name={`required-${index}`}
                                type="checkbox"
                                className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                                defaultChecked
                            />
                            <label htmlFor={`required-${index}`} className="text-sm text-gray-700">
                                {item}
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-4 mt-6">
                <h4 className="text-md font-medium text-gray-700">Optional Property Information</h4>

                <div className="space-y-2">
                    {[
                        "Nearby Attractions",
                        "Public Transit Options",
                        "Parking Information",
                        "Accessibility Features"
                    ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                            <input
                                id={`optional-${index}`}
                                name={`optional-${index}`}
                                type="checkbox"
                                className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                                defaultChecked={index < 2}
                            />
                            <label htmlFor={`optional-${index}`} className="text-sm text-gray-700">
                                {item}
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-end pt-5">
                <button
                    type="button"
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                >
                    Save
                </button>
            </div>
        </div>
    );
}