import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { TbMoneybag } from "react-icons/tb";
import logo from '../assets/logo.jpg'
import React, { useContext } from "react";
import AppContext from "@/services/AppContext";


const Sidebar = () => {
    const { isSidebarOpen, setIsSidebarOpen, user } = useContext(AppContext);

    return (
        <div>
            <aside
                className="bg-[#030a1c]   h-screen text-white  p-4 space-y-6"
            >
                {/* Close button */}
                <div className='flex justify-end'>

                    <button
                        className="md:hidden p-2 bg-gray-700 rounded-full"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <IoMdClose />

                    </button>
                </div>

                <div className="">
                    {/* <h1 className="text-2xl font-bold">Ekash</h1> */}
                    <div className='flex items-center border rounded-2xl border-blue-800 py-4 px-3'>
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
                        <RxDashboard className="mr-2 text-blue-800" />
                        Home
                    </Link>

                    <Link to="/budget" className="flex items-center text-gray-300 hover:text-white" onClick={() => {
                        setIsSidebarOpen(false)
                    }}>
                        <RxDashboard className="mr-2 text-blue-800" />
                        Budget
                    </Link>

                    <Link to="/statistics" className="flex items-center text-gray-300 hover:text-white" onClick={() => {
                        setIsSidebarOpen(false)
                    }}>
                        <RxDashboard className="mr-2 text-blue-800" />
                        Statistics
                    </Link>
                    <Link href="#" className="flex items-center text-gray-300 hover:text-white" onClick={() => {
                        setIsSidebarOpen(false)
                    }}>
                        <RxDashboard className="mr-2 text-blue-800" />
                        Edit Profile
                    </Link>


                    <Link href="#" className="flex items-center text-gray-300 hover:text-white" onClick={() => {
                        setIsSidebarOpen(false)
                    }}>
                        <RxDashboard className="mr-2" />
                        Change Password
                    </Link>


                    <Link href="#" className="flex items-center text-gray-300 hover:text-white" onClick={() => {
                        setIsSidebarOpen(false)
                    }}>
                        <RxDashboard className="mr-2" />
                        FAQs
                    </Link>


                    <Link href="#" className="flex items-center text-gray-300 hover:text-white" onClick={() => {
                        setIsSidebarOpen(false)
                    }}>
                        <RxDashboard className="mr-2" />
                        Chat with support
                    </Link>
                    <Link href="#" className="flex items-center text-gray-300 hover:text-white" onClick={() => {
                        setIsSidebarOpen(false)
                    }}>
                        <RxDashboard className="mr-2" />
                        Subscription
                    </Link>
                    <Link href="#" className="flex items-center text-gray-300 hover:text-white" onClick={() => {
                        setIsSidebarOpen(false)
                    }}>
                        <RxDashboard className="mr-2" />
                        Light Mode
                    </Link>
                    <Link href="#" className="flex items-center text-gray-300 hover:text-white" onClick={() => {
                        setIsSidebarOpen(false)
                    }}>
                        <RxDashboard className="mr-2" />
                        Log Out
                    </Link>

                </nav>
            </aside>
        </div>
    )
}

export default Sidebar