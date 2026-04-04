import { useLocation } from "react-router-dom";

const OrderSuccess = () => {
  const { state } = useLocation();
  const order = state?.order;

  if (!order) return <p>No order found</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">

      <h1 className="text-2xl font-bold text-green-600 mb-4">
        ✅ Payment Successful
      </h1>

      <div className="bg-white shadow rounded-xl p-5 space-y-3">
        <p><b>Order ID:</b> {order.id}</p>
        <p><b>Date:</b> {order.date}</p>
        <p><b>Payment:</b> {order.paymentMethod}</p>

        <hr />

        {order.items.map(item => (
          <div key={item._id} className="flex justify-between text-sm">
            <span>{item.ProductName} x {item.qty}</span>
            <span>₹{item.qty * item.ProductPrice}</span>
          </div>
        ))}

        <hr />

        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>₹{order.total.toFixed(2)}</span>
        </div>
      </div>

    </div>
  );
};

export default OrderSuccess;