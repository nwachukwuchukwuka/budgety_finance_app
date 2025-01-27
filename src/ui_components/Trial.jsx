import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import logo from "../assets/logo.jpg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Trial = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="w-[300px]">
      <div className="rounded-lg shadow-sm border p-3 pb-6 mt-6 w-[320px] md:w-[280px] h-[180px]">
        <p className="flex justify-end text-sm text-gray-400">1 of 5</p>
        <div className="pt-4">
          <div>
            <button
              onClick={() => setClicked(true)}
              className="px-6 py-2 my-2 bg-blue-500 text-white text-sm font-semibold rounded-full shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              START TRIAL
            </button>
            <h1 className="text-sm text-gray-600">
              Create a single or multi-category budget
            </h1>
          </div>
        </div>
      </div>

      {/* Modal with Framer Motion */}
      <AnimatePresence>
        {clicked && (
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
              className="p-6 w-[360px] md:w-[500px] bg-white rounded-xl shadow-lg"
            >
              <div className="flex justify-end">
                <MdCancel
                  className="text-gray-500 text-2xl cursor-pointer hover:text-red-500 transition-colors duration-200"
                  onClick={() => setClicked(false)}
                />
              </div>
              <Tabs defaultValue="account" className="md:w-[450px] md:h-[520px]">
                <TabsList className="py-6">
                  <TabsTrigger
                    className="py-3 w-[140px] shadow-none md:w-[200px]"
                    value="account"
                  >
                    Premium
                  </TabsTrigger>
                  <TabsTrigger
                    className="py-3 w-[160px] md:w-[200px]"
                    value="password"
                  >
                    Basic
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                  <ScrollArea className="h-[300px] md:h-[480px]">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="flex items-center mb-6 bg-gray-100 p-4 rounded-lg shadow-md">
                        <img
                          className="mr-4 w-[50px] h-[50px] rounded-full border-2 border-blue-500"
                          src={logo}
                          alt="logo"
                        />
                        <div>
                          <h1 className="text-lg font-semibold text-gray-800">
                            Premium Yearly
                          </h1>
                          <p className="text-sm text-gray-600">$99,000</p>
                        </div>
                      </div>

                      {[...Array(12)].map((_, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + index * 0.05 }}
                          className="flex items-center bg-blue-50 p-3 md:p-4 rounded-lg shadow-sm mb-2 md:mb-4"
                        >
                          <IoMdCheckmarkCircle className="text-green-500 text-xl" />
                          <p className="ml-3 text-sm text-gray-700">
                            Sync bank account for CAD and US banks only
                          </p>
                        </motion.div>
                      ))}
                      <button className="w-[95%] ml-2 py-3 mb-8 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all">
                        Start Trial
                      </button>
                    </motion.div>

                    {/* Premium Monthly */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex items-center mb-6 bg-gray-100 p-4 rounded-lg shadow-md">
                        <img
                          className="mr-4 w-[50px] h-[50px] rounded-full border-2 border-blue-500"
                          src={logo}
                          alt="logo"
                        />
                        <div>
                          <h1 className="text-lg font-semibold text-gray-800">
                            Premium Monthly
                          </h1>
                          <p className="text-sm text-gray-600">$15,000</p>
                        </div>
                      </div>

                      {[...Array(12)].map((_, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + index * 0.05 }}
                          className="flex items-center bg-blue-50 p-3 md:p-4 rounded-lg shadow-sm mb-2 md:mb-4"
                        >
                          <IoMdCheckmarkCircle className="text-green-500 text-xl" />
                          <p className="ml-3 text-sm text-gray-700">
                            Sync bank account for CAD and US banks only
                          </p>
                        </motion.div>
                      ))}
                      <button className="w-[95%] ml-2 py-3 mb-8 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all">
                        Start Trial
                      </button>
                    </motion.div>
                  </ScrollArea>
                </TabsContent>

                {/* Basic */}
                <TabsContent value="password">
                  <ScrollArea className="h-[300px] md:h-[480px]">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="flex items-center mb-6 bg-gray-100 p-4 rounded-lg shadow-md">
                        <img
                          className="mr-4 w-[50px] h-[50px] rounded-full border-2 border-blue-500"
                          src={logo}
                          alt="logo"
                        />
                        <div>
                          <h1 className="text-lg font-semibold text-gray-800">
                            Basic Yearly
                          </h1>
                          <p className="text-sm text-gray-600">$24,000</p>
                        </div>
                      </div>

                      {[...Array(12)].map((_, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + index * 0.05 }}
                          className="flex items-center bg-blue-50 p-3 md:p-4 rounded-lg shadow-sm mb-2 md:mb-4"
                        >
                          <IoMdCheckmarkCircle className="text-green-500 text-xl" />
                          <p className="ml-3 text-sm text-gray-700">
                            Manually track income, expenses, and savings daily
                          </p>
                        </motion.div>
                      ))}
                      <button className="w-[95%] ml-2 py-3 mb-8 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all">
                        Start Trial
                      </button>
                    </motion.div>

                    {/* Basic Monthly */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex items-center mb-6 bg-gray-100 p-4 rounded-lg shadow-md">
                        <img
                          className="mr-4 w-[50px] h-[50px] rounded-full border-2 border-blue-500"
                          src={logo}
                          alt="logo"
                        />
                        <div>
                          <h1 className="text-lg font-semibold text-gray-800">
                            Basic Monthly
                          </h1>
                          <p className="text-sm text-gray-600">$3,000</p>
                        </div>
                      </div>

                      {[...Array(12)].map((_, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + index * 0.05 }}
                          className="flex items-center bg-blue-50 p-3 md:p-4 rounded-lg shadow-sm mb-2 md:mb-4"
                        >
                          <IoMdCheckmarkCircle className="text-green-500 text-xl" />
                          <p className="ml-3 text-sm text-gray-700">
                            Sync bank account for CAD and US banks only
                          </p>
                        </motion.div>
                      ))}
                      <button className="w-[95%] ml-2 py-3 mb-4 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all">
                        Start Trial
                      </button>
                    </motion.div>
                  </ScrollArea>
                </TabsContent>
              </Tabs>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Trial;