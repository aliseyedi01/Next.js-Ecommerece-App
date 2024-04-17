import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="x-5 mx-auto max-w-7xl sm:px-6">{children}</div>;
};

export default Container;
