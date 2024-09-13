'use client';

import { AppContext } from "@/context/AppContext";
import { useContext } from "react";

export default function Home() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {!state.isAuthenticated ? (
        <>
          <p className="text-center text-lg">User is not logged in</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => dispatch({ type: 'SET_USER', payload: 'John Doe' })}
          >
            Login
          </button>
        </>
      ) : (
        <>
          <p className="text-3xl font-bold text-center">
            Welcome, {state.user}!
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => dispatch({ type: 'LOGOUT' })}
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
}
