"use client"

import { motion } from "framer-motion"
import TrendsSlider from "./TrendsSlider"
import VitalsDisplay from "./VitalsDisplay"
import AISummary from "./AISummary"
import RecentVisits from "./RecentVisits"
import Prescriptions from "./Prescriptions"
import UpcomingAppointments from "./UpcomingAppointments"
import UploadSummary from "./UploadSummary"
import UrgentFollowUp from "./UrgentFollowUp"

type CardTransitionProps = {
  children: React.ReactNode
  delay?: number
}

function CardTransition({ children, delay = 0 }: CardTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

export default function Dashboard() {
  const userName = "Jane" // This could be fetched from a user context or API
  const currentTime = new Date()
  const greeting =
    currentTime.getHours() < 12
      ? "Good Morning"
      : currentTime.getHours() < 18
      ? "Good Afternoon"
      : "Good Evening"

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        {greeting}, {userName}
      </h1>

      <div className="mb-8">
        <CardTransition delay={0.1}>
          <UrgentFollowUp />
        </CardTransition>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <CardTransition delay={0.2}>
            <TrendsSlider />
          </CardTransition>
        </div>
        <div className="flex flex-col justify-between h-full space-y-8">
          <CardTransition delay={0.3}>
            <UploadSummary />
          </CardTransition>
          <CardTransition delay={0.4}>
            <VitalsDisplay />
          </CardTransition>
        </div>
      </div>

      <div className="mb-8">
        <CardTransition delay={0.5}>
          <AISummary />
        </CardTransition>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <CardTransition delay={0.6}>
          <RecentVisits />
        </CardTransition>
        <CardTransition delay={0.7}>
          <Prescriptions />
        </CardTransition>
        <CardTransition delay={0.8}>
          <UpcomingAppointments />
        </CardTransition>
      </div>
    </div>
  )
}

