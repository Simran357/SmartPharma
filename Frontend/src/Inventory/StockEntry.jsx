import React from "react";
import { useState, useEffect } from "react";
import { Input, Button, Table, Card } from "antd";
import axios from "axios";


const batchColumns = [
  { title: "Batch #", dataIndex: "batch" },
  { title: "Expiry", dataIndex: "expiry" },
  { title: "Qty", dataIndex: "qty" },
  { title: "MRP", dataIndex: "mrp" },
  { title: "Ageing", dataIndex: "ageing" },
];

const data = [
  {
    key: "1",
    name: "Paracetamol 500mg (Dolo)",
    hsn: "3004",
    batch: "BT9982",
  },
  {
    key: "2",
    name: "Amoxicillin 250mg",
    hsn: "3004",
    batch: "AX-011",
  },
];
const batchData = [
  {
    key: "1",
    batch: "BT8812",
    expiry: "05/25",
    qty: 400,
    mrp: "18.00",
    ageing: "120 days",
  },
  {
    key: "2",
    batch: "BT7701",
    expiry: "12/23",
    qty: 120,
    mrp: "17.50",
    ageing: "Expiring",
  },
];

const StockEntry = () => {
  //Medicine
 const [items, setItems] = useState([]);

 const handleItemChange = (value, index, field) => {
    const updated = [...items];
    updated[index][field] = value;
    setItems(updated);
  };
const columns = [
  { title: "#", dataIndex: "key" },
 
   {
    title: "Medicine Name",
    dataIndex: "name",
    render: (text, record, index) => (
      <Input
        value={text}
        onChange={(e) => handleItemChange(e.target.value, index, "name")}
      />
    )
  },
   {
    title: "HSN",
    dataIndex: "hsn",
    render: (text, record, index) => (
      <Input
        value={text}
        onChange={(e) => handleItemChange(e.target.value, index, "hsn")}
      />
    )
  },
   {
    title: "Batch",
    dataIndex: "batch",
    render: (text, record, index) => (
      <Input
        value={text}
        onChange={(e) => handleItemChange(e.target.value, index, "batch")}
      />
    )
  },
  
    {
  title: "Qty",
  dataIndex: "qty",
  render: (text, record, index) => (
    <Input
      value={text}
      onChange={(e) => handleItemChange(e.target.value, index, "qty")}
    />
  )
},
{
  title: "MRP",
  dataIndex: "mrp",
  render: (text, record, index) => (
    <Input
      value={text}
      onChange={(e) => handleItemChange(e.target.value, index, "mrp")}
    />
  )
},
{
  title: "Expiry",
  dataIndex: "expiry",
  render: (text, record, index) => (
    <Input
      value={text}
      onChange={(e) => handleItemChange(e.target.value, index, "expiry")}
    />
  )
},
{
  title: "Pack",
  dataIndex: "pack",
  render: (text, record, index) => (
    <Input
      value={text}
      onChange={(e) => handleItemChange(e.target.value, index, "pack")}
    />
  )
},
{
  title: "Rate",
  dataIndex: "rate",
  render: (text, record, index) => (
    <Input
      value={text}
      onChange={(e) => handleItemChange(e.target.value, index, "rate")}
    />
  )
},
{
  title: "Amount",
  dataIndex: "amount",
  render: (text, record, index) => (
    <Input
      value={text}
      onChange={(e) => handleItemChange(e.target.value, index, "amount")}
    />
  )
}
];
const addRow = () => {
  const newRow = {
    key: Date.now(),
    name: "",
    hsn: "",
    batch: "",
    qty: "",
    mrp: "",
    expiry: "",
    pack: "",
    rate: "",
    amount: ""
  };

  setItems((prev) => [...prev, newRow]);
};

//Form
  const [formData, setFormData] = useState({
    supplierName: "",
    invoiceNumber: "",
    date: "",
    poRef: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async() => {
    console.log("Sending Data",formData);

  try {
    const res = await axios.post(
      "http://localhost:5001/api/user/stock/add",
      formData
    );
    console.log("Success:", res.data);

    

  } catch (error) {
    console.log(error);
  }
  };
  //get 
const [stockData, setStockData] = useState([]);
useEffect(() => {
  fetchStock();
}, []);

const fetchStock = async () => {
  try {
    const res = await axios.get("http://localhost:5001/api/user/stock");
    setStockData(res.data);
  } catch (error) {
    console.log(error);
  }
};
  return (
     
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">New Stock Entry</h1>

      {/* Top Form */}
      <Card className="mb-6">
        <div className="grid grid-cols-4 gap-4">
         <div className="flex flex-col">
      <label className="text-sm text-gray-600 mb-1">Supplier Name</label>
      <Input 
      type="text"
        name="supplierName"
        placeholder="suppliername" 
        onChange={handleChange}
      />
    </div>
         
    <div className="flex flex-col">
      <label className="text-sm text-gray-600 mb-1">Invoice Number</label>
       <Input 
       type="text"
        name="invoiceNumber"
        placeholder="invoicenumber" 
        onChange={handleChange}
      />
    </div>

    <div className="flex flex-col">
      <label className="text-sm text-gray-600 mb-1">Date</label>
         <Input 
        type="text"
        name="date"
        onChange={handleChange}
      />
    </div>

    <div className="flex flex-col">
      <label className="text-sm text-gray-600 mb-1">Purchase Order Ref</label>
      <Input 
        type="text"
        name="poRef"
        onChange={handleChange}
      />
    </div>
        </div>
          <Button 
        type="primary" 
        className="mt-4"
        onClick={handleSubmit}
      >
        Save
      </Button>
      </Card>

      {/* Table Section */}
      <Card className="mb-6">
        {/* <Table columns={columns} dataSource={stockData} pagination={false} /> */}
        {/* <Button type="dashed" className="mt-3">+ Add New Row</Button> */}
        <Table columns={columns} dataSource={items} pagination={false} />
        <Button 
  type="dashed" 
  className="mt-3"
  onClick={addRow}
>
  + Add New Row
</Button>
      </Card>

      <div className="grid grid-cols-3 gap-6">
        {/* Inventory Card */}
        <Card className="col-span-2">
          <h2 className="font-semibold mb-4">Batch-wise Inventory</h2>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-gray-100 rounded">
              <p className="text-gray-500">Current Stock</p>
              <h3 className="text-xl font-bold">1,240</h3>
            </div>
            <div className="p-4 bg-gray-100 rounded">
              <p className="text-gray-500">Last Purchase Price</p>
              <h3 className="text-xl font-bold">₹12.10</h3>
            </div>
            <div className="p-4 bg-gray-100 rounded">
              <p className="text-gray-500">Near Expiry</p>
              <h3 className="text-xl font-bold text-red-500">210</h3>
            </div>
          </div>

  {/* 🔥 NEW TABLE */}
  <Table
    columns={batchColumns}
    dataSource={batchData}
    pagination={false}
  />
        </Card>

        {/* Summary */}
        <Card>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Sub Total</span>
              <span>₹3,920.00</span>
            </div>
            <div className="flex justify-between">
              <span>Taxable Amount</span>
              <span>₹3,500.00</span>
            </div>
            <div className="flex justify-between">
              <span>GST (12%)</span>
              <span className="text-blue-500">₹420.00</span>
            </div>
            <div className="flex justify-between font-bold text-lg mt-4">
              <span>Grand Total</span>
              <span className="text-blue-600">₹3,920.00</span>
            </div>
          </div>

          <Button type="primary" block className="mt-8">
            Save
          </Button> 

  
        </Card>
      </div>
    </div>
  );
};

export default StockEntry;