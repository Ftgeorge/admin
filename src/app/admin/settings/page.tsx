"use client";

import React, { useState } from "react";
import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";
import PageHeading from "@/components/PageHeading";
import { 
  Settings, 
  FileText, 
  Home, 
  DollarSign, 
  Users, 
  Lock,
  Bell,
  Globe,
  ShieldCheck,
  Calendar,
  Wifi,
  HelpCircle
} from "lucide-react";

// Settings data with proper icons
const settingsCategories = [
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

export default function SettingsPage() {
  const [activeSettingIndex, setActiveSettingIndex] = useState(0);
  const ActiveSettingComponent = settingsCategories[activeSettingIndex].component;

  return (
    <PageContainer>
      <PageHeader>
        <PageHeading>Platform Settings</PageHeading>
        <p className="text-gray-500">Manage your platform configuration and policies</p>
      </PageHeader>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        {/* Settings Navigation Sidebar */}
        <div className="md:col-span-1">
          <nav className="flex flex-col space-y-1 bg-white rounded-lg border border-gray-200">
            {settingsCategories.map((setting, index) => {
              const IconComponent = setting.icon;
              const isActive = index === activeSettingIndex;
              
              return (
                <button
                  key={index}
                  onClick={() => setActiveSettingIndex(index)}
                  className={`flex items-center gap-3 px-4 py-3 text-left transition-all ${
                    isActive 
                      ? 'bg-amber-50 border-l-4 border-amber-600 text-amber-800'
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <IconComponent className={`h-5 w-5 ${isActive ? 'text-amber-700' : 'text-gray-500'}`} />
                  <div className="flex flex-col">
                    <span className={`text-sm font-medium ${isActive ? 'text-amber-800' : 'text-gray-700'}`}>
                      {setting.title}
                    </span>
                    <span className="text-xs text-gray-500 hidden md:inline-block">
                      {setting.description}
                    </span>
                  </div>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Settings Content Area */}
        <div className="md:col-span-3 bg-white p-6 rounded-lg border border-gray-200">
          <ActiveSettingComponent />
        </div>
      </div>
    </PageContainer>
  );
}

// General Settings Component
function GeneralSettingsPanel() {
  const [siteName, setSiteName] = useState("PropertyVista");
  const [supportEmail, setSupportEmail] = useState("support@propertyvista.com");
  const [timezone, setTimezone] = useState("UTC-5 (Eastern Time)");
  const [language, setLanguage] = useState("English");
  
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-5 mb-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900 flex items-center gap-2">
          <Settings className="h-5 w-5 text-amber-600" />
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
                className="shadow-sm focus:ring-amber-500 focus:border-amber-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
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
                className="shadow-sm focus:ring-amber-500 focus:border-amber-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
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
                className="shadow-sm focus:ring-amber-500 focus:border-amber-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
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
                className="shadow-sm focus:ring-amber-500 focus:border-amber-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
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
            className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
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
            className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
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

// Cancellation Policies Component
function CancellationPolicyPanel() {
  const [policies, setPolicies] = useState([
    { id: 1, name: "Flexible", refundPercent: 100, cutoffHours: 24, isDefault: true },
    { id: 2, name: "Moderate", refundPercent: 50, cutoffHours: 48, isDefault: false },
    { id: 3, name: "Strict", refundPercent: 0, cutoffHours: 72, isDefault: false },
  ]);
  
  const [editingPolicy, setEditingPolicy] = useState(null);
  
  const handleSetDefault = (id:any) => {
    const updatedPolicies = policies.map(policy => ({
      ...policy,
      isDefault: policy.id === id
    }));
    setPolicies(updatedPolicies);
  };
  
  const handleEdit = (policy:any) => {
    setEditingPolicy({...policy});
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

// Property Management Settings Component
function PropertyManagementPanel() {
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

// Payment Settings Component
function PaymentSettingsPanel() {
  const [enabledCurrencies, setEnabledCurrencies] = useState([
    { code: "USD", name: "US Dollar", symbol: "$", isEnabled: true },
    { code: "EUR", name: "Euro", symbol: "€", isEnabled: true },
    { code: "GBP", name: "British Pound", symbol: "£", isEnabled: true },
    { code: "CAD", name: "Canadian Dollar", symbol: "CA$", isEnabled: false },
    { code: "AUD", name: "Australian Dollar", symbol: "A$", isEnabled: false },
    { code: "JPY", name: "Japanese Yen", symbol: "¥", isEnabled: false },
  ]);
  
  const [paymentMethods, setPaymentMethods] = useState([
    { id: "credit_card", name: "Credit Card", isEnabled: true },
    { id: "paypal", name: "PayPal", isEnabled: true },
    { id: "bank_transfer", name: "Bank Transfer", isEnabled: false },
    { id: "apple_pay", name: "Apple Pay", isEnabled: false },
    { id: "google_pay", name: "Google Pay", isEnabled: false },
  ]);
  
  const toggleCurrency = (code:any) => {
    const updated = enabledCurrencies.map(currency => 
      currency.code === code ? {...currency, isEnabled: !currency.isEnabled} : currency
    );
    setEnabledCurrencies(updated);
  };
  
  const togglePaymentMethod = (id:any) => {
    const updated = paymentMethods.map(method => 
      method.id === id ? {...method, isEnabled: !method.isEnabled} : method
    );
    setPaymentMethods(updated);
  };
  
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-5 mb-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900 flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-amber-600" />
          Currency & Payment Settings
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Configure your platform's financial settings
        </p>
      </div>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-md font-medium text-gray-700 mb-4">Default Currency</h4>
          <select
            id="default-currency"
            name="default-currency"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm rounded-md"
            defaultValue="USD"
          >
            {enabledCurrencies
              .filter(c => c.isEnabled)
              .map(currency => (
                <option key={currency.code} value={currency.code}>
                  {currency.name} ({currency.symbol})
                </option>
              ))
            }
          </select>
        </div>
        
        <div>
          <h4 className="text-md font-medium text-gray-700 mb-4">Supported Currencies</h4>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {enabledCurrencies.map(currency => (
              <div key={currency.code} className="flex items-center space-x-3">
                <input
                  id={`currency-${currency.code}`}
                  name={`currency-${currency.code}`}
                  type="checkbox"
                  checked={currency.isEnabled}
                  onChange={() => toggleCurrency(currency.code)}
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                />
                <label htmlFor={`currency-${currency.code}`} className="text-sm text-gray-700">
                  {currency.name} ({currency.symbol})
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-md font-medium text-gray-700 mb-4">Payment Methods</h4>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {paymentMethods.map(method => (
              <div key={method.id} className="flex items-center space-x-3">
                <input
                  id={`payment-${method.id}`}
                  name={`payment-${method.id}`}
                  type="checkbox"
                  checked={method.isEnabled}
                  onChange={() => togglePaymentMethod(method.id)}
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                />
                <label htmlFor={`payment-${method.id}`} className="text-sm text-gray-700">
                  {method.name}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-md font-medium text-gray-700 mb-4">Platform Fees</h4>
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="guest-fee" className="block text-sm font-medium text-gray-700">
                Guest Service Fee (%)
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="text"
                  name="guest-fee"
                  id="guest-fee"
                  defaultValue="12"
                  className="focus:ring-amber-500 focus:border-amber-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md p-2 border"
                  placeholder="0.00"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">%</span>
                </div>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="host-fee" className="block text-sm font-medium text-gray-700">
                Host Service Fee (%)
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="text"
                  name="host-fee"
                  id="host-fee"
                  defaultValue="3"
                  className="focus:ring-amber-500 focus:border-amber-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md p-2 border"
                  placeholder="0.00"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">%</span>
                </div>
              </div>
            </div>
          </div>
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

// Admin Management Component
function AdminManagementPanel() {
  const [admins, setAdmins] = useState([
    { id: 1, name: "John Smith", email: "john@propertyvista.com", role: "Super Admin", lastLogin: "2 hours ago" },
    { id: 2, name: "Sarah Johnson", email: "sarah@propertyvista.com", role: "Property Manager", lastLogin: "Yesterday" },
    { id: 3, name: "Michael Brown", email: "michael@propertyvista.com", role: "Support Agent", lastLogin: "3 days ago" },
  ]);
  
  const [showAddForm, setShowAddForm] = useState(false);
  
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-5 mb-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900 flex items-center gap-2">
          <Users className="h-5 w-5 text-amber-600" />
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
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
        >
          Add Administrator
        </button>
      </div>
      
      {showAddForm && (
        <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mt-4">
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
                  className="shadow-sm focus:ring-amber-500 focus:border-amber-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
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
                  className="shadow-sm focus:ring-amber-500 focus:border-amber-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
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
                  className="shadow-sm focus:ring-amber-500 focus:border-amber-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
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
                  className="shadow-sm focus:ring-amber-500 focus:border-amber-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
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
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
            >
              Cancel
            </button>
            <button
              type="button"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
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
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
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
                  <tbody className="bg-white divide-y divide-gray-200">
                    {admins.map((admin) => (
                      <tr key={admin.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                                <span className="text-amber-800 font-medium">
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
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-amber-100 text-amber-800">
                            {admin.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {admin.lastLogin}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-amber-600 hover:text-amber-900 mr-4">
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

// Role-Based Permissions Component
function PermissionsPanel() {
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
                className={`flex flex-col p-3 border rounded-md cursor-pointer transition-all ${
                  selectedRole.id === role.id
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