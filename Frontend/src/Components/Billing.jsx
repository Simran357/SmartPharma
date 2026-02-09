// import { useState } from "react";

const Billing = () => {
  // const [open,setOpen] = useState(true);

  return (
    <div className="flex w-full  gap-6 items-start">

      {/* LEFT COLUMN: SIDEBAR */}
      <div className="w-[20%] flex flex-col gap-4 sticky top-0">
        <div className="bg-gray-50 rounded-xl shadow-sm p-4 flex flex-col gap-4 border">
          <h2 className="font-semibold text-lg flex items-center gap-2">
            <span className="text-green-600 text-xl">💊</span>
            SmartPharm POS
          </h2>

          <div className="flex flex-col gap-3 mt-4 text-gray-700">
            <div className="font-medium">Main Store</div>
            <div className="text-sm text-green-600 flex items-center gap-1">
              • COUNTER 01 ONLINE
            </div>

            <button className="bg-green-100 text-green-700 px-3 py-2 rounded-md font-medium flex items-center gap-2">
              💰 New Billing
            </button>

            <button className="px-3 py-2 rounded-md hover:bg-gray-100 flex items-center gap-2">
              ⏱ Recent Sales
            </button>

            <button className="px-3 py-2 rounded-md hover:bg-gray-100 flex items-center gap-2">
              📦 Stock Check
            </button>

            <button className="px-3 py-2 rounded-md hover:bg-gray-100 flex items-center gap-2">
              ➕ Add Patient
            </button>
          </div>

          <div className="text-red-600 text-sm mt-4 border-t pt-2">
            ⚠ LOSS PREVENTION <br />
            5 items Near Expiry detected in Shelf B-12
          </div>
        </div>
      </div>

      {/* MIDDLE COLUMN: CURRENT ORDER */}
      <div className="w-[40%]">
        {open && (
          <div className="bg-white rounded-xl shadow-sm border">

          {/* HEADER */}
          <div className="flex justify-between items-center px-5 py-3 border-b">
            <h2 className="font-semibold text-lg">simran ghhhh</h2>

              <div className="flex items-center gap-3 text-sm">
                <div className="px-4 py-1.5 border rounded-full text-gray-600
                                hover:text-green-600 hover:border-green-500 hover:bg-green-50
                                transition cursor-pointer">
                  Recent
                </div>

                <div className="px-4 py-1.5 border rounded-full text-gray-600
                                hover:text-red-600 hover:border-red-500 hover:bg-red-50
                                transition cursor-pointer">
                  Delete
                </div>
              </div>
            </div>

            {/* TABLE */}
            <div className="p-5 max-h-500px overflow-y-auto">
              <table className="w-full text-sm">
                <thead className="border-b text-green-600">
                  <tr>
                    <th className="text-left py-2">Product</th>
                    <th className="text-center">Qty</th>
                    <th className="text-right">Unit Price</th>
                    <th className="text-right">Subtotal</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {[1, 2, 3].map((_, index) => (
                    <tr key={index} className="border-b last:border-none">
                      <td className="py-2">Paracetamol</td>
                      <td className="text-center">2</td>
                      <td className="text-right">₹100</td>
                      <td className="text-right font-medium">₹200</td>
                      <td className="text-center text-red-500 cursor-pointer hover:underline">
                        Remove
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* RIGHT COLUMN: SUMMARY + PAYMENT */}
      <div className="w-[40%] flex flex-col gap-4">

        {/* COMBINED BOX */}
        <div className="bg-white rounded-2xl shadow p-5 flex flex-col gap-5">

          {/* SUMMARY BOX */}
          <div className="text-sm space-y-2">
            <h2 className="font-semibold text-lg mb-2">Summary</h2>

            <div className="flex justify-between">
              <span>Subtotal (3 items)</span>
              <span>₹495.00</span>
            </div>

            <div className="flex justify-between">
              <span>CGST (2.5%)</span>
              <span>₹12.37</span>
            </div>

            <div className="flex justify-between">
              <span>SGST (2.5%)</span>
              <span>₹12.37</span>
            </div>

            <div className="flex justify-between text-red-500">
              <span>Discount</span>
              <span>-₹0.00</span>
            </div>

            <hr className="border-gray-300" />

            <div className="flex justify-between font-semibold text-lg mt-2">
              <span>Total Payment</span>
              <span className="text-green-600">₹519.74</span>
            </div>
          </div>

          {/* PAYMENT METHOD BOX */}
          <div className="text-sm space-y-3">
            <hr className="border-gray-300" />
            <h3 className="font-semibold text-sm mb-10">SELECT PAYMENT METHOD</h3>

            <div className="grid grid-cols-3 gap-3 mb-30">
              {[
                { icon: "📱", label: "UPI" },
                { icon: "💳", label: "Card" },
                { icon: "💵", label: "Cash" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="border rounded-xl py-4 text-center font-medium shadow-sm
                             flex flex-col items-center gap-1
                             transition-all duration-200
                             hover:border-green-500 hover:bg-green-50 hover:shadow-md
                             cursor-pointer"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <button className="w-full bg-green-500 text-white py-4 rounded-xl font-semibold hover:bg-green-600 transition">
              ✔ Complete Checkout
            </button>

            <button className="w-full mt-20 text-sm text-gray-500 hover:underline">
              🖨 Print Quotation Only
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
