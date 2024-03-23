import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="mx-auto max-w-7xl px-5 sm:px-6">{children}</div>;
};

export default Container;
