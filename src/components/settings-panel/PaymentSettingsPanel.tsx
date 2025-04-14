import { DollarSign } from "lucide-react";
import { useState } from "react";

export default function PaymentSettingsPanel() {
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

    const toggleCurrency = (code: any) => {
        const updated = enabledCurrencies.map(currency =>
            currency.code === code ? { ...currency, isEnabled: !currency.isEnabled } : currency
        );
        setEnabledCurrencies(updated);
    };

    const togglePaymentMethod = (id: any) => {
        const updated = paymentMethods.map(method =>
            method.id === id ? { ...method, isEnabled: !method.isEnabled } : method
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
