import { useState } from "react";
import { FaSearch, FaShieldAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import {  useNavigate } from "react-router-dom";


const Retailors = () => {

    useEffect(()=>{
        
    },[])
    
  const GetRetailer =()=>{

  }
    const data = [
        { name: "Aman Pharma", city: "Delhi", contact: "9876543210", status: "active", salary: "$14,512", outstanding: "$0" },
        { name: "City Medicos", city: "Mumbai", contact: "9876541111", status: "inactive", salary: "$12,470", outstanding: "$6000" },
        { name: "Health Plus", city: "Punjab", contact: "9876542222", status: "active", salary: "$11,555", outstanding: "$400" },
        
    ];
    const navigate = useNavigate()


    const [tab, setTab] = useState("all");
    


    // 👉 NEW STATE for sidebar
    const [activeMenu, setActiveMenu] = useState("retailors");
    const [activePage, setActivePage] = useState(1);

    const filteredRetailors = data.filter((item) => {
        if (tab === "all") return true;
        return item.status === tab;
    });

    return (<>
        <div className="w-full h-screen flex">

            {/* Sidebar */}
          

            {/* Main Content */}
            <div className="h-full flex-1 bg-gray-200 p-6 flex flex-col">

                {/* 👉 Show ONLY Retailors UI */}
                {activeMenu === "retailors" && (
                    <>
                        {/* Header */}
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-3xl font-bold">Retailers</h1>
                                <p className="text-gray-700">
                                    Manage and monitor your retail pharmacy partners
                                </p>
                            </div>

                            <div className="flex gap-2 items-center">
                                <div className="flex px-6 py-1 bg-green-100 rounded-2xl  gap-2 items-center">
                                    <FaDownload className="text-base text-green-500 font-light" />
                                    <button className="text-green-500 font-semibold">Export List</button>
                                </div>
                                <div className="px-6 py-1 bg-green-500 rounded-2xl flex items-center gap-1 ">
                                    <AiOutlinePlus className="text-xl text-white" />
                                    <button className="text-white font-semibold">Add Retailer</button>
                                </div>
                            </div>
                        </div>

                        {/* Search */}
                        <div className="w-full mt-5">
                            <div className="flex items-center border border-gray-300 rounded-full px-3 py-2 w-full bg-white">
                                <FaSearch className="text-gray-400 mr-2" />
                                <input
                                    type="text"
                                    placeholder="Search retailors by name, city and contact..."
                                    className="w-full outline-none capitalize"
                                />
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="flex gap-4 mt-6 mb-4">
                            <button onClick={() => setTab("all")} className={tab === "all" ? "bg-black text-white px-3 py-1 rounded" : "px-3 py-1"}>
                                All
                            </button>

                            <button
                                onClick={() => setTab("active")}
                                className={tab === "active" ? "bg-green-500 text-white px-3 py-1 rounded" : "px-3 py-1"}
                            >
                                Active
                            </button>

                            <button
                                onClick={() => setTab("inactive")}
                                className={tab === "inactive" ? "bg-red-500 text-white px-3 py-1 rounded" : "px-3 py-1"}
                            >
                                Inactive
                            </button>
                        </div>

                        {/* Cards */}
                        <div className="flex-1 overflow-y-auto overflow-x-hidden relative">
                            <div className="flex flex-wrap gap-6" 
                            >

                                {filteredRetailors.map((item, i) => {

                                    const salary = Number(item.salary.replace(/[^0-9]/g, ""));
                                    const outstanding = Number(item.outstanding.replace(/[^0-9]/g, ""));

                                    const progress = (outstanding / salary) * 100;
                                    const isHigh = progress >= 75;
                                    return (

                                        <div
                                            key={i}
                                             onClick={() => navigate("SingleRetailerDetails")}
                                            className="border rounded-lg py-6 flex flex-col w-80 justify-between bg-white shadow-md"
                                        >
                                            <div className="flex px-4 justify-between">
                                                <div className="flex items-center gap-2">
                                                    <FaShieldAlt className="p-2 bg-gray-100 rounded-full text-green-600 w-10 h-10" />
                                                    <div>
                                                        <h1 className="font-semibold">{item.name}</h1>
                                                        <p className="text-sm text-gray-500">{item.city}</p>
                                                    </div>
                                                </div>

                                                <span className="px-3 py-1 rounded-full text-xs text-green-600 bg-green-100 h-fit">
                                                    {item.status}
                                                </span>
                                            </div>

                                            <div className="flex gap-5 px-6 py-6 pt-8">
                                                <div>
                                                    <p className="text-base text-gray-700">Monthly Salary</p>
                                                    <h1 className="text-2xl font-bold">{item.salary}</h1>
                                                </div>
                                                <div>
                                                    <p className="text-base text-gray-700">Outstanding</p>
                                                    <h1 className="text-2xl font-bold">{item.outstanding}</h1>
                                                </div>
                                            </div>

                                            <div className="w-full px-4 py-4">
                                                <div className="flex justify-between text-sm mb-1">
                                                    <span>Loading</span>
                                                    <span>{progress.toFixed(0)}%</span>
                                                </div>

                                                <div className="w-full bg-gray-200 rounded-full h-3">
                                                    <div
                                                        className={`h-3 rounded-full transition-all duration-500 ${isHigh ? "bg-red-500" : "bg-green-500"
                                                            }`}
                                                        style={{ width: `${progress}%` }}
                                                    ></div>
                                                </div>
                                            </div>

                                            <div className="flex justify-between items-center px-4 pt-2">
                                                <div>
                                                    <span className="text-sm text-gray-500">Contact</span>
                                                    <h3 className="text-sm font-medium">{item.contact}</h3>
                                                </div>

                                                <button className="px-4 py-1 bg-green-400 rounded-full text-sm">
                                                    View
                                                </button>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                            <div className="flex items-center justify-between w-full px-6 absolute bottom-3">
                                <p className="text-white">
                                    Showing <b>1 to 5</b> of 42 Retailors
                                </p>

                                <div className="flex items-center gap-6">
                                    <AiOutlineLeft className="cursor-pointer hover:scale-110 transition text-white" />

                                    {[1, 2, 3].map((num) => (
                                        <button
                                            key={num}
                                            onClick={() => setActivePage(num)}
                                            className={`rounded-full py-1 px-3 transition ${activePage === num
                                                ? "bg-green-500 text-white"
                                                : "bg-white text-black hover:bg-gray-200"
                                                }`}
                                        >
                                            {num}
                                        </button>
                                    ))}

                                    <AiOutlineRight className="cursor-pointer hover:scale-110 transition text-white" />
                                </div>
                            </div>

                        </div>
                    </>
                )}

            </div>
          
        </div>
        </>
    );
};

export default Retailors;