"use client"
import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Switch } from "@/components/ui/switch";
import { MdCancel } from "react-icons/md";
import { CiBank } from "react-icons/ci";
import { BsCashStack } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

const AddTransaction = () => {
    const { toast } = useToast();
    const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
    const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);
    const [selectedItems, setSelectedItems] = useState({});
    const [name, setName] = useState("");
    const [limit, setLimit] = useState("");
    const [errors, setErrors] = useState({});

    const categories = {
        Employment: ["Bonus", "Commission", "Employer Pension", "Paycheck"],
        Government: ["Tuition", "Books", "Online Courses", "Workshops"],
        Investment: ["Savings", "Investments", "Insurance", "Loans"],
        Miscellaneous: ["Movies", "Games", "Music", "Events"],
    };

    const toggleDropdown = () => setShowDropdown(!showDropdown);
    const toggleSubcategory = (category) =>
        setActiveCategory((prev) => (prev === category ? null : category));

    const handleCheckboxChange = (item) => {
        setSelectedItems((prev) => ({
            ...prev,
            [item]: !prev[item],
        }));
    };

    return (
        <div>
            <div className="rounded-lg shadow-sm border p-3 pb-6 mt-6 w-[320px] md:w-[280px] h-[180px]">
                <p className="flex justify-end text-sm text-gray-400">3 of 5</p>
                <div className="pt-4">
                    <div>
                        <button
                            onClick={() => setIsFirstModalOpen(true)}
                            className="px-6 py-2 my-2 bg-blue-500 text-white text-sm font-semibold rounded-full shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            ADD TRANSACTION
                        </button>
                        <p className="text-gray-600 mb-4 text-sm">
                            Whether you have synced your bank account or not, you can manually
                            add transactions if you want.
                        </p>
                    </div>
                </div>
            </div>

            {/* First Modal */}
            <AnimatePresence>
                {isFirstModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
                    >
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            className="bg-white rounded-lg p-6 w-full max-w-md"
                        >
                            <div className="flex justify-end mb-4">
                                <MdCancel
                                    className="text-gray-500 text-2xl cursor-pointer hover:text-red-500 transition-colors duration-200"
                                    onClick={() => setIsFirstModalOpen(false)}
                                />
                            </div>
                            <p className="text-gray-600 mb-4 text-center">
                                What do you want to add?
                            </p>
                            <div className="space-y-4">
                                <button
                                    className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                                    onClick={() => {
                                        setIsFirstModalOpen(false);
                                        setIsSecondModalOpen(true);
                                    }}
                                >
                                    Inflow
                                </button>
                                <button
                                    className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                                    onClick={() => {
                                        setIsFirstModalOpen(false);
                                        setIsSecondModalOpen(true);
                                    }}
                                >
                                    Expense
                                </button>
                                <button
                                    className="w-full px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                                    onClick={() => {
                                        setIsFirstModalOpen(false);
                                        setIsSecondModalOpen(true);
                                    }}
                                >

                                    Savings
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Second Modal */}
            <AnimatePresence>
                {isSecondModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
                    >
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            className="bg-white rounded-lg p-6 w-full max-w-md"
                        >
                            <div className="flex justify-end ">
                                <MdCancel
                                    className="text-gray-500 text-2xl cursor-pointer hover:text-red-500 transition-colors duration-200"
                                    onClick={() => setIsSecondModalOpen(false)}
                                />
                            </div>
                            <button
                                className="mt-1 text-black px-6 py-2 rounded-lg hover:bg-gray-200 mb-2 transition-colors duration-200"
                                onClick={() => {
                                    setIsFirstModalOpen(true);
                                    setIsSecondModalOpen(false);
                                }}
                            >
                                <IoIosArrowRoundBack size={24} />
                            </button>
                            <div className="h-[420px] overflow-y-scroll scrollbar-hidden">
                                <div className="">
                                    <div className="rounded-lg">
                                        {/* Progress Bar */}
                                        <div className="w-[90%] md:w-full max-w-xs mx-auto">
                                            <div className="bg-gray-200 h-1 rounded-full mb-2">
                                                <div
                                                    className="bg-blue-700 h-1 rounded-full"
                                                    style={{ width: "50%" }}
                                                ></div>
                                            </div>
                                            <p className="text-center text-sm font-semibold">1 of 2</p>
                                        </div>
                                        <h2 className="text-md font-semibold text-gray-800 md:mb-2 text-center pb-2">
                                            Add an inflow transaction
                                        </h2>

                                        {/* Categories Dropdown */}
                                        <div className="relative w-full mt-2 md:mt-6">
                                            <label className="block text-gray-700 font-medium mb-1">
                                                Category
                                            </label>
                                            <div
                                                className="bg-white text-gray-700 px-4 py-1 rounded-lg cursor-pointer flex justify-between items-center border border-gray-300"
                                                onClick={toggleDropdown}
                                            >
                                                <span className="font-medium">
                                                    {Object.keys(selectedItems)
                                                        .filter((key) => selectedItems[key])
                                                        .join(", ") || "categories"}
                                                </span>
                                                <span className="text-gray-500">
                                                    {showDropdown ? "▲" : "▼"}
                                                </span>
                                            </div>
                                            <AnimatePresence>
                                                {showDropdown && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -10 }}
                                                        className="absolute w-full bg-white text-gray-700 mt-2 rounded-lg shadow-lg z-50 border border-gray-300"
                                                    >
                                                        {Object.keys(categories).map((category, index) => (
                                                            <div
                                                                key={index}
                                                                className="p-4 border-b border-gray-200"
                                                            >
                                                                <div
                                                                    className="bg-gray-100 text-gray-800 px-4 py-3 rounded-lg shadow-sm cursor-pointer flex justify-between items-center"
                                                                    onClick={() => toggleSubcategory(category)}
                                                                >
                                                                    <span className="font-medium">{category}</span>
                                                                    <span>
                                                                        {activeCategory === category ? "▲" : "▼"}
                                                                    </span>
                                                                </div>
                                                                {activeCategory === category && (
                                                                    <motion.div
                                                                        initial={{ opacity: 0, height: 0 }}
                                                                        animate={{ opacity: 1, height: "auto" }}
                                                                        exit={{ opacity: 0, height: 0 }}
                                                                        className="mt-2"
                                                                    >
                                                                        {categories[category].map((item, idx) => (
                                                                            <label
                                                                                key={idx}
                                                                                className="flex items-center justify-between px-2 py-1 hover:bg-gray-100 rounded-md cursor-pointer"
                                                                            >
                                                                                <span>{item}</span>
                                                                                <input
                                                                                    type="checkbox"
                                                                                    className="form-checkbox text-blue-500 focus:ring-blue-300"
                                                                                    checked={selectedItems[item] || false}
                                                                                    onChange={() =>
                                                                                        handleCheckboxChange(item)
                                                                                    }
                                                                                />
                                                                            </label>
                                                                        ))}
                                                                    </motion.div>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                            {errors.categories && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors.categories}
                                                </p>
                                            )}
                                        </div>

                                        {/* Amount Input */}
                                        <div className="mb-4">
                                            <label className="block text-gray-700 font-medium mb-1">
                                                Amount
                                            </label>
                                            <input
                                                type="text"
                                                // value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="Enter Amount"
                                                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-1 outline-none"
                                            />
                                            {errors.name && (
                                                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                                            )}
                                        </div>

                                        {/* Transaction Date Input */}
                                        <div className="mb-4">
                                            <label className="block text-gray-700 font-medium mb-1">
                                                Transaction Date
                                            </label>
                                            <input
                                                type="number"
                                                // value={}
                                                onChange={(e) => setLimit(e.target.value)}
                                                placeholder="Enter transaction date"
                                                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-1 outline-none"
                                            />
                                            {errors.limit && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors.limit}
                                                </p>
                                            )}
                                        </div>

                                        {/* Description Input */}
                                        <div className="mb-4">
                                            <label className="block text-gray-700 font-medium mb-1">
                                                Description
                                            </label>
                                            <input
                                                type="text"
                                                // value={limit}
                                                onChange={(e) => setLimit(e.target.value)}
                                                placeholder="Enter description"
                                                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-1 outline-none"
                                            />
                                            {errors.limit && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors.limit}
                                                </p>
                                            )}
                                        </div>

                                        {/* Repeat Switch */}
                                        <div className="flex justify-between mb-4">
                                            <p className="text-sm text-gray-600 font-semibold">
                                                Will this be repeated?
                                            </p>
                                            <div className="flex items-center space-x-2">
                                                <Switch id="airplane-mode" />
                                            </div>
                                        </div>

                                        {/* Receiving Amount */}
                                        <div>
                                            <p className="text-sm text-gray-600 font-semibold">
                                                Select receiving amount
                                            </p>
                                            <div className="flex my-3">
                                                <div className="flex p-3 py-1 border rounded-full text-sm text-gray-600 mr-2 items-center cursor-pointer">
                                                    <CiBank size={20} />
                                                    <p className="px-2">checking</p>
                                                    <FaChevronDown className="text-gray-500" size={14} />
                                                </div>
                                                <div className="flex p-3 py-1 border rounded-full text-sm text-gray-600 mr-2 items-center cursor-pointer">
                                                    <BsCashStack size={20} />
                                                    <p className="px-2">credit</p>
                                                    <FaChevronDown className="text-gray-500" size={14} />
                                                </div>
                                                <div className="flex p-3 py-1 border rounded-full text-sm text-gray-600 mr-2 items-center cursor-pointer">
                                                    <BsCashStack size={20} />
                                                    <p className="px-2">cash</p>
                                                    <FaChevronDown className="text-gray-500" size={14} />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Submit Button */}
                                        <div className="flex justify-end gap-4">
                                            <Button
                                                type="submit"
                                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                                                onClick={() => {
                                                    toast({
                                                        title: "Oops, you have no account.",
                                                        description: "Try another account type or create an account.",
                                                        action: <ToastAction altText="Try again">create account</ToastAction>,
                                                        className: "bg-gray-800 text-white hover:text-black"

                                                    })
                                                    setIsSecondModalOpen(false)
                                                }}
                                            >
                                                View Summary
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AddTransaction;