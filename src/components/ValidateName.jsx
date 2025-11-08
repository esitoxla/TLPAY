import React from "react";
import { useState } from "react";

export default function ValidateName() {

    const [formData, setFormData] = useState({
      type: 1,
      receiver: "",
      channel: "",
      sublistid: "",
      currency: "GHS",
      accountnumber: "",
    });

    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   setLoading(true);
    //   setResult(null);

    //   try {
    //     const response = await axios.post(
    //       "http://localhost:5000/api/validate-name",
    //       formData
    //     );
    //     setResult(response.data);
    //   } catch (error) {
    //     console.error(error);
    //     setResult({ error: "Validation failed. Please check your details." });
    //   } finally {
    //     setLoading(false);
    //   }
    // };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-yellow-400 text-2xl font-semibold mb-6 text-center">
          Validate Account Name
        </h2>

        {/* Receiver */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">
            Receiver (Phone or Account)
          </label>
          <input
            type="text"
            name="receiver"
            value={formData.receiver}
            onChange={handleChange}
            required
            placeholder="e.g. 0541234567"
            className="w-full p-2 rounded border border-gray-700"
          />
        </div>

        {/* Channel */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Channel</label>
          <select
            name="channel"
            value={formData.channel}
            onChange={handleChange}
            required
            className="w-full p-2 rounded border border-gray-700"
          >
            <option value="">Select Channel</option>
            <option value="1">MTN</option>
            <option value="6">Vodafone</option>
            <option value="7">AirtelTigo</option>
            <option value="2">Bank Transfer</option>
          </select>
        </div>

        {/* Sublist ID (optional) */}
        {formData.channel === "2" && (
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">
              Sublist ID (Bank)
            </label>
            <input
              type="text"
              name="sublistid"
              value={formData.sublistid}
              onChange={handleChange}
              placeholder="Enter Bank Sublist ID"
              className="w-full p-2 rounded border border-gray-700 "
            />
          </div>
        )}

        {/* Currency */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Currency</label>
          <select
            name="currency"
            value={formData.currency}
            onChange={handleChange}
            className="w-full p-2 rounded border border-gray-700 "
          >
            <option value="GHS">GHS - Ghana Cedis</option>
            <option value="NGN">NGN - Nigerian Naira</option>
          </select>
        </div>

        {/* Account Number */}
        <div className="mb-6">
          <label className="block mb-1 text-sm font-medium">
            Your Account Number
          </label>
          <input
            type="text"
            name="accountnumber"
            value={formData.accountnumber}
            onChange={handleChange}
            required
            placeholder="Your Moolre Account Number"
            className="w-full p-2 rounded border border-gray-700 "
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded transition duration-200"
        >
          {loading ? "Validating..." : "Validate Name"}
        </button>

        {/* Result */}
        {result && (
          <div className="mt-6 p-3 bg-[#1e293b] rounded text-sm">
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
      </form>
    </div>
  );
}
