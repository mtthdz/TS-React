import { useRef } from "react";

export const Component = () => {
  // not intuitive, especially because the ref types show undefined
  const ref = useRef<HTMLDivElement>(null);

  return <div ref={ref} />;
};
