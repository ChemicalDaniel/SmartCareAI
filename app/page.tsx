import NavBar from "../components/NavBar"
import Dashboard from "../components/Dashboard"
import Hero from "../components/Hero"
import Features from "../components/Features"
import CTA from "../components/CTA"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="pt-8">
        <Hero />
        <Features />
        <CTA />
      </main>
    </div>
  )
}

