import { useState } from 'react';
import Link from 'next/link';
import { AlertCircle, CheckCircle } from 'lucide-react';

function UrgentFollowUpModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-md overflow-hidden w-11/12 md:w-1/2">
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-4 flex items-center">
          <AlertCircle className="h-6 w-6 mr-2" />
          <h2 className="text-xl font-semibold">Urgent Follow-Up Recommended</h2>
        </div>
        <div className="p-6">
          <p className="text-sm text-gray-700 mb-4">
            A vital sign is significantly out of the normal range, which may indicate a serious health concern. Immediate
            medical attention is recommended.
          </p>
          <Link href="/urgent-followup" className="text-red-600 hover:text-red-800 font-medium text-sm">
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
}

function GoodResultsModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-md overflow-hidden w-11/12 md:w-1/2">
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 flex items-center">
          <CheckCircle className="h-6 w-6 mr-2" />
          <h2 className="text-xl font-semibold">All Results Normal</h2>
        </div>
        <div className="p-6">
          <p className="text-sm text-gray-700 mb-4">
            Great news! All your vital signs and lab results are within normal ranges. Keep up your current health regimen
            and remember to schedule regular checkups.
          </p>
          <Link href="/dashboard" className="text-green-600 hover:text-green-800 font-medium text-sm">
            Return to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function UploadSummary() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [apiResult, setApiResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [showUrgentModal, setShowUrgentModal] = useState(false);
  const [showGoodModal, setShowGoodModal] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedFile) return;
    setLoading(true);
    setApiResult(null);

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('/api/generate-from-pdf', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setApiResult(data);

      // Show appropriate modal based on API result (assuming data[0] is used to indicate result status)
      if (data[0] === 1) {
        setShowUrgentModal(true);
      } else if (data[0] === 0) {
        setShowGoodModal(true);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      setApiResult('An error occurred while processing your file.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative group">
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-black text-white text-xs rounded py-1 px-2">
          Upload your medical summaries or reports here for AI analysis and integration into your health profile.
        </div>
      </div>
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg shadow-md overflow-hidden">
        <div className="text-white p-4">
          <h2 className="text-xl font-semibold">Upload Summary</h2>
        </div>
        <form onSubmit={handleSubmit} className="px-4 pb-4">
          <label className="block">
            <span className="sr-only">Choose file</span>
            <input
              type="file"
              onChange={handleFileChange}
              className="block w-full text-sm text-white
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-purple-50 file:text-purple-700
                hover:file:bg-purple-100"
            />
          </label>
          <button
            type="submit"
            disabled={!selectedFile || loading}
            className="mt-4 bg-white text-purple-700 px-4 py-2 rounded-full font-semibold"
          >
            {loading ? 'Uploading...' : 'Upload'}
          </button>
        </form>
      </div>

      {/* Conditionally render modals based on API results */}
      {showUrgentModal && <UrgentFollowUpModal onClose={() => setShowUrgentModal(false)} />}
      {showGoodModal && <GoodResultsModal onClose={() => setShowGoodModal(false)} />}
    </div>
  );
}
