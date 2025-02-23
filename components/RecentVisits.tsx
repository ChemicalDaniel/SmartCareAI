"use client"

import React from 'react'
import Link from 'next/link'

export default function RecentVisits() {
  const [showModal, setShowModal] = React.useState(false)

  const visits = [
    { id: 1, date: "2023-05-15", doctor: "Dr. Smith", reason: "Annual checkup" },
    { id: 2, date: "2023-04-02", doctor: "Dr. Johnson", reason: "Flu symptoms" },
    { id: 3, date: "2023-03-10", doctor: "Dr. Williams", reason: "Follow-up" },
  ]

  return (
  <div>
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden ">
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold">Recent Visits</h2>
      <p 
      onClick={() => setShowModal(true)} 
      className="text-xs hover:text-blue-100 cursor-pointer"
      >
      See More
      </p>
    </div>
    <div className="p-6">
      <ul className="space-y-4">
      {visits.slice(0, 3).map((visit) => {
        const hashedId = visit.id.toString(16)
        return (
          <li key={visit.id} className="border-b last:border-b-0 pb-2 last:pb-0 hover:bg-gray-100 cursor-pointer transition-colors duration-200 rounded-sm">
            <Link href={`/labreport#${hashedId}`}>
              <>
                <p className="font-semibold text-gray-800">{visit.date}</p>
                <p className="text-sm text-gray-600">{visit.doctor}</p>
                <p className="text-sm text-gray-500">{visit.reason}</p>
              </>
            </Link>
          </li>
        )
      })}
      </ul>
    </div>
    </div>

    {showModal && (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Backdrop */}
      <div 
      className="absolute inset-0 bg-black opacity-50" 
      onClick={() => setShowModal(false)}
      ></div>
      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 p-6 h-96">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">All Visits</h2>
        <button 
        onClick={() => setShowModal(false)} 
        className="text-xs text-gray-600 hover:text-gray-800"
        >
        Close
        </button>
      </div>
      {/* Scrollable list container */}
      <div className="overflow-y-auto h-[calc(100%-3rem)]">
        <ul className="space-y-4">
        {visits.map((visit, index) => (
          <li key={index} className="border-b last:border-b-0 pb-2 last:pb-0 hover:bg-gray-100 cursor-pointer transition-colors duration-200 rounded-sm">
            <p className="font-semibold text-gray-800">{visit.date}</p>
            <p className="text-sm text-gray-600">{visit.doctor}</p>
            <p className="text-sm text-gray-500">{visit.reason}</p>
          </li>
        ))}
        </ul>
      </div>
      </div>
    </div>
    )}
  </div>
  )
}

