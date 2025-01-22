import { IoEyeOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";

import InfoPopOver from "./InfoPopOver";
const Chart = () => {
  return (
    <div className='w-[full] flex flex-col md:flex-row justify-between gap-4'>
      <div className='pt-2 pb-8 px-4 border border-gray-200 shadow-lg rounded-2xl md:w-[370px] bg-white'>
        <div>
          <div className="-mt-[20px] ml-2">
            <InfoPopOver />
          </div>
        </div>
        <div className="flex items-center">
          <p className='text-md text-gray-700 mr-3'>Your Total Net Worth</p>
          <IoEyeOutline size={24} className="text-gray-600" />
        </div>
        <h1 className='text-[30px] font-bold text-gray-800'>$0</h1>
        <button className="text-white text-sm mt-4 font-medium bg-blue-500 hover:bg-blue-400 border border-transparent p-2 pr-8 rounded-xl shadow-md transition duration-300">
          View All Accounts
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-dark-blue">Accounts</h2>
          <IoIosInformationCircleOutline className="text-dark-blue bg-blue-200 rounded-full p-1" size={28} />
        </div>

        <p className="text-gray-600 mb-6">
          Manage your accounts efficiently. View all account details or add a new account to get started.
        </p>

        {/* Button */}
        <button className="text-sm font-medium text-white bg-blue-500 hover:bg-blue-400 border border-transparent p-3 rounded-xl shadow-md transition duration-300 w-full">
          ADD NEW ACCOUNT
        </button>
      </div>

    </div>
  )
}

export default Chart