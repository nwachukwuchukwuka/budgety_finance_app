import { IoMenuSharp } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";

const Header = ({ setIsSidebarOpen }) => {
    return (
        <div>
            {/* <header className="mb-4 flex items-center justify-between bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-4 px-6 rounded-md shadow-lg"> */}
            <header className="mb-4 flex items-center justify-between py-4 md:px-6 rounded-md shadow-none md:shadow-lg">
                {/* Open Menu Button */}
                <button
                    className="md:hidden p-2 bg-blue-700 hover:bg-blue-800 text-white rounded transition duration-300"
                    onClick={() => setIsSidebarOpen(true)}
                >
                    <IoMenuSharp size={24} />
                </button>

                <div>

                    <h1 className="font-bold text-md md:text-[28px]">Hello, Nwachukwu</h1>

                </div>

                <div>

                </div>
                {/* Search Bar */}
                {/* <div className="flex-1 mx-4">
                    <SearchBar />
                </div> */}

                {/* Icons Section */}
                 <div className="flex items-center space-x-4 p-2 bg-gradient-to-r from-blue-800 to-blue-700 rounded-md shadow-md"> 
                    <MdOutlineLightMode
                        size={23}
                        className="text-gray-300 hover:text-yellow-400 transition duration-300 cursor-pointer"
                    />
                    <IoIosNotificationsOutline
                        size={23}
                        className="text-gray-300 hover:text-blue-400 transition duration-300 cursor-pointer"
                    />
                    <FaRegUser
                        size={23}
                        className="text-gray-300 hover:text-green-400 transition duration-300 cursor-pointer"
                    />
                </div> 
            </header>
        </div>
    )
}

export default Header