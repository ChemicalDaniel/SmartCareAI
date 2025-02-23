import Link from "next/link"
import { HeartPulse } from "lucide-react"

export default function NavBar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center space-x-2">
              <HeartPulse className="h-6 w-6 text-red-500" />
              <Link href="/" className="text-xl font-semibold text-gray-800">SmartCare.<span className='text-red-500'>ai</span></Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link href="/dashboard" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Dashboard
              </Link>
              <Link
                href="/profile"
                className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}