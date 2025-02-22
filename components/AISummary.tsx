import Link from "next/link"
import { CheckCircle, AlertTriangle } from "lucide-react"

export default function AISummary() {
  const fakeSummary =
    "Based on the current vitals and recent trends, the patient's overall health status appears stable. Blood pressure and heart rate are within normal ranges. Oxygen saturation is excellent at 98%. Body temperature is normal, and respiratory rate is within the healthy range."

  const fakeTrends = [
    { trend: "Blood pressure has remained stable", status: "good" },
    { trend: "Slight increase in cholesterol levels", status: "warning" },
    { trend: "Consistent exercise routine maintained", status: "good" },
    { trend: "Minor fluctuations in blood sugar", status: "warning" },
  ]

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4">
        <h2 className="text-xl font-semibold">AI-Generated Health Summary</h2>
      </div>
      <div className="p-6">
        <p className="text-gray-700 mb-4">{fakeSummary}</p>
        <h3 className="font-semibold mb-2">Recent Trends:</h3>
        <ul className="space-y-2">
          {fakeTrends.map((item, index) => (
            <li key={index} className="flex items-center">
              {item.status === "good" ? (
                <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
              ) : (
                <AlertTriangle className="text-yellow-500 mr-2 h-5 w-5" />
              )}
              <span className="text-sm">{item.trend}</span>
            </li>
          ))}
        </ul>
        <Link
          href="/ai-explanation"
          className="text-blue-600 hover:text-blue-800 mt-4 inline-block text-sm font-medium"
        >
          See detailed AI explanation
        </Link>
      </div>
    </div>
  )
}

