import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const UserProfileMenu = ({ username = "User", role = "Admin" }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div ref={menuRef} className="relative">

      {/* Avatar */}
      <div
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full bg-linear-to-r from-indigo-500 to-purple-500 text-white flex items-center justify-center font-bold cursor-pointer shadow-md"
      >
        {username?.charAt(0).toUpperCase()}
      </div>

      {/* Dropdown */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="absolute right-0 mt-3 w-40 bg-white shadow-xl rounded-xl border z-50"
        >

          {/* Header */}
          <div className="px-2 py-3 border-b">
            <p className="font-semibold">{username}</p>
            <p className="text-xs text-gray-500">{role}</p>
          </div>

          {/* Menu */}
          <button className="w-full text-left px-2 py-0.5 hover:bg-gray-100">
            My Profile
          </button>

          <button className="w-full text-left px-2 py-0.5 hover:bg-gray-100">
            Settings
          </button>

          <button
            onClick={handleLogout}
            className="w-full text-left px-2 py-0.5 text-red-500 hover:bg-gray-100"
          >
            Logout
          </button>

        </motion.div>
      )}
    </div>
  );
};

export default UserProfileMenu;