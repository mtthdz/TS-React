import React from "react";

interface Props {
  className: string;
}

/**
 * while defining a react.fc return removes return error
 * on all fn calls within the app, but is purely stylistic
 * 
 * Now the return error only shows up on the actual btn component
 */

export const Button: React.FC<Props> = (props: Props) => {
  return {
    ohDear: "123",
  };
};

const Parent = () => {
  return (
    <>
      <Button className="my-class"></Button>
    </>
  );
};
