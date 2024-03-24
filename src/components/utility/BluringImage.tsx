import React, { useState, useRef, FC, ComponentProps } from "react";
import { cn } from "@lib/utils";
import Image from "next/image";
import { Skeleton } from "@components/ui";

// interface BlurringImageProps {
//   src: string;
//   alt: string;
//   width?: number | `${number}` | undefined;
//   height?: number | `${number}` | undefined;
//   className?: string | undefined;
// }

type ImageBlurProps = ComponentProps<typeof Image>;

const BlurringImage: FC<ImageBlurProps> = ({ ...imageProps }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { onLoad, className, alt, ...finalImageProps } = imageProps;

  const handleOnLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative">
      <Image
        alt={alt}
        onLoad={handleOnLoad}
        {...finalImageProps}
        className={cn(
          "size-[29rem] rounded-lg object-contain ease-in-out",
          className,
          isLoading
            ? "opacity-100 blur-2xl saturate-200 duration-500"
            : "opacity-100 blur-0 saturate-100",
        )}
      />
      {isLoading && (
        <Skeleton className="absolute inset-0 size-[29rem] rounded-full" />
      )}
    </div>
  );
};

export default BlurringImage;
