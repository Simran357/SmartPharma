import { useEffect, useState } from "react";
import axiosInstance from "../Dashboard/Form/Utils/AxiosInstance";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const [order, setOrder] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
  console.log("OrderSuccess page loaded");
  const stored = localStorage.getItem("orderData");
  console.log(localStorage.getItem("orderData"))
  if (stored) {
    
    const parsed = JSON.parse(stored);
    console.log("Recovered Order:", parsed);

    setOrder(parsed); //  THIS FIXES YOUR UI

    axiosInstance.post("/registerroute/orderController", parsed)
      .then(() => {
        console.log("Order saved in DB");
      })
      .catch((err) => console.log(err));
  } else {
    console.log("No data in localStorage");
  }
}, []);


  if (!order)
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">No order found</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-3xl p-6">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-green-600 text-3xl font-bold">
            ✅ Payment Successful
          </h1>
          <p className="text-gray-500 mt-2">
            Your order has been placed successfully
          </p>
        </div>

        {/* Order Info */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <div className="flex justify-between mb-2">
            <span className="font-semibold">Order ID:</span>
            <span>{order.id}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Total Amount:</span>
            <span className="text-green-600 font-bold">₹{order.total}</span>
          </div>
        </div>

        {/* Items List */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Order Items</h2>

          <div className="border rounded-lg overflow-hidden">
            {order.items.map((item, index) => (
              <div
                key={index}
                className={`flex justify-between p-3 ${
                  index !== order.items.length - 1
                    ? "border-b"
                    : ""
                }`}
              >
                <span className="font-medium">{item.name}</span>
                <span className="text-gray-600">
                  Qty: {item.quantity}
                </span>
              </div>
            ))}
          </div>
        </div>


       





        {/* Button */}
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;  