import React, { ComponentProps } from "react";

// or we can just check the interface of the button component and copy/paste:
// React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
export const Button = ({ className, ...rest }: ComponentProps<'button'>) => {
  return (
    <button {...rest} className={`default-classname ${className}`}></button>
  );
};

const Parent = () => {
  return <Button onClick={() => { }} type="button"></Button>;
};