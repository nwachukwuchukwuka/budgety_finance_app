import { IoMenuSharp } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { useContext } from "react";
import AppContext from "@/services/AppContext";

const Header = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(AppContext);

  console.log("isSidebarOpen in Header:", isSidebarOpen);

  return (
    <div>
      <header className="mb-4 flex items-center justify-between py-4 px-4 md:px-6 rounded-md bg-white shadow-md">
        {/* Open Menu Button */}
        <button
          className="md:hidden p-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition duration-300"
          onClick={() => setIsSidebarOpen(true)}
        >
          <IoMenuSharp size={24} />
        </button>

        {/* Greeting Section */}
        <div>
          <h1 className="font-bold text-sm md:text-2xl text-gray-800">
            Hello, Nwachukwu
          </h1>
        </div>

        {/* Icons Section */}
        <div className="flex items-center space-x-4 p-2 bg-gray-50 rounded-md shadow-inner">
          <MdOutlineLightMode
            size={23}
            className="text-gray-500 hover:text-yellow-500 transition duration-300 cursor-pointer"
          />
          <IoIosNotificationsOutline
            size={23}
            className="text-gray-500 hover:text-blue-500 transition duration-300 cursor-pointer"
          />
          <FaRegUser
            size={20}
            className="text-gray-500 hover:text-green-500 transition duration-300 cursor-pointer"
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
