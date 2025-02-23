"use client"

import { motion } from "framer-motion"

export default function CTA() {
  return (
    <section id="get-the-app" className="pt-20 px-6 md:px-10 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Try SmartCare.<span className="text-red-500">ai</span> today
        </motion.h2>
        <motion.p
          className="text-xl mb-8 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Experience a new approach to managing your health. Give SmartCare.ai a try today!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="/dashboard"
            className="bg-red-500 text-white px-8 py-3 rounded-md text-lg font-semibold inline-block hover:bg-red-600 transition-colors"
          >
            Try Now
          </a>
        </motion.div>
      </div>
    </section>
  )
}

