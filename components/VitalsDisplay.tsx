const mockVitals = [
  { name: "Blood Pressure", value: "120/80 mmHg" },
  { name: "Heart Rate", value: "72 bpm" },
  { name: "Oxygen Saturation", value: "98%" },
  { name: "Temperature", value: "98.6°F" },
  { name: "Respiratory Rate", value: "16 breaths/min" },
]

export default function VitalsDisplay() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4">
        <h2 className="text-xl font-semibold">Current Vitals</h2>
      </div>
      <div className="p-6">
        <ul className="space-y-4">
          {mockVitals.map((vital, index) => (
            <li key={index} className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">{vital.name}</span>
              <span className="font-medium text-gray-800">{vital.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

