import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { checkTransferStatus } from '../store/features/transferSlice';

export default function TransferStatus() {

    const dispatch = useDispatch();
    const { loading, data, error, success } = useSelector(
      (state) => state.transfer
    );

     const [formData, setFormData] = useState({
       type: 1,
       idtype: "",
       id: "",
       accountnumber: "",
     });

     const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
     };

     const handleSubmit = (e) => {
       e.preventDefault();
       dispatch(checkTransferStatus(formData));
     };

     useEffect(() => {
       if (success) {
         setFormData({
           type: 1,
           idtype: "",
           id: "",
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
        <h2 className="text-[#0a192f] text-3xl font-bold mb-6 text-center tracking-wide">
          Check <span className="text-yellow-500">Transfer Status</span>
        </h2>

        <p className="text-center text-gray-500 mb-8 text-sm">
          Enter the details to verify your transaction status.
        </p>

        <div className="grid grid-cols-1 gap-6 w-full">
          {/* Type */}
          {/* <div>
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
          </div> */}

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
          type="submit"
          disabled={loading}
          className="w-full py-2 mt-6 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded transition duration-200"
        >
          {loading ? "Checking..." : "Check Status"}
        </button>

        {/*  Success Message */}
        {success && data && (
          <div className="bg-blue-100 text-blue-800 p-4 rounded border border-blue-300 mt-4">
            <p>
              <strong>Status:</strong> {data.data?.txstatus || "Success"}
            </p>
            <p>
              <strong>Message:</strong> {data.message}
            </p>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 text-red-700 p-4 rounded border border-red-300 mt-4">
            <strong>Error:</strong> {error}
          </div>
        )}
      </form>
    </div>
  );
}
