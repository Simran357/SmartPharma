import { Download, Verified } from '@mui/icons-material'
import React from 'react'
import { Table, Tag } from 'antd';
import { DollarSign, DollarSignIcon, PlusIcon } from 'lucide-react';

const OneWholesaler = () => {
    const columns = [
        {
            title: "STATUS",
            dataIndex: "status",
            key: "status",
            render: (status) => {
                const map = {
                    match: { color: "green", text: "Match" },
                    alt: { color: "orange", text: "Alt Brand" },
                    missing: { color: "red", text: "Missing" }
                };

                return <Tag color={map[status].color}>{map[status].text}</Tag>;
            }
        },
        {
            title: "MEDICINE NAME",
            dataIndex: "medicine",
            key: "medicine",
            render: (text, record) => (
                <div>
                    <p className="font-semibold">{text}</p>
                    <p className="text-xs text-gray-400">{record.company}</p>
                </div>
            )
        },
        {
            title: "QTY",
            dataIndex: "qty",
            key: "qty"
        },
        {
            title: "UNIT PRICE",
            dataIndex: "price",
            key: "price",
            render: (price) => `$${price}`
        },
        {
            title: "SUBTOTAL",
            dataIndex: "subtotal",
            key: "subtotal",
            render: (subtotal) => <b>${subtotal}</b>
        },
        {
            title: "ACTION",
            key: "action",
            render: () => (
                <button className="text-blue-600 text-xs font-semibold">
                    Change
                </button>
            )
        }
    ];
    const data = [
        {
            key: "1",
            status: "match",
            medicine: "Amoxicillin 500mg",
            company: "GlaxoSmithKline • 10x10 Strip",
            qty: 20,
            price: 4.2,
            subtotal: 84
        },
        {
            key: "2",
            status: "alt",
            medicine: "Lipitor 20mg (Atorvastatin)",
            company: "Pfizer • Box of 30",
            qty: 15,
            price: 12.5,
            subtotal: 187.5,
            suggestion: true
        },
        {
            key: "3",
            status: "missing",
            medicine: "Augmentin 625 Duo",
            company: "GSK • Out of Stock",
            qty: 50,
            price: 8.9,
            subtotal: 445
        },
        {
            key: "4",
            status: "match",
            medicine: "Paracetamol 650mg",
            company: "Generic • 1000 Count Jar",
            qty: 100,
            price: 1.1,
            subtotal: 110
        }
    ];
    return (
        <>
            <div className="flex flex-col lg:flex-row min-h-screen">

                <div className="bg-white p-4 w-full lg:w-[22%] border-b lg:border-b-0 lg:border-r border-gray-200">
                    <div className='flex justify-between'>
                        <h1 className='text-gray-600 text-xs font-bold uppercase tracking-wide'>Active Quotes</h1>
                        <span className='text-xs text-blue-600 rounded-xl px-2 bg-blue-400/30'>3 Available </span>
                    </div>
                    <div className='bg-blue-200/10  rounded-xl  border-blue-600 p-4 border-2 mt-2 '>
                        <div className=' flex justify-between items-center'>
                            <div>
                                <h1 className='font-bold '>MedLink Pharma </h1>
                                <span className='text-xs text-gray-400'>ETA: 4hrs Reliable</span>
                            </div>
                            <span className='text-blue-600'><Verified /></span>
                        </div>
                        <div className='mt-2'>
                            <div className='mt-2'>
                                <span className='flex justify-between '>
                                    <h1 className='text-xs font-bold '>Fullfilment</h1>
                                    <p className='text-blue-600 text-xs '>92%</p>
                                </span>
                                <div className='w-full  bg-gray-200 h-2 rounded-full overflow-hidden focus:ring-0 '>
                                    <div className='w-[92%] bg-blue-600 h-2 rounded-full overflow-hidden focus:ring-0 '></div>
                                </div>
                                <span className=''>
                                    <p className='text-[10px] text-gray-400'>4 Items MISSING 2 ALTERNATIVE </p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='bg-blue-200/10  rounded-xl  border-gray-600 p-4 border-2 mt-2 '>
                        <div className=' flex justify-between items-center'>
                            <div>
                                <h1 className='font-bold '>City Drug House </h1>
                                <span className='text-xs text-gray-400'>ETA: 6hrs Standard</span>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <div className='mt-2'>
                                <span className='flex justify-between '>
                                    <h1 className='text-xs font-bold '>Fullfilment</h1>
                                    <p className='text-gray-400 text-xs'>72%</p>
                                </span>
                                <div className='w-full  bg-gray-200 h-2 rounded-full overflow-hidden focus:ring-0 '>
                                    <div className='w-[72%] bg-gray-400 h-2 rounded-full overflow-hidden focus:ring-0 '></div>
                                </div>
                                <span className=''>
                                    <p className='text-[10px] text-gray-400'>7 Items MISSING 0 ALTERNATIVE </p>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='bg-blue-200/10  rounded-xl  border-gray-400 p-4 border-2 mt-2 '>
                        <div className=' flex justify-between items-center'>
                            <div>
                                <h1 className='font-bold '>Apex Distributors </h1>
                                <span className='text-xs text-gray-400'>ETA: 6hrs Standard</span>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <div className='mt-2'>
                                <span className='flex justify-between '>
                                    <h1 className='text-xs font-bold '>Fullfilment</h1>
                                    <p className='text-gray-400 text-xs '>58%</p>
                                </span>
                                <div className='w-full  bg-gray-200 h-2 rounded-full overflow-hidden focus:ring-0 '>
                                    <div className='w-[58%] bg-gray-400 h-2 rounded-full overflow-hidden focus:ring-0 '></div>
                                </div>
                                <span className=''>
                                    <p className='text-[10px] text-gray-400'>12 Items MISSING 5 ALTERNATIVE </p>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div>
                    </div>
                </div>

                <section className="w-full lg:w-[48%] flex-2">
                    <div className="p-4 md:p-6 overflow-x-auto">
                        <div className=''>
                            <h1 className='font-bold text-xl '>Order Details : MedLink Pharma</h1>
                            <p className='text-[10px] text-gray-400'>Reviewing 48 line items for dispatch</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <button className='flex items-center gap-2 border border-gray-200 p-2 rounded-lg'>
                                <Download fontSize='xs' />  Export</button>
                            <button className=' text-white bg-blue-600 p-2 rounded-lg text-xs '>
                                Approve & Send Order</button>
                        </div>
                    </div>

<div className="p-6 w-full overflow-x-auto">                        
    <Table
                            columns={columns}
                            dataSource={data}
                            pagination={false}
                            bordered
                        />
                    </div>

                </section>
                <section className="bg-white w-full lg:w-[30%] border-t lg:border-t-0 lg:border-l border-gray-200">
                    <div className='p-6 mt-2'>
                        <h1 className='text-xs font-bold text-slate-400'>ORDER SUMMARY</h1>
                        <div className='mt-4'>
                            <h1 className='text-slate-400 text-[10px] '>Total Order Value</h1>
                            <p className='flex gap-2 items-center text-xl font-bold'><DollarSignIcon fontSize='xs' />4,520.50</p>
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-slate-400 text-[10px] '>Items Count</h1>
                            <p className='font-bold'>48 Line Items</p>
                        </div>

                        <hr className='text-slate-400 mt-1' />
                        <section className='mt-4' >

                            <div>
                                <h1 className='text-slate-400 font-bold text-xs'>MARGIN IMPACT</h1>
                                <span className='flex justify-between mt-4'>
                                    <h1 className='text-xs text-slate-600'>Current Margin</h1>
                                    <p className='text-black font-bold'>12.4%</p>
                                </span>
                                <div className='w-full h-4 bg-slate-300 rounded-full mt-2 overflow-hidden focus:ring-1'>
                                    <div className='w-[12.4%] h-4 bg-slate-600 rounded-full overflow-hidden focus:ring-1'> </div>
                                </div>
                                <span className='flex justify-between mt-4'>
                                    <h1 className='text-xs text-green-600'>Potential Margin</h1>
                                    <p className='text-green-600 font-bold'>16.4%</p>
                                </span>
                                <div className='w-full h-4 bg-green-300/20 mt-2 rounded-full overflow-hidden focus:ring-1'>
                                    <div className='w-[16.8%] h-4 bg-green-600 rounded-full overflow-hidden focus:ring-1'></div>
                                </div>
                            </div>

                            <div className='mt-6 bg-blue-300/20 border border-blue-300 p-4 rounded-xl '>
                                <span className='text-blue font-bold flex items-center '>
                                    <h1 className='text-blue-400 text-[10px] '>Profit Opportunity</h1>
                                </span>
                                <p className='flex text-lg font-bold'><PlusIcon fontSize="xs" /> <DollarSign fontSize="small" />184.20</p>
                                <span>Extra profit identified by switching to 4 sugggested alternative brands</span>
                            </div>
                        </section>

                        <div className="flex justify-center mt-10">
                            <button className='text-white bg-blue-600 rounded-lg w-full p-2 font-bold'>Finalize Order</button>

                        </div>
                        <div className='mt-2 flex justify-center'>
                            <p className='text-slate-400 text-[10px] '>Updated 2 mins ago</p>
                        </div>


                    </div>
                </section>
            </div>

        </>)
}

export default OneWholesaler