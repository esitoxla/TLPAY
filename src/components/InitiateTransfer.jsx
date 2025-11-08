import React from "react";
import { useState } from "react";

export default function InitiateTransfer() {
  const [formData, setFormData] = useState({
    type: 1,
    channel: "",
    currency: "GHS",
    receiver: "",
    sublistid: "",
    amount: "",
    externalref: "",
    reference: "",
    accountnumber: "",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        
        className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl w-full max-w-2xl border border-gray-100 transition-transform hover:scale-[1.01]"
      >
        <h2 className="text-[#0a192f] text-3xl font-bold mb-6 text-center tracking-wide">
          Initiate <span className="text-yellow-500">Transfer</span>
        </h2>

        <p className="text-center text-gray-500 mb-8 text-sm">
          Fill in the details below to simulate a transfer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Receiver */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Receiver (Phone or Account)
            </label>
            <input
              type="text"
              name="receiver"
              value={formData.receiver}
              onChange={handleChange}
              required
              placeholder="e.g. 0541234567"
              className="w-full p-2.5 rounded-lg border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
            />
          </div>

          {/* Channel */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Channel
            </label>
            <select
              name="channel"
              value={formData.channel}
              onChange={handleChange}
              required
              className="w-full p-2.5 rounded-lg border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
            >
              <option value="">Select Channel</option>
              <option value="1">MTN</option>
              <option value="6">Vodafone</option>
              <option value="7">AirtelTigo</option>
              <option value="2">Bank Transfer</option>
            </select>
          </div>

          {/* Sublist ID (Optional) */}
          {formData.channel === "2" && (
            <div className="md:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Sublist ID (Bank)
              </label>
              <input
                type="text"
                name="sublistid"
                value={formData.sublistid}
                onChange={handleChange}
                placeholder="Enter Bank Sublist ID"
                className="w-full p-2.5 rounded-lg border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
              />
            </div>
          )}

          {/* Currency */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Currency
            </label>
            <select
              name="currency"
              value={formData.currency}
              onChange={handleChange}
              className="w-full p-2.5 rounded-lg border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
            >
              <option value="GHS">GHS - Ghana Cedis</option>
              <option value="NGN">NGN - Nigerian Naira</option>
            </select>
          </div>

          {/* Amount */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Amount
            </label>
            <input
              type="number"
              name="amount"
              step="0.01"
              value={formData.amount}
              onChange={handleChange}
              required
              placeholder="e.g. 15.00"
              className="w-full p-2.5 rounded-lg border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
            />
          </div>

          {/* External Reference */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              External Reference
            </label>
            <input
              type="text"
              name="externalref"
              value={formData.externalref}
              onChange={handleChange}
              required
              placeholder="Unique ID (e.g. TXN123ABC)"
              className="w-full p-2.5 rounded-lg border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
            />
          </div>

          {/* Reference Message */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Reference Message
            </label>
            <input
              type="text"
              name="reference"
              value={formData.reference}
              onChange={handleChange}
              placeholder="Message for the transfer"
              className="w-full p-2.5 rounded-lg border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
            />
          </div>

          {/* Account Number */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Your Account Number
            </label>
            <input
              type="text"
              name="accountnumber"
              value={formData.accountnumber}
              onChange={handleChange}
              required
              placeholder="Your Moolre Account Number"
              className="w-full p-2.5 rounded-lg border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full mt-8 py-2.5 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-lg shadow-md transition-all duration-200"
        >
          {loading ? "Processing..." : "Initiate Transfer"}
        </button>

        {/* Result */}
        {result && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-800">
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
      </form>
    </div>
  );
}
