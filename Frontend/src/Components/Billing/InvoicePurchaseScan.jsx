import { Check, AlertCircle } from "lucide-react";

const InvoicePurchaseScan = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">
          Purchase & OCR Bill Import
        </h1>

        <div className="flex items-center justify-between mt-2">
          <p className="text-gray-500">
            Extract line items from pharmacy invoices automatically using V1.0 OCR Engine.
          </p>

          <div className="flex gap-3">
            <button className="px-4 py-2 border rounded-lg text-sm bg-white hover:bg-gray-50">
              View History
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm shadow hover:bg-green-600">
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
              {["Upload Invoice", "Document Viewer"].map((item) => (
                <div className="flex items-center gap-2 text-green-600">
                  <Check size={16} /> {item}
                </div>
              ))}

              <div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-2 rounded-lg border">
                <Check size={16} /> Data Verification
              </div>

              <div className="text-gray-400 flex items-center gap-2">
                <Check size={16} /> Inventory Sync
              </div>
            </div>
          </div>

          {/* WARNING */}
          <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-4">
            <div className="flex items-start gap-2">
              <AlertCircle className="text-yellow-600" size={18} />
              <div>
                <h2 className="text-yellow-800 font-medium">
                  Verification Required
                </h2>
                <p className="text-sm text-yellow-700 mt-1">
                  2 items have low extraction confidence. Verify highlighted fields.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CENTER */}
        <div className="flex-1">
          <div className="bg-white rounded-xl shadow-sm border h-full flex items-center justify-center">
            <p className="text-gray-400">Invoice Preview</p>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-96 flex flex-col gap-4">

          {/* CARD 1 */}
          <div className="bg-white rounded-xl border shadow-sm p-4">
            <p className="text-xs text-gray-500 mb-1">MEDICINE NAME</p>
            <h3 className="font-semibold text-gray-800">
              Amoxicillin 500mg Caps
            </h3>

            <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
              <div>
                <p className="text-gray-500">Batch No.</p>
                <p className="font-medium">AMX22019</p>
              </div>
              <div>
                <p className="text-gray-500">Expiry</p>
                <p className="font-medium">12/2025</p>
              </div>
              <div>
                <p className="text-gray-500">Qty</p>
                <p className="font-medium">500</p>
              </div>
              <div>
                <p className="text-gray-500">Unit Price</p>
                <p className="font-medium">₹200</p>
              </div>
            </div>

            <span className="inline-block mt-3 text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
              99% Confidence
            </span>
          </div>

          {/* CARD 2 - WARNING */}
          <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-4">
            <p className="text-xs text-yellow-700 mb-1">MEDICINE NAME</p>
            <h3 className="font-semibold text-gray-800">
              Paracetamol 500mg
            </h3>

            <p className="text-xs text-yellow-600 mt-1">
              Suggested: Paracetamol 650mg
            </p>

            <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
              <div>
                <p className="text-gray-500">Batch No.</p>
                <p className="font-medium">PARA-650-X</p>
              </div>
              <div>
                <p className="text-gray-500">Expiry</p>
                <p className="font-medium">08/2024</p>
              </div>
              <div>
                <p className="text-gray-500">Qty</p>
                <p className="font-medium">1000</p>
              </div>
              <div>
                <p className="text-gray-500">Unit Price</p>
                <p className="font-medium">₹50</p>
              </div>
            </div>

            <div className="flex justify-between items-center mt-3">
              <span className="text-xs bg-yellow-200 text-yellow-700 px-2 py-1 rounded">
                64% Confidence
              </span>
              <button className="text-green-600 text-xs font-medium">
                Auto Fix
              </button>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-xl border shadow-sm p-4">
            <p className="text-xs text-gray-500 mb-1">MEDICINE NAME</p>
            <h3 className="font-semibold text-gray-800">
              Lisinopril 10mg
            </h3>

            <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
              <div>
                <p className="text-gray-500">Batch No.</p>
                <p className="font-medium">LS-1102</p>
              </div>
              <div>
                <p className="text-gray-500">Expiry</p>
                <p className="font-medium">03/2026</p>
              </div>
            </div>
          </div>

          {/* TOTAL BOX */}
          <div className="bg-black text-white rounded-xl p-5 shadow-lg">
            <div className="flex justify-between text-sm text-gray-400">
              <span>Subtotal (4 items)</span>
              <span>₹1,420.00</span>
            </div>

            <div className="flex justify-between text-sm text-gray-400 mt-2">
              <span>Estimated Tax (5%)</span>
              <span>₹71.00</span>
            </div>

            <hr className="my-4 border-gray-700" />

            <div className="flex justify-between text-lg font-semibold">
              <span>Total Payable</span>
              <span className="text-green-400">₹1,491.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-6 flex justify-end gap-3">
        <button className="px-4 py-2 border rounded-lg bg-white">
          Discard Batch
        </button>
        <button className="px-4 py-2 border rounded-lg text-green-600 border-green-500">
          Save Draft
        </button>
        <button className="px-5 py-2 bg-green-500 text-white rounded-lg shadow">
          Commit to Inventory
        </button>
      </div>
    </div>
  );
};

export default InvoicePurchaseScan;