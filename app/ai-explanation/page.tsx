import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function AIExplanation() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
      <div className="mb-6 flex items-center space-x-4 justify-between">
        <h1 className="text-3xl font-bold">Detailed AI Explanation</h1>
        <Link href="/dashboard">
          <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
        ← Back to Dashboard
          </button>
        </Link>
      </div>
      <p className="mb-4">
        The AI analysis is based on various factors including your vital signs, recent health trends, and medical
        history. Here's a detailed breakdown of the observations and recommendations:
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Blood Pressure</h2>
      <p className="mb-4">
        Your blood pressure has remained stable over the past few months, which is a positive sign. The AI considers
        this a good trend because consistent blood pressure within the normal range reduces the risk of cardiovascular
        issues.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Cholesterol Levels</h2>
      <p className="mb-4">
        There has been a slight increase in your cholesterol levels. While this increase is minor, the AI flags this as
        a warning to monitor closely. This recommendation is based on the potential long-term effects of elevated
        cholesterol on cardiovascular health. Given the stable BMI at 27.64 kg/m<sup>2</sup> (overweight category), there could be an 
        elevated risk of dyslipidemia.
      </p>
      <p className="mb-4">
      A lipid panel test should be conducted to assess cholesterol levels. Dietary modifications, such as reducing saturated
       fats and increasing fiber intake, may benefit cholesterol management.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Exercise Routine</h2>
      <p className="mb-4">
        Your BMI has remained constant at 27.64 kg/m<sup>2</sup> over the years, indicating minimal weight fluctuations. However, the relatively 
        high BMI places the patient in the overweight category, which could affect cardiovascular health. The absence of weight change 
        suggests a lack of significant physical activity. Additionally, heart rate variability may also reflect inconsistent exercise routines.
      </p>
      <p className="mb-4">
        You should consider regular physical activity, including aerobic exercises (e.g., walking, cycling) and strength training. This 
        routine would help improve cardiovascular health, reduce BMI, and potentially lower resting heart rate.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Blood Sugar</h2>
      <p className="mb-4">
        Minor fluctuations in blood sugar levels have been observed. While these fluctuations are within an acceptable
        range, the AI suggests monitoring this trend. Stable blood sugar levels are important for preventing diabetes
        and other metabolic disorders.
      </p>
      <p className="mb-4">
        The patient should undergo fasting blood glucose and HbA1c tests. A balanced diet with limited refined sugars and increased fiber intake, along with regular exercise, would aid in blood sugar management.
      </p>

      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-3">Summary</h2>
        <p className="mb-2">
          <strong>Heart rate:</strong> Increased in recent years, which warrants further cardiovascular assessment.
        </p>
        <p className="mb-2">
          <strong>BMI:</strong> Constant at 27.64 kg/m<sup>2</sup>, indicating overweight status and the need for weight management strategies.
        </p>
        <p className="mb-2">
          <strong>Respiratory rate:</strong> Stable around 13-15/min, which is within normal limits.
        </p>
        <p className="mb-2">
          <strong>Pain severity:</strong> Fluctuations suggest potential musculoskeletal or chronic pain issues that may require evaluation.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-semibold mt-6 mb-3">Conclusion</h2>
        <p>
          The patient appears to be in a stable but cautious health state. While respiratory rate remains normal, the upward trend in heart rate and consistently overweight BMI suggest potential cardiovascular and metabolic risks. Implementing lifestyle modifications, such as regular exercise and dietary improvements, is crucial. Regular medical screenings for cholesterol and blood sugar levels are recommended to preemptively address potential health concerns. With these interventions, the patient can work towards improving their overall health and reducing the risk of chronic diseases over time.
        </p>
      </div>

      <hr className="my-8 border-gray-200" />

      <p className="mt-6 text-gray-600">
        Remember, this AI-generated explanation is based on available data and general medical knowledge. Always consult
        with your healthcare provider for personalized medical advice.
      </p>
      </main>
      <Footer />
    </div>
    
  )
}

