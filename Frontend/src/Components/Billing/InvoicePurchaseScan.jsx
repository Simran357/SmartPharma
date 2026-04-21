import { Check, AlertCircle, Upload } from "lucide-react";
import { useState, useEffect } from "react";
import axiosInstance from "../Dashboard/Form/Utils/AxiosInstance";

const InvoicePurchaseScan = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [serverImage, setServerImage] = useState(null);

  const [loading, setLoading] = useState(false);

  const [invoice, setInvoice] = useState(null);
  const [items, setItems] = useState([]);

  const [workflow, setWorkflow] = useState({
    upload: false,
    viewer: false,
    verify: false,
    sync: false,
  });

  // ---------------- FILE UPLOAD ----------------
  const handleFileUpload = async (e) => {
    try {
      const file = e.target.files?.[0];
      if (!file) return;

      setPreviewImage(URL.createObjectURL(file));
      setLoading(true);

      const formData = new FormData();
      formData.append("file", file);

      const res = await axiosInstance.post(
        "/registerroute/ocrparse",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          timeout: 30000,
        }
      );

      const data = res?.data;

      setServerImage(data?.imageUrl);
      setInvoice(data?.parsedData || null);
      setItems(data?.tableRows || []);

      setWorkflow((prev) => ({
        ...prev,
        upload: true,
        viewer: true,
        verify: true,
      }));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // ---------------- TABLE EDIT ----------------
const updateItem = (index, field, value) => {
  const updated = [...items];
  updated[index][field] = value;
  setItems(updated);
};


  const Step = ({ label, active }) => (
    <div className={`flex items-center gap-2 ${active ? "text-green-600" : "text-gray-400"}`}>
      <Check size={16} />
      <span>{label}</span>
    </div>
  );

  const displayImage = serverImage || previewImage;

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Smart Invoice OCR System
        </h1>

        <div className="flex justify-between mt-3">
          <label className="px-4 py-2 bg-white border rounded-lg cursor-pointer flex items-center gap-2">
            <Upload size={16} />
            Upload Invoice
            <input type="file" hidden onChange={handleFileUpload} />
          </label>

          <button className="px-4 py-2 bg-green-500 text-white rounded-lg">
            Sync Inventory
          </button>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-3 gap-4 flex-1">

        {/* LEFT STATUS */}
        <div className="bg-white p-4 rounded-xl border">
          <h2 className="text-sm font-semibold mb-3">WORKFLOW</h2>

          <Step label="Upload" active={workflow.upload} />
          <Step label="OCR Processing" active={workflow.viewer} />
          <Step label="Verification" active={workflow.verify} />
          <Step label="Sync" active={workflow.sync} />
        </div>

        {/* CENTER IMAGE */}
        <div className="bg-white p-4 rounded-xl border flex items-center justify-center">
          {loading ? (
            <p className="text-blue-500 animate-pulse">Processing...</p>
          ) : displayImage ? (
            <img src={displayImage} className="max-h-96 object-contain" />
          ) : (
            <p className="text-gray-400">Upload Invoice</p>
          )}
        </div>

        {/* RIGHT SUMMARY */}
        <div className="bg-white p-4 rounded-xl border">
          <h2 className="text-sm font-semibold mb-3">SUMMARY</h2>

          <p className="text-xs text-gray-500">Supplier</p>
          <p className="font-medium mb-2">{invoice?.supplierName}</p>

          <p className="text-xs text-gray-500">Invoice No</p>
          <p className="mb-2">{invoice?.invoiceNumber}</p>

          <p className="text-xs text-gray-500">GSTIN</p>
          <p className="mb-2">{invoice?.gstin}</p>

          <p className="text-xs text-gray-500">Grand Total</p>
     <p className="text-green-600 font-bold">
  ₹ {invoice?.grandTotal || 0}
</p>
        </div>
      </div>

      {/* TABLE SECTION */}
      {items.length > 0 && (
        <div className="mt-6 bg-white p-4 rounded-xl border overflow-auto">
          <h2 className="text-lg font-semibold mb-3">Editable Items</h2>

          <table className="w-full border text-sm">
        <thead className="bg-gray-100">
  <tr>
    <th className="p-2">Product</th>
    <th className="p-2">HSN</th>
    <th className="p-2">Batch</th>
    <th className="p-2">Expiry</th>
    <th className="p-2">MRP</th>
    <th className="p-2">Qty</th>
    <th className="p-2">Rate</th>
    <th className="p-2">Amount</th>
  </tr>
</thead>

   <tbody>
  {items.map((item, i) => (
    <tr key={i} className="border-t">

      {/* PRODUCT */}
      <td className="p-2">
        <input
          value={item.name || ""}
          onChange={(e) => updateItem(i, "name", e.target.value)}
          className="border px-2 py-1 w-full"
        />
      </td>

      {/* HSN */}
      <td className="p-2">
        <input
          value={item.hsn || ""}
          onChange={(e) => updateItem(i, "hsn", e.target.value)}
          className="border px-2 py-1 w-full"
        />
      </td>

      {/* BATCH */}
      <td className="p-2">
        <input
          value={item.batch || ""}
          onChange={(e) => updateItem(i, "batch", e.target.value)}
          className="border px-2 py-1 w-full"
        />
      </td>

      {/* EXPIRY */}
      <td className="p-2">
        <input
          value={item.expiry || ""}
          onChange={(e) => updateItem(i, "expiry", e.target.value)}
          className="border px-2 py-1 w-full"
        />
      </td>

      {/* MRP */}
      <td className="p-2">
        <input
          value={item.mrp || ""}
          onChange={(e) => updateItem(i, "mrp", e.target.value)}
          className="border px-2 py-1 w-full"
        />
      </td>

      {/* QTY */}
      <td className="p-2">
        <input
          value={item.qty || ""}
          onChange={(e) => updateItem(i, "qty", e.target.value)}
          className="border px-2 py-1 w-full"
        />
      </td>

      {/* RATE */}
      <td className="p-2">
        <input
          value={item.rate || ""}
          onChange={(e) => updateItem(i, "rate", e.target.value)}
          className="border px-2 py-1 w-full"
        />
      </td>

      {/* AMOUNT (NO AUTO CALC) */}
      <td className="p-2">
        <input
          value={item.amount || ""}
          onChange={(e) => updateItem(i, "amount", e.target.value)}
          className="border px-2 py-1 w-full font-semibold"
        />
      </td>

    </tr>
  ))}
</tbody>
          </table>
        </div>
      )}

      {/* FOOTER */}
      <div className="mt-6 flex justify-end gap-3">
        <button className="px-4 py-2 border rounded-lg bg-white">
          Discard
        </button>
        <button className="px-4 py-2 border rounded-lg text-green-600">
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