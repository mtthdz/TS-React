import { useRef } from "react";

export const Component = () => {
  /**
   * the different ref overload types are based on what's passed in the useRef param
   * without passing null in the generic, passing null in the runtime arg makes this.
   * a ref obj which is readonly. 
   * 
   * This is because useRef has been typed like this purposefully, where passing null makes the ref
   * readonly
   */
  const ref = useRef<string | null>(null);

  // Why is this not allowed?
  ref.current = "Hello";

  return null;
};
