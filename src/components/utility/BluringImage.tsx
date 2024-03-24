import React, { useState, useRef } from "react";
import { cn } from "@lib/utils";
import Image from "next/image";

interface BlurringImageProps {
  src: string;
  alt: string;
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
  className?: string | undefined;
}

const BlurringImage: React.FC<BlurringImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const hasLoaded = useRef(false);

  const handleOnLoad = () => {
    setIsLoading(false);
  };

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      onLoad={handleOnLoad}
      className={cn(
        "size-[29rem] rounded-lg object-contain ease-in-out",
        className,
        isLoading
          ? hasLoaded.current
            ? "scale-100 blur-0 saturate-100"
            : "scale-110 blur-2xl saturate-200 duration-500"
          : "scale-100 blur-0 saturate-100",
      )}
    />
  );
};

export default BlurringImage;
