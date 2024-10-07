// Imagine NavBar is an external library!

export const NavBar = (props: {
  title: string;
  links: string[];
  children: React.ReactNode;
}) => {
  return <div>Some content</div>;
};

import { ComponentProps } from "react";
// Your app:

import { Equal, Expect } from "../helpers/type-utils";

// this is a typical situation where we can't reuse props because
// an external library is not exporting the prop types of its component
// we can also pass existing components, not just HTML elements
// this extracts its props
type NavBarProps = ComponentProps<typeof NavBar>;

type test = Expect<
  Equal<
    NavBarProps,
    {
      title: string;
      links: string[];
      children: React.ReactNode;
    }
  >
>;
