import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import SyncBankComponent from "./SyncBankComponent";
import logo from "../assets/logo.jpg";
import { RiArrowRightSLine } from "react-icons/ri";
import { IoIosArrowRoundBack } from "react-icons/io";

const AddAccount = () => {
  const [syncBank, setSyncBank] = useState(false);

  return (
    <div>
      <Dialog className="">
        <DialogTrigger>
          <button className="w-full sm:w-auto px-6 py-2 bg-blue-500 text-white rounded-full font-semibold text-sm shadow-md hover:bg-blue-600 transition-colors duration-300 ">
            ADD ACCOUNT
          </button>
        </DialogTrigger>
        <DialogContent
          className="p-6  w-[360px] md:w-[500px] bg-white rounded-xl shadow-lg"
          onCloseAutoFocus={() => setSyncBank(false)} // Reset `syncBank` when modal closes
        >
          {!syncBank ? (
            <>
              {/* First Option */}
              <div
                className="flex items-center justify-between cursor-pointer hover:bg-gray-100 p-4 rounded-lg transition-colors mt-4"
                onClick={() => setSyncBank(true)}
              >
                <img
                  className="w-[70px] h-[70px] rounded-full border-b-4 border-blue-500"
                  src={logo}
                  alt="logo"
                />
                <div className="flex-1 ml-4">
                  <p className="font-semibold text-gray-800">Sync Bank Account</p>
                  <p className="text-sm text-gray-600">For Canada and US banks only</p>
                </div>
                <RiArrowRightSLine size={24} className="text-gray-500" />
              </div>

              {/* Second Option */}
              <div
                className="flex items-center justify-between cursor-pointer hover:bg-gray-100 p-4 rounded-lg transition-colors mt-4"
                onClick={() => setSyncBank(true)}
              >
                <img
                  className="w-[70px] h-[70px] rounded-full border-b-4 border-blue-500"
                  src={logo}
                  alt="logo"
                />
                <div className="flex-1 ml-4">
                  <p className="font-semibold text-gray-800">Add Manual Bank Account</p>

                </div>
                <RiArrowRightSLine size={24} className="text-gray-500" />
              </div>
            </>
          ) : (
            <div>
              <button
                className="mt-4 text-black px-6 py-2 rounded-lg hover:bg-gray-200 mb-2 transition-colors duration-200"
                onClick={() => setSyncBank(false)}
              >
                <IoIosArrowRoundBack size={24} />
              </button>
              <SyncBankComponent />

            </div>
          )}
          <DialogClose

            onClick={() => setSyncBank(false)} // Reset `syncBank` when "X" is clicked
          >
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddAccount;
