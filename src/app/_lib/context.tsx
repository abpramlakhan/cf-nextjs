"use client";
import React, { createContext, ReactNode, use, useState } from "react";
interface GlobalContext {
    isLoginModalOpen: boolean,
    setIsLoginModal: React.Dispatch<React.SetStateAction<boolean>>,
}
export const GlobalContext = createContext<GlobalContext | undefined>(undefined);

interface GlobalContextProviderType {
    children: ReactNode
}

export function GlobalProvider({ children }: GlobalContextProviderType) {
    const [isLoginModalOpen, setIsLoginModal] = useState<boolean>(false);

    const value: GlobalContext = {
        isLoginModalOpen,
        setIsLoginModal
    }

    return <GlobalContext value={value} >{children}</GlobalContext>
}

export const useGlobalContext = () => {
    const context = use(GlobalContext);
    if(!context){
        throw new Error("must be used within Globalcontext")
    }
    return context
}