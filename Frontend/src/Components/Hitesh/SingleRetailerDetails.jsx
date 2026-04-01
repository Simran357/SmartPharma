
import  {useState,useEffect} from "react"
import axiosInstance from "../Dashboard/Form/Utils/AxiosInstance";
import react from "react"
import { Table } from "antd";
import { Tag } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import { CheckCircle, AlertTriangle, Info,FileText,Upload,Banknote,ShoppingBag, BarChart, Building2 } from "lucide-react";
import { useParams } from "react-router-dom";
const SingleRetailerDetails = () => {
   const {id} = useParams()
    console.log(id)
     const [singleRetailer,setSingleRetailer] = useState([])
      console.log("singleRetailer",singleRetailer)
       const getUser = async () => {
              console.log("getUser called ");
              try {
                  const res = await axiosInstance.get(`/registerroute/getSingleRetailor/${id}`)
                  if (res?.data) {
                      setSingleRetailer(res?.data?.data)
                      console.log("singleretailerid",res?.data)
                  }
              } catch (error) {
                  console.log("Error fetching user data:", error);
              }
          }

          useEffect(()=>{
            getUser()
          },[])
  //  TABLE COLUMNS (OUTSIDE JSX)
  const columns = [
    {
      title: "ORDER ID",
      dataIndex: "orderId",
      key: "orderId",
    },
    {
      title: "DATE",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "ITEMS",
      dataIndex: "items",
      key: "items",
    },
    {
      title: "AMOUNT",
      dataIndex: "amount",
      key: "amount",
       render: (amount) => (
    <span className="font-bold text-black">
      {amount}
    </span>),
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        return (
         
           <>
        {status === "DELIVERED" && (
          <Tag color="green">DELIVERED</Tag>
        )}

        {status === "SHIPPED" && (
          <Tag color="blue">SHIPPED</Tag>
        )}

        {status === "CANCELED" && (
          <Tag color="red">CANCELED</Tag>
        )}
       
      </>
     
        );
      },
    },
  ];

  //  TABLE DATA
  const data = [
    {
      key: "1",
      orderId: "#ORD-1001",
      date: "2026-03-20",
      items: "25 SKUs",
      amount: "₹42,500",
       
      status: "SHIPPED",
    },
    {
      key: "2",
      orderId: "#ORD-1002",
      date: "2026-03-22",
      items: "12 SKUs",
      amount: "₹15,550",
      status: "DELIVERED",
    },
    {
      key: "3",
      orderId: "#ORD-1003",
      date: "2026-03-24",
      items: "45 SKUs",
      amount: "₹1,12,000",
      status: "DELIVERED",
    },
     {
      key: "4",
      orderId: "#ORD-1003",
      date: "2026-03-24",
      items: "8 SKUs",
      amount: "₹8,900",
      status: "CANCELED",
    },
  ];
