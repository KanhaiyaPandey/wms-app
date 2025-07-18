// src/components/DownloadButton.jsx
import React from "react";

const DownloadButton = ({ data }) => {
  if (!data || data.length === 0) return null;

  const headers = data[0];
  const rows = data.slice(1);
  const seen = new Set();

  const filtered = rows.filter((row) => {
    const sku = row[0]?.trim();
    const msku = row[1]?.trim();
    const quantity = row[2]?.trim();

    const isValid = sku && msku && quantity && !isNaN(quantity);
    const isDuplicate = seen.has(sku);

    if (isValid && !isDuplicate) {
      seen.add(sku);
      return true;
    }
    return false;
  });

  const download = () => {
    const allRows = [headers, ...filtered];
    const csvContent = allRows.map((r) => r.join(",")).join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "cleaned_output.csv");
    link.click();
  };

  return (
    <div className="text-center mt-6">
      <button
        onClick={download}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition-all"
      >
        ⬇️ Download Clean CSV
      </button>
    </div>
  );
};

export default DownloadButton;
