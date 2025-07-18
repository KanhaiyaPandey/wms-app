// src/components/UploadForm.jsx
import React from "react";

const UploadForm = ({ handleFileUpload }) => {
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md mt-8">
      <h2 className="text-xl font-semibold mb-4 text-center">📤 Upload CSV File</h2>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4
                   file:rounded-full file:border-0 file:text-sm file:font-semibold
                   file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
    </div>
  );
};

export default UploadForm;
