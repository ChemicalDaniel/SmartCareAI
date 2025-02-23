"use client";

import React from "react";
import { Prescription } from "@/lib/extractPerscription";

// Helper to convert a string to title case (each word capitalized)
function titleCase(str: string): string {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

/**
 * parsePrescription
 * Parses a prescription description and extracts:
 * - medication name (each word capitalized)
 * - dosage (containing mg or g)
 * Assumes the description is in a format like "lisinopril: 10mg" or similar.
 */
function parsePrescription(description: string): { name: string; dosage: string } {
  // First try splitting by colon.
  let parts = description.split(":");
  let namePart: string, dosagePart: string;
  if (parts.length >= 2) {
    namePart = parts[0];
    dosagePart = parts.slice(1).join(":");
  } else {
    // Otherwise try to extract dosage with a regex (matching numbers followed by mg or g)
    const match = description.match(/(\d+(?:\.\d+)?\s*(mg|g))/i);
    if (match) {
      dosagePart=match[0].toLowerCase().replace(/\s+/g, '');
      namePart = description.replace(match[0], "");
    } else {
      namePart = description;
      dosagePart = "";
    }
  }
  return {
    name: titleCase(namePart.trim()),
    dosage: dosagePart.trim(),
  };
}

interface PrescriptionsProps {
  prescriptions: Prescription[];
}

export default function Prescriptions({ prescriptions }: PrescriptionsProps) {
  const [showModal, setShowModal] = React.useState(false);

  // Only display prescriptions that are "in date" (stop === null)
  const currentPrescriptions = prescriptions.filter((p) => p.stop === null);

  // Sort by date descending (most recent first)
  const sortedPrescriptions = [...currentPrescriptions].sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );

  // Get the top 3 for the main card view.
  const topPrescriptions = sortedPrescriptions.slice(0, 3);

  return (
    <div>
      {/* Main Prescription Card */}
      <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
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
            {topPrescriptions.map((prescription, index) => {
              const { name, dosage } = parsePrescription(prescription.description);
              return (
                <li key={index} className="border-b last:border-b-0 pb-2 last:pb-0">
                  <p className="font-semibold text-gray-800">
                    {name}
                  </p>
                  {dosage && (
                    <p className="text-sm text-gray-600">{dosage}</p>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Modal for all prescriptions */}
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
              <h2 className="text-xl font-semibold">All Current Prescriptions</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-xs text-gray-600 hover:text-gray-800"
              >
                Close
              </button>
            </div>
            <div className="overflow-y-auto h-[calc(100%-3rem)]">
              <ul className="space-y-4">
                {sortedPrescriptions.map((prescription, index) => {
                  const { name, dosage } = parsePrescription(prescription.description);
                  return (
                    <li key={index} className="border-b last:border-b-0 pb-2 last:pb-0">
                      <p className="font-semibold text-gray-800">
                        {name}
                      </p>
                      {dosage && (
                        <p className="text-sm text-gray-600">{dosage}</p>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
