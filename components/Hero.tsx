"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 md:px-10 text-center">
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        SmartCare.ai
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Your health, beautifully connected.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <a
          href="#get-the-app"
          className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold inline-block hover:bg-blue-600 transition-colors"
        >
          Get the App
        </a>
      </motion.div>
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="HealthMate App"
          width={1200}
          height={600}
          className="rounded-lg shadow-lg mx-auto"
        />
      </motion.div>
    </section>
  )
}

