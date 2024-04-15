import { StarFilledIcon } from "@radix-ui/react-icons";
import { StarIcon } from "lucide-react";
import React, { FC } from "react";

type RatingProps = {
  rating: number;
  count?: number;
};

const RatingStar: FC<RatingProps> = ({ rating, count }) => {
  const fillStar = Math.floor(rating);
  const emptyStar = 5 - fillStar;

  return (
    <div className="flex  flex-row items-center justify-center gap-[2px] text-yellow-500">
      {Array.from({ length: fillStar }, (_, index) => (
        <StarFilledIcon key={index} className="size-3 md:size-5" />
      ))}
      {Array.from({ length: emptyStar }, (_, index) => (
        <StarIcon key={index} className="size-3 md:size-5" />
      ))}
      {count && <p className="pl-1 text-base text-gray-700">({count})</p>}
    </div>
  );
};

export default RatingStar;
