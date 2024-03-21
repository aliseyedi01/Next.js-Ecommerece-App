"use client";
// next
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProgressProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#0652DD"
        options={{ showSpinner: false, easing: "ease", speed: 500 }}
        shallowRouting
        startPosition={0.15}
        delay={200}
      />
    </>
  );
};

export default ProgressProvider;
