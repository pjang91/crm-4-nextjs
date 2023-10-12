import Image from "next/image";
import { useState } from 'react';

export default function Home() {
  return (
    <main>
      <div>
        <h1>Hello!</h1>
      </div>

      

function ExcelUploader() {
  const [excelData, setExcelData] = useState(null);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const data = e.target.result;
        // Parse the Excel data using the xlsx library
        const workbook = XLSX.read(data, { type: 'array' });
        // Assuming a single sheet, get the data from the first sheet
        const sheetName = workbook.SheetNames[0];
        const excelData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
        setExcelData(excelData);
      };

      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div>
      <input type="file" accept=".xlsx" onChange={handleFileUpload} />
      {excelData && (
        <div>
          <h2>Excel Data:</h2>
          <pre>{JSON.stringify(excelData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default ExcelUploader;

    </main>
  );
}
