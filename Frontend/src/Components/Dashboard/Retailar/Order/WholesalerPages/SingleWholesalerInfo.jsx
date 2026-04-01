import React, { useContext, useEffect, useState } from 'react'
import { ShoppingBag, AddShoppingCart, LocalShipping, CurrencyRupee } from '@mui/icons-material';
import { Checkbox, Select } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../../../Form/Utils/AxiosInstance';
import { contextProvide } from '../../../Form/Utils/Context/CommonContext';
const SingleWholesalerInfo = () => {
  const {id} = useParams()
  console.log(id)
  const {auth} = useContext(contextProvide)
  const [medicines, setMedicines] = useState([])
  const [singleRetailer,setSingleRetailer] = useState([])
  console.log("singleRetailer",singleRetailer)
   const getUser = async () => {
        console.log("getUser called ");
        try {
            const res = await axiosInstance.get(`/registerroute/getSingleRetailor/${id}`)
            if (res?.data?.success) {
                setSingleRetailer(res?.data?.data)
                console.log("singlwholesalerid",res?.data)
            }
        } catch (error) {
            console.log("Error fetching user data:", error);
        }
    }
const getMedicines = async () => {
   console.log("getMedicines called");
  try {
    const res = await axiosInstance.get(`/registerroute/getProductList/${auth}`)
    console.log("MEDICINE API RESPONSE:", res?.data); 
    if (res?.data?.success) {
      setMedicines(res?.data?.data)
    }
  } catch (err) {
    console.log(err)
  }
}
    useEffect(() => {
        console.log("Component mounted ");
        if(id){
        getUser()
        getMedicines()
        }

    }, [id]);

 console.log("medicines",medicines)
  const navigate = useNavigate()
  return (
    <>
      <div className='m-6'>
        <div className='bg-white border shadow-xl border-gray-300 p-6 rounded-xl ' >
          <div className='flex gap-2'>
            <span className='flex flex-row items-center gap-2'>
              <span className='text-green-900/90  rounded-xl bg-green-200/80 p-6'>
                <LocalShipping fontSize='medium' />
              </span>
              <div className='flex flex-col items-center gap-2'>
                <span className='flex flex-row items-center gap-2'>
<h1 className='font-bold text-xl'>
  {singleRetailer?.pharmacyName || "No Name"}
</h1>                  <p className=' bg-green-200/80 px-1 text-xs rounded-2xl text-green-700/90 uppercase '>verified</p>
                </span>
                <p className='text-sm font-medium text-gray-700 '>License # 12345-BA Established 2008 </p>
              </div>
            </span>
          </div>
          <div className='flex flex-row gap-2 ml-4 mt-4'>
            <div className='flex flex-row gap-8'>
              <span className='flex flex-col items-center'>
                <h1 className='font-bold text-xl '>98%</h1>
                <p className='text-xs text-gray-700 '>DELIVERY RATE</p>
              </span>
              <span className='flex flex-col items-center'>
                <h1 className='font-bold text-xl '>3.5h</h1>
                <p className='text-xs text-gray-700 '>AVG . TIME </p>
              </span>
              <span className='flex flex-col items-center'>
                <button className='text-black font-bold text-md bg-green-700/80 shadow-2xl shadow-green-700/60 px-4 py-2 rounded-xl '>
                  <AddShoppingCart />
                  Procure Now</button>
              </span>
            </div>
          </div>

        </div>
        <div className="grid grid-cols-12 gap-6 mt-8">
          <div className="col-span-12 lg:col-span-3">
            <section className='bg-white border shadow-xl border-gray-300 p-6 rounded-xl '>
              <span className='flex justify-between items-center'>
                <h1 className='font-bold text-lg'>Filters</h1>
                <p className='text-green-500 text-sm font-semibold'>Clear All</p>
              </span>
              <span className=''>
                <h1 className='text-gray-500 font-bold text-sm mt-2'>BATCH SEARCH</h1>
                <input
                  className="w-full bg-gray-100 py-2 px-3 rounded-lg mt-2" placeholder='Enter Batch No.'/>
              </span>

              <div className=' mt-4 '>
                <h1 className='font-bold text-sm text-gray-500 '>CATEGORY </h1>
                <input
                  className="w-full bg-gray-100 py-2 px-3 rounded-lg mt-2" placeholder='Enter Batch No.'
                />
                <span className='flex flex-col font-bold text-gray-800 gap-2'>
                  <Checkbox>Syrups</Checkbox>
                  <Checkbox>Capsules</Checkbox>
                  <Checkbox>Tablets</Checkbox>
                  <Checkbox>Injectables</Checkbox>
                </span>
              </div>

              <div className='flex mt-4 flex-col font-bold text-gray-800 gap-2'>
                <h1 className='font-bold text-sm text-gray-500'>COMPANY</h1>
                <Checkbox>GSK</Checkbox>
                <Checkbox>Pfizer</Checkbox>
                <Checkbox>Abbott</Checkbox>
                <Checkbox>Cipla</Checkbox>
                <Checkbox>Sun Pharma</Checkbox>
              </div>

              <div className='mt-4'>
                <h1 className=' text-xs font-bold break-normal'>SALT COMPOSITION</h1>
                <div className='grid grid-cols-4 lg:grid-cols-2  gap-2'>
                  <span className='bg-gray-500/80 rounded px-2 lg:max-w-32 max-w-30 py-1 text-xs font-bold text-gray-700'>Amoxillin</span>
                  <span className='bg-gray-500/80 rounded px-2 lg:max-w-32 max-w-30 py-1 text-xs font-bold text-gray-700'>Paracetamol</span>
                  <span className='bg-gray-500/80 rounded px-2 lg:max-w-32 max-w-30 py-1 text-xs font-bold text-gray-700'>Metformin</span>
                  <span className='bg-gray-500/80 rounded px-2 lg:max-w-32 max-w-30 py-1 text-xs font-bold text-gray-700'>Atorvastatin</span>
                </div>
              </div>
            </section>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <section className=" min-h-600px">
              <div className='m-4'>
                <h1 className='text-black font-medium text-lg '>Available Medicines</h1>
                <h1 className='text-gray-500 font-bold text-sm mt-2'>BATCH SEARCH</h1>
                <span className='flex justify-between items-center gap-4'>
                  <input
                    className="w-full bg-gray-100 py-1 px-2 rounded-lg mt-2"
                    placeholder='Enter Batch No.'
                  />
                  <span>
                    <Select
                      defaultValue="relevance"
                      style={{ width: 200, border: 0 }}>
                      <Option value="relevance">Sort By: Relevance</Option>
                      <Option value="priceLowHigh">Price: Low to High</Option>
                      <Option value="priceHighLow">Price: High to Low</Option>
                      <Option value="newest">Newest First</Option>
                      <Option value="popularity">Popularity</Option>
                      <Option value="rating">Customer Rating</Option>
                      <Option value="discount">Best Discount</Option>
                    </Select>
                  </span>
                </span>
              </div>

            <div className='grid grid-col-1 sm:grid-cols-2 xl:grid-cols-3 gap-5'>
  {medicines?.length > 0 ? (
    medicines.map((med) => (
      <div key={med._id} className='bg-white rounded-xl border border-slate-200 text-[10px] hover:shadow-lg group font-bold px-2 py-1'>
        
        <div className='relative aspect-square bg-slate-100 flex items-center justify-center p-4 m-4'>
          <img
            className='w-full h-full object-contain'
            src="/src/assets/unnamed.png"
          />

          <span className='absolute top-3 right-3 bg-white text-xs px-2 py-1 rounded'>
            {med.ProductQuantity > 10 ? "IN STOCK" : "LOW STOCK"}
          </span>

          <div className='absolute bottom-3 left-3'>
            <span className='bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded text-xs'>
              {med.ProductCategory}
            </span>
          </div>
        </div>

        <div className='p-4'>
          <p className='text-xs text-slate-400'>{med.ProductSku}</p>

          <h3 className='font-bold text-lg'>
            {med.ProductName}
          </h3>

          <p className='text-xs text-slate-500'>
            Exp: {new Date(med.ProductExpiryDate).toLocaleDateString()}
          </p>

          <div className='flex justify-between items-center mt-2'>
            <p className='text-lg font-bold'>
              ₹ {med.price || 0}
            </p>

            <button
              onClick={() => navigate("Cart")}
              className='bg-emerald-200 p-2 rounded'
            >
              <AddShoppingCart />
            </button>
          </div>
        </div>

      </div>
    ))
  ) : (
    <p>No Medicines Found</p>
  )}
</div>
              <div className='flex justify-center'>
                <button className=' px-4 py-2 rounded-xl  mt-4 bg-white/90 border w-fit text-gray-600 border-slate-400 font-medium'>Load More Medicines</button>

              </div>
            </section>
          </div>
          <div className="col-span-12 lg:col-span-3 flex flex-col gap-6">
            <section className='bg-white border shadow-xl w-full  mt-8 border-gray-300 p-6 rounded-xl'>
              <div className='flex justify-between items-center'>
                <span className='flex gap-2'>
                  <ShoppingBag fontSize='medium' />
                  <p className='text-md font-bold' >MY CART</p>
                </span>
                <span className='bg-green-300/90  text-green-800/80 text-xs font-medium rounded-2xl px-2'>3 Items</span>
              </div>

              <div className='mt-4'>
                <div className='flex gap-2 items-center'>
                  <div className='w-12 h-12 rounded-xl p-2 bg-linear-to-t from-amber-500 to-cyan-700'></div>
                  <div className='flex justify-between w-full'>
                    <span className='flex flex-col '>
                      <h1 className='text-sm font-bold '>Amocxicillin 500mg</h1>
                      <p className='text-gray-400 text-sm'>Qty: 500 Units</p>
                    </span>
                    <span>
                      <span className='text-sm items-center flex'>
                        <CurrencyRupee fontSize='small' /> 7,250</span>
                    </span>
                  </div>
                </div>
                <div className='flex gap-2 items-center mt-2'>
                  <div className='w-12 h-12 rounded-xl p-2 bg-linear-to-t from-amber-500 to-cyan-700'></div>
                  <div className='flex justify-between w-full'>
                    <span className='flex flex-col '>
                      <h1 className='text-sm font-bold '>Atorvastatin 20mg</h1>
                      <p className='text-gray-400 text-sm'>Qty: 100 Units</p>
                    </span>
                    <span>
                      <span className='text-sm items-center flex'>
                        <CurrencyRupee fontSize='small' /> 3,200</span>
                    </span>
                  </div>
                </div>
                <div className='border border-t-gray-50 mt-4'></div>
                <div>
                  <span className='flex justify-between items-center mt-2'>
                    <h1 className='text-gray-400 text-sm'>Sub Total</h1>
                    <p className='flex items-center font-bold '> - <CurrencyRupee fontSize='small' />10,450.00</p>
                  </span>
                  <span className='flex justify-between items-center mt-2'>
                    <h1 className='text-gray-400 text-sm'>Bulk Discount</h1>
                    <p className='flex items-center text-green-300/80 font-bold '> - <CurrencyRupee fontSize='small' />450.00</p>
                  </span>
                  <span className='flex justify-between items-center mt-4'>
                    <h1 className='text-gray-800 text-lg font-bold'>Total Amount </h1>
                    <p className='flex items-center font-bold text-lg'> - <CurrencyRupee fontSize='small' />10,000.00</p>
                  </span>

                  <button className='w-full p-4 bg-green-600/70 rounded-xl mt-2  text-black text-2xl font-bold'>Proceed to Checkout</button>
                </div>
              </div>
            </section>
            <section className="bg-green-50 border shadow-xl border-green-200 p-6 rounded-xl">
              <span className='text-black text-lg font-bold'>Active Schemes</span>
              <div className='bg-white/80 border-gray-100 p-6 rounded-lg mt-2 '>
                <h1 className='font-bold text-xs '>Buy 100 Get 1 Free</h1>
                <p className='text-slate-400 text-xs mt-2'>On all GSK Antibioics range</p>
                <button className='border border-emerald-300 mt-2 text-emerald-400 bg-white px-0.5 text-xs py-1 w-full'>Apply</button>
              </div>
            </section>
          </div>
        </div>

      </div>
    </>
  )
}

export default SingleWholesalerInfo