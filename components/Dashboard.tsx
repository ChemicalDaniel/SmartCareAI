import TrendsSlider from "./TrendsSlider"
import VitalsDisplay from "./VitalsDisplay"
import AISummary from "./AISummary"
import RecentVisits from "./RecentVisits"
import Prescriptions from "./Prescriptions"
import UpcomingAppointments from "./UpcomingAppointments"
import UploadSummary from "./UploadSummary"
import UrgentFollowUp from "./UrgentFollowUp"

export default function Dashboard() {
  const userName = "David" // This could be fetched from a user context or API
  const currentTime = new Date()
  const greeting =
    currentTime.getHours() < 12 ? "Good Morning" : currentTime.getHours() < 18 ? "Good Afternoon" : "Good Evening"

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        {greeting}, {userName}
      </h1>
      <div className="mb-8">
        <UrgentFollowUp />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <TrendsSlider />
        </div>
        <div className="flex flex-col justify-between h-full">
          <UploadSummary />
          <VitalsDisplay />
        </div>
      </div>
      <div className="mb-8">
        <AISummary />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <RecentVisits />
        <Prescriptions />
        <UpcomingAppointments />
      </div>
    </div>
  )
}

