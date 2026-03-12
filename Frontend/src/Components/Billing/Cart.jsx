import React from "react";
import LocalShippingOutlined from '@mui/icons-material/LocalShippingOutlined';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import EditCalendarRounded from '@mui/icons-material/EditCalendarRounded';
import SupportAgentRounded from '@mui/icons-material/SupportAgentRounded';
import Download from '@mui/icons-material/Download';
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate()
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

          
     <div className="flex items-center justify-between bg-gray-50 rounded shadow mb-8 text-sm px-4 py-2 w-[450]">
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
               <div className="flex justify-between items-center"> <h3 className="font-bold text-black text-2xl mb-4">
                  <LocalShippingOutlined style={{ color: "green" }} /> Courier Selection</h3>
                 <span className="text-green-600 text-xs whitespace-nowrap" 
                 onClick={()=>navigate("/Connectcourier")}
                 >Connect Courier</span></div>
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
                <button onClick={()=>{navigate("/Courier")}}>see more option</button>
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



          {/* </div> */}

{/* right */}
{/* RIGHT SIDE */}
<div className="flex flex-col gap-6">

    {/* <div className="max-w-sm bg-white rounded-2xl shadow-md p-6 border"> */}
    <div className="max-w-sm bg-white rounded-2xl shadow-md p-6 border h-fit sticky top-6"> <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      {/* Order Fulfillment */}
      <div className="flex justify-between mb-2">
        <span className="font-medium">Order Fulfillment</span>
        <span className="text-green-600 font-semibold">100% Complete</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
        <div className="bg-green-500 h-3 rounded-full w-full"></div>
      </div>

      <p className="text-sm text-gray-500 mb-6">
        All 3 products are ready to ship immediately.
      </p>

      {/* Price Details */}
      <div className="space-y-3 text-gray-700">
        <div className="flex justify-between">
          <span>Subtotal (3 items)</span>
          <span>$1,550.00</span>
        </div>

        <div className="flex justify-between">
          <span>Est. Shipping</span>
          <span>$25.00</span>
        </div>

        <div className="flex justify-between">
          <span>Tax</span>
          <span>$124.00</span>
        </div>

        <div className="flex justify-between bg-green-50 text-green-700 px-2 py-1 rounded">
          <span>Optimization Savings</span>
          <span>-$45.00</span>
        </div>
      </div>

      <hr className="my-5" />

      {/* Order Total */}
      <div className="flex justify-between items-center mb-5">
        <span className="text-lg font-semibold">Order Total</span>
        <span className="text-orange-600 text-xl font-bold">$1,654.00</span>
      </div>

      {/* Button */}
      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 shadow-md">
        
        Proceed to Checkout
      </button>

      {/* Footer Info */}
      <div className="mt-4 text-sm text-gray-500 space-y-1">
        <p>✔ Secure B2B Payment Processing</p>
        <p>🚚 Guaranteed delivery by Thursday</p>
      </div>
</div>
{/* </div>  */}
{/* NEXT BOX */}
<div className="max-w-sm bg-white rounded-2xl shadow-md p-6 border h-fit sticky top-6"> 
  <h2 className="text-xl font-semibold mb-4">SHIPMENT ORIGINS</h2>

<div className="flex gap-4">
  {/* map */}
  <div className="w-28 h-28 bg-gray-100 rounded-lg flex items-center justify-center">
            <span className="text-red-500 text-2xl">📍</span>
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center">
            
            <p className="text-xs text-gray-500 font-semibold">
              PRIMARY HUB
            </p>
            <p className="text-gray-800 font-medium mb-2">
              Mumbai West DC
            </p>

            <p className="text-xs text-gray-500 font-semibold">
              SECONDARY HUB
            </p>
            <p className="text-gray-800 font-medium">
              Bangalore Logistics Park
            </p>

          </div>
        </div>
</div>
</div>
</div>
        </div>
      </div>
    
  );
};

export default Cart