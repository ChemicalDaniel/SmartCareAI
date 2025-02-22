import Link from "next/link"
import { AlertCircle } from "lucide-react"

export default function UrgentFollowUp() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-4 flex items-center">
        <AlertCircle className="h-6 w-6 mr-2" />
        <h2 className="text-xl font-semibold">Urgent Follow-Up Required</h2>
      </div>
      <div className="p-6">
        <p className="text-sm text-gray-700 mb-4">
          A vital sign is significantly out of the normal range, which may indicate a serious health concern. Immediate
          medical attention is recommended.
        </p>
        <Link href="/urgent-followup" className="text-red-600 hover:text-red-800 font-medium text-sm">
          Learn more and schedule follow-up
        </Link>
      </div>
    </div>
  )
}

