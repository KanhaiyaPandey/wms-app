/* eslint-disable no-unused-vars */


const ValidationTable = ({ data }) => {
  if (!data || data.length === 0) return null;

  const headers = data[0];
  const rows = data.slice(1);

  const getValidationErrors = (row, index) => {
    const errors = [];

    const sku = row[0]?.trim();
    const msku = row[1]?.trim();
    const quantity = row[2]?.trim();

    if (!sku) errors.push("SKU missing");
    if (!msku) errors.push("MSKU missing");
    if (!quantity || isNaN(quantity)) errors.push("Invalid quantity");

    return errors;
  };

  const isDuplicateSKU = (sku, index) => {
    return rows.findIndex((row, i) => row[0] === sku && i !== index) !== -1;
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 overflow-auto">
      <h3 className="text-lg font-semibold mb-4 text-center">📋 CSV Data Preview</h3>
      <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            {headers.map((header, idx) => (
              <th key={idx} className="px-4 py-2 border-b text-left text-sm font-medium text-gray-700">
                {header}
              </th>
            ))}
            <th className="px-4 py-2 border-b text-sm font-medium text-gray-700">Errors</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            const errors = getValidationErrors(row, idx);
            const duplicate = isDuplicateSKU(row[0], idx);
            return (
              <tr key={idx} className={`${errors.length || duplicate ? "bg-red-50" : "bg-white"}`}>
                {row.map((cell, i) => (
                  <td key={i} className="px-4 py-2 border-b text-sm">
                    {cell}
                  </td>
                ))}
                <td className="px-4 py-2 border-b text-sm text-red-500">
                  {errors.join(", ")} {duplicate ? "Duplicate SKU" : ""}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ValidationTable;
