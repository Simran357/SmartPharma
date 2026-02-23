import React, { useState, useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

function TempelateDesigner() {
    const [activeTab, setActiveTab] = useState("email");

    const [emailSubject, setEmailSubject] = useState("");
    const [emailBody, setEmailBody] = useState("");
    const [whatsappText, setWhatsappText] = useState("");

    // 🔹 Quill setup
    const { quill, quillRef } = useQuill({
        theme: "snow",
        modules: {
            toolbar: [
                ["bold", "italic", "underline"],
                ["link"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["clean"],
            ],
        },
    });

    // 🔹 Sync quill content
    useEffect(() => {
        if (quill) {
            quill.on("text-change", () => {
                setEmailBody(quill.root.innerHTML);
            });
        }
    }, [quill]);

    return (
        <div className="grid grid-cols-4">

            {/* ================= LEFT SIDEBAR ================= */}
            <div className="col-span-1 min-h-screen border-r">

                <div className="p-6 px-10 border-b">
                    <h2 className="font-bold">Template Designer</h2>
                    <span className="text-xs">Claim Rejection v.1.0.4</span>
                </div>

                <div className="p-6">

                    {/* Toggle Buttons */}
                    <div className="flex mb-4 gap-2">
                        <button
                            onClick={() => setActiveTab("email")}
                            className={
                                activeTab === "email"
                                    ? "flex-1 bg-green-500 text-white py-2 rounded-md"
                                    : "flex-1 bg-gray-300 py-2 rounded-md"
                            }
                        >
                            Email
                        </button>

                        <button
                            onClick={() => setActiveTab("whatsapp")}
                            className={
                                activeTab === "whatsapp"
                                    ? "flex-1 bg-green-500 text-white py-2 rounded-md"
                                    : "flex-1 bg-gray-300 py-2 rounded-md"
                            }
                        >
                            WhatsApp
                        </button>
                    </div>

                    {/* EMAIL INPUTS */}
                    {activeTab === "email" && (
                        <div>
                            <input
                                type="text"
                                placeholder="Email Subject"
                                value={emailSubject}
                                onChange={(e) => setEmailSubject(e.target.value)}
                                className="w-full border p-2 mb-3 rounded-md"
                            />

                            {/* Rich Editor */}
                            <div ref={quillRef} className="bg-white" />
                        </div>
                    )}

                    {/* WHATSAPP INPUT */}
                    {activeTab === "whatsapp" && (
                        <textarea
                            placeholder="WhatsApp Message"
                            value={whatsappText}
                            onChange={(e) => setWhatsappText(e.target.value)}
                            className="w-full border p-2 rounded-md"
                            rows="4"
                        />
                    )}
                </div>
            </div>

            {/* ================= MIDDLE PREVIEW ================= */}
            {/* ================= MIDDLE PREVIEW ================= */}
            <div className="col-span-2 min-h-screen bg-[#F6F8F6] pt-8 flex flex-col px-24 gap-4">

                <div className="text-lg font-semibold">Email Preview</div>

                <div className="border shadow-lg rounded-lg bg-white">

                    <div className="flex justify-between py-6 px-10 border-b">
                        <div>Smart Pharma Logo</div>
                        <span>ID: SP-CLAIM-8821</span>
                    </div>

                    <div className="pt-6 pb-6 px-10 flex flex-col gap-6">

                        <h1 className="text-2xl font-bold">
                            {emailSubject || "Claim Rejection Number"}
                        </h1>

                        {/* 🔥 ONLY THIS PART IS CONNECTED TO EDITOR */}
                        {activeTab === "email" && (
                            <div
                                dangerouslySetInnerHTML={{ __html: emailBody }}
                            />
                        )}

                        {activeTab === "whatsapp" && (
                            <p>{whatsappText}</p>
                        )}

                        <button className="rounded-xl max-w-fit px-4 py-2 font-medium bg-[#13EC49]">
                            View Full Decision Record
                        </button>

                        <div className="flex justify-center items-center">
                            <p className="text-xs">
                                ©2024 SmartPharma Wholesale Solutions
                            </p>
                        </div>

                    </div>
                </div>
            </div>


            {/* ================= RIGHT SIDEBAR ================= */}
            <div className="col-span-1 bg-green-300 min-h-screen px-8 py-8"> <h1>Rejection Reason Presets</h1> <div className='flex flex-col gap-3 mt-5'> <div className='border flex p-3 px-5 justify-between rounded-2xl'> <h3>Batch Mismatch</h3> <p>Icon</p> </div> <div className='border flex p-3 px-5 justify-between rounded-2xl'> <h3>Batch Mismatch</h3> <p>Icon</p> </div> <div className='border flex p-3 px-5 justify-between rounded-2xl'> <h3>Batch Mismatch</h3> <p>Icon</p> </div> <div className='border flex p-3 px-5 justify-between rounded-2xl'> <h3>Batch Mismatch</h3> <p>Icon</p> </div> </div> <div className='border border-dashed mt-4 flex p-3 px-5 justify-center items-center rounded-2xl'> <h3>Batch Mismatch</h3> </div> <div className=' flex justify-between mt-6 rounded-2xl'> <h3 >Inspector's Evidence</h3> <span className='text-[#05EB20] px-1 bg-[#D0FBDB] rounded-xl ' >Verified</span> </div> <div className="flex mt-4 gap-2"> <img src="https://tse1.mm.bing.net/th/id/OIP.ZPYR9dC7_bgZgeF7BdrCggHaJQ?pid=Api&P=0&h=180" alt="" className="rounded-xl object-cover object-center w-1/2 h-40" /> <img src="https://tse3.mm.bing.net/th/id/OIP.FlOv-gYD0V4BxFh5VDDt1gHaLH?pid=Api&P=0&h=180" alt="" className="rounded-xl object-cover object-center w-1/2 h-40" /> </div> <div className='flex-col border border-dashed mt-4 flex p-7 px-5 justify-center items-center rounded-2xl'> <img src="" alt="img" /> <h3 className='text-nowrap text-xs'>Drag and drop Items to Upload Evidence</h3> </div> <div className='border text-white bg-black mt-4 flex p-3 px-5 justify-center items-center rounded-2xl'> <h3>Finalize & Send Notice</h3> </div> <div className='border mt-4 flex p-3 px-5 justify-center items-center rounded-2xl'> <h3>Batch Mismatch</h3> </div> </div> </div>
    );
}

export default TempelateDesigner;
