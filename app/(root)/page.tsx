"use client";

import { useEffect } from "react";

import { useStoreModalStore } from "@/hooks/use-store-modal";

const SetupPage = () => {
  const onOpen = useStoreModalStore((state) => state.onOpen);
  const isOpen = useStoreModalStore((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);
  
    return (
      <div className="p-4">
        Root Page
      </div>
    );
  }
  
export default SetupPage;
  