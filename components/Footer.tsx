"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12 px-6 md:px-10 text-sm">
        <motion.div
          className="border-t border-gray-300 pt-8 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>&copy; {new Date().getFullYear()} NEO Inc. All rights reserved.</p>
          <p className="mt-2">
            <Link href="#" className="hover:text-gray-900">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="#" className="hover:text-gray-900">
              Terms of Use
            </Link>{" "}
            |{" "}
            <Link href="/hipaa" className="hover:text-gray-900">
              Legal
            </Link>{" "}
            |{" "}
            <Link href="#" className="hover:text-gray-900">
              Site Map
            </Link>
          </p>
        </motion.div>
    </footer>
  )
}

