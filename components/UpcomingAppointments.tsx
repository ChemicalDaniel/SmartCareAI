export default function UpcomingAppointments() {
  const appointments = [
    { date: "2023-06-10", time: "10:00 AM", doctor: "Dr. Brown", type: "Cardiology checkup" },
    { date: "2023-06-25", time: "2:30 PM", doctor: "Dr. Davis", type: "Dental cleaning" },
    { date: "2023-07-05", time: "11:15 AM", doctor: "Dr. Wilson", type: "Eye exam" },
  ]

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4">
        <h2 className="text-xl font-semibold">Upcoming Appointments</h2>
      </div>
      <div className="p-6">
        <ul className="space-y-4">
          {appointments.map((appointment, index) => (
            <li key={index} className="border-b last:border-b-0 pb-2 last:pb-0">
              <p className="font-semibold text-gray-800">
                {appointment.date} at {appointment.time}
              </p>
              <p className="text-sm text-gray-600">{appointment.doctor}</p>
              <p className="text-sm text-gray-500">{appointment.type}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

