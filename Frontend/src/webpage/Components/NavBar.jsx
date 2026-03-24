import React from 'react'
import { useState, useEffect } from 'react'
import { Search, Menu, X, Pill } from "lucide-react";
const NavBar = () => {

    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    const links = ["Home", "Medicines", "Services", "Contact"];

    // Scroll effect
    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <nav className={`fixed top-0 w-full ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
                <div className="flex justify-between items-center p-4 ">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className='bg-linear-to-br from-emerald-400 to-teal-500 p-2 rounded-lg'>
                            <Pill className='text-white' /></div>
                        <h2 className='text-xl text-emerald-500 font-semibold font-semi-bold'>SmartPharm</h2>
                    </div>
                    {/* Desktop Menu */}
                    <div className="hidden md:flex text-slate-300 gap-5">
                        {links.map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`}>
                                {item}
                            </a>
                        ))}
                    </div>
                    {/* Search + Button */}
                    <div className="hidden md:flex gap-3">
                        <input type="text" placeholder="Search..." />
                        <button className='bg-linear-to-r from-emerald-400 to-teal-500 text-white px-6 py-3 rounded-full font-medium shadow-md hover:opacity-90 transition'>
                            Login/Register</button>
                    </div>
                    {/* Mobile Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? <X /> : <Menu />}
                    </button>
                </div>
                {/* Mobile Menu */}
                {mobileOpen &&(
                <div className="md:hidden flex flex-col bg-white text-black shadow gap-4 p-4">
                    {links.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setMobileOpen(false)}
                        >
                            {item}
                        </a>
                    ))}

                    <input
                        type="text"
                        placeholder="Search..." />
                    <button className='bg-linear-to-r from-emerald-400 to-teal-500 text-white px-6 py-3 rounded-full font-medium shadow-md hover:opacity-90 transition'>
                        Login/Register</button>

                </div>
                )}
            </nav >
        </>
    )
}
export default NavBar 