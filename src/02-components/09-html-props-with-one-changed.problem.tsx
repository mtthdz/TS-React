import { ComponentProps } from "react";
import { Equal, Expect } from "../helpers/type-utils";

// the issue is that adding the value (string) param within onChange only ADDS
// the onChange prop to "e"

// solution 1 points to the most "hacky" but fundamental logic to override onChange
// solution 4 uses generics and makes it extensible

type InputProps = Omit<ComponentProps<"input">, "onChange"> & {
  onChange: (value: string) => void;
}

interface InputPropsAlt extends Omit<ComponentProps<"input">, "onChange"> {
  onChange: (value: string) => void;
}

export const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
    ></input>
  );
};

const Parent = () => {
  return (
    <Input
      onChange={(e) => {
        console.log(e);

        type test = Expect<Equal<typeof e, string>>;
      }}
    ></Input>
  );
};
