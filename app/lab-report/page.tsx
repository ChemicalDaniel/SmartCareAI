import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import Report from "../../components/lab-report"

export default function Home() {
  return (
    <div className="h-dvh bg-gray-50">
      <NavBar />
      <main className="pt-8">
        <Report />
      </main>
      <Footer />
    </div>
  )
}

