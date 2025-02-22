"use client"

import { useEffect, useRef } from "react"
import Chart from "chart.js/auto"

const mockData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Blood Pressure (Systolic)",
      data: [120, 122, 118, 125, 123, 121],
      borderColor: "rgb(255, 99, 132)",
      tension: 0.1,
    },
    {
      label: "Heart Rate",
      data: [72, 74, 70, 73, 75, 71],
      borderColor: "rgb(54, 162, 235)",
      tension: 0.1,
    },
  ],
}

export default function TrendsChart() {
  const chartRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d")
      if (ctx) {
        new Chart(ctx, {
          type: "line",
          data: mockData,
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: "Health Trends",
              },
            },
          },
        })
      }
    }
  }, [])

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Health Trends</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  )
}

