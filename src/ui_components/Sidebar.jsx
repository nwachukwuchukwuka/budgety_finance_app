import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { TbMoneybag } from "react-icons/tb";
import logo from "../assets/logo.jpg";
import React, { useContext } from "react";
import AppContext from "@/services/AppContext";

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(AppContext);

  return (
    <div>
      <aside className="bg-white h-screen text-gray-800 p-4 space-y-6 shadow-lg">
        {/* Close button */}
        <div className="flex justify-end">
          <button
            className="md:hidden p-2 bg-gray-100 rounded-full hover:bg-gray-200"
            onClick={() => setIsSidebarOpen(false)}
          >
            <IoMdClose className="text-gray-600" />
          </button>
        </div>

        <div>
          {/* User Info */}
          <div className="flex items-center border rounded-2xl border-gray-200 py-4 px-3 bg-gray-50 shadow-sm">
            <div className="mr-3">
              <img
                className="rounded-full w-[80px]"
                src={logo}
                alt="logo"
              />
            </div>
            <div>
              <h1 className="text-[20px] font-bold text-gray-900">Nwachukwu</h1>
              <p className="text-sm text-gray-500">Nwachukwuadinoyi@gmail.com</p>
              <div className="flex justify-between items-center mt-3">
                <div className="flex">
                  <div className="flex items-center mr-4 px-[9px] border rounded-xl border-gray-200 bg-gray-100">
                    <TbMoneybag className="text-yellow-500" />
                    <p className="ml-3 text-gray-700">0</p>
                  </div>
                  <p className="flex items-center text-[12px] border px-[10px] rounded-xl border-gray-200 bg-gray-100 text-gray-700">
                    Free Member
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-4">
          {[
            { to: "/home", label: "Home" },
            { to: "/budget", label: "Budget" },
            { to: "/statistics", label: "Statistics" },
            { to: "#", label: "Edit Profile" },
            { to: "#", label: "Change Password" },
            { to: "#", label: "FAQs" },
            { to: "#", label: "Chat with Support" },
            { to: "#", label: "Subscription" },
            { to: "#", label: "Light Mode" },
            { to: "#", label: "Log Out" },
          ].map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
              onClick={() => setIsSidebarOpen(false)}
            >
              <RxDashboard className="mr-2 text-blue-600" />
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
