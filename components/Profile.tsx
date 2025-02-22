import { ProfileInfo } from "@/components/profile-info"
import { EmergencyContact } from "@/components/emergency-contact"

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Health Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProfileInfo />
        <EmergencyContact />
      </div>
    </div>
  )
}