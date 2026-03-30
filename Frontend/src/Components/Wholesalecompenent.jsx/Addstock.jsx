import React from 'react'
import React, { useState } from "react";
const Addstock = () => {
    const [open, setOpen] = useState(false);
  const [form, setForm] = useState({});

  const handleSave = () => {
    console.log("Form Data 👉", form);
    setOpen(false);
  };
  return (
    
      <div className="p-6">

      {/* 🔥 Button */}
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        + Add Stock
      </button>

      {/* 🔥 Modal */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">

          <div className="bg-white w-600px rounded-xl shadow-lg p-6">

            {/* Header */}
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                📦 Add Stock
              </h2>
              <button onClick={() => setOpen(false)}>✕</button>
            </div>

            <p className="text-gray-500 text-sm mb-4">
              Add a new product to your inventory. Fields marked with * are required.
            </p>

            {/* Form */}
            <div className="grid grid-cols-2 gap-4">

              {/* Product Name */}
              <div>
                <label className="text-sm font-medium">Product Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Vitamin C 500mg"
                  className="w-full border rounded-lg p-2 mt-1"
                  onChange={(e) =>
                    setForm({ ...form, productName: e.target.value })
                  }
                />
              </div>

              {/* SKU */}
              <div>
                <label className="text-sm font-medium">SKU *</label>
                <input
                  type="text"
                  placeholder="e.g. VIT-C-500"
                  className="w-full border rounded-lg p-2 mt-1 focus:outline-blue-500"
                  onChange={(e) =>
                    setForm({ ...form, sku: e.target.value })
                  }
                />
              </div>

              {/* Category */}
              <div>
                <label className="text-sm font-medium">Category *</label>
                <select
                  className="w-full border rounded-lg p-2 mt-1"
                  onChange={(e) =>
                    setForm({ ...form, category: e.target.value })
                  }
                >
                  <option>Select category</option>
                  <option>Antibiotics</option>
                  <option>Analgesics</option>
                  <option>Hypertension</option>
                </select>
              </div>

              {/* Quantity */}
              <div>
                <label className="text-sm font-medium">Quantity *</label>
                <input
                  type="number"
                  placeholder="e.g. 250"
                  className="w-full border rounded-lg p-2 mt-1"
                  onChange={(e) =>
                    setForm({ ...form, quantity: e.target.value })
                  }
                />
              </div>

              {/* Expiry */}
              <div className="col-span-2">
                <label className="text-sm font-medium">Expiry Date *</label>
                <input
                  type="date"
                  className="w-full border rounded-lg p-2 mt-1"
                  onChange={(e) =>
                    setForm({ ...form, expiryDate: e.target.value })
                  }
                />
              </div>

              {/* Batch */}
              <div>
                <label className="text-sm font-medium">Batch Number</label>
                <input
                  type="text"
                  placeholder="e.g. B-2024-0312"
                  className="w-full border rounded-lg p-2 mt-1"
                  onChange={(e) =>
                    setForm({ ...form, batchNumber: e.target.value })
                  }
                />
              </div>

              {/* Aisle */}
              <div>
                <label className="text-sm font-medium">Aisle</label>
                <input
                  type="text"
                  placeholder="e.g. A-14"
                  className="w-full border rounded-lg p-2 mt-1"
                  onChange={(e) =>
                    setForm({ ...form, aisle: e.target.value })
                  }
                />
              </div>

            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 border rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Save Stock
              </button>
            </div>

          </div>
        </div>
      )}
</div>
    
  )
}

export default Addstock
