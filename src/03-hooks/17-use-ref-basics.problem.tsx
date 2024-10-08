import { useEffect, useRef } from "react";

export const Component = () => {
  // because useRef's T is undefined, we can explicity type via generic
  const id = useRef<string>();

  useEffect(() => {
    id.current = "Random value!";
  }, []);

  return <div></div>;
};
