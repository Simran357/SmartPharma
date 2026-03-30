import React from "react";

const Addstock = ({ close }) => {

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">

      <div className="bg-white w-600px rounded-xl shadow-lg p-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            📦 Add Stock
          </h2>
          <button onClick={close}>✕</button>
        </div>

        <p className="text-gray-500 text-sm mb-4">
          Add a new product to your inventory. Fields marked with * are required.
        </p>

        {/* Form */}
        <div className="grid grid-cols-2 gap-4">

          <div>
            <label className="text-sm font-medium">Product Name *</label>
            <input className="w-full border rounded-lg p-2 mt-1" />
          </div>

          <div>
            <label className="text-sm font-medium">SKU *</label>
            <input className="w-full border rounded-lg p-2 mt-1" />
          </div>

          <div>
            <label className="text-sm font-medium">Category *</label>
            <select className="w-full border rounded-lg p-2 mt-1">
              <option>Select category</option>
              <option>Antibiotics</option>
              <option>Analgesics</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">Quantity *</label>
            <input type="number" className="w-full border rounded-lg p-2 mt-1" />
          </div>

          <div className="col-span-2">
            <label className="text-sm font-medium">Expiry Date *</label>
            <input type="date" className="w-full border rounded-lg p-2 mt-1" />
          </div>

        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button onClick={close} className="px-4 py-2 border rounded-lg">
            Cancel
          </button>

          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            Save Stock
          </button>
        </div>

      </div>
    </div>
  );
};
export default Addstock;