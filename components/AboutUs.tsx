"use client"

import { motion } from "framer-motion"

export default function AboutUs() {
  return (
    <section id="get-the-app" className="py-20 px-6 md:px-10 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h2>
        <motion.p
          className="text-md mb-8 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          We at NEO present SmartCare.<span className='text-red-500'>ai</span>. We have noticed that many illnesses are often overlooked because people are uneducated or unaware of how slight changes in their health can affect their risk probability. After visiting medical professionals, patients obtain stacks of paperwork which includes medical jargon that is not easily understood. Because of this, they miss out on vital information that may heavily affect their health and be the reason whether they develop a chronic illness or not. For example, Diabetes Type 2 can occur in a pre-diabetic person who does not tend to any of their symptoms or does not realize that changes in diet, weight, physical activity can increase their risk of developing it. It is also hard to monitor lab results and other vitals without having to go through multiple medical records. 
        </motion.p>
        <motion.p
          className="text-md mb-8 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          SmartCare.<span className='text-red-500'>ai</span> will allow patients to take control of their own health and see trends from every medical visit from changes in average heart rate, blood pressure, O<sub>2</sub> stats, etc. They can upload any medical document containing results from recent visits, lab results, appointments, etc. From this, our Generative AI model generates a comprehensible health summary explaining medical notes along with warnings and recommendations that can be used to aid lifestyle choices. It saves you time, reduces the stress of managing complex medical data, and empowers you to take control of your well-being. With secure, smart analytics at its core, this tool is your partner in navigating health with confidence and clarity.
        </motion.p>
      </div>
    </section>
  )
}

