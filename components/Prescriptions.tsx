"use client"

import React from 'react'

export default function Prescriptions() {
  const [showModal, setShowModal] = React.useState(false)

  const prescriptions = [
    { name: "Lisinopril", dosage: "10mg", frequency: "Once daily" },
    { name: "Metformin", dosage: "500mg", frequency: "Twice daily" },
    { name: "Atorvastatin", dosage: "20mg", frequency: "Once daily" },
    { name: "Amlodipine", dosage: "5mg", frequency: "Once daily" },
    { name: "Omeprazole", dosage: "20mg", frequency: "Once daily" },
    { name: "Amoxicillin", dosage: "500mg", frequency: "3 times daily" },
    { name: "Simvastatin", dosage: "40mg", frequency: "Once daily" },
    { name: "Ibuprofen", dosage: "200mg", frequency: "Every 4-6 hours as needed" },
  ]

  return (
    <div>
      {/* Main Prescription Card */}
      <div className="relative bg-white rounded-lg shadow-md overflow-hidden ">
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Current Prescriptions</h2>
        <p 
        onClick={() => setShowModal(true)} 
        className="text-xs hover:text-purple-100 cursor-pointer"
        >
        See More
        </p>
      </div>
      <div className="p-6">
        <ul className="space-y-4">
        {prescriptions.slice(0, 3).map((prescription, index) => (
          <li key={index} className="border-b last:border-b-0 pb-2 last:pb-0">
          <p className="font-semibold text-gray-800">{prescription.name}</p>
          <p className="text-sm text-gray-600">{prescription.dosage}</p>
          <p className="text-sm text-gray-500">{prescription.frequency}</p>
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
          <h2 className="text-xl font-semibold">All Prescriptions</h2>
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
          {prescriptions.map((prescription, index) => (
            <li key={index} className="border-b last:border-b-0 pb-2 last:pb-0">
            <p className="font-semibold text-gray-800">{prescription.name}</p>
            <p className="text-sm text-gray-600">{prescription.dosage}</p>
            <p className="text-sm text-gray-500">{prescription.frequency}</p>
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
