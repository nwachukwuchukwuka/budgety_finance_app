"use client"

import { useToast } from "@/components/hooks/use-toast"
import { Button } from "@/components/ui/button"
import AppContext from "@/services/AppContext";
import React, { useContext, useEffect } from "react";

const Toast = () => {
    const { toast } = useToast();
    const { showToast, setShowToast } = useContext(AppContext);

    // Effect to show toast when `showToast` becomes true


    return (
        <div>
            <Button
                variant="outline"
                onClick={() => {
                    toast({
                        description: "Your message has been sent.",
                    })
                }}
            >
                Show Toast
            </Button>
        </div>
    );
};

export default Toast;
