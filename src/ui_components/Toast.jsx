"use client";

import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast"; // Ensure this is imported
import { useToast } from "@/hooks/use-toast";
import AppContext from "@/services/AppContext";
import React, { useContext, useEffect } from "react";

const Toast = () => {
    const { toast } = useToast();
    const { showToast, setShowToast } = useContext(AppContext);

    // Effect to show toast when `showToast` becomes true


    return (
        <div>
            {/* Button to manually trigger a toast */}
            <Button
                variant="outline"
                onClick={() => {
                    toast({
                        description: "Your budget has been created",
                    });
                }}
            >
                <div className="flex justify-end mt-8">
                    <button
                        onClick={viewSummaryHandle}
                        className="px-6 py-3 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Add Budget
                    </button>
                </div>
            </Button>
        </div>
    );
};

export default Toast;
