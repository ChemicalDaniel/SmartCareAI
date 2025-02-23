"use client"

import { motion } from "framer-motion"
import { ProfileInfo } from "@/components/profile-info"
import { EmergencyContact } from "@/components/emergency-contact"
import { Card } from "./ui/card"
import MedHistory from "../components/profile-med-history"

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

export default function ProfilePage() {
  return (
    <div className="max-w-7xl container mx-auto px-4 py-8">
      <CardTransition delay={0.1}>
        <h1 className="text-3xl font-bold mb-8">Your Health Profile</h1>
      </CardTransition>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CardTransition delay={0.2}>
          <ProfileInfo />
        </CardTransition>
        <CardTransition delay={0.2}>
          <EmergencyContact />
        </CardTransition>
        <div className="col-span-2">
          <CardTransition delay={0.3}>
            <MedHistory />
          </CardTransition>
        </div>
      </div>
      
    </div>
  )
}