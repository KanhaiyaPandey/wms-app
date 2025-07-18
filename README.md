# 🧠 Warehouse SKU Management System (MVP)

This project includes two independent tools:

1. **🔧 SKU Mapper** (Python Desktop GUI App)
2. **📊 CSV Validator & Visualizer** (React + Tailwind Web App)

---

## 1️⃣ SKU Mapper (Python GUI App)

A desktop utility to map SKUs to MSKUs using a master mapping file. Built for inventory and warehouse use cases where bulk mapping and validation are required.

### 🛠 Tech Stack

- **Python 3.8+**
- **Tkinter** (GUI)
- **Pandas** (CSV processing)

### 🧠 Features

- Select SKU input CSV
- Select Master Mapping CSV (SKU → MSKU)
- Automatic matching and mapping
- User-defined export location
- Logs and error handling for missing SKUs

### ⚙️ Setup Instructions

```bash
pip install pandas
python main.py



Input Formats


SKU Input CSV:
Order ID,SKU,Quantity
1001,ABC123,1
1002,XYZ789,2


Mapping CSV:

SKU,MSKU
ABC123,MSKU-001
XYZ789,MSKU-002


Output:
A file named mapped_output.csv saved to the user-selected export location with MSKU column added.



2️⃣ CSV Validator & Visualizer (React Web App)
A web interface to upload, validate, and visualize the mapped CSV data (produced by the Python app) in a clean, interactive UI.

🛠 Tech Stack
React

Tailwind CSS

Recharts (for data visualization)

PapaParse (CSV parsing)

🧠 Features
Drag-and-drop CSV upload or file picker

Real-time table rendering of CSV data

Charts for:

MSKU distribution (Bar chart)

Quantity breakdown (Pie chart)

Handles CSV with SKU, MSKU, Quantity, Order ID columns



⚙️ Setup Instructions

cd frontend
npm install
npm run dev

📁 Project Structure:-

warehouse-sku-tools/
├── python-app/
│   ├── main.py
│   ├── sku_mapper.py
│   └── combo_handler.py (coming soon)
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── index.css
│   └── package.json
│
└── README.md

🧠 How AI Helped
This project was co-developed with ChatGPT (GPT-4):

Generated boilerplate code

Designed modular architecture

Helped debug bugs and handle CSV edge cases

Iteratively improved UX and error handling


📌 Usage Flow
Use the Python GUI to:

Map SKU to MSKU using master data

Export final CSV

Open the React Web App to:

Upload the final CSV

Validate and explore mapped data visually



👨‍💻 Author
Kanhaiya Pandey


Let me know if you want:
- A separate `README.md` in each subfolder (`/frontend` and `/python-app`)
- This combined README converted to **PDF**
- Or zipped as a **ready-to-submit folder**

✅ Ready for final packaging!

