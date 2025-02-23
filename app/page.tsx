import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Features from "../components/Features"
import AboutUs from "../components/AboutUs"
import AboutApp from "../components/AboutApp"
import CTA from "../components/CTA"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* <div className="fixed top-0 left-0 w-full z-10"> */}
        <NavBar />
      {/* </div> */}
      <main>
        <Hero />
        <Features />
        <AboutUs />
        <AboutApp />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

