import React from 'react'
import { useState } from 'react'

export default function TransferStatus() {

     const [formData, setFormData] = useState({
       type: 1,
       idtype: "",
       id: "",
       accountnumber: "",
     });

     const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
     };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl w-full max-w-2xl border border-gray-100 transition-transform hover:scale-[1.01]">
      
        <h2 className="text-[#0a192f] text-3xl font-bold mb-6 text-center tracking-wide">
          Check <span className="text-yellow-500">Transfer Status</span>
        </h2>

        <p className="text-center text-gray-500 mb-8 text-sm">
          Enter the details below to verify your transaction status.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Type */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Type
            </label>
            <input
              type="number"
              name="type"
              value={formData.type}
              readOnly
              className="w-full p-2.5 rounded-lg border border-gray-300 bg-gray-100 text-gray-700"
            />
          </div>

          {/* ID Type */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              ID Type
            </label>
            <select
              name="idtype"
              value={formData.idtype}
              onChange={handleChange}
              required
              className="w-full p-2.5 rounded-lg border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
            >
              <option value="">Select ID Type</option>
              <option value="1">1 - Unique externalref</option>
              <option value="2">2 - Moolre Generated ID</option>
            </select>
          </div>

          {/* ID / Reference */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              ID / Reference
            </label>
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
              required
              placeholder="Enter ExternalRef or Moolre ID"
              className="w-full p-2.5 rounded-lg border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
            />
          </div>

          {/* Account Number */}
          <div>
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

        {/* Submit Button (no handler yet) */}
        <button
          type="button"
          className="w-full mt-8 py-2.5 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-lg shadow-md transition-all duration-200"
        >
          Check Status
        </button>
      </form>
    </div>
  );
}
