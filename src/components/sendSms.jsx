import React from 'react';
import { useState } from 'react';

export default function sendSms() {

     const [formData, setFormData] = useState({
       type: 1,
       senderid: "",
       recipient: "",
       message: "",
       ref: "",
     });

     const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
     };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl w-full max-w-2xl border border-gray-100 transition-transform hover:scale-[1.01]">

        <h2 className="text-[#0a192f] text-3xl font-bold mb-6 text-center tracking-wide">
          Send <span className="text-yellow-500">SMS Message</span>
        </h2>

        <p className="text-center text-gray-500 mb-8 text-sm">
          Fill in the details below to compose and send an SMS.
        </p>

        {/* Grid Layout */}
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

          {/* Sender ID */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Sender ID
            </label>
            <input
              type="text"
              name="senderid"
              value={formData.senderid}
              onChange={handleChange}
              required
              placeholder="e.g. MyBusiness"
              className="w-full p-2.5 rounded-lg border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
            />
          </div>

          {/* Recipient */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Recipient Number
            </label>
            <input
              type="text"
              name="recipient"
              value={formData.recipient}
              onChange={handleChange}
              required
              placeholder="e.g. 0244123456 "
              className="w-full p-2.5 rounded-lg border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
            />
          </div>

          {/* Reference ID */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Reference ID
            </label>
            <input
              type="text"
              name="ref"
              value={formData.ref}
              onChange={handleChange}
              required
              placeholder="Unique message ID (e.g. uniqueid-1)"
              className="w-full p-2.5 rounded-lg border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
            />
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Enter your message (max 160 characters per SMS)"
              className="w-full p-2.5 h-32 rounded-lg border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 outline-none transition-all resize-none"
            />
          </div>
        </div>

        {/* Submit Button (no handler yet) */}
        <button
          type="button"
          className="w-full mt-8 py-2.5 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-lg shadow-md transition-all duration-200"
        >
          Send SMS
        </button>
      </form>
    </div>
  );
}
