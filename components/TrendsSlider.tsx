"use client"

import { useState } from "react"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const trendData = [
  {
    label: "Blood Pressure",
    data: [120, 122, 119, 123, 121, 124, 120],
    borderColor: "rgb(255, 99, 132)",
  },
  {
    label: "Heart Rate",
    data: [72, 74, 71, 73, 72, 75, 73],
    borderColor: "rgb(53, 162, 235)",
  },
  {
    label: "Blood Sugar",
    data: [95, 100, 92, 98, 103, 97, 99],
    borderColor: "rgb(75, 192, 192)",
  },
]

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]

export default function TrendsSlider() {
  const [currentTrendIndex, setCurrentTrendIndex] = useState(0)

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: trendData[currentTrendIndex].label,
      },
    },
  }

  const data = {
    labels,
    datasets: [trendData[currentTrendIndex]],
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-4">
        <select
          value={currentTrendIndex}
          onChange={(e) => setCurrentTrendIndex(Number(e.target.value))}
          className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          {trendData.map((trend, index) => (
            <option key={trend.label} value={index}>
              {trend.label}
            </option>
          ))}
        </select>
      </div>
      <Line options={options} data={data} />
    </div>
  )
}

