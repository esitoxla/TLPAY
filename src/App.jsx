import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Toaster } from 'react-hot-toast'
import './App.css'
import Dashboard from './layouts/Dashboard'
import ValidateName from './components/ValidateName'
import InitiateTransfer from './components/InitiateTransfer'
import TransferStatus from './components/TransferStatus'
import sendSms from './components/sendSms'

function App() {
 const router = createBrowserRouter([
  {
    path: "/",
    Component: Dashboard,
    children: [
      {
        index: true,
        Component: ValidateName
      },
      {
        path: "initiate",
        Component: InitiateTransfer
      },
      {
        path: "transfer",
        Component: TransferStatus
      },
      {
        path: "sms",
        Component: sendSms
      }
    ]
  }
 ])

  return (
    <>
      <RouterProvider router={router} />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            background: "#fff",
            color: "#333",
            borderRadius: "8px",
          },
          success: {
            iconTheme: {
              primary: "#3b82f6", // Blue color for the check icon
              secondary: "#fff", // Background behind the icon
            },
          },
        }}
      />
    </>
  );
}

export default App
