import { useCallback } from "react";
import { Equal, Expect } from "../helpers/type-utils";

// 
// 
/**
 * useCallback takes in the function that's passed in and infers return type
 * alternative way to type this useCallback:
 * 
 * onClick = useCallback<(buttonName: string) => void>
 * 
 * of course, the bottom is better; relying on interfence
 */
export const Buttons = (props: { id: string }) => {
  const onClick = useCallback(
    (buttonName: string) => {
      console.log(props.id, buttonName);
    },
    [props.id],
  );

  type test = Expect<Equal<typeof onClick, (buttonName: string) => void>>;

  return (
    <div>
      <button onClick={() => onClick("A")}>A</button>
      <button onClick={() => onClick("B")}>B</button>
      <button onClick={() => onClick("C")}>C</button>
    </div>
  );
};
