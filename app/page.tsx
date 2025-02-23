import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Features from "../components/Features"
import CTA from "../components/CTA"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

