import React from "react";

const Billing = () => {
  return (
    <div className="flex gap-6 p-6 bg-gray-100 min-h-screen">

      {/* LEFT : ITEMS TABLE */}
      <div className="w-2/3 bg-white p-5 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Items</h2>

        <table className="w-full text-sm">
          <thead className="border-b text-gray-600">
            <tr>
              <th className="text-left py-2">Name</th>
              <th className="text-center">Qty</th>
              <th className="text-right">Price</th>
            </tr>
          </thead>

          <tbody>
            {[1, 2, 3, 4, 5].map((item, index) => (
              <tr key={index} className="border-b last:border-none">
                <td className="py-2">Paracetamol</td>
                <td className="text-center">2</td>
                <td className="text-right font-medium">₹200</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* RIGHT : SUMMARY */}
      <div className="w-1/3 space-y-4">

        {/* Summary */}
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-3">Summary</h2>
          <div className="flex justify-between text-sm text-gray-700">
            <span>Total</span>
            <span className="font-semibold">₹1000</span>
          </div>
        </div>

        {/* Payment */}
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h3 className="font-semibold mb-1">Payment</h3>
          <p className="text-sm text-gray-500">Cash / UPI</p>
        </div>

        {/* Notes */}
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h3 className="font-semibold mb-1">Notes</h3>
          <p className="text-sm text-gray-500">No discount</p>
        </div>
          <div className="bg-white p-5 rounded-xl shadow-sm">
          <h3 className="font-semibold mb-1">Task</h3>
          <p className="text-sm text-gray-500">GIT PROBLEM</p>
        </div>

      </div>
    </div>
  );
};

export default Billing;
