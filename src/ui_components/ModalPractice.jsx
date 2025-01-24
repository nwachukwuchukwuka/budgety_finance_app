import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import SyncBankComponent from "./SyncBankComponent";
import logo from "../assets/logo.jpg";
import { RiArrowRightSLine } from "react-icons/ri";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useEffect, useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { ScrollArea } from "@/components/ui/scroll-area";
import ViewSummaryModal from "./ViewSummaryModal";

import AppContext from "@/services/AppContext";
import React, { useContext } from "react";


const ModalPractice = () => {

    const { showFormModal, setShowFormModal, showModal, setShowModal } = useContext(AppContext)



    const [viewSummaryData, setViewSummaryData] = useState({});

    const [showDropdown, setShowDropdown] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);
    const [selectedItems, setSelectedItems] = useState({});
    const [name, setName] = useState("");
    const [limit, setLimit] = useState("");
    const [frequency, setFrequency] = useState("");
    const [notification, setNotification] = useState(100);
    const [currency, setCurrency] = useState("");

    const [summaryArray, setSummaryArray] = useState([]);


    const [errors, setErrors] = useState({}); // State to track validation errors

    // validation function
    const validateInputs = () => {
        const selectedCategories = Object.keys(selectedItems).filter((key) => selectedItems[key]);
        const newErrors = {};

        if (!name.trim()) newErrors.name = "Name is required.";
        if (!limit.trim() || isNaN(Number(limit)) || Number(limit) <= 0) newErrors.limit = "Limit must be a positive number.";
        if (selectedCategories.length === 0) newErrors.categories = "At least one category must be selected.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };




    const categories = {
        Childcare: ["Babysitter", "Camps", "Clothes", "Daycare"],
        Education: ["Tuition", "Books", "Online Courses", "Workshops"],
        Financial: ["Savings", "Investments", "Insurance", "Loans"],
        Entertainment: ["Movies", "Games", "Music", "Events"],
    };

    const toggleDropdown = () => setShowDropdown(!showDropdown);
    const toggleSubcategory = (category) => setActiveCategory(prev => (prev === category ? null : category));

    const handleCheckboxChange = (item) => {
        setSelectedItems(prev => ({
            ...prev,
            [item]: !prev[item],
        }));
    };

    //categories end


    const handleSubmit = () => {

        if (!validateInputs()) return;


        const selectedCategories = Object.keys(selectedItems).filter(key => selectedItems[key]);
        const data = {
            name,
            limit,
            frequency,
            notification,
            currency,
            categories: selectedCategories,
        };
        setViewSummaryData(data)
        setShowFormModal(false);
  console.log(viewSummaryData)


    };

    const addToSummaryArray = (summary) => {
        setSummaryArray((prev) => [...prev, summary]);
    }



    const handleOpenModal = () => {
        setShowModal(true); // Open the modal
        setShowFormModal(true); // Start with the form modal
    };


    if (!showModal) {
        return (

            <div className="rounded-lg shadow-md border p-3  pb-6 mt-6 ">
                <p className="flex justify-end text-sm text-gray-400"> 1 of 5</p>
                <div className="pt-4 ">
                    <div>

                        <button
                            onClick={handleOpenModal}
                            className="px-6 py-2 my-2 bg-blue-500 text-white text-sm font-semibold rounded-full shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            ADD BUDGET
                        </button>

                        <h1 className=" text-sm text-gray-600">
                            Create a single or multi-category budget
                        </h1>
                    </div>
                </div>
            </div>



        );
    }





    return (
        <div>
            <Dialog className="" open={showModal} onOpenChange={setShowModal}>
                <DialogTrigger asChild >
                    <div>

                        <button className=" w-full sm:w-auto px-6 py-2 bg-blue-500 text-white rounded-full font-semibold text-sm shadow-md hover:bg-blue-600 transition-colors duration-300">
                            ADD BUDGET
                        </button>
                    </div>
                </DialogTrigger>


                <DialogContent
                    className="p-6 w-[360px] md:w-[550px] bg-gray-50 rounded-xl shadow-lg "
                // onCloseAutoFocus={() => setViewSummaryData({})}
                >

                    {showFormModal ? (

                        <div className="h-[420px] md:w-[460px] overflow-y-scroll  scrollbar-hidden">


                            {/* First Option */}

                            <div className="">
                                <div className="bg-gray-50 w-full max-w-lg p-6 rounded-lg shadow-lg relative">

                                    {/* progressbar */}
                                    <div className="w-[90%] md:w-full max-w-xs mx-auto">
                                        <div className="bg-gray-200 h-2 rounded-full mb-2">
                                            <div className="bg-blue-700 h-2 rounded-full" style={{ width: "50%" }}></div>
                                        </div>
                                        <p className="text-center text-sm font-semibold">1 of 2</p>
                                    </div>

                                    <h2 className="text-lg font-semibold text-gray-800 md:mb-2 text-center">Create a Personalized Budget</h2>
                                    {/* Categories */}
                                    <div className="relative w-full mt-2 md:mt-6">
                                        <label className="block text-gray-700 font-medium mb-1">Category</label>
                                        <div
                                            className="bg-white text-gray-700 px-4 py-3 rounded-lg shadow-md cursor-pointer flex justify-between items-center border border-gray-300"
                                            onClick={toggleDropdown}
                                        >
                                            <span className="font-medium">
                                                {Object.keys(selectedItems).filter(key => selectedItems[key]).join(", ") || "Select one or more categories"}
                                            </span>
                                            <span className="text-gray-500">{showDropdown ? "▲" : "▼"}</span>
                                        </div>
                                        {showDropdown && (
                                            <div className="absolute w-full bg-white text-gray-700 mt-2 rounded-lg shadow-lg z-50 border border-gray-300">
                                                {Object.keys(categories).map((category, index) => (
                                                    <div key={index} className="p-4 border-b border-gray-200">
                                                        <div
                                                            className="bg-gray-100 text-gray-800 px-4 py-3 rounded-lg shadow-sm cursor-pointer flex justify-between items-center"
                                                            onClick={() => toggleSubcategory(category)}
                                                        >
                                                            <span className="font-medium">{category}</span>
                                                            <span>{activeCategory === category ? "▲" : "▼"}</span>
                                                        </div>
                                                        {activeCategory === category && (
                                                            <div className="mt-2">
                                                                {categories[category].map((item, idx) => (
                                                                    <label key={idx} className="flex items-center justify-between px-2 py-1 hover:bg-gray-100 rounded-md cursor-pointer">
                                                                        <span>{item}</span>
                                                                        <input
                                                                            type="checkbox"
                                                                            className="form-checkbox text-blue-500 focus:ring-blue-300"
                                                                            checked={selectedItems[item] || false}
                                                                            onChange={() => handleCheckboxChange(item)}
                                                                        />
                                                                    </label>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        {errors.categories && <p className="text-red-500 text-sm mt-1">{errors.categories}</p>}

                                    </div>
                                    {/* Name */}
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-medium mb-1">Name</label>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Enter name"
                                            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-1 outline-none"
                                        />
                                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}

                                    </div>
                                    {/* Limit */}
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-medium mb-1">Limit</label>
                                        <input
                                            type="number"
                                            value={limit}
                                            onChange={(e) => setLimit(e.target.value)}
                                            placeholder="Enter limit"
                                            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-1 outline-none"
                                        />
                                        {errors.limit && <p className="text-red-500 text-sm mt-1">{errors.limit}</p>}

                                    </div>
                                    {/* Frequency */}
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-medium text-sm mb-1">Choose Frequency</label>
                                        <div className="flex gap-2">
                                            <button
                                                type="button"
                                                onClick={() => setFrequency("Weekly")}
                                                className={`flex-1 px-4 py-1 border rounded-lg text-gray-700 hover:bg-gray-100 ${frequency === "Weekly" && "bg-blue-100"}`}
                                            >
                                                Weekly
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setFrequency("Monthly")}
                                                className={`flex-1 px-4 py-1 border rounded-lg text-gray-700 hover:bg-gray-100 ${frequency === "Monthly" && "bg-blue-100"}`}
                                            >
                                                Monthly
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setFrequency("Custom")}
                                                className={`flex-1 px-4 py-1 border rounded-lg text-gray-700 hover:bg-gray-100 ${frequency === "Custom" && "bg-blue-100"}`}
                                            >
                                                Custom
                                            </button>
                                        </div>
                                    </div>
                                    {/* Notification */}
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-medium text-sm">Get Notified When Budget Reaches:</label>
                                        <input
                                            type="range"
                                            min="1"
                                            max="100"
                                            value={notification}
                                            onChange={(e) => setNotification(e.target.value)}
                                            className="w-full h-1"
                                        />
                                        <p>{notification}%</p>
                                    </div>
                                    {/* Currency */}
                                    <div className="mb-6">
                                        <label className="block text-gray-700 font-medium mb-1">Select Currency</label>
                                        <div className="flex gap-2">
                                            <button
                                                type="button"
                                                onClick={() => setCurrency("Primary")}
                                                className={`flex-1 px-4 py-1 border rounded-lg text-gray-700 hover:bg-gray-100 ${currency === "Primary" && "bg-blue-100"}`}
                                            >
                                                Primary
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setCurrency("Secondary")}
                                                className={`flex-1 px-4 py-1 border rounded-lg text-gray-700 hover:bg-gray-100 ${currency === "Secondary" && "bg-blue-100"}`}
                                            >
                                                Secondary
                                            </button>
                                        </div>
                                    </div>
                                    {/* Submit Button */}
                                    <div className="flex justify-end gap-4">
                                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                                            onClick={handleSubmit}
                                        >
                                            View Summary
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>


                    ) : (
                        <div>
                            <button
                                className="mt-4 text-black px-6 py-2 rounded-lg hover:bg-gray-200 mb-2 transition-colors duration-200"
                                onClick={() => setShowFormModal(true)}
                            >
                                <IoIosArrowRoundBack size={24} />
                            </button>

                            {/* this is the view summary component that will be showed is syncbank is true */}
                            <ViewSummaryModal viewSummaryData={viewSummaryData} setViewSummaryData={setViewSummaryData}
                                addToSummaryArray={addToSummaryArray} setName={setName} setLimit={setLimit} setFrequency={setFrequency} setNotification={setNotification} setCurrency={setCurrency}
                                setSelectedItems={setSelectedItems}
                            />
                            
      

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
    )
}

export default ModalPractice

