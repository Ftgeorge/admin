import { Settings } from "lucide-react";
import { useState } from "react";

export default function GeneralSettingsPanel() {
    const [siteName, setSiteName] = useState("PropertyVista");
    const [supportEmail, setSupportEmail] = useState("support@propertyvista.com");
    const [timezone, setTimezone] = useState("UTC-5 (Eastern Time)");
    const [language, setLanguage] = useState("English");

    return (
        <div className="space-y-6">
            <div className="border-b border-[#E3E2D9] pb-5 mb-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900 flex items-center gap-2">
                    <Settings className="h-5 w-5 text-[#7B4F3A]" />
                    General Settings
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                    Basic configuration settings for your platform
                </p>
            </div>

            <div className="space-y-6">
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="site-name" className="block text-sm font-medium text-gray-700">
                            Site Name
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                name="site-name"
                                id="site-name"
                                value={siteName}
                                onChange={(e) => setSiteName(e.target.value)}
                                className="focus:ring-[#E3E2D9] focus:border-[#E3E2D9] block w-full sm:text-sm border-[#E3E2D9] rounded-md p-2 border"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="support-email" className="block text-sm font-medium text-gray-700">
                            Support Email
                        </label>
                        <div className="mt-1">
                            <input
                                type="email"
                                name="support-email"
                                id="support-email"
                                value={supportEmail}
                                onChange={(e) => setSupportEmail(e.target.value)}
                                className="focus:ring-[#E3E2D9] focus:border-[#E3E2D9] block w-full sm:text-sm border-[#E3E2D9] rounded-md p-2 border"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="timezone" className="block text-sm font-medium text-gray-700">
                            Default Timezone
                        </label>
                        <div className="mt-1">
                            <select
                                id="timezone"
                                name="timezone"
                                value={timezone}
                                onChange={(e) => setTimezone(e.target.value)}
                                className="focus:ring-none focus:border-[#E3E2D9] block w-full sm:text-sm border-[#E3E2D9] rounded-md p-2 border"
                            >
                                <option>UTC (Universal Time Coordinated)</option>
                                <option>UTC-5 (Eastern Time)</option>
                                <option>UTC-6 (Central Time)</option>
                                <option>UTC-7 (Mountain Time)</option>
                                <option>UTC-8 (Pacific Time)</option>
                                <option>UTC+1 (Central European Time)</option>
                            </select>
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="language" className="block text-sm font-medium text-gray-700">
                            Default Language
                        </label>
                        <div className="mt-1">
                            <select
                                id="language"
                                name="language"
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                className="focus:ring-[#E3E2D9] focus:border-[#E3E2D9] block w-full sm:text-sm border-[#E3E2D9] rounded-md p-2 border"
                            >
                                <option>English</option>
                                <option>Spanish</option>
                                <option>French</option>
                                <option>German</option>
                                <option>Chinese (Simplified)</option>
                                <option>Japanese</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="flex items-center space-x-2 mt-4">
                    <input
                        id="enable-notifications"
                        name="enable-notifications"
                        type="checkbox"
                        className="h-4 w-4 text-[#7B4F3A] bg-transparent focus:ring-[#E3E2D9] border-[#E3E2D9] rounded"
                        defaultChecked
                    />
                    <label htmlFor="enable-notifications" className="text-sm text-gray-700">
                        Enable email notifications
                    </label>
                </div>

                <div className="flex items-center space-x-2">
                    <input
                        id="enable-analytics"
                        name="enable-analytics"
                        type="checkbox"
                        className="h-4 w-4 text-[#7B4F3A] bg-transparent focus:ring-[#E3E2D9] border-[#E3E2D9] rounded"
                        defaultChecked
                    />
                    <label htmlFor="enable-analytics" className="text-sm text-gray-700">
                        Enable analytics tracking
                    </label>
                </div>
            </div>

            <div className="flex justify-end pt-5">
                <button
                    type="button"
                    className="bg-transparent py-2 px-4 border border-[#E3E2D9] rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E3E2D9]"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#7B4F3A] hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E3E2D9]"
                >
                    Save
                </button>
            </div>
        </div>
    );
}