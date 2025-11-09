import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendSms, resetSmsState } from "../store/features/smsSlice";
import { useEffect } from "react";

export default function sendSmsMessage() {
  const dispatch = useDispatch();
  const { loading, data, error, success } = useSelector((state) => state.sms);

  const [formData, setFormData] = useState({
    type: 1,
    senderid: "",
    recipient: "",
    message: "",
    ref: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // clear any previous state
    dispatch(resetSmsState());

    // transform to Moolre format
    const payload = {
      type: formData.type,
      senderid: formData.senderid,
      messages: [
        {
          recipient: formData.recipient,
          message: formData.message,
          ref: formData.ref,
        },
      ],
    };

    dispatch(sendSms(payload));
  };

  //Reset form after successful send
  useEffect(() => {
    if (success) {
      setFormData({
        type: 1,
        senderid: "",
        recipient: "",
        message: "",
        ref: "",
      });
    }
  }, [success]);

  return (
    <div className=" flex items-center justify-center m-2 md:m-0">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-yellow-400 text-2xl font-semibold mb-6 text-center">
          Send SMS
        </h2>

        {/* Sender ID */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Sender ID</label>
          <input
            type="text"
            name="senderid"
            value={formData.senderid}
            onChange={handleChange}
            required
            placeholder="e.g. MyBusiness"
            className="w-full p-2 rounded border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
          />
        </div>

        {/* Recipient */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Recipient</label>
          <input
            type="text"
            name="recipient"
            value={formData.recipient}
            onChange={handleChange}
            required
            placeholder="e.g. 0244980662"
            className="w-full p-2 rounded border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
          />
        </div>

        {/* Message */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Type your SMS message here"
            className="w-full p-2 rounded border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
          />
        </div>

        {/* Reference */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Reference ID</label>
          <input
            type="text"
            name="ref"
            value={formData.ref}
            onChange={handleChange}
            required
            placeholder="Unique reference ID"
            className="w-full p-2 rounded border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded transition duration-200"
        >
          {loading ? "Sending..." : "Send SMS"}
        </button>

        {/* Success Message */}
        {success && data && (
          <div className="bg-blue-100 text-blue-800 p-3 rounded mt-4">
            <p>SMS sent successfully!</p>
            <p>
              <strong>Message:</strong> {data.message}
            </p>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mt-4">
            <strong>Error:</strong> {error}
          </div>
        )}
      </form>
    </div>
  );
}
