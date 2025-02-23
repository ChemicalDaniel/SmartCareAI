"use client";

import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { VitalSigns } from "@/lib/extractVitalSigns";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
type TrendsSliderProps = {
  vitals: VitalSigns[];
};

export default function TrendsSlider({ vitals }: TrendsSliderProps) {
  const [currentTrendIndex, setCurrentTrendIndex] = useState(0);

  // Sort the vital signs in ascending order (oldest to newest)
  const sortedVitals = [...vitals].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  // Create labels from the date field, formatted as MM/DD/YY.
  const labels = sortedVitals.map((v) => {
    const d = new Date(v.date);
    return d.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "2-digit",
    });
  });

  // Define the available trends (human readable)
  const trendOptions = [
    { label: "Heart Rate (bpm)", key: "heartRate" as keyof VitalSigns, borderColor: "rgb(153, 102, 255)" },
    { label: "Height (cm)", key: "bodyHeight" as keyof VitalSigns, borderColor: "rgb(75, 192, 192)" },
    { label: "Pain Severity", key: "painSeverity" as keyof VitalSigns, borderColor: "rgb(255, 99, 132)" },
    { label: "Weight (kg)", key: "bodyWeight" as keyof VitalSigns, borderColor: "rgb(54, 162, 235)" },
    { label: "BMI", key: "bmi" as keyof VitalSigns, borderColor: "rgb(255, 205, 86)" },
    { label: "Respiratory Rate (breaths/min)", key: "respiratoryRate" as keyof VitalSigns, borderColor: "rgb(201, 203, 207)" },
  ];

  const selectedTrend = trendOptions[currentTrendIndex];

  const data = {
    labels,
    datasets: [
      {
        label: selectedTrend.label,
        data: sortedVitals.map((v) => v[selectedTrend.key]),
        borderColor: selectedTrend.borderColor,
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: selectedTrend.label,
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-4">
        <select
          value={currentTrendIndex}
          onChange={(e) => setCurrentTrendIndex(Number(e.target.value))}
          className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          {trendOptions.map((trend, index) => (
            <option key={trend.label} value={index}>
              {trend.label}
            </option>
          ))}
        </select>
      </div>
      <Line options={options} data={data} />
    </div>
  );
}
