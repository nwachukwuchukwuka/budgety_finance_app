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
                className={`fixed top-0 left-0 h-full bg-[#030a1c] md:w-80 z-50 md:p-4 text-white space-y-6 transition-width duration-300 ${isSidebarOpen ? "w-full p-4" : "w-0"}`}
            >
                {/* toggle sidebar button */}
                <div className='flex justify-end'>
                    {isSidebarOpen && (

                        <button
                            className="block md:hidden p-2 bg-gray-700 rounded-full"
                            onClick={() => setIsSidebarOpen(false)}
                        >
                            <IoMdClose />

                        </button>
                    )}
                </div>

                <div className="">
                    <div className={` md:flex items-center ${isSidebarOpen ? 'flex' : 'hidden'} border rounded-2xl border-blue-800 py-4 px-3`}>
                        <div className='mr-2'><img className="rounded-full w-[80px]" src={logo} alt="logo" /></div>
                        <div>
                            <h1 className='text-[20px] font-bold'>Nwachukwu</h1>
                            <p className='text-sm text-gray-500'>Nwachukwuadinoyi@gmail.com</p>
                            <div className='flex justify-between items-center mt-3'>
                                <div className='flex'>
                                    <div className='flex items-center mr-4 px-[9px] border rounded-xl border-blue-800 '>
                                        <TbMoneybag />
                                        <p className='ml-3'>0</p>
                                    </div>
                                    <p className=' flex items-center text-[12px]  border px-[10px] rounded-xl border-blue-800'>Free Member</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>


                <nav className="space-y-4">

                    <Link to="/home" className="flex items-center text-gray-300 hover:text-white" onClick={() => {
                        setIsSidebarOpen(false)
                    }}>
                        <RxDashboard className={`mr-2 text-blue-800 md:block ${isSidebarOpen ? "block" : "hidden"}`} />
                        <span className={`md:block ${isSidebarOpen ? "block" : "hidden"}`}>

                            Home
                        </span>
                    </Link>

                    <Link to="/budget" className="flex items-center text-gray-300 hover:text-white" onClick={() => {
                        setIsSidebarOpen(false)
                    }}>
                        <RxDashboard className={`mr-2 text-blue-800 md:block ${isSidebarOpen ? "block" : "hidden"}`} />
                        <span className={`md:block ${isSidebarOpen ? "block" : "hidden"}`}>

                            Budget
                        </span>
                    </Link>







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
