import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IoMdCheckmarkCircle } from "react-icons/io";
import logo from "../assets/logo.jpg";

const SyncBankComponent = () => {
  return (
    <div>
      <Tabs defaultValue="account" className="md:w-[450px] md:h-[500px]">
        <TabsList className="py-6">
          <TabsTrigger className=" py-3 w-[140px] shadow-none md:w-[200px]" value="account">Premium</TabsTrigger>
          <TabsTrigger className=" py-3 w-[160px] md:w-[200px]" value="password">Basic</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <ScrollArea className="h-[300px] md:h-[480px]">
            <div className="flex items-center mb-6 bg-gray-100 p-4 rounded-lg shadow-md">
              <img
                className="mr-4 w-[50px] h-[50px] rounded-full border-2 border-blue-500"
                src={logo}
                alt="logo"
              />
              <div>
                <h1 className="text-lg font-semibold text-gray-800">Premium Yearly</h1>
                <p className="text-sm text-gray-600">$99,000</p>
              </div>
            </div>

            {[...Array(12)].map((_, index) => (
              <div
                key={index}
                className="flex items-center bg-blue-50 p-3 md:p-4 rounded-lg shadow-sm mb-2 md:mb-4"
              >
                <IoMdCheckmarkCircle className="text-green-500 text-xl" />
                <p className="ml-3 text-sm text-gray-700">
                  Sync bank account for CAD and US banks only
                </p>
              </div>
            ))}
            <button class="w-[95%] ml-2 py-3 mb-8 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all">
              Start Trial
            </button>


            {/* premium monthly */}
            <div>
              <div className="flex items-center mb-6 bg-gray-100 p-4 rounded-lg shadow-md">
                <img
                  className="mr-4 w-[50px] h-[50px] rounded-full border-2 border-blue-500"
                  src={logo}
                  alt="logo"
                />
                <div>
                  <h1 className="text-lg font-semibold text-gray-800">Premium Monthly</h1>
                  <p className="text-sm text-gray-600">$15,000</p>
                </div>
              </div>

              {[...Array(12)].map((_, index) => (
                <div
                  key={index}
                  className="flex items-center bg-blue-50 p-3 md:p-4 rounded-lg shadow-sm mb-2 md:mb-4"
                >
                  <IoMdCheckmarkCircle className="text-green-500 text-xl" />
                  <p className="ml-3 text-sm text-gray-700">
                    Sync bank account for CAD and US banks only
                  </p>
                </div>
              ))}
              <button class="w-[95%] ml-2 py-3 mb-8 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all">
                Start Trial
              </button>
            </div>
          </ScrollArea>
        </TabsContent>

        {/* basic */}

        <TabsContent value="password">
          <ScrollArea className="h-[300px] md:h-[480px]">
            <div className="flex items-center mb-6 bg-gray-100 p-4 rounded-lg shadow-md">
              <img
                className="mr-4 w-[50px] h-[50px] rounded-full border-2 border-blue-500"
                src={logo}
                alt="logo"
              />
              <div>
                <h1 className="text-lg font-semibold text-gray-800">Basic Yearly</h1>
                <p className="text-sm text-gray-600">$24,000</p>
              </div>
            </div>

            {[...Array(12)].map((_, index) => (
              <div
                key={index}
                className="flex items-center bg-blue-50 p-3 md:p-4 rounded-lg shadow-sm mb-2 md:mb-4"
              >
                <IoMdCheckmarkCircle className="text-green-500 text-xl" />
                <p className="ml-3 text-sm text-gray-700">
                  Manually track income, expenses and savings daily
                </p>
              </div>
            ))}
            <button class="w-[95%] ml-2 py-3 mb-8 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all">
              Start Trial
            </button>

            {/* Monthly */}
            <div>
              <div className="flex items-center mb-6 bg-gray-100 p-4 rounded-lg shadow-md">
                <img
                  className="mr-4 w-[50px] h-[50px] rounded-full border-2 border-blue-500"
                  src={logo}
                  alt="logo"
                />
                <div>
                  <h1 className="text-lg font-semibold text-gray-800">Basic Monthly</h1>
                  <p className="text-sm text-gray-600">$3,000</p>
                </div>
              </div>

              {[...Array(12)].map((_, index) => (
                <div
                  key={index}
                  className="flex items-center bg-blue-50 p-3 md:p-4 rounded-lg shadow-sm mb-2 md:mb-4"
                >
                  <IoMdCheckmarkCircle className="text-green-500 text-xl" />
                  <p className="ml-3 text-sm text-gray-700">
                    Sync bank account for CAD and US banks only
                  </p>
                </div>
              ))}
              <button class="w-[95%] ml-2 py-3 mb-4 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all">
                Start Trial
              </button>
            </div>

          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SyncBankComponent;
