import NavBar from "../../components/NavBar"
import Profile from "../../components/Profile"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="pt-8">
        <Profile />
      </main>
    </div>
  )
}

