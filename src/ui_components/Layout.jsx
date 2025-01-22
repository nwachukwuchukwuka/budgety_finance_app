import React, { useContext } from "react";
import Sidebar from "@/ui_components/Sidebar";
import AppContext from "@/services/AppContext";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { TbMoneybag } from "react-icons/tb";
import logo from '../assets/logo.jpg'
import { IoMenuSharp } from "react-icons/io5";



const Layout = ({ children }) => {
    const { isSidebarOpen, setIsSidebarOpen } = useContext(AppContext);


    return (
        <div className="flex ">
            {/* Sidebar */}

            <div
                className={`fixed top-0 left-0 h-full bg-[#f8fafc] md:w-80 z-50 md:p-4 text-[#374151] space-y-6 shadow-lg transition-width duration-300 ${isSidebarOpen ? "w-full p-4" : "w-0"
                    }`}
            >
                {/* Toggle sidebar button */}
                <div className="flex justify-end">
                    {isSidebarOpen && (
                        <button
                            className="block md:hidden p-2 bg-[#e2e8f0] rounded-full hover:bg-[#cbd5e1]"
                            onClick={() => setIsSidebarOpen(false)}
                        >
                            <IoMdClose className="text-[#1f2937]" />
                        </button>
                    )}
                </div>

                <div>
                    {/* User Info */}
                    <div
                        className={`md:flex items-center ${isSidebarOpen ? "flex" : "hidden"
                            } border rounded-2xl border-[#e2e8f0] py-4 px-3 bg-[#f1f5f9] shadow-sm`}
                    >
                        <div className="mr-2">
                            <img className="rounded-full w-[80px]" src={logo} alt="logo" />
                        </div>
                        <div>
                            <h1 className="text-[20px] font-bold text-[#1f2937]">Nwachukwu</h1>
                            <p className="text-sm text-[#6b7280]">Nwachukwuadinoyi@gmail.com</p>
                            <div className="flex justify-between items-center mt-3">
                                <div className="flex">
                                    <div className="flex items-center mr-4 px-[9px] border rounded-xl border-[#e2e8f0] bg-[#e5e7eb]">
                                        <TbMoneybag className="text-[#f59e0b]" />
                                        <p className="ml-3 text-[#374151]">0</p>
                                    </div>
                                    <p className="flex items-center text-[12px] border px-[10px] rounded-xl border-[#e2e8f0] bg-[#e5e7eb] text-[#374151]">
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
                        { to: "/budget", label: "Edit Profile" },
                        { to: "/budget", label: "Change Password" },
                        { to: "/budget", label: "FAQs" },
                        { to: "/budget", label: "Chat with support" },
                        { to: "/budget", label: "Subscription" },
                        { to: "/budget", label: "Light Mode" },
                        { to: "/budget", label: "Log out" },
                    ].map((link, index) => (
                        <Link
                            key={index}
                            to={link.to}
                            className="flex items-center text-gray-900 hover:text-[#1f2937] transition-colors duration-200"
                            onClick={() => setIsSidebarOpen(false)}
                        >
                            <RxDashboard
                                className={`mr-2 text-gray-400 md:block ${isSidebarOpen ? "block" : "hidden"
                                    }`}
                            />
                            <span className={`md:block ${isSidebarOpen ? "block" : "hidden"}`}>
                                {link.label}
                            </span>
                        </Link>
                    ))}
                </nav>
            </div>











            {/* Main Content */}
            <main className="ml-0 md:ml-80 p-4 flex-1">
                {children}
            </main>
        </div>
    );
};

export default Layout;


















// import React, { useContext } from "react";
// import Sidebar from "@/ui_components/Sidebar";
// import AppContext from "@/services/AppContext";


// const Layout = ({ children }) => {
//     const { isSidebarOpen, setIsSidebarOpen, user } = useContext(AppContext);


//     return (
//         <div className="min-h-screen flex ">
//             {/* Sidebar */}
//             <div className={`w-[100%] md:w-1/3 ${isSidebarOpen ? "block" : "hidden  md:block"} `}>
//                 <Sidebar />
//             </div>

//             {/* Main Content */}
//             <main className=" p-4">
//                 {children}
//             </main>
//         </div>
//     );
// };

// export default Layout;
