import { CurrencyRupee } from "@mui/icons-material";
import {  useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import axiosInstance from '../Dashboard/Form/Utils/AxiosInstance';

const Billing = () => {   
  const location = useLocation();

  const cart = location.state?.cart || [];
  const [paymentMethod, setPaymentMethod] = useState("");
  // calculations
  const subtotal = cart.reduce(
    (acc, item) => acc + item.qty * (item.ProductPrice || 0),
    0
  );
 
  const shipping = subtotal > 1000 ? 0 : 150;
  const cgst = subtotal * 0.025;
  const sgst = subtotal * 0.025;
  const discount = subtotal > 2000 ? subtotal * 0.1 : 0;

  const total = subtotal + shipping + cgst + sgst - discount;

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);


  const navigate = useNavigate();

  const handleCheckout =async () => {
    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    if (!paymentMethod) {
      alert("Please select payment method");
      return;
    }
    //  Stripe only for card
  if (paymentMethod !== "Card") {
    alert("Only Card payment supported for now");
    return;
  }
    // api calling for stripe
   try{
    const orderId = Date.now();

    const res = await axiosInstance.post("/registerroute/billController", {
      amount: total,
      id: orderId,
      });

    console.log("Stripe response:", res?.data);
           
 const orderData = {
  id: Date.now(),
  items: cart,
  subtotal,
  shipping,
  cgst,
  sgst,
  discount,
  total,
  paymentMethod,
  date: new Date().toLocaleString()
};

// ✅ SAVE IN LOCALSTORAGE
localStorage.setItem("orderData", JSON.stringify(orderData));

   //  IMPORTANT LINE
    window.location.href = res.data.url;
   }catch (error){
        console.log("Payment error:", error);
    alert("Payment failed");
   }

   
 
    navigate("OrderSuccess", {
      state: { order: orderData }
    })
  };

  return (
    <>

      <div className="flex flex-col lg:flex-row gap-6 m-4 lg:m-8">

        {/* LEFT SIDEBAR */}
        <div className="w-full lg:w-[20%]">
          <div className="bg-gray-50 rounded-xl shadow-sm p-4 border space-y-4">
            <h2 className="font-semibold text-lg flex items-center gap-2">
              💊 SmartPharm POS
            </h2>

            <div className="text-sm text-gray-600">
              Main Store <br />
              <span className="text-green-600">• COUNTER 01 ONLINE</span>
            </div>

            <button className="bg-green-100 text-green-700 px-3 py-2 rounded-md font-medium flex items-center gap-2">
              <CurrencyRupee /> New Billing
            </button>
          </div>
        </div>

        {/* MIDDLE - ORDER TABLE */}
        <div className="w-full lg:w-[45%]">
          <div className="bg-white rounded-xl shadow border">
            <div className="px-5 py-3 border-b flex justify-between">
              <h2 className="font-semibold text-lg">Current Order</h2>
              <span className="text-sm text-gray-500">
                {totalItems} items
              </span>
            </div>

            <div className="p-5 overflow-x-auto">
              {cart.length === 0 ? (
                <p className="text-gray-400">No items in cart</p>
              ) : (
                <table className="w-full text-sm">
                  <thead className="border-b text-gray-500">
                    <tr>
                      <th className="text-left py-2">Product</th>
                      <th className="text-center">Qty</th>
                      <th className="text-right">Price</th>
                      <th className="text-right">Total</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cart.map((item) => (
                      <tr key={item._id} className="border-b">
                        <td className="py-2">{item.ProductName}</td>
                        <td className="text-center">{item.qty}</td>
                        <td className="text-right">₹{item.ProductPrice}</td>
                        <td className="text-right font-medium">
                          ₹{(item.qty * item.ProductPrice).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT - SUMMARY */}
        <div className="w-full lg:w-[35%]">
          <div className="bg-white rounded-2xl shadow p-5 space-y-5">

            {/* SUMMARY */}
            <div className="space-y-2 text-sm">
              <h2 className="font-semibold text-lg mb-2">Summary</h2>

              <div className="flex justify-between">
                <span>Subtotal ({totalItems} items)</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span className={shipping === 0 ? "text-green-600" : ""}>
                  {shipping === 0 ? "FREE" : `₹${shipping}`}
                </span>
              </div>

              <div className="flex justify-between">
                <span>CGST (2.5%)</span>
                <span>₹{cgst.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>SGST (2.5%)</span>
                <span>₹{sgst.toFixed(2)}</span>
              </div>

              {discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span>-₹{discount.toFixed(2)}</span>
                </div>
              )}

              <hr />

              <div className="flex justify-between font-bold text-lg">
                <span>Total Payment</span>
                <span className="text-green-600">
                  ₹{total.toFixed(2)}
                </span>
              </div>
            </div>

            {/* PAYMENT */}
            <div className="space-y-3">
              <h3 className="font-semibold text-sm">
                SELECT PAYMENT METHOD
              </h3>

              <div className="grid grid-cols-3 gap-3">
                {["UPI", "Card", "Cash"].map((method) => (
                  <div
                    key={method}
                    onClick={() => setPaymentMethod(method)}
                    className={`border rounded-xl py-3 text-center cursor-pointer 
      ${paymentMethod === method
                        ? "bg-green-100 border-green-500"
                        : "hover:bg-green-50"}`}
                  >
                    {method}
                  </div>
                ))}
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600"
              >
                ✔ Complete Checkout
              </button>  

              <button className="w-full text-sm text-gray-500 hover:underline">
                🖨 Print Quotation Only
              </button>
            </div>

          </div>
        </div>

      </div>
      <Outlet />
    </>);
};

export default Billing;