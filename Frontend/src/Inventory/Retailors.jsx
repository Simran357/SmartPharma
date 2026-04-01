import { useContext, useEffect, useState } from "react";
import { FaSearch, FaShieldAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
// import { contextProvide } from "../Components/Dashboard/Form/Utils/Context/CommonContext";
import axiosInstance from "../Components/Dashboard/Form/Utils/AxiosInstance";


const Retailors = () => {
    const [users, setUser] = useState([])
    const navigate = useNavigate()
    const [tab, setTab] = useState("all")
    // const { userRoles } = useContext(contextProvide)
    // 👉 NEW STATE for sidebar
    const [activeMenu, setActiveMenu] = useState("retailors");
    const [activePage, setActivePage] = useState(1);
    const getUser = async () => {
        console.log("getUser called ");
        try {
            const res = await axiosInstance.get("/registerroute/getuserController")
            if (res?.data?.success) {
                setUser(res?.data?.data)
            }
        } catch (error) {
            console.log("Error fetching user data:", error);
        }
    }

    useEffect(() => {
        console.log("Component mounted ");
        getUser()
    }, []);

    console.log("items",)


    const filteredUsers = users
        .filter(user => user.role === "Retailer")
        .filter(user => {
            if (tab === "all") return true;
            return user.status === tab; // backend se aana chahiye
        });


    return (<>
        <div className="w-full h-screen flex">
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

                        <div className="flex-1 flex flex-col justify-between">
                            {/* Cards */}
                            <div className="flex flex-wrap gap-6 pb-6">
                                {filteredUsers.length > 0 ? (
                                    filteredUsers.map((item) => (
                                        <div
                                            key={item._id}
                                            onClick={() => navigate(`SingleRetailerDetails/${item._id}`)}
                                            className="w-full sm:w-[48%] md:w-[31%] lg:w-[23%] bg-white rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer overflow-hidden"
                                        >

                                            {/* Image Section */}
                                            <div className="relative">
                                                <img
                                                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
                                                    alt="store"
                                                    className="h-36 w-full object-cover"
                                                />

                                                <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                                                    ACTIVE
                                                </span>

                                                <div className="absolute -bottom-5 left-4 w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-lg border-4 border-white font-bold">
                                                    {item.username?.charAt(0).toUpperCase()}
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="pt-6 p-4">
                                                <h2 className="font-semibold text-lg">{item.username}</h2>
                                                <p className="text-gray-500 text-sm mb-2">
                                                    {item.location || "Unknown"}
                                                </p>

                                                <p className="text-xs text-gray-400">PHARMACY</p>
                                                <p className="font-medium mb-2">
                                                    {item.pharmacyName || "Not Available"}
                                                </p>

                                                <p className="text-xs text-gray-400">CONTACT</p>
                                                <p className="text-sm mb-3">
                                                    {item.contact || "N/A"}
                                                </p>

                                                <div className="flex justify-between items-center">
                                                    <span className="text-xs text-gray-400">
                                                        📍 {item.location || "N/A"}
                                                    </span>

                                                    <button className="bg-green-500 text-white px-3 py-1 text-sm rounded-lg hover:bg-green-600">
                                                        View
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-600 text-center w-full">
                                        No Retailers Found
                                    </p>
                                )}
                            </div>

                            {/* Pagination (FIXED BELOW, NO OVERLAP) */}
                            <div className="flex items-center justify-between px-2 py-4">
                                <p className="text-gray-600">
                                    Showing <b>1 to 5</b> of {filteredUsers.length} Retailers
                                </p>

                                <div className="flex items-center gap-4">
                                    <AiOutlineLeft className="cursor-pointer hover:scale-110 transition" />

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

                                    <AiOutlineRight className="cursor-pointer hover:scale-110 transition" />
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