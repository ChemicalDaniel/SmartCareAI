"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="../assets/patient.jpg"
          alt="Background"
          fill
          style={{
            objectFit: "cover",
            objectPosition: `center ${50 + scrollY * 0.1}%`,
          }}
          priority
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black bg-opacity-50">
        <div className="container space-y-10 xl:space-y-16 text-center">
          <div className="space-y-4">
            <motion.h1 
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}>
              SmartCare.ai
            </motion.h1>
            <motion.p 
              className="mx-auto max-w-[700px] text-xl md:text-2xl text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
            Your health, beautifully connected.
            </motion.p>
          </div>
          <motion.div 
            className="space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}>
            <Link
              href="/dashboard"
              className="inline-flex h-11 items-center justify-center rounded-md bg-white px-8 py-2 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
    // <section className="pt-32 pb-20 px-6 md:px-10 text-center">
    //   <motion.h1
    //     className="text-5xl md:text-7xl font-bold mb-6"
    //     initial={{ opacity: 0, y: 20 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.5 }}
    //   >
    //     SmartCare.ai
    //   </motion.h1>
    //   <motion.p
    //     className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
    //     initial={{ opacity: 0, y: 20 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.5, delay: 0.2 }}
    //   >
    //     Your health, beautifully connected.
    //   </motion.p>
    //   <motion.div
    //     initial={{ opacity: 0, y: 20 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.5, delay: 0.4 }}
    //   >
    //     <a
    //       href="#get-the-app"
    //       className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold inline-block hover:bg-blue-600 transition-colors"
    //     >
    //       Get the App
    //     </a>
    //   </motion.div>
    //   <motion.div
    //     className="mt-16"
    //     initial={{ opacity: 0, y: 20 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.5, delay: 0.6 }}
    //   >
    //     <Image
    //       src="/placeholder.svg?height=600&width=1200"
    //       alt="HealthMate App"
    //       width={1200}
    //       height={600}
    //       className="rounded-lg shadow-lg mx-auto"
    //     />
    //   </motion.div>
    // </section>
  )
}

