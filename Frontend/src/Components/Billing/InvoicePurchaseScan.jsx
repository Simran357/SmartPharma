import { Check, AlertCircle, Upload } from "lucide-react";
import { useState } from "react";
import Tesseract from "tesseract.js";
import axiosInstance from "../Dashboard/Form/Utils/AxiosInstance";

const InvoicePurchaseScan = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const [workflow, setWorkflow] = useState({
    upload: false,
    viewer: false,
    verify: false,
    sync: false,
  });

  // ✅ FILE UPLOAD HANDLER
const handleFileUpload = async (e) => {
  const file = e.target.files[0];

  const formData = new FormData();
  formData.append("file", file);

  const res = await axiosInstance.post("/registerroute/ocrparse", formData);
  console.log(res?.data); // JSON aa jayega
};

  // ✅ OCR FUNCTION
  

  // ✅ AUTO INVENTORY BUTTON
  const handleAutoInventory = () => {
    setWorkflow((prev) => ({
      ...prev,
      sync: true,
    }));
  };

  // ✅ REUSABLE STEP UI
  const Step = ({ label, active }) => (
    <div
      className={`flex items-center gap-2 ${
        active ? "text-green-600" : "text-gray-400"
      }`}
    >
      <Check size={16} />
      {label}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">
          Purchase & OCR Bill Import
        </h1>

        <div className="flex items-center justify-between mt-2">
          <p className="text-gray-500">
            Extract line items automatically using OCR.
          </p>

          <div className="flex gap-3">
            <label className="px-4 py-2 border rounded-lg text-sm bg-white hover:bg-gray-50 cursor-pointer flex items-center gap-2">
              <Upload size={16} />
              Upload Invoice
              <input
                type="file"
                accept="image/*,application/pdf"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>

            <button
              onClick={handleAutoInventory}
              className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm shadow hover:bg-green-600"
            >
              Auto-update Inventory
            </button>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="flex gap-6 flex-1">

        {/* LEFT PANEL */}
        <div className="w-72 flex flex-col gap-4">

          {/* WORKFLOW */}
          <div className="bg-white rounded-xl shadow-sm border p-4">
            <h2 className="text-sm font-semibold text-gray-500 mb-3">
              WORKFLOW STATUS
            </h2>

            <div className="flex flex-col gap-3 text-sm">
              <Step label="Upload Invoice" active={workflow.upload} />
              <Step label="Document Viewer" active={workflow.viewer} />
              <Step label="Data Verification" active={workflow.verify} />
              <Step label="Inventory Sync" active={workflow.sync} />
            </div>
          </div>

          {/* WARNING */}
          {workflow.verify && (
            <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-4">
              <div className="flex items-start gap-2">
                <AlertCircle className="text-yellow-600" size={18} />
                <div>
                  <h2 className="text-yellow-800 font-medium">
                    Verification Required
                  </h2>
                  <p className="text-sm text-yellow-700 mt-1">
                    Please review extracted data before syncing.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CENTER PREVIEW */}
        <div className="flex-1">
          <div className="bg-white rounded-xl shadow-sm border h-full flex items-center justify-center overflow-hidden">
            {image ? (
              <img
                src={image}
                alt="preview"
                className="max-h-full object-contain"
              />
            ) : (
              <p className="text-gray-400">Invoice Preview</p>
            )}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-96 flex flex-col gap-4">

          {/* LOADING */}
          {loading && (
            <div className="bg-white p-4 rounded-xl text-center">
              🔍 Scanning invoice...
            </div>
          )}

          {/* SAMPLE RESULT (replace later with API data) */}
          {workflow.verify && (
            <div className="bg-white rounded-xl border p-4">
              <p className="text-xs text-gray-500">EXTRACTED ITEM</p>
              <h3 className="font-semibold">Paracetamol 650mg</h3>
              <p className="text-sm mt-2">Qty: 100</p>
              <p className="text-sm">Price: ₹50</p>
              <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
                OCR Parsed
              </span>
            </div>
          )}

          {/* TOTAL */}
          <div className="bg-black text-white rounded-xl p-5">
            <div className="flex justify-between">
              <span>Total</span>
              <span className="text-green-400">₹0.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-6 flex justify-end gap-3">
        <button className="px-4 py-2 border rounded-lg bg-white">
          Discard
        </button>
        <button className="px-4 py-2 border rounded-lg text-green-600 border-green-500">
          Save Draft
        </button>
        <button className="px-5 py-2 bg-green-500 text-white rounded-lg">
          Commit to Inventory
        </button>
      </div>
    </div>
  );
};

export default InvoicePurchaseScan;