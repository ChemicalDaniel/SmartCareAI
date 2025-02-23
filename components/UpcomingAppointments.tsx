"use client"

import React from 'react'

export default function UpcomingAppointments() {
  const [showModal, setShowModal] = React.useState(false)

  const appointments = [
    { date: "06/10/23", time: "10:00 AM", doctor: "Dr. Brown", type: "Cardiology checkup" },
    { date: "06/25/23", time: "2:30 PM", doctor: "Dr. Davis", type: "Dental cleaning" },
    { date: "07/05/23", time: "11:15 AM", doctor: "Dr. Wilson", type: "Eye exam" },
    { date: "07/15/23", time: "09:00 AM", doctor: "Dr. Smith", type: "General checkup" },
    { date: "08/01/23", time: "01:45 PM", doctor: "Dr. Johnson", type: "Dermatology consultation" },
    { date: "08/20/23", time: "03:15 PM", doctor: "Dr. Lee", type: "Physiotherapy session" },
  ]

  return (
    <div>
      {/* Main Prescription Card */}
      <div className="relative bg-white rounded-lg shadow-md overflow-hidden ">
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Upcoming Appointments</h2>
        <p 
        onClick={() => setShowModal(true)} 
        className="text-xs hover:text-orange-100 cursor-pointer"
        >
        See More
        </p>
      </div>
      <div className="p-6">
        <ul className="space-y-4">
        {appointments.slice(0,3).map((appointment, index) => (
            <li key={index} className="border-b last:border-b-0 pb-2 last:pb-0">
              <p className="font-semibold text-gray-800">
                {appointment.date} at {appointment.time}
              </p>
              <p className="text-sm text-gray-600">{appointment.doctor}</p>
              <p className="text-sm text-gray-500">{appointment.type}</p>
            </li>
          ))}
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
          <h2 className="text-xl font-semibold">All Upcoming Appointments</h2>
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
          {appointments.map((appointment, index) => (
            <li key={index} className="border-b last:border-b-0 pb-2 last:pb-0">
              <p className="font-semibold text-gray-800">
                {appointment.date} at {appointment.time}
              </p>
              <p className="text-sm text-gray-600">{appointment.doctor}</p>
              <p className="text-sm text-gray-500">{appointment.type}</p>
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

