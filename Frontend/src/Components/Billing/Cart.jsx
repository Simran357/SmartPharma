import React, { useState,useEffect } from "react";
import LocalShippingOutlined from "@mui/icons-material/LocalShippingOutlined";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import EditCalendarRounded from "@mui/icons-material/EditCalendarRounded";
import Download from "@mui/icons-material/Download";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../Dashboard/Form/Utils/AxiosInstance";

const Cart = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const cartItems = location.state?.cartProduct || [];

  const [cart, setCart] = useState(cartItems);

  const [couriers, setCouriers] = useState([]);

  const [loading, setLoading] = useState(false);
const {id} = useParams()

  useEffect(() => {
    const fetchCouriers = async () => {
      try {
        const wholesalerId = id // dynamic kar lena later

        const res = await axiosInstance.get(
          `/registerRoute/getConnectedCouriers/${wholesalerId}`
        );

        const couriers = res.data.data.map((c) => c.courierId);

        setCouriers(couriers);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCouriers();
  }, []);




  // Qty
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item._id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const totalWeight = cart.reduce(
    (acc, item) => acc + item.qty * (item.weight || 1),
    0
  );

  // Pricing
  const subtotal = cart.reduce(
    (acc, item) => acc + item.qty * (item.ProductPrice || 0),
    0
  );

  // const shipping = selectedCourier?.freight_charge || 0;
  const tax = subtotal * 0.05;
  const discount = subtotal > 2000 ? subtotal * 0.1 : 0;
  const total = subtotal + tax - discount;

  return (
    <>
      <div className="min-h-screen p-6">
        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">
              Review Your Order
            </h1>

            <div className="flex justify-between">
              <p className="text-sm text-gray-500">
                GSTIN: 29AABCC1234F1Z5 • Verified Retailer
              </p>
              <button className="text-sm border px-3 py-1 rounded">
                <Download /> Download Quote
              </button>
            </div>
          </div>

          {/* GRID */}
          <div className="grid lg:grid-cols-3 gap-6">

            {/* LEFT */}
            <div className="lg:col-span-2 space-y-6">

              {/* CART */}
              <div className="bg-white rounded-xl shadow-sm p-5">
                <h2 className="font-semibold mb-4 flex items-center gap-2">
                  <AddShoppingCart style={{ color: "green" }} />
                  Items in Cart ({cart.length})
                </h2>

                {/* HEADER (desktop only) */}
                <div className="hidden md:grid grid-cols-4 text-gray-500 pb-2 border-b text-sm">
                  <span>Medicine</span>
                  <span>Batch / Expiry</span>
                  <span>Qty</span>
                  <span>Unit Price</span>
                  <span>Scheme</span>
                  <span>Total</span>
                </div>

                {/* EMPTY STATE */}
                {cart.length === 0 ? (
                  <p className="text-gray-400 text-sm mt-4">Cart is empty</p>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div
                        key={item._id}
                        className="
            grid grid-cols-1 md:grid-cols-4 
            gap-3 md:gap-0 
            items-start md:items-center 
            py-4 border-b text-sm
          "
                      >
                        {/* NAME */}
                        <div>
                          <p className="font-medium">{item.ProductName}</p>
                          <p className="text-xs text-gray-500">
                            {item.ProductCategory}
                          </p>
                        </div>

                        {/* BATCH / EXPIRY */}
                        <div className="text-xs md:text-sm">
                          {item.ProductSku}
                          <br />
                          Exp:{" "}
                          {item.ProductExpiryDate
                            ? new Date(item.ProductExpiryDate).toLocaleDateString()
                            : "N/A"}
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
                        <div>₹{item.ProductPrice || 0}</div>

                        {/* SCHEME */}
                        <div>
                          <span className="text-green-600 text-xs bg-green-100 px-2 py-1 rounded-full w-fit">
                            No Scheme
                          </span>
                        </div>

                        {/* TOTAL */}
                        <div className="font-semibold">
                          ₹{item.qty * (item.ProductPrice || 0)}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>


              {/*  COURIER  */}

              {couriers.map((c) => (
                <div
                  key={c._id}
                  onClick={() => setSelectedCourier(c)}
                  className={`border p-3 rounded mb-2 flex justify-between cursor-pointer
      ${selectedCourier?._id === c._id
                      ? "border-green-600 bg-green-50"
                      : ""
                    }`}
                >
                  <div>
                    <p className="font-medium">{c.name}</p>
                    <p className="text-xs text-gray-500">
                      {c.coverage}
                    </p>
                  </div>

                  <p className="text-green-600 font-semibold">
                    Available
                  </p>
                </div>
              ))}

              COURIER + PINCODE 
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded shadow">
                  <h3 className="flex items-center gap-2 font-bold mb-3">
                    <LocalShippingOutlined style={{ color: "green" }} />
                    Courier Selection
                  </h3>

                    <p className="text-gray-400">Enter pincode first</p>
                  

                  {couriers.map((c) => (
                    <div
                      key={c.courier_company_id}
                      onClick={() => setSelectedCourier(c)}
                      className={`border p-3 rounded mb-2 flex justify-between cursor-pointer
                        ${
                          selectedCourier?.courier_company_id ===
                          c.courier_company_id
                            ? "border-green-600 bg-green-50"
                            : ""
                        }`}
                    >
                      <div>
                        <p className="font-medium">{c.courier_name}</p>
                        <p className="text-xs text-gray-500">
                          {c.estimated_delivery_days} days
                        </p>
                      </div>

                      <p>₹{c.freight_charge}</p>
                    </div>
                  ))}
                </div> 
                <div className="bg-white p-5 rounded shadow">
                  <h3 className="flex items-center gap-2 font-bold">
                    <EditCalendarRounded style={{ color: "green" }} />
                    Delivery Location
                  </h3>

                  <input
                    type="number"
                    placeholder="Enter Pincode"
                    className="w-full border p-2 mt-3"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                  />

                  <button
                    onClick={handleConfirmAddress}
                    className="bg-green-600 text-white w-full mt-3 py-2 rounded"
                  >
                    {loading ? "Loading..." : "Check Delivery"}
                  </button>
                </div>
              </div>
            </div>

            
            <div className="bg-white p-5 rounded shadow h-fit">
              <h2 className="font-semibold mb-3">Order Summary</h2>

              <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
              <p>Shipping: ₹{shipping}</p>
              <p>GST: ₹{tax.toFixed(2)}</p>

              {discount > 0 && (
                <p>Discount: -₹{discount.toFixed(2)}</p>
              )}

              <hr className="my-3" />

              <h3 className="font-bold">Total: ₹{total.toFixed(2)}</h3>

              <button
                disabled={!selectedCourier}
                className="bg-orange-500 text-white w-full mt-4 py-2 rounded disabled:bg-gray-400"
                onClick={() =>
                  navigate(`/Dashboard/Retailer/Order/${id}/Billing`, {
                    state: { cart, total, courier: selectedCourier },
                  })
                }
              >
                Checkout
              </button>
            </div>

          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Cart;