import React from "react";


const stats=[{
    id:1,
     name: "DHL Express", 
     tag: "GLOBAL",
     index:3,
      description:" Fastest international shipping with real-time tracking and custom clearances." ,
    background:"bg-yellow-500 "
},{
    id:2,
    name: "Ecom Express", 
    tag: "ECONOMY",
    index:2,
    description:"Cost-optimized logistic for high-volume B2B e-commerce Fulfilment.",
    background:"bg-red-500 "
},{
    id:3,
    name: "Aramex", 
    tag: "REGIONAL",
 index:2,
    description:"Comphrensive courier solutions across Middle East and Southeast Asia." ,
    background:"bg-green-500 "
},{
    id:4,
    name: "Shadowfax", 
    tag: "HYPERLOCAL",
     index:2,
    description:"Last-mile delivery and hyperlocal Fulfilment for immediate dispatch.",
    background:"bg-red-500 "
},
]
const Courier = () => {
    
  return (
              <div className="min-h-screen bg-gray-100 p-8">
                 {/* Header */}
                  <div className="mb-8">
                {/* First line */}
            <div className="flex justify-between items-center">
              <h1 className="text-3xl  font-bold">Courier Partner Integration</h1>
        <span className="text-green-500 text-md">DEFAULT ROUTING POLICY</span>
              </div>
                <div className="flex justify-between items-center ">
               <p className="text-green-500">
                Orchestrate your third-party logistics and carrier APIs in one secure dashboard.
                </p>
                   <div className="flex gap-2">
              <span className="bg-gray-200 text-black px-3 py-1 rounded-none text-sm">
                Lowest Cost First
                  </span>
            <span className="bg-green-800 text-green-500 px-3 py-1 rounded-none text-sm">
             Global Setting
            </span>
           </div>
           </div>
           </div>

      {/* Connected Partners */}
      <div className="bg-white rounded-xl shadow p-6 mb-10">
        <h2 className="text-xl font-semibold mb-4">Connected Partners</h2>

        <div className="divide-y">

           <div className="bg-white rounded-xl border overflow-hidden">

             {/* Table Header */}
         <div className="grid grid-cols-5 bg-gray-50 px-6 py-3 text-sm font-semibold border-b text-gray-500">
             <div>PARTNER</div>
          <div>STATUS</div>
          <div>UPTIME / HEALTH</div>
              <div>LATENCY</div>
           <div className="text-right text-green-500">ACTIONS</div>
               </div>

              {/* Table Body */}
              <div className="divide-y">

              {/* BlueDart */}
               <div className="grid grid-cols-5 items-center px-6 py-4">
                          <div>
                  <p className="font-medium">BlueDart Express</p>
                 <p className="text-sm text-gray-400">API v2.4 • Production</p>
                    </div>

                 <div className="text-green-600 font-medium">● Active</div>

           <div className="text-gray-600">99.9% / Healthy</div>

                <div>
              <div className="w-32 h-2 bg-gray-200 rounded">
                <div className="w-24 h-2 bg-green-500 rounded"></div>
               </div>
                 <p className="text-sm text-gray-500 mt-1">120ms</p>
                 </div>

      <div className="text-right text-green-500">
        <button className=" font-medium ">
          Configure
        </button>
      </div>
    </div>

    {/* Delhivery */}
    <div className="grid grid-cols-5 items-center px-6 py-4">
      <div>
        <p className="font-medium">Delhivery</p>
        <p className="text-sm text-gray-400">Webhook Active</p>
      </div>

      <div className="text-green-600 font-medium">● Active</div>

      <div className="text-gray-600">98.4% / Stable</div>

      <div>
        <div className="w-32 h-2 bg-gray-200 rounded">
          <div className="w-20 h-2 bg-green-500 rounded"></div>
        </div>
        <p className="text-sm text-gray-500 mt-1">150ms</p>
      </div>

      <div className="text-right text-green-500">
        <button className=" font-medium ">
          Configure
        </button>
      </div>
    </div>

                           {/* FedEx */}
              <div className="grid grid-cols-5 items-center px-6 py-4">
                    <div>
                  <p className="font-medium">FedEx</p>
                 <p className="text-sm text-gray-400">Credentials Invalid</p>
                   </div>
            <div className="text-red-500 font-medium">● Inactive</div>
            <div className="text-gray-400">N/A</div>
              <div>
              <div className="w-32 h-2 bg-gray-200 rounded"></div>
              <p className="text-sm text-gray-400 mt-1">0ms</p>
               </div>
         <div className="text-right text-green-500">
           <button className=" font-medium ">
             Reconnect
           </button>
             </div>
             </div>

             </div>
               </div>
              </div>
              </div>
                  {/* Heading */}
               <h1 className="text-2xl font-bold mb-4">
                   Add New Partner
                      </h1>
                {/* Add New Partner Section */}
                <div className="grid grid-cols-3 gap-6">

                {/* Left Side - Partner Cards */}
                  <div className="col-span-2 grid grid-cols-2 gap-6">
        

          {/* Card */}
          {stats.map((item, index) => (
           <div key={index} className="bg-white p-6 rounded-xl shadow">
              <div className="flex justify-between items-center mb-4">
                <div className={`w-10 h-10 rounded flex ${item.background} uppercase items-center justify-center font-bold`}>
{item.name.slice(0, item.index)}
                </div>
                <span className="text-xs text-green-500 bg-gray-100 px-3 py-1 rounded">
                  {item.tag}
                </span>
              </div>

              <h3 className="font-bold">{item.name}</h3>
             {item.description && (
            <p className="text-sm text-green-700 mt-2">
             {item.description} 
               </p>
)}
              <button className="mt-4 w-full bg-gray-100 hover:bg-gray-200 transition rounded py-2">
                Connect
              </button>
            </div>
          ))}
        </div>

        {/* Right Side - Setup Configuration */}
        <div className="bg-white p-6 rounded-xl shadow border border-green-200">
          <h3 className="text-green-500 font-semibold mb-4">
            SETUP CONFIGURATION
          </h3>

          <div className="bg-green-100 p-3 rounded mb-4">
            Integrating DHL Express
          </div>

          <div className="mb-4">
            <label className="text-sm text-green-500">API KEY</label>
            <input
              type="password"
              value="••••••••••••"
              readOnly
              className="w-full border rounded px-3 py-2 mt-1"
            />
          </div>

          <div className="mb-4">
            <label className="text-sm text-green-500">WEBHOOK URL</label>
            <input
              type="text"
              value="https://api.smartpharm.com/hooks/dhl"
              readOnly
              className="w-full border rounded px-3 py-2 mt-1"
            />
          </div>

          <div className="mb-6">
            <label className="text-sm text-green-500">
              SERVICE LEVELS (SLAS)
            </label>

            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                Express 24h
              </span>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                Ground 3-5d
              </span>
              <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                Same Day
              </span>
              <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                Economy
              </span>
            </div>
          </div>
<div className=" mt-6 flex flex-col gap-4">
          <button className="w-full border border-green-500 text-green-600 py-2 rounded hover:bg-green-50 transition">
            Test Connection
          </button>

          <button className="w-full bg-green-600 text-white  py-2 rounded hover:bg-green-700 transition">
            Save & Activate
          </button>
          </div>
          <div className="text-green-600 text-center mt-4 mb-4">SECURE ENTERPRISE INTEGRATION</div>
        </div>
      </div>
    </div>
  );
};

export default Courier;