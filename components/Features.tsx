"use client"

import { motion } from "framer-motion"
import { Activity, Calendar, Users, Clipboard } from "lucide-react"

const features = [
  {
    icon: Activity,
    title: "Health Tracking",
    description: "Monitor your vital signs and daily activities with precision.",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Effortlessly manage your medical appointments and reminders.",
  },
  {
    icon: Users,
    title: "Connect with Experts",
    description: "Consult healthcare professionals securely from anywhere.",
  },
  {
    icon: Clipboard,
    title: "Medical Records",
    description: "Access and manage your complete medical history with ease.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 md:px-10">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        The future of your healthcare in your hands
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <feature.icon className="h-12 w-12 text-red-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

