import React, { useState, useEffect } from "react";
import axiosInstance from "../Components/Dashboard/Form/Utils/AxiosInstance";
import { useContext } from "react";
import { contextProvide } from "../Components/Dashboard/Form/Utils/Context/CommonContext";

const StockEntry = ({ onClose }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
const {auth} = useContext(contextProvide)
  const [formData, setFormData] = useState({
    supplierName: "",
    invoiceNumber: "",
    date: "",
    poRef: "",
    gstin: "",
    dlNo: "",
    phone: "",
    address: "",
    dueDate: "",
  });

  const [totals, setTotals] = useState({
    subTotal: 0,
    gst: 0,
    grandTotal: 0,
  });

  useEffect(() => {
    if (items.length === 0) addRow();
  }, []);

  useEffect(() => {
    const subTotal = items.reduce(
      (acc, item) => acc + (Number(item.amount) || 0),
      0
    );
    const gst = subTotal * 0.12;
    const grandTotal = subTotal + gst;

    setTotals({ subTotal, gst, grandTotal });
  }, [items]);

  const addRow = () => {
    setItems((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name: "",
        pack:"",
        hsn: "",
        batch: "",
        qty: "",
        rate: "",
        mrp: "",
        gst: 5,
        amount: "",
        expiry: "",
      },
    ]);
  };

  const deleteRow = (id) => {
    if (items.length === 1) return;
    setItems(items.filter((item) => item.id !== id));
  };

  const handleItemChange = (id, field, value) => {
    const updated = items.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, [field]: value };
        newItem.amount =
          (Number(newItem.qty) || 0) * (Number(newItem.rate) || 0);
        return newItem;
      }
      return item;
    });
    setItems(updated);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log("fprm data",formData)
console.log("items in firm",items)
  const handleSubmit = async () => {
    try {
      setLoading(true);
      await axiosInstance.post(`/registerroute/addStock/${auth}`, {
        ...formData,
        date: formData.date ? new Date(formData.date) : null,
        items,
        totals,
      });
      alert("Stock Added ✅");
      setItems([]);
      onClose();
    } catch {
      alert("Error saving stock");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle =
    "w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">

      {/* HEADER */}
      <h2 className="text-2xl font-semibold">Stock Entry</h2>

      {/* SUPPLIER SECTION */}
      <div className="bg-white p-5 rounded-xl shadow space-y-4">
        <h3 className="text-lg font-medium border-b pb-2">
          Supplier Details
        </h3>

        <div className="grid md:grid-cols-3 gap-4">

          <div>
            <label className="label">Supplier Name</label>
            <input name="supplierName" onChange={handleChange} className={inputStyle} />
          </div>

          <div>
            <label className="label">Invoice Number</label>
            <input name="invoiceNumber" onChange={handleChange} className={inputStyle} />
          </div>

          <div>
            <label className="label">Invoice Date</label>
            <input type="date" name="date" onChange={handleChange} className={inputStyle} />
          </div>

          <div>
            <label className="label">GSTIN</label>
            <input name="gstin" onChange={handleChange} className={inputStyle} />
          </div>

          <div>
            <label className="label">Drug License</label>
            <input name="dlNo" onChange={handleChange} className={inputStyle} />
          </div>

          <div>
            <label className="label">Phone</label>
            <input name="phone" onChange={handleChange} className={inputStyle} />
          </div>

          <div className="md:col-span-3">
            <label className="label">Address</label>
            <input name="address" onChange={handleChange} className={inputStyle} />
          </div>

          <div>
            <label className="label">Due Date</label>
            <input type="date" name="dueDate" onChange={handleChange} className={inputStyle} />
          </div>

          <div>
            <label className="label">PO Ref</label>
            <input name="poRef" onChange={handleChange} className={inputStyle} />
          </div>

        </div>
      </div>

      {/* ITEMS SECTION */}
      <div className="bg-white p-5 rounded-xl shadow space-y-4">
        <h3 className="text-lg font-medium border-b pb-2">
          Items
        </h3>

        {items.map((item) => (
          <div key={item.id} className="grid md:grid-cols-6 gap-3 border p-3 rounded">

            <input placeholder="Medicine"
              value={item.name}
              onChange={(e) => handleItemChange(item.id, "name", e.target.value)}
              className={inputStyle}
            />

            <input placeholder="HSN"
              value={item.hsn}
              onChange={(e) => handleItemChange(item.id, "hsn", e.target.value)}
              className={inputStyle}
            />

            <input placeholder="Batch No"
              value={item.batch}
              onChange={(e) => handleItemChange(item.id, "batch", e.target.value)}
              className={inputStyle}
            />
            
            <input placeholder="Pack"
              value={item.pack}
              onChange={(e) => handleItemChange(item.id, "pack", e.target.value)}
              className={inputStyle}
            />
            <input placeholder="Qty" type="number"
              value={item.qty}
              onChange={(e) => handleItemChange(item.id, "qty", e.target.value)}
              className={inputStyle}
            />

            <input placeholder="Rate" type="number"
              value={item.rate}
              onChange={(e) => handleItemChange(item.id, "rate", e.target.value)}
              className={inputStyle}
            />

            <input placeholder="MRP" type="number"
              value={item.mrp}
              onChange={(e) => handleItemChange(item.id, "mrp", e.target.value)}
              className={inputStyle}
            />

            <input value={item.amount} disabled className={`${inputStyle} bg-gray-100`} />

            <input type="date"
              value={item.expiry}
              onChange={(e) => handleItemChange(item.id, "expiry", e.target.value)}
              className={inputStyle}
            />

            <button
              onClick={() => deleteRow(item.id)}
              className="bg-red-500 text-white rounded px-3 py-1"
            >
              Delete
            </button>

          </div>
        ))}

        <button
          onClick={addRow}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add Item
        </button>
      </div>

      {/* TOTALS */}
      <div className="bg-white p-5 rounded-xl shadow space-y-2">
        <h3 className="text-lg font-medium border-b pb-2">Summary</h3>

        <div className="flex justify-between">
          <span>Sub Total</span>
          <span>₹{totals.subTotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>GST (12%)</span>
          <span>₹{totals.gst.toFixed(2)}</span>
        </div>

        <div className="flex justify-between font-semibold text-lg">
          <span>Grand Total</span>
          <span>₹{totals.grandTotal.toFixed(2)}</span>
        </div>
      </div>

      {/* SUBMIT */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-green-600 text-white py-3 rounded-lg text-lg"
      >
        {loading ? "Saving..." : "Save Stock"}
      </button>
    </div>
  );
};

export default StockEntry;