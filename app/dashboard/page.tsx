import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import Dashboard from "../../components/Dashboard"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="pt-8">
        <Dashboard />
      </main>
      <Footer />
    </div>
  )
}