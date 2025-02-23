"use client"

import { motion } from "framer-motion"

export default function AboutUs() {
  return (
    <section id="get-the-app" className="py-20 px-6 md:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What does SmartCare.<span className="text-red-500">ai</span> do?
        </motion.h2>
        <motion.div 
          className="flex items-center mb-8" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.p className="text-md text-gray-600 flex-1 text-left">
            Patients can see trends in their vitals across all their visits and monitor their health without having to constantly refer to documents. With clear, visual graphs, they can see each vital such as blood pressure, heart rate, blood sugar on its own to see what factors are used when these are measured. Patients can look at the results and <strong>easily notice if trends have deviated from the normal range and catch on to any early warning signs.</strong>
          </motion.p>
          <img 
            src="/assets/Chart.png" 
            alt="Trends visualization" 
            className="w-3/5 ml-6" 
          />
        </motion.div>

        <hr className="my-8 border-gray-200" />
        
        <motion.div
            className="flex items-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <img
                src="/assets/HealthSummary.png"
                alt="Health Summary"
                className="w-2/5 mr-6"
            />
            <p className="text-md text-gray-600 flex-1 text-right">
                Our AI-generated health summaries <strong>provide a complete overview of topics discussed during one's visit and explain any unfamiliar medical terms.</strong> This can also interpret data from the graphs to see if there are any new trends and even provide signal warnings and what it means. Patients can receive recommendations on what to do next or what is considered normal. For patients who are at higher risks for Diabetes Type 2, this can also provide information on preventative care and detect any risk factors. All major vitals can be obtained and organized after each visit to provide an update on one's health.
            </p>
        </motion.div>

        <hr className="my-8 border-gray-200" />

        <motion.div
            className="flex items-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <p className="text-md text-gray-600 flex-1 text-left">
                SmartCare.<span className='text-red-500'>ai</span> includes organized tabs which includes a history of visits, current prescriptions, and future appointments. This can be used for any type of medical office such as PCP, eye doctors, dentists, etc. <strong>This makes it easier for patients to stay organized with their medical records and be able to communicate better with medical professionals about their history.</strong> In addition, patients can see what exact medication they are currently taking and doses. They have access to book new appointments and have an easy to access reminder.
            </p>
            <img
                src="/assets/History.png"
                alt="History"
                className="w-3/5 ml-6"
            />
        </motion.div>

        <hr className="my-8 border-gray-200" />

        <motion.div
            className="flex items-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <img
                src="/assets/UrgentFollowUp.png"
                alt="Health Summary"
                className="w-3/5 mr-6"
            />
            <p className="text-md text-gray-600 flex-1 text-right">
                Our model detects anomalies within trends and warns patients when it <strong>detects severe and harmful changes in their vitals.</strong>
            </p>
        </motion.div>
      </div>
    </section>
  )
}