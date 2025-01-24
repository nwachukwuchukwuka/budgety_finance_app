import AppContext from "@/services/AppContext";
import BudgetCard from "@/ui_components/BudgetCard";
import BudgetFilter from "@/ui_components/BudgetFilter";
import Header from "@/ui_components/Header";
import React, { useContext } from "react";
import { HiOutlineChartPie } from "react-icons/hi";

const Budget = () => {
  const { summaryArray } = useContext(AppContext);

  console.log(summaryArray)

  return (
    <div className=''>
      <Header />
      <div className="flex justify-between items-center">
        <div className="flex mt-8 mb-4  md:mb-6">
          <p className="mr-2 border  py-1 px-2 md:px-[60px] md:text-[20px] text-gray-700 rounded-full font-semibold shadow-sm ">
            4 Entries
          </p>
          <p className="mr-2 border  py-1 px-2 md:px-[60px] md:text-[20px] text-gray-700 rounded-full font-semibold shadow-sm ">
            8 Categories
          </p>
        </div>
        <HiOutlineChartPie
          size={24}
          className="text-gray-700 mr-10 cursor-pointer hover:text-blue-500 transition-colors duration-200"
        />

      </div>

      <BudgetFilter />

      <div className="grid grid-cols-[25%,80%]  gap-2 mt-10">
        <div className='h-[150px] w-[250px] border'>
          CreateBudget
        </div>
        <div className="flex gap-2 flex-wrap">
          {summaryArray.map((summary, index) => (
            <BudgetCard summary={summary} />

          ))}
        </div>
      </div>
    </div>
  )
}

export default Budget