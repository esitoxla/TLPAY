import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../components/Sidebar'
import { useState } from 'react';
import { MdMenu } from 'react-icons/md';

export default function Dashboard() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    
  return (
    <div className="flex h-full w-full">
      {isSidebarOpen && (
        <div className="w-full md:w-2/9">
          <Sidebar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        </div>
      )}

      <div className="flex flex-col w-full min-h-screen bg-gray-100">
        <div onClick={setIsSidebarOpen} className="md:hidden cursor-pointer p-6 ">
          <MdMenu className="text-2xl" />
        </div>

        <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
