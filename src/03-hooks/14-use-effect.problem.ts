import { useEffect } from "react";

/**
 * useEffect is looking to return void or destructor.
 * Destructor essentially another function, which also returns void.
 */
export const useTimeout = (timerMs: number) => {
  useEffect(() => {
    const timeout = setTimeout(() => { 
      console.log("Done!");
    }, timerMs)
    
    // effect callback or void as the return
    return () => clearTimeout(timeout);
  }, [timerMs]);
};
