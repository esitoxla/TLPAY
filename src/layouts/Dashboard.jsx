import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../components/Sidebar'

export default function Dashboard() {
  return (
    <div className="flex h-full w-full">
      <div className="w-full md:w-2/9">
        <Sidebar />
      </div>

      <div className="flex flex-col w-full">
        <Outlet />
      </div>
    </div>
  );
}
