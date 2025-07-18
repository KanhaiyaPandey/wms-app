import React, { useState } from "react";
import UploadForm from "./components/UploadForm";
import ValidationTable from "./components/ValidationTable";
import SummaryStats from "./components/SummaryStats";
import DownloadButton from "./components/DownloadButton";

function App() {
  const [csvData, setCsvData] = useState([]);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const text = await file.text();
    const rows = text
      .trim()
      .split("\n")
      .map((row) => row.split(",").map((cell) => cell.trim()));

    setCsvData(rows);
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">📦 WMS - CSV Validator</h1>
      <UploadForm handleFileUpload={handleFileUpload} />
      <ValidationTable data={csvData} />
      <SummaryStats data={csvData} />
      <DownloadButton data={csvData} />
      {/* <CsvUploader/> */}
    </main>
  );
}

export default App;
