import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import Hipaa from "../../components/hipaa"

export default function Home() {
  return (
    <div className="h-dvh bg-gray-50">
      <NavBar />
      <main className="pt-8">
        <Hipaa />
      </main>
      <Footer />
    </div>
  )
}

