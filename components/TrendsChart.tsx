"use client";

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { VitalSigns } from "@/lib/extractVitalSigns";

type TrendsChartProps = {
  vitals: VitalSigns[];
};

export default function TrendsChart({ vitals }: TrendsChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!vitals || vitals.length === 0) return;

    // Sort the vital signs data in ascending order (old to new)
    const sortedVitals = [...vitals].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    // Create human-readable labels from the date field (MM/DD/YY)
    const labels = sortedVitals.map((v) => {
      const d = new Date(v.date);
      return d.toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "2-digit",
      });
    });

    // Build datasets for each vital sign, using clear labels and desired colors.
    const data = {
      labels,
      datasets: [
        {
          label: "Height (cm)",
          data: sortedVitals.map((v) => v.bodyHeight),
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
        {
          label: "Pain Severity",
          data: sortedVitals.map((v) => v.painSeverity),
          borderColor: "rgb(255, 99, 132)",
          tension: 0.1,
        },
        {
          label: "Weight (kg)",
          data: sortedVitals.map((v) => v.bodyWeight),
          borderColor: "rgb(54, 162, 235)",
          tension: 0.1,
        },
        {
          label: "BMI",
          data: sortedVitals.map((v) => v.bmi),
          borderColor: "rgb(255, 205, 86)",
          tension: 0.1,
        },
        {
          label: "Heart Rate (bpm)",
          data: sortedVitals.map((v) => v.heartRate),
          borderColor: "rgb(153, 102, 255)",
          tension: 0.1,
        },
        {
          label: "Respiratory Rate (breaths/min)",
          data: sortedVitals.map((v) => v.respiratoryRate),
          borderColor: "rgb(201, 203, 207)",
          tension: 0.1,
        },
      ],
    };

    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        new Chart(ctx, {
          type: "line",
          data: data,
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: "Vital Signs Trends",
              },
            },
          },
        });
      }
    }
  }, [vitals]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Vital Signs Trends</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}
