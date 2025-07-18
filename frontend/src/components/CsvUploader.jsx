import { useState } from "react";
import Papa from "papaparse";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function CsvUploader() {
  const [chartData, setChartData] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const data = results.data;

        const labels = data.map((row) => row["Date"]); // or any x-axis column
        const values = data.map((row) => Number(row["Sales"])); // y-axis column

        setChartData({
          labels,
          datasets: [
            {
              label: "Sales Over Time",
              data: values,
              borderColor: "rgb(75,192,192)",
              backgroundColor: "rgba(75,192,192,0.4)",
              tension: 0.3,
              fill: true,
            },
          ],
        });
      },
    });
  };

  return (
    <div className="p-6 space-y-6">
      <input type="file" accept=".csv" onChange={handleFileUpload} className="mb-4" />
      {chartData && (
        <div className="bg-white p-4 rounded-xl shadow-md">
          <Line data={chartData} />
        </div>
      )}
    </div>
  );
}
