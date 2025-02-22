export default function UploadSummary() {
  return (
    <div className="relative group">
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-black text-white text-xs rounded py-1 px-2">
        Upload your medical summaries or reports here for AI analysis and integration into your health profile.
        </div>
      </div>
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg shadow-md overflow-hidden">
        <div className="text-white p-4">
          <h2 className="text-xl font-semibold">Upload Summary</h2>
        </div>
        <div className="px-4 pb-4">
          <label className="block">
            <span className="sr-only">Choose file</span>
            <input
              type="file"
              className="block w-full text-sm text-white
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-purple-50 file:text-purple-700
                hover:file:bg-purple-100"
            />
          </label>
        </div>
      </div>
    </div>
  //   <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg shadow-md overflow-hidden">
  //   <div className=" text-white p-4">
  //     <h2 className="text-xl font-semibold">Upload Summary</h2>
  //   </div>
  //   <div className="p-6">
  //     {/* <p className="text-sm text-gray-600 mb-4">
  //       Upload your medical summaries or reports here for AI analysis and integration into your health profile.
  //     </p> */}
  //     <label className="block">
  //       <span className="sr-only">Choose file</span>
  //       <input
  //         type="file"
  //         className="block w-full text-sm text-white-500
  //         file:mr-4 file:py-2 file:px-4
  //         file:rounded-full file:border-0
  //         file:text-sm file:font-semibold
  //         file:bg-purple-50 file:text-purple-700
  //         hover:file:bg-purple-100
  //       "
  //       />
  //     </label>
  //   </div>
  // </div>
  )
}
