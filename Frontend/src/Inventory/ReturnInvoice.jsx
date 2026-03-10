import React from 'react'
import { FaMedkit } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaRegClipboard } from "react-icons/fa6";
import { FaRegFileAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";


const data = [
    { name: "Chetan", age: 22, city: "Delhi" },
    { name: "Rahul", age: 24, city: "Mumbai" }
];

function ReturnInvoice() {
    return (

        <div>
            <nav className='bg-gray-200 py-4 w-full px-65 flex items-center justify-between'>
                <div className='flex items-center gap-3 '>
                    <FaMedkit size={33} className='text-white bg-green-500 p-1 rounded-full' />
                    <h1 className='text-xl font-bold'>PharmaConnect</h1>
                </div>
                <div className='flex items-center gap-2'>
                    <FaBell size={30} className='text-green-500 p-1 bg-green-300 rounded-full' />
                    <FaUser size={30} className='text-green-500 p-1 bg-green-300 rounded-full' />
                    <img src="https://img.musesai.io/pic/202504/X5IZTNiNrPsk.jpg" alt="" size={30}
                        className='h-7.5 w-7.5 object-center rounded-full' />
                </div>
            </nav>
            <main className='flex flex-col items-center justify-center py-20 text-center gap-4'>
                <div className="w-18 h-18 flex items-center justify-center rounded-full bg-green-100">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500">
                        <FaCheck className="text-white text-xl" />
                    </div>
                </div>
                <h1 className='text-2xl font-bold '>Return Invoice Generated</h1>
                <p className='w-md'>Return request for <b>Batch #DL1120(150 Units)</b> Has been sent to <b>Sunrise Pharam.</b></p>
                <div className='flex flex-col'>
                    <header className='flex items-center w-2xl justify-between bg-gray-200 p-1.5 rounded-sm'>
                        <div className='flex gap-1 items-center'>
                            <FaRegFileAlt size={20} />
                            <p>Preview:Rl-2023-1120.pdf</p>
                        </div>
                        <div className='flex items-center gap-1.5 text-green-500 '>
                            <FaEye size={25} />
                            <p className='font-semibold'>Full Preview</p>
                        </div>
                    </header>
                    <div className='w-2xl px-6 py-10'>
                        <div className='flex items-center justify-between'>
                            <div className='flex flex-col text-start '>
                                <h1 className='text-xl font-bold text-green-500'>PharmaConnect</h1>
                                <p className='capitalize md:uppercase'>return merchandise Authorization</p>
                            </div>
                            <div className='flex-col flex gap-0.5'>
                                <button className='bg-green-500 text-white font-semibold px-1 py-0.5 rounded-md'>PORFORMA</button>
                                <p className='text-sm'>Date: OCT-2,2023</p>
                                <h4 className='font-semibold text-md'>Invoice #RI-98422</h4>
                            </div>
                        </div>
                    </div>

                    {/* list strats here */}
                    <div className='w-xl px-6 mt-6 flex justify-between'>
                        <div className='flex flex-col gap-4 text-start   '>
                            <p>Senders Details</p>
                            <ul className='flex flex-col '>
                                <h3 className='text-lg font-semibold'>
                                    Central Warehouse A-12
                                </h3>
                                <li>452 logistics Way </li>
                                <li>Industrial Zone North </li>
                                <li>Chicago, IL 0601 </li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-4 text-start   '>
                            <p>Senders Details</p>
                            <ul className='flex flex-col '>
                                <h3 className='text-lg font-semibold'>
                                    Central Warehouse A-12
                                </h3>
                                <li>452 logistics Way </li>
                                <li>Industrial Zone North </li>
                                <li>Chicago, IL 0601 </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col w-[40.5vw] border m-auto mt-5 rounded-sm">

                        {/* Row 1 */}
                        <div className="grid grid-cols-[1fr_2fr_1fr] w-full">

                            {/* Header */}
                            <div className="p-1 border-b-2 border-gray-500">Name</div>
                            <div className="p-1 border-b-2 border-x-2 border-gray-500">Age</div>
                            <div className="p-1 border-b-2 border-gray-500">City</div>

                            {/* Rows */}
                            {data.map((item, i) => (
                                <React.Fragment key={i}>
                                    <div className="p-1 border-t-2 border-r-2 border-gray-500">{item.name}</div>
                                    <div className="p-1 border-t-2 border-x-2 border-gray-500">{item.age}</div>
                                    <div className="p-1 border-t-2 border-gray-500">{item.city}</div>
                                </React.Fragment>
                            ))}

                        </div>

                    </div>
                </div>
            </main>
        </div>

    )
}

export default ReturnInvoice
