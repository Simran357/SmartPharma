import { useEffect, useState } from "react";
import axiosInstance from "../Dashboard/Form/Utils/AxiosInstance";

const OrderSuccess = () => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("orderData"));

    if (data) {
      setOrder(data);

      // ✅ SEND ORDER TO BACKEND (Wholesaler tak jayega)
      axiosInstance.post("/registerroute/orderController", data)
        .then(res => {  
          console.log("Order saved:", res.data);
          localStorage.removeItem("orderData"); // cleanup
        })
        .catch(err => {
          console.log("Error saving order", err);
        });
    }
  }, []);

  if (!order) return <p>No order found</p>;

  return (
    <div className="p-6">
      <h1 className="text-green-600 text-2xl">✅ Payment Successful</h1>

      <p><b>Order ID:</b> {order.id}</p>
      <p><b>Total:</b> ₹{order.total}</p>

      {order.items.map(item => (
        <div key={item._id}>
          {item.ProductName} x {item.qty}
        </div>
      ))}
    </div>
  );
};

export default OrderSuccess;  