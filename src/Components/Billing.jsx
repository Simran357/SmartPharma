import React from 'react'

const Billing = () => {
  return (
    <>
      
    <div className="flex gap-4">

      {/* LEFT : TABLE */}
      <div className="w-2 /3 bg-white p-4 rounded-lg shadow">
        <h2 className="font-semibold mb-3">Items</h2>

        <table className="w-full text-sm">
          <thead className="border-b">
            <tr>
              <th className="text-left py-2">Name</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td>Paracetamol</td>
              <td className="text-center">2</td>
              <td className="text-right">₹200</td>
            </tr>
          </tbody>
           <tbody>
            <tr className="border-b">
              <td>Paracetamol</td>
              <td className="text-center">2</td>
              <td className="text-right">₹200</td>
            </tr>
          </tbody>
           <tbody>
            <tr className="border-b">
              <td>Paracetamol</td>
              <td className="text-center">2</td>
              <td className="text-right">₹200</td>
            </tr>
          </tbody>
           <tbody>
            <tr className="border-b">
              <td>Paracetamol</td>
              <td className="text-center">2</td>
              <td className="text-right">₹200</td>
            </tr>
          </tbody>
           <tbody>
            <tr className="border-b">
              <td>Paracetamol</td>
              <td className="text-center">2</td>
              <td className="text-right">₹200</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* RIGHT : SUMMARY + 2 BOXES */}
      <div className="w-1/3 space-y-4">

        {/* Summary */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-semibold mb-3">Summary</h2>
          <div className="flex justify-between text-sm">
            <span>Total</span>
            <span>₹200</span>
          </div>
        </div>

        {/* Box 1 */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold">Payment</h3>
          <p className="text-sm text-gray-600">Cash / UPI</p>
        </div>

        {/* Box 2 */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold">Notes</h3>
          <p className="text-sm text-gray-600">No discount</p>
        </div>

      </div>

    </div>
  
    </>
  )
}

export default Billing;
