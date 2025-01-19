import { IoEyeOutline } from "react-icons/io5";
import InfoPopOver from "./InfoPopOver";
const Chart = () => {
  return (
    <div className='w-[full] h-[500px]'>
      <div className='pt-2 pb-14 px-4 border rounded-2xl'>
        <div>
          <div className="-mt-[20px] ml-2">
            <InfoPopOver />
          </div>

        </div>
        <div className="flex items-center">
          <p className='text-md mr-3'>Your Total Net Worth </p>
          <IoEyeOutline />
        </div>
        <h1 className='text-[30px] font-bold'>$0</h1>
      </div>
    </div>
  )
}

export default Chart