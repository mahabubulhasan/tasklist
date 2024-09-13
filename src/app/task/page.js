'use client';

import { AppContext } from "@/context/AppContext";
import { useContext } from "react";

export default function Task(){
    const { state, dispatch } = useContext(AppContext);

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <p className="text-3xl font-bold text-center">
            { state.isAuthenticated ? state.user + ' is logged in' : 'User is not logged in'}            
          </p>
        </div>
      );    
}