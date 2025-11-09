import React from 'react'
import { NavLink } from 'react-router';
import { MdClose } from "react-icons/md";

export default function Sidebar({ toggleSidebar }) {
  return (
    <div
      className="
         fixed top-0 left-0
         text-white bg-slate-900
          w-64 px-6 h-screen flex flex-col gap-4 py-12
          z-50 overflow-y-auto
      "
    >
      <div className="md:hidden flex justify-end">
        <button onClick={toggleSidebar} className="text-2xl text-gray-500">
          <MdClose />
        </button>
      </div>

      <div className="text-2xl font-bold px-6 text-yellow-300 py-4">TLPay</div>

      <div className="border-b border-gray-600 py-4"></div>

      <div className="flex flex-col cursor-pointer">
        <NavLink to="/" end>
          {({ isActive }) => (
            <div
              className={`flex gap-2 items-center px-4 py-2 ${
                isActive ? "bg-blue-100 text-blue-700 rounded" : "text-white"
              }`}
            >
              <p>Validate Name</p>
            </div>
          )}
        </NavLink>
      </div>

      <div className="flex flex-col text-gray-600 cursor-pointer">
        <NavLink to="initiate">
          {({ isActive }) => (
            <div
              className={`flex gap-2 items-center px-4 py-2 ${
                isActive ? "bg-blue-100 text-blue-700 rounded" : "text-white"
              }`}
            >
              <p>Initiate Transfer</p>
            </div>
          )}
        </NavLink>
      </div>

      <div className="flex flex-col text-gray-600 cursor-pointer">
        <NavLink to="transfer">
          {({ isActive }) => (
            <div
              className={`flex gap-2 items-center px-4 py-2 ${
                isActive ? "bg-blue-100 text-blue-700 rounded" : "text-white"
              }`}
            >
              <p>Transfer Status</p>
            </div>
          )}
        </NavLink>
      </div>

      <div className="flex flex-col text-gray-600 cursor-pointer">
        <NavLink to="sms">
          {({ isActive }) => (
            <div
              className={`flex gap-2 items-center px-4 py-2 ${
                isActive ? "bg-blue-100 text-blue-700 rounded" : "text-white"
              }`}
            >
              <p>Send SMS</p>
            </div>
          )}
        </NavLink>
      </div>
    </div>
  );
}
