/* eslint-disable no-unused-vars */


const SummaryStats = ({ data }) => {
  if (!data || data.length === 0) return null;

  const rows = data.slice(1); // Exclude header
  let validCount = 0;
  let invalidCount = 0;
  let duplicateCount = 0;
  const seen = new Set();

  rows.forEach((row, index) => {
    const sku = row[0]?.trim();
    const msku = row[1]?.trim();
    const quantity = row[2]?.trim();

    const isValid = sku && msku && quantity && !isNaN(quantity);
    const isDuplicate = seen.has(sku);
    if (isValid && !isDuplicate) {
      validCount++;
      seen.add(sku);
    } else {
      if (!isValid) invalidCount++;
      if (isDuplicate) duplicateCount++;
    }
  });

  return (
    <div className="mt-8 flex flex-wrap justify-center gap-6">
      <div className="bg-green-100 text-green-700 px-6 py-4 rounded-xl shadow-md">
        ✅ Valid Rows: <strong>{validCount}</strong>
      </div>
      <div className="bg-yellow-100 text-yellow-700 px-6 py-4 rounded-xl shadow-md">
        ⚠️ Invalid Rows: <strong>{invalidCount}</strong>
      </div>
      <div className="bg-red-100 text-red-700 px-6 py-4 rounded-xl shadow-md">
        🔁 Duplicate SKUs: <strong>{duplicateCount}</strong>
      </div>
    </div>
  );
};

export default SummaryStats;
