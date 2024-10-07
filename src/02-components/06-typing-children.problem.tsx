import React from "react";

// how to type children props
export const Button = (props: { children?: React.ReactNode }) => {
  return <button>{props.children}</button>;
};

const Parent = () => {
  return (
    <>
      <Button></Button>
      <Button>Hello world!</Button>
    </>
  );
};
