import Link from "next/link"
import { AlertCircle } from "lucide-react"

export default function UrgentFollowUp() {
  return (
    <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg shadow-md overflow-hidden">
      <div className="text-white p-4 flex items-center">
        <AlertCircle className="h-6 w-6 mr-2" />
        <h2 className="text-xl font-semibold">Urgent Follow-Up Required</h2>
      </div>
      <div className="px-6 pb-6">
        <p className="text-sm text-white mb-4">
          A vital sign is significantly out of the normal range, which may indicate a serious health concern. Immediate
          medical attention is recommended.
        </p>
        <Link href="/urgent-followup" className="text-white hover:text-gray-200 font-medium text-sm">
          Learn more
        </Link>
      </div>
    </div>
  )
}

