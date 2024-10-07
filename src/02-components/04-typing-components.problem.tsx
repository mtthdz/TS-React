import React from "react";

/**
 * others will typically define the type inline within the fn param
 * 
 */
interface Props {
  className: string;
}

export const Button = (props: Props) => {
  return <button className={props.className}></button>;
};

const Parent = () => {
  return (
    <>
      {/* @ts-expect-error */}
      <Button></Button>

      <Button className="my-class"></Button>
    </>
  );
};
