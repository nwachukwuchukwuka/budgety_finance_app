import { ITEMS } from "@/constants"



const DashboardCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {ITEMS.map((item, index) => (
                <div key={index} className="">

                    <div>
                        <div className="flex  items-center bg-white p-4 border  rounded-xl">
                            <div>
                                <p className="text-[17px] font-semibold mr-8">{item.title}</p>
                            </div>
                            <div>
                                <button className="px-[30px] font-bold border rounded-full shadow-sm">ADD BUDGET</button>
                                <p className="text-gray-600 text-sm">Create a single or multi category budget</p>
                            </div>


                        </div>


                    </div>

                </div>
            ))}

        </div>
    )
}

export default DashboardCard