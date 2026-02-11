import React from 'react'

const OrderWholesaler = () => {
  return (
    <>
      <div className='m-4 p-2'>
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
                <div className="flex justify-between items-start">
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
                    <p className="text-xs text-gray-400">AVG MARGIN</p>
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

             <div className="w-full sm:w-[48%] md:w-[31%] lg:w-[23%] rounded-2xl overflow-hidden shadow-lg">

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
                <div className="flex justify-between items-start ">
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
                    <p className="text-xs text-gray-400">AVG MARGIN</p>
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

             <div className="">

              {/* Top Image */}
              <div className="">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
                  alt="warehouse"
                  className=""
                />

                {/* Fastest Delivery Badge */}
                <span className="">
                  FASTEST DELIVERY
                </span>

                {/* Avatar Letter */}
                <div className="]">
                  A
                </div>
              </div>

              {/* Content */}
              <div className="">

                {/* Name + Delivery */}
                <div className="">
                  <div>
                    <h3 className="">Apex Distributors</h3>
                    <p className="">⭐ 4.9 (1.2k orders)</p>
                  </div>

                  <div className="">
                    <p className="">DELIVERY IN</p>
                    <p className="">2.5 hrs</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="">
                  <div className="">
                    <p className="">AVG MARGIN</p>
                    <p className="">22%</p>
                  </div>

                  <div className="">
                    <p className="">STOCK LEVEL</p>
                    <p className="">98%</p>
                  </div>
                </div>

                {/* Divider */}
                <div className=""></div>

                {/* Bottom */}
                <div className="">
                  <p className="">📍 2.4 km away</p>
                  <button className="">
                    Open Store
                  </button>
                </div>
              </div>
            </div>

             <div className="">

              {/* Top Image */}
              <div className="">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
                  alt="warehouse"
                  className=""
                />

                {/* Fastest Delivery Badge */}
                <span className="">
                  FASTEST DELIVERY
                </span>

                {/* Avatar Letter */}
                <div className="">
                  A
                </div>
              </div>

              {/* Content */}
              <div className="">

                {/* Name + Delivery */}
                <div className="">
                  <div>
                    <h3 className="">Apex Distributors</h3>
                    <p className="">⭐ 4.9 (1.2k orders)</p>
                  </div>

                  <div className="">
                    <p className="">DELIVERY IN</p>
                    <p className="">2.5 hrs</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="">
                  <div className="">
                    <p className="">AVG MARGIN</p>
                    <p className="">22%</p>
                  </div>

                  <div className="">
                    <p className="">STOCK LEVEL</p>
                    <p className="">98%</p>
                  </div>
                </div>

                {/* Divider */}
                <div className=""></div>

                {/* Bottom */}
                <div className="">
                  <p className="">📍 2.4 km away</p>
                  <button className="">
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