const trendData = [
  { month: "May", revenue: 40000, orders: 240 },
  { month: "Jun", revenue: 30000, orders: 200 },
  { month: "Jul", revenue: 50000, orders: 280 },
  { month: "Aug", revenue: 78000, orders: 350 },
  { month: "Sep", revenue: 62000, orders: 300 },
  { month: "Oct", revenue: 90000, orders: 420 },
];
return(

<div className="p-6 bg-gray-100 min-h-screen">
      
      {/* Main Container */}
      <div className="max-w-7xl mx-auto space-y-6">

          {/* LEFT SIDE */}
       <div className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
     
        {/* Logo */}
        <div className="w-16 h-16 rounded-xl bg-linear-to-br from-green-200 to-green-500 flex items-center justify-center">
          <span className="text-white font-bold">M</span>
        </div>

      {  /* Details */}
<div className="w-full">

  {/* Top Row */}
  <div className="">

        {/* Details */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold">MediCare Pharmacy</h1>
            <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full font-semibold">
              ACTIVE
            </span>
          </div>

      {/* RIGHT SIDE BUTTONS */}
      <div className="flex items-center gap-3"> 
        <button className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-100">
          Contact
        </button>
  <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700">
          Adjust Credit
        </button>
 <button className="px-4 py-2 border border-red-400 text-red-500 rounded-lg text-sm hover:bg-red-50">
          Block
        </button>

 </div>
</div>
</div>
          <p className="text-gray-500 text-sm mt-1">
            ID: RT8821 | Mumbai, MH | GST: 27AADCM2233M1Z5
          </p>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
            <span>⭐ 4.8 (124 reviews)</span>
            <span>✔ Partner for 5 years</span>
          </div>
        </div>
      </div>

      
    
        

        {/* Grid Section */}
         {/* <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">  */}
         {/* TOP CARDS */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         { /* CARD 1 */}
  <div className="bg-white rounded-2xl shadow p-5">
     <div className="flex flex-row justify-between gap-2">
    <p className="text-gray-500 text-lg">Order Consistency</p>
    <BarChart className="text-green-600 w-10 h-10" />
    </div>
    <h2 className="text-2xl font-bold mt-1">94%</h2>
    <p className="text-green-500 text-sm mt-1">+2.4% from last month</p>
  </div>

  {/* CARD 2 */}
  <div className="bg-white rounded-2xl shadow p-5">
     <div className="flex flex-row justify-between gap-2">
    <p className="text-gray-500 text-lg">Financial Overview</p>
<Building2 className="text-blue-500 w-10 h-10"/>
    </div>
    <h2 className="text-sm font-bold mt-1">Credit Limit Usage:₹8.4L / ₹10L</h2>
    <p className="text-gray-500 text-sm mt-1">Next Due: Oct 24, 2023</p>
  </div>

  {/* CARD 3 */}
  <div className="bg-white rounded-2xl shadow p-5">
      <div className="flex flex-row justify-between gap-2">
     
    <p className="text-gray-500 text-lg">Order Metrics</p>
     <ShoppingBag className="text-purple-600 w-10 h-10" />
    </div>
    <h2 className="text-2xl font-bold mt-1">₹2.45M</h2>
    <p className="text-gray-500 text-sm">Total revenue YTD</p>
    <p className="text-gray-500 rounded-2xl  shadow p-5 w-fit text-sm mt-1">42 Orders Total</p>
  </div>
  {/* CARD 4 */}
  <div className="bg-white rounded-2xl shadow p-5">
    <div className="flex flex-row justify-between gap-2">
     
    <p className="text-gray-500 text-lg">Profitability</p>
      <Banknote className="text-green-600 text-lg w-10 h-10" /></div>
    <h2 className="text-2xl font-bold mt-1">18.2%</h2>
    <p className="text-gray-500 text-sm mt-1">Average gross margin</p>
    <p className="text-green-500">A-Class Retailer</p>
  </div>
   </div>
  
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-6">

            {/* Recent Orders */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
  <Table
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 5 }}
              />

      
            </div>

            {/* Trend Analysis */}
            <div className="bg-white rounded-2xl shadow p-6">
           
  <div className="flex items-center justify-between">

    {/* LEFT SIDE */}
    <div>
      <h2 className="text-lg font-semibold">Trend Analysis</h2>
      <span className="text-gray-500 text-sm">
        Order Volume & Revenue (Last 6 Months)
      </span>
    </div>

    {/* RIGHT SIDE (SELECT) */}
    <select className="border rounded-lg px-3 py-1 text-sm bg-white shadow-sm">
      <option>Monthly</option>
      <option>Weekly</option>
      <option>Yearly</option>
    </select>

  
              </div>
              {/* <div className="flex flex-row gap-2"> */}

<div className=" w-full h-72 mt-4">
  <ResponsiveContainer width="100%" height="100%">
    <LineChart data={trendData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />

      <Line
        type="monotone"
        dataKey="revenue"
        stroke="#22c55e"
        strokeWidth={3}
      />

      <Line
        type="monotone"
        dataKey="orders"
        stroke="#3b82f6"
        strokeWidth={3}
      />
    </LineChart>
  </ResponsiveContainer>
</div>
              </div>
            

   </div>       {/* left */}

         
              {/* RIGHT SIDE */}
  <div className="lg:col-span-1 space-y-6">

            {/* Risk Assessment */}
           <div className="bg-white rounded-2xl shadow p-6">
  <h2 className="text-lg font-semibold mb-2">Risk Assessment</h2>

  <div className="bg-green-100 rounded-2xl p-4 mt-2">
    <div className="flex items-center gap-2">
    <CheckCircle className="text-green-600 w-5 h-5 "/>
    <p className="text-green-600 font-medium leading-tight">
      Payment Health
    </p>
    </div>
    <p className="text-green-500 text-sm leading-tight mt-1">
      Excellent credit behaviour, no late payments in 12 months.
    </p>
  
</div>
<div className="bg-yellow-100 rounded-2xl p-4 mt-2">
   <div className="flex items-start gap-2">
      <AlertTriangle className="text-yellow-600 w-5 h-5 mt-1 shrink-0" />
    <p className="text-yellow-600 font-medium leading-tight">
      Return Rate
    </p>
    </div>
    <p className="text-yellow-500 text-sm leading-tight mt-1">
     Slight increase in returns of perishable items (+3%).
    </p>
  </div>
  <div className="bg-blue-100 rounded-2xl p-4 mt-2">
    <div className="flex items-center gap-2">
    <Info className="text-blue-600 w-5 h-5 mt-1" />
    <p className="text-blue-600 font-medium leading-tight">
     New Category Reach
    </p></div>
    <p className="text-blue-500 text-sm leading-tight mt-1">
      Started ordering from Premium Wellness Line recently.
    </p>
  </div>
</div>
            {/* Documents */}
            <div className="bg-white rounded-2xl shadow p-6">
           
  <h2 className="text-2xl font-extrabold mb-4">Documents</h2>
     <div className="-mx-6 border-t border-gray-300">
</div>
  <div className="flex items-start mt-4 gap-3">
    
    {/* Icon */}
    <FileText className="text-blue-600 w-5 h-5 mt-1 bg-blue-100 rounded-xl shadow-sm p-1" />

    {/* Text */}
    <div className="flex flex-col">
      <span className="text-black font-medium">
        Partnership Agreement
      </span>
      <span className="text-gray-400 text-sm">
        Expires: Jan 2019
      </span>
    </div>
  </div>
  
  <div className="flex items-start mt-4 gap-3">
    
    {/* Icon */}
    <FileText className="text-red-600 w-5 h-5 mt-1 bg-red-100 rounded-xl shadow-sm p-1" />

    {/* Text */}
    <div className="flex flex-col">
      <span className="text-black font-medium">
        Trade License
      </span>
      <span className="text-gray-400 text-sm">
        Expires: Dec 2024
      </span>
    </div>
  </div>


  <div className="flex items-start mt-4 gap-3">
    
    {/* Icon */}
    < CheckCircle className="text-green-600 w-5 h-5 mt-1  bg-green-100 rounded-xl shadow-sm p-1" />

    {/* Text */}
    <div className="flex flex-col">
      <span className="text-black font-medium">
        GST Certification
      </span>
      <span className="text-gray-400 text-sm">
        Verified: Aug 2023
      </span>
    </div>
  </div>
<div className="mt-6 -mx-6 border-t border-gray-200 pt-4 flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-50">
  
  <Upload className="w-5 h-5 text-gray-600" />
  
  <span className="text-gray-600 text-sm font-medium">
    Upload New Document
  </span>

</div>
    
    

  

</div>
 
            

          </div>

        </div>

      </div>
    
</div>
)
}

export default SingleRetailerDetails