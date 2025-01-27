"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

const DashboardStatistics = () => {
    const { toast } = useToast();


    return (
        <div>
            <div className="rounded-lg shadow-sm border p-3 pb-6 mt-6  w-[320px] md:w-[280px] h-[180px]">
                <p className="flex justify-end text-sm text-gray-400">4 of 5</p>
                <div className="pt-4">
                    <div>
                        <Button
                            variant="outline"
                            onClick={() => {
                                toast({
                                    description: "You have no statistic.",
                                    className: "bg-gray-800 text-white hover:text-white"

                                })
                            }}
                            className="px-6 py-2 my-2 bg-blue-500 text-white text-sm font-semibold rounded-full shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            CHECK STATS
                        </Button>
                        <p className="text-gray-600 mb-4 text-sm">
                            explore your various statistic or view Your overall statistics
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardStatistics