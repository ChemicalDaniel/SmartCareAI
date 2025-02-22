export default function Prescriptions() {
  const prescriptions = [
    { name: "Lisinopril", dosage: "10mg", frequency: "Once daily" },
    { name: "Metformin", dosage: "500mg", frequency: "Twice daily" },
    { name: "Atorvastatin", dosage: "20mg", frequency: "Once daily" },
  ]

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4">
        <h2 className="text-xl font-semibold">Current Prescriptions</h2>
      </div>
      <div className="p-6">
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
  )
}

