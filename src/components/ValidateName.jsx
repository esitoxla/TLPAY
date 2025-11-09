import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validateName, resetTransferState } from "../store/features/transferSlice";

export default function ValidateName() {

    const [formData, setFormData] = useState({
      type: 1,
      receiver: "",
      channel: "",
      sublistid: "",
      currency: "GHS",
      accountnumber: "",
    });

    const dispatch = useDispatch();
    const { loading, data, error, success } = useSelector((state) => state.transfer);

    console.log("Moolre Response:", data);

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      dispatch(resetTransferState());
       dispatch(validateName(formData));
    };

    useEffect(() => {
        if (success) {
          setFormData({
            type: 1,
            receiver: "",
            channel: "",
            sublistid: "",
            currency: "GHS",
            accountnumber: "",
          });
        }
      }, [success]);

  return (
    <div className="flex items-center justify-center m-2 md:m-0">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-yellow-400 text-2xl font-semibold mb-6 text-center">
          Validate Account Name
        </h2>
        {/* Receiver */}
        <div className="mb-4">
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
            className="w-full p-2 rounded border border-gray-300"
          />
        </div>
        {/* Channel */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Channel
          </label>
          <select
            name="channel"
            value={formData.channel}
            onChange={handleChange}
            required
            className="w-full p-2 rounded border border-gray-300"
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
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Sublist ID (Bank)
            </label>
            <input
              type="text"
              name="sublistid"
              value={formData.sublistid}
              onChange={handleChange}
              placeholder="Enter Bank Sublist ID"
              className="w-full p-2 rounded border border-gray-300 "
            />
          </div>
        )}
        {/* Currency */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Currency
          </label>
          <select
            name="currency"
            value={formData.currency}
            onChange={handleChange}
            className="w-full p-2 rounded border border-gray-300 "
          >
            <option value="GHS">GHS - Ghana Cedis</option>
            <option value="NGN">NGN - Nigerian Naira</option>
          </select>
        </div>
        {/* Account Number */}
        <div className="mb-6">
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
            className="w-full p-2 rounded border border-gray-300 "
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

        {/* success Result */}
        {data && data.status === 1 && (
          <div className="mt-6 p-3 bg-blue-100 border border-blue-400 rounded text-sm text-blue-800">
            <p className="font-semibold">Account validated successfully!</p>
            <p>
              <strong>Name:</strong> {data.data}
            </p>
          </div>
        )}

        {/* when error occurs */}

        {data && data.status === 0 && (
          <div className="mt-6 p-3 bg-red-100 border border-red-400 rounded text-sm text-red-800">
            <p>
              <strong>Error:</strong> {data.message}
            </p>
          </div>
        )}

        {/* Network or Other Error */}
        {error && !data && (
          <div className="mt-6 p-3 bg-red-100 border border-red-400 rounded text-sm text-red-800">
            <p>
              <strong>Error:</strong> {error.message || "Something went wrong"}
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
