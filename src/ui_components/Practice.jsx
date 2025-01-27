"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast";
import AppContext from "@/services/AppContext";
import React, { useContext, useEffect } from "react";

const practice = () => {
  const { toast } = useToast();
  const { showToast, setShowToast } = useContext(AppContext);


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
  )
}

export default practice


