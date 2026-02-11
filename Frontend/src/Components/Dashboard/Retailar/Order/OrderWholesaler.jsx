import React from 'react'
import { useState } from 'react';

const OrderWholesaler = () => {
   const [activeTab, setActiveTab] = useState("wholesaler");
  return (
    <>
      <div className='m-6 pr-4'>
        <section className="relative bg-linear-to-r from-[#0f3d2e] via-[#145c43] to-[#0b2f3a] text-white  rounded-2xl  p-6 mt-2 shadow-lg shadow-blue-900/40 overflow-hidden">
          <span className="bg-white/50 backdrop-blur-md text-sm px-2 py-1 rounded-full">
            Flash Sale — Ends in 4h 20m
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold mt-4 leading-snug">
            Wholesale Bonanza:
            <br />
            Extra 15% Off Generics
          </h1>
          <button className="mt-4 bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-200 transition">
            Order Now
          </button>
          <div className="absolute right-20 top-20 w-72 h-72 bg-green-400/20 blur-3xl rounded-full"></div>
        </section>

        <div className="m-4">
          <section className="bg-white p-4">

            {/* Heading */}
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Recommended Wholesalers
            </h2>
<div className='flex flex-wrap gap-4 '>
   <div className="w-full">
      
      {/* Tabs */}
      <div className="flex gap-6 border-b border-gray-200">
        
        <button
          onClick={() => setActiveTab("wholesaler")}
          className={`pb-3 text-sm font-medium transition-all relative
            ${
              activeTab === "wholesaler"
                ? "text-green-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
        >
          Wholesaler-First

          {activeTab === "wholesaler" && (
            <span className="absolute left-0 bottom-0 h-3px w-full bg-green-500 rounded-full"></span>
          )}
        </button>

        <button
          onClick={() => setActiveTab("requirement")}
          className={`pb-3 text-sm font-medium transition-all relative
            ${
              activeTab === "requirement"
                ? "text-green-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
        >
          Requirement-First

          {activeTab === "requirement" && (
            <span className="absolute left-0 bottom-0 h-[3] w-full bg-green-500 rounded-full"></span>
          )}
        </button>
      </div>

      {/* Page Content */}
      <div className="mt-6">
        {activeTab === "wholesaler" && (
          <div>Wholesaler Page Content</div>
        )}

        {activeTab === "requirement" && (
          <div>Requirement Page Content</div>
        )}
      </div>
    </div>
            <div className="w-full sm:w-[48%] md:w-[31%] lg:w-[23%] bg-[#162538] rounded-2xl overflow-hidden shadow-lg">

              {/* Top Image */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
                  alt="warehouse"
                  className="h-40 w-full object-cover"
                />

                {/* Fastest Delivery Badge */}
                <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                  FASTEST DELIVERY
                </span>

                {/* Avatar Letter */}
                <div className="absolute -bottom-6 left-4 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg border-4 border-[#162538]">
                  A
                </div>
              </div>

              {/* Content */}
              <div className="pt-8 p-5 text-white">

                {/* Name + Delivery */}
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold">Apex Distributors</h3>
                    <p className="text-sm text-gray-400">⭐ 4.9 (1.2k orders)</p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-gray-400">DELIVERY IN</p>
                    <p className="text-blue-400 font-semibold">2.5 hrs</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-5">
                  <div className="bg-[#1c2f46] rounded-xl p-4">
                    <p className="text-xs text-gray-400 whitespace-nowrap">AVG MARGIN</p>
                    <p className="text-xl font-semibold mt-1">22%</p>
                  </div>

                  <div className="bg-[#1c2f46] rounded-xl p-4">
                    <p className="text-xs text-gray-400">STOCK LEVEL</p>
                    <p className="text-xl font-semibold mt-1">98%</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-5"></div>

                {/* Bottom */}
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-400">📍 2.4 km away</p>
                  <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm">
                    Open Store
                  </button>
                </div>
              </div>
            </div>

             <div className="w-full sm:w-[48%] md:w-[31%] lg:w-[23%]  bg-[#162538] rounded-2xl overflow-hidden shadow-lg">

              {/* Top Image */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
                  alt="warehouse"
                  className="h-40 w-full object-cover"
                />

                {/* Fastest Delivery Badge */}
                <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium ">
                  FASTEST DELIVERY
                </span>

                {/* Avatar Letter */}
                <div className="absolute -bottom-6 left-4  w-12 h-12 bg-blue-600 rounded-lg  flex items-center justify-center text-white font-bold text-lg border-4 border-[#162538] ">
                  A
                </div>
              </div>

              {/* Content */}
              <div className="pt-8 p-5 text-white">

                {/* Name + Delivery */}
                <div className="flex justify-between  items-center">
                  <div>
                    <h3 className="text-lg font-semibold">Apex Distributors</h3>
                    <p className="text-sm text-gray-400">⭐ 4.9 (1.2k orders)</p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-gray-400">DELIVERY IN</p>
                    <p className="text-blue-400 font-semibold">2.5 hrs</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-5 ">
                  <div className="bg-[#1c2f46] rounded-xl p-4">
                    <p className="text-xs text-gray-400 whitespace-nowrap">AVG MARGIN</p>
                    <p className="text-xl font-semibold">22%</p>
                  </div>

                  <div className="bg-[#1c2f46] rounded-xl p-4">
                    <p className="text-xs text-gray-400">STOCK LEVEL</p>
                    <p className="text-xl font-semibold mt-1">98%</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-5"></div>

                {/* Bottom */}
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-400">📍 2.4 km away</p>
                  <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm">
                    Open Store
                  </button>
                </div>
              </div>
            </div>

             <div className="rounded-2xl w-full sm:w-[48%] md:w-[31%] lg:w-[23%]  bg-[#162538]  shadow-xl overflow-hidden">

              {/* Top Image */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
                  alt="warehouse"
                  className="h-40 w-full object-cover rounded-2xl "
                />

                {/* Fastest Delivery Badge */}
                <span className="absolute bg-green-500 rounded-full px-3 py-1 font-medium text-xs text-white top-3  left-3">
                  FASTEST DELIVERY
                </span>

                {/* Avatar Letter */}
                <div className="bg-blue-700 border-4  left-4  w-12 h-12 absolute  flex items-center justify-center text-white font-bold text-lg border-[#162538] -bottom-6 rounded-xl ">
                  A
                </div>
              </div>

              {/* Content */}
              <div className="pt-5 p-5 text-white">

                {/* Name + Delivery */}
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold">Apex Distributors</h3>
                    <p className="text-gray-400 text-sm">⭐ 4.9 (1.2k orders)</p>
                  </div>

                  <div className="text-right">
                    <p className="text-gray-400 text-xs">DELIVERY IN</p>
                    <p className="text-blue-600 font-semibold">2.5 hrs</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-5">
                  <div className=" bg-[rgba(36,55,81,0.36)]  rounded-xl p-4 ">
                    <p className="text-xs text-gray-400 whitespace-nowrap">AVG MARGIN</p>
                    <p className="text-xl text-gray-100 font-semibold mt-1">22%</p>
                  </div>

                  <div className=" bg-[rgba(36,55,81,0.36)] p-4 rounded-xl ">
                    <p className="text-xs text-gray-400">STOCK LEVEL</p>
                    <p className="text-xl text-gray-100 font-semibold mt-1">98%</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-4"></div>

                {/* Bottom */}
                <div className="flex items-center justify-between">
                  <p className="text-gray-400 text-sm">📍 2.4 km away</p>
                  <button className="bg-blue-600 rounded-lg px-4 py-2 text-sm text-white hover:bg-blue-700 ">
                    Open Store
                  </button>
                </div>
              </div>
            </div>

             <div className="bg-[#162538] w-full  sm:w-[48%] md:w-[31%] lg:w-[23%] rounded-xl overflow-hidden shadow-lg">

              {/* Top Image */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
                  alt="warehouse"
                  className="h-40 w-full object-cover rounded-2xl"
                />

                {/* Fastest Delivery Badge */}
                <span className="bg-green-500 text-white absolute text-xs font-semibold px-3 rounded-full  py-1 top-3 left-3">
                  FASTEST DELIVERY
                </span>

                {/* Avatar Letter */}
                <div className="bg-blue-700 border-4 border-[#162538] -bottom-6 left-3 absolute w-12 h-12 flex items-center justify-center rounded-xl font-bold text-white text-lg">
                  A
                </div>
              </div>

              {/* Content */}
              <div className="pt-6 p-5">

                {/* Name + Delivery */}
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-white ">Apex Distributors</h3>
                    <p className="text-sm text-gray-400">⭐ 4.9 (1.2k orders)</p>
                  </div>

                  <div className="items-right">
                    <p className="text-gray-400 text-xs">DELIVERY IN</p>
                    <p className="text-blue-500 font-semibold">2.5 hrs</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 mt-5 gap-4 ">
                  <div className="bg-[rgba(36,55,81,0.36)] rounded-xl p-4 ">
                    <p className="text-gray-500 text-xs whitespace-nowrap">AVG MARGIN</p>
                    <p className="text-xl font-semibold text-gray-100">22%</p>
                  </div>

                  <div className="bg-[rgba(36,55,81,0.36)] rounded-xl p-4">
                    <p className="text-gray-500 text-xs">STOCK LEVEL</p>
                    <p className="text-xl font-semibold text-gray-100">98%</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-5 border-t border-gray-700"></div>

                {/* Bottom */}
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-400">📍 2.4 km away</p>
                  <button className="bg-blue-600  hover:bg-blue-700  px-4 py-2 rounded-lg text-white text-sm">
                    Open Store
                  </button>
                </div>
              </div>
            </div>
            </div>
          </section>
        </div>
      </div>

    </>
  )
}

export default OrderWholesaler