import React from "react";
import LocalShippingOutlined from '@mui/icons-material/LocalShippingOutlined';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import EditCalendarRounded from '@mui/icons-material/EditCalendarRounded';
import Download from '@mui/icons-material/Download';
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
const Cart = () => {
  const navigate = useNavigate()
const location = useLocation();

const cartItems = location.state?.cartProduct || [];
const [cart, setCart] = useState(cartItems);
console.log("cart page product", cartItems);
const increaseQty = (id) => {
  setCart((prev) =>
    prev.map((item) =>
      item._id === id
        ? { ...item, qty: item.qty + 1 }
        : item
    )
  );
}; 

const decreaseQty = (id) => {
  setCart((prev) =>
    prev
      .map((item) =>
        item._id === id
          ? { ...item, qty: item.qty - 1 }
          : item
      )
      .filter((item) => item.qty > 0)
  );
};

const subtotal = cart.reduce(
  (acc, item) => acc + item.qty * (item.price || 0),
  0
);
const shipping = subtotal > 1000 ? 0 : 150;

const tax = subtotal * 0.05; // 5% GST example

const discount = subtotal > 2000 ? subtotal * 0.1 : 0; // 10% discount rule

const total = subtotal + shipping + tax - discount;

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
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-6">

            {/* CART */}
    <div className="bg-white rounded-xl shadow-sm p-5">

  <h2 className="font-semibold mb-4 flex items-center gap-2">
    <AddShoppingCart style={{ color: "green" }} />
    Items in Cart ({cartItems.length})
  </h2>

  {/* HEADER (desktop only) */}
  <div className="hidden md:grid grid-cols-7 text-gray-500 pb-2 border-b text-sm">
    <span>Medicine</span>
    <span>Batch / Expiry</span>
    <span>Qty</span>
    <span>Unit Price</span>
    <span>Scheme</span>
    <span>Total</span>
  </div>

  {/* EMPTY STATE */}
  {cartItems.length === 0 ? (
    <p className="text-gray-400 text-sm mt-4">Cart is empty</p>
  ) : (
    
    <div className="space-y-4">

      {cartItems.map((item) => (
        
        <div
          key={item._id}
          className="
            grid grid-cols-1 md:grid-cols-7 
            gap-3 md:gap-0 
            items-start md:items-center 
            py-4 border-b text-sm
          "
        >

          {/* NAME */}
          <div>
            <p className="font-medium">{item.ProductName}</p>
            <p className="text-xs text-gray-500">{item.ProductCategory}</p>
          </div>

          {/* BATCH / EXPIRY */}
          <div className="text-xs md:text-sm">
            {item.ProductSku}
            <br />
            Exp: {new Date(item.ProductExpiryDate).toLocaleDateString()}
          </div>

          {/* QTY */}
          <div className="flex items-center gap-2">
            <button
              className="px-2 py-1 border rounded"
              onClick={() => decreaseQty(item._id)}
            >
              -
            </button>

            <span className="min-w-20px text-center">
              {item.qty}
            </span>

            <button
              className="px-2 py-1 border rounded"
              onClick={() => increaseQty(item._id)}
            >
              +
            </button>
          </div>

          {/* UNIT PRICE */}
          <div>₹{item.price || 0}</div>

          {/* SCHEME */}
          <div>
            <span className="text-green-600 text-xs bg-green-100 px-2 py-1 rounded-full w-fit">
              No Scheme
            </span>
          </div>

          {/* TOTAL */}
          <div className="font-semibold">
            ₹{item.qty * (item.price || 0)}
          </div>

        </div>
      ))}

    </div>
  )}
</div>     {/* COURIER + PICKUP */}
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
{/* RIGHT SIDE */}
<div className="lg:col-span-1 space-y-6">

  {/* ORDER SUMMARY */}
  <div className="bg-white rounded-2xl shadow-md p-6 border h-fit sticky top-6">
    
    <h2 className="text-xl font-semibold mb-4">
      Order Summary
    </h2>

    {/* Order Fulfillment */}
    <div className="flex justify-between mb-2">
      <span className="font-medium">Order Fulfillment</span>
      <span className="text-green-600 font-semibold">100% Complete</span>
    </div>

    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
      <div className="bg-green-500 h-3 rounded-full w-full"></div>
    </div>

    <p className="text-sm text-gray-500 mb-6">
      All items are ready to ship immediately.
    </p>

    {/* Price */}
   <div className="space-y-3 text-gray-700">

  {/* Subtotal */}
  <div className="flex justify-between">
    <span>Subtotal ({cart.length} items)</span>
    <span>₹{subtotal.toFixed(2)}</span>
  </div>

  {/* Shipping */}
  <div className="flex justify-between">
    <span>Shipping</span>
    <span className={shipping === 0 ? "text-green-600" : ""}>
      {shipping === 0 ? "FREE" : `₹${shipping}`}
    </span>
  </div>

  {/* Tax */}
  <div className="flex justify-between">
    <span>GST (5%)</span>
    <span>₹{tax.toFixed(2)}</span>
  </div>

  {/* Discount */}
  {discount > 0 && (
    <div className="flex justify-between text-green-600">
      <span>Discount</span>
      <span>-₹{discount.toFixed(2)}</span>
    </div>
  )}

</div>

    <hr className="my-5" />

    <div className="flex justify-between items-center mb-5">
      <span className="text-lg font-semibold">Order Total</span>
      <span className="text-orange-600 text-xl font-bold">
  ₹{total.toFixed(2)}
</span>
    </div>

    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl">
      Proceed to Checkout
    </button>
  </div>

  {/* SHIPMENT ORIGINS */}
  <div className="bg-white rounded-2xl shadow-md p-6 border">
    
    <h2 className="text-xl font-semibold mb-4">
      SHIPMENT ORIGINS
    </h2>

    <div className="flex gap-4">

      <div className="w-28 h-28 bg-gray-100 rounded-lg flex items-center justify-center">
        <span className="text-red-500 text-2xl">📍</span>
      </div>

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