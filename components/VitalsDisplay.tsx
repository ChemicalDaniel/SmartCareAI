import React from "react";

// Define the type for the vital signs entry.
export type VitalSigns = {
  date: Date; // raw date; you can format it when displaying
  bodyHeight: number;
  painSeverity: number;
  bodyWeight: number;
  bmi: number;
  heartRate: number;
  respiratoryRate: number;
};

interface VitalsDisplayProps {
  vital: VitalSigns | null;
}

export default function VitalsDisplay({ vital }: VitalsDisplayProps) {
  if (!vital) {
    return <div>No vital signs available</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4">
        <h2 className="text-xl font-semibold">Recent Vitals</h2>
      </div>
      <div className="p-6">
        <ul className="space-y-2">
            <li>
            <strong>Body Height:</strong>{" "}
            {`${Math.floor(vital.bodyHeight / 30.48)}' ${Math.round((vital.bodyHeight / 2.54) % 12)}"`}
            </li>
            <li>
            <strong>Body Weight:</strong>{" "}
            {`${Math.round(vital.bodyWeight * 2.20462)} lbs`}
            </li>
          <li>
            <strong>BMI:</strong> {vital.bmi}
          </li>
          <li>
            <strong>Heart Rate:</strong> {vital.heartRate} bpm
          </li>
          <li>
            <strong>Respiratory Rate:</strong> {vital.respiratoryRate} breaths/min
          </li>
        </ul>
      </div>
    </div>
  );
}
