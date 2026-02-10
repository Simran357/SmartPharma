import React from "react";
import LocalShippingOutlined from '@mui/icons-material/LocalShippingOutlined';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import EditCalendarRounded from '@mui/icons-material/EditCalendarRounded';
import SupportAgentRounded from '@mui/icons-material/SupportAgentRounded';
import Download from '@mui/icons-material/Download';
const Cart = () => {
  return (
    <div className="min-h-screen  p-6">
      <div className="max-w-7xl mx-auto">

            <div className="mb-6">
                {/* Heading */}
              <h1 className="text-2xl font-bold mb-2">
               Review Your Order
                </h1>

           {/* GST + Button row */}
         <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
           GSTIN: 29AABCC1234F1Z5 •<span className="text-green-600"> Verified Retailer</span>
          </p>
          <button className="text-sm px-4 py-1.5 border border-gray-500
           text-black font-medium rounded-md hover:bg-gray-100 transition">
           <Download/> Download Quote
           </button>
            </div>
            </div>

          
     <div className="flex items-center justify-between bg-gray-50 rounded shadow mb-8 text-sm px-4 py-2 w-[450px]">
        {/* Left */}
       <span className="flex items-center gap-2 text-green-600 font-medium">
      <span className="w-7 h-7 rounded-full bg-green-600 text-white flex items-center justify-center">
            1
      </span> Review Cart </span>

         {/* Center */}
         
         <span className=" text-gray-400 ">
         2 Logistics
         </span>

           {/* Right */}
          <span className="text-gray-400">
             3 Payment
           </span>
           </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-6">

            {/* CART */}
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h2 className="font-semibold mb-4"><AddShoppingCart style={{ color: "green" }} /> Items in Cart (3)</h2>

              <div className="grid grid-cols-7 text-l text-gray-500 border-b pb-2">
                <span>Medicine</span>
                <span>Batch / Expiry</span>
                <span>Qty</span>
                <span>Unit Price</span>
                <span>Scheme</span>
                <span>Total</span>
              </div>

              {/* ITEM 1 */}
              <div className="grid grid-cols-7 items-center py-4 border-b text-sm">
                <div>
                  <p className="font-medium ">Amoxicillin 500mg</p>
                  <p className="text-xs text-gray-500">Broad-spectrum antibiotic</p>
                </div>
                <span>#B44201 <br /> Exp: 12/25</span>
                <span className="flex gap-2 items-center">
                  <button className="px-2 border rounded">-</button> 50
                  <button className="px-2 border rounded">+</button>
                </span>
                <span>₹12.00</span>
                <span className="text-green-600 text-xs bg-green-100 px-2 py-1 rounded-full w-fit">
                  10+5 FREE
                </span>
                <span className="font-semibold">₹600.00</span>
              </div>

              {/* ITEM 2 */}
              <div className="grid grid-cols-7 items-center py-4 border-b text-sm">
                <div>
                  <p className="font-medium">Paracetamol 650mg</p>
                  <p className="text-xs text-gray-500">Analgesic & Antipyretic</p>
                </div>
                <span>#B99182 <br /> Exp: 10/24</span>
                <span className="flex gap-2 items-center">
                  <button className="px-2 border rounded">-</button> 100
                  <button className="px-2 border rounded">+</button>
                </span>
                <span>₹2.50</span>
                <span className="text-green-600 text-xs bg-green-100 px-2 py-1 rounded-full w-fit">
                  20+1 FREE
                </span>
                <span className="font-semibold">₹250.00</span>
              </div>

              {/* ITEM 3 */}
              <div className="grid grid-cols-7 items-center py-4 text-sm">
                <div>
                  <p className="font-medium">Paracetamol 650mg </p>
                  <p className="text-xs text-gray-500">Antihistamine</p>
                </div>
                <span>#B11029 <br /> Exp: 08/26</span>
                <span className="flex gap-2 items-center">
                  <button className="px-2 border rounded">-</button> 20
                  <button className="px-2 border rounded">+</button>
                </span>
                <span>₹5.00</span>
                <span className="text-gray-400 text-xs">No scheme</span>
                <span className="font-semibold">₹100.00</span>
              </div>
            </div>

            {/* COURIER + PICKUP */}
            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-white rounded-xl shadow-sm p-5">
                <h3 className="font-bold text-black text-2xl mb-4">
                  <LocalShippingOutlined style={{ color: "green" }} /> Courier Selection</h3>

                <div className="border border-green-500 rounded-lg p-4 flex justify-between items-center mb-3">
                  <div>
                    <p className="font-medium  text-black">Delivery FastTrack</p>
                    <p className="text-xs text-gray-500">Est.Arrival:24–48 Hours</p>
                  </div>
                  <span className="font-semibold">₹150.00</span>
                </div>

                <div className="border rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <p className="font-medium">BlueDart Express</p>
                    <p className="text-xs text-gray-500">Est.Arrival:12–24 Hours</p>
                  </div>
                  <span className="font-semibold">₹280.00</span>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col space-y-4">
                <h3 className="font-bold text-black text-2xl">< EditCalendarRounded style={{ color: "green" }}/>  Warehouse Pickup</h3>
                <p className="text-xs text-gray-500">
                  Pick up from Bengaluru Central Hub to save shipping.
                </p>

                <select className="w-full border rounded-lg px-3 py-2 text-sm">
                  <option>Tomorrow, 10:00 AM - 12:00 PM</option>
                  <option>Tomorrow, 12:00 PM - 02:00 PM</option>
                </select>

                <button className="w-full bg-green-600 text-white py-2 rounded-lg font-medium">
                  Schedule Pickup
                </button>
              </div>


            </div>
          </div>

          {/* RIGHT SIDE – GST CARD */}
          <div className="sticky top-6 h-fit">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-[#0f2e1f] text-white px-4 py-3 font-semibold">
                GST & Price Breakdown
              </div>

              <div className="p-4 text-sm space-y-3 mb-4">
                <div className="flex justify-between">
                  <span>Cart Subtotal</span>
                  <span>₹950.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Scheme Discount</span>
                  <span className=" text-green-600">-₹185.00</span>
                </div>
                <div className="flex justify-between mb-8 ">
                  <span>Delivery Charges</span>
                  <span>₹150.00</span>
                </div>


                <div className="flex justify-between text-gray-500">
                  <span>TAX BREAKDOWN</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>CGST (9%)</span>
                  <span>₹68.85</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>SGST (9%)</span>
                  <span>₹68.85</span>
                </div>

                <div className="flex justify-between text-gray-500">
                  <span>IGST (0%)</span>
                  <span>₹0.00</span>
                </div>

                <div className="bg-green-50 text-green-700 text-xs p-3  rounded-lg">
                  <b>Total Savings:</b> ₹185.00
                  <p className="mt-1 text-[11px] text-gray-600">
                    You’ve unlocked 6 free units via active schemes.
                  </p>
                </div>

                <div className="flex flex-col text-sm">
                  <span className="text-gray-500">GRAND TOTAL</span>
                  <span className="font-bold text-4xl">₹1,052.70</span>
                </div>


                <button className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold">
                  PLACE ORDER →
                </button>
              </div>
            </div>

            {/* Dispatch Info Below Button */}
            <div className="flex flex-col text-black font-bold text-sm  mt-3 bg-white p-5 rounded shadow">
              <span className="w-2 h-2  rounded-full mr-2 inline-block"></span>
              <span><SupportAgentRounded style={{ color: "gray" }} />
                  Need assistance?</span>
              
           <p className="mt- text-gray-600 font-normal">
             Call our procurement desk +91 80-2234-XXXX
              </p>
            </div>


          </div>




        </div>
      </div>
    </div>
  );
};

export default Cart;
