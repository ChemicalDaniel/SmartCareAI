import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { AlertCircle } from 'lucide-react'

export default function DiabetesCheckupExplanation() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Diabetes Checkup Recommendation</h1>
          <Link href="/dashboard">
            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
              ← Back to Dashboard
            </button>
          </Link>
        </div>

        {/* Urgent Follow-Up Notification */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-4 rounded mb-6 flex items-center">
          <AlertCircle className="h-6 w-6 mr-2" />
          <h2 className="text-xl font-semibold">Urgent Follow-Up Recommended</h2>
        </div>

        <p className="mb-4">
          The patient’s laboratory results indicate concerning findings with respect to diabetes risk. Specifically, the BMI is <strong>30.5 kg/m<sup>2</sup></strong> and the fasting blood glucose is <strong>200 mg/dL</strong>. Both of these values are significantly above normal ranges.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Key Findings</h2>
        <p className="mb-4">
          <strong>BMI: 30.5 kg/m<sup>2</sup></strong> — This places the patient in the obese category, which increases the risk of insulin resistance.
        </p>
        <p className="mb-4">
          <strong>Fasting Blood Glucose: 200 mg/dL</strong> — This level is markedly elevated (normal is typically below 100 mg/dL), indicating poor glucose control.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Recommendations</h2>
        <p className="mb-4">
          Based on these results, it is highly recommended that the patient undergoes a comprehensive diabetes checkup. This should include further evaluation by a healthcare provider and additional tests (such as HbA1c and an oral glucose tolerance test) to confirm a diabetes diagnosis.
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>Schedule an appointment with your primary care physician or an endocrinologist.</li>
          <li>Undergo additional testing for diabetes confirmation.</li>
          <li>Discuss lifestyle modifications, including diet, exercise, and weight management strategies.</li>
        </ul>

        <p className="mt-6 text-gray-600">
          This explanation is generated based on the available laboratory data and general medical guidelines. Please consult your healthcare provider for personalized advice and further evaluation.
        </p>
      </main>
      <Footer />
    </div>
  )
}
