import React from "react";
import { Calendar } from "lucide-react";
import { CreditCard } from "lucide-react";
import { User } from "lucide-react";
import { MapPin } from "lucide-react";
import { Receipt } from "lucide-react";
const SingleOrder = () => {
  const order = {
    id: "ORD12345",
    status: "Pending",
    date: "October 24, 2023",
    payment: "Credit Card **** 4242",
    customer: {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1234567890",
      account: "Premium Partner",
    },
    shipping: {
      address: "123 Wholesale Ave, Suite 100, Cityville, State 12345, USA",
      updated: "24 Oct 10:42 AM",
    },
    items: [
       {
    name: "Paracetamol 500mg Tablets",
    qty: 10,
    price: 50,
  },
  {
    name: "Amoxicillin 250mg Capsules",
    qty: 2,
    price: 200,
  },
  {
    name: "Vitamin D3 Softgel 60K IU",
    qty: 4,
    price: 50,
      },
    ],
  };

  const subtotal = order.items.reduce(
    (acc, item) => acc + item.qty * item.price,
    0
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT SECTION */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Order Header */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold">{order.id}</h1>
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
                  {order.status}
                </span>
             
<div className="space-y-2 mt-2">
      {/* Date with icon */}
      <div className="flex items-center gap-2 mt-2 text-gray-500">
  <Calendar className="w-4 h-4 text-blue-600 shrink-0" />
  <span className="leading-none">{order.date}</span>
</div>
      
              <div className="flex items-center gap-2 text-gray-500 mb-2">
  <CreditCard className="w-4 h-4 text-blue-600 shrink-0" />
  <span className="leading-none">{order.payment}</span>
</div>
</div>
</div>

              <div className="flex gap-4">
                <button className="px-4 py-2 bg-gray-200 rounded-lg">
                  Download PDF
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                  Update Status
                </button>
              </div>
            </div>
          </div>

         
<div className="bg-white p-6 rounded-2xl shadow">
  
<div className="flex justify-between items-center mb-4">
  <h2 className="font-semibold text-2xl">Order Items</h2>
  <span className="font-medium text-2xl text-gray-500">
    {order.items.length} items ordered
  </span>
</div>
  {/* Heading */}
  <div className="grid grid-cols-5 font-semibold text-gray-600 border-b pb-2 mb-3">
    <div className="col-span-2">Product Name</div>
    <div>Quantity</div>
    <div>Price</div>
    <div>Subtotal</div>
  </div>

  {/* Items */}
  <div className="space-y-4">
    {order.items.map((item, index) => (
      <div
        key={index}
        className="grid grid-cols-5 items-center border-b pb-3"
      >
        <div className="col-span-2 font-medium">
          {item.name}
        </div>
        <div>{item.qty}</div>
        <div>₹{item.price}</div>
        <div>₹{item.price * item.qty}</div>
      </div>
    ))}
  </div>
</div>
</div>
        {/* RIGHT SECTION */}
        <div className="space-y-6">
          
        {/* Customer */}

<div className="bg-white p-6 rounded-2xl shadow">
 
  <div className="flex items-center gap-2 mb-4">
    <User className="w-6 h-6 text-blue-600" />
    <h2 className="font-semibold text-2xl">Customer</h2>
  </div> 
  


  <div className="space-y-4">
    <div>
      <p className="text-sm text-gray-500">FULL NAME</p>
      <p className="font-medium text-lg">{order.customer.name}</p>
    </div>

    <div>
      <p className="text-sm text-gray-500">EMAIL ADDRESS </p>
      <p className="text-gray-800 text-lg">{order.customer.email}</p>
    </div>

    {/* Phone + Account same row */}
    <div className="grid grid-cols-2 gap-6">
      <div>
        <p className="text-sm text-gray-500">PHONE</p>
        <p className="text-gray-800 text-lg">{order.customer.phone}</p>
      </div>

      <div>
        <p className="text-sm text-gray-500">ACCOUNT</p>
        <p className="text-blue-600">{order.customer.account}</p>
      </div>
    </div>
  </div>
</div>
          {/* Shipping */}
<div className="bg-white p-6 rounded-2xl shadow">
 
  <div className="flex items-center gap-2 mb-3">
  <MapPin className="text-blue-600 h-[1.3em] w-[1.3em]" />
    <h2 className="font-semibold text-3xl">Shipping Address</h2>
  </div>

  {order.shipping.address.split(",").map((line, index) => (
    <p key={index} className="text-gray-600">
      {line.trim()}
    </p>
  ))}

  <p className="text-gray-400 mt-2 text-sm">
    Updated: {order.shipping.updated}
  </p>
</div>

          {/* Summary */}
          <div className="bg-blue-900 text-white p-6 rounded-2xl shadow">
             <h2 className="font-semibold text-3xl mb-4">Order Summary</h2> 

            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Tax</span>
              <span>₹0</span>
            </div>

            <div className="flex justify-between mb-4">
              <span>Shipping</span>
              <span>Calculated</span>
            </div>

            <hr className="border-gray-500 mb-4" />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>₹{subtotal}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleOrder;