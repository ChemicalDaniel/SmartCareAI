export default function RecentVisits() {
  const visits = [
    { date: "2023-05-15", doctor: "Dr. Smith", reason: "Annual checkup" },
    { date: "2023-04-02", doctor: "Dr. Johnson", reason: "Flu symptoms" },
    { date: "2023-03-10", doctor: "Dr. Williams", reason: "Follow-up" },
  ]

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4">
        <h2 className="text-xl font-semibold">Recent Visits</h2>
      </div>
      <div className="p-6">
        <ul className="space-y-4">
          {visits.map((visit, index) => (
            <li key={index} className="border-b last:border-b-0 pb-2 last:pb-0">
              <p className="font-semibold text-gray-800">{visit.date}</p>
              <p className="text-sm text-gray-600">{visit.doctor}</p>
              <p className="text-sm text-gray-500">{visit.reason}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

