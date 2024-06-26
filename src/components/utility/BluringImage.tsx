import { cn } from "@lib/utils";
import Image from "next/image";
import React, { ComponentProps, FC, useState } from "react";

type ImageBlurProps = ComponentProps<typeof Image>;

const BlurringImage: FC<ImageBlurProps> = ({ ...imageProps }) => {
  const [isLoading, setIsLoading] = useState(true);

  const { onLoad, className, alt, ...finalImageProps } = imageProps;

  return (
    <Image
      alt={alt}
      onLoad={() => setIsLoading(false)}
      {...finalImageProps}
      className={cn(
        "size-[29rem] w-full rounded-lg object-contain  ease-in-out",
        className,
        isLoading
          ? "scale-105 blur-xl saturate-200 duration-300"
          : "scale-100 blur-0 saturate-100",
      )}
    />
  );
};

export default BlurringImage;
