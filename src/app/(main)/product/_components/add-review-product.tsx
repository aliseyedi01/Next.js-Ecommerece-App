import RatingStar from "@app/(main)/products/_components/rating-start";
import { Button, Textarea } from "@components/ui";
import { reviews } from "@constants/images";
import { MessageSquare } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function AddReviewProduct() {
  return (
    <div className="flex h-full w-full flex-col justify-between  gap-3 rounded-md  p-3">
      <div className="items- flex w-full justify-between  p-1">
        <div className="flex w-full flex-col items-start justify-start gap-1">
          <p className="text-lg md:text-xl">New Reviews</p>
          <p className="text-sm md:text-base">
            Add your rate and reviews for help us sell products , thank you{" "}
          </p>
        </div>
        <Image
          src={reviews}
          alt="About Us Image"
          width={300}
          height={300}
          className="size-20 rounded-full object-contain md:size-32"
        />
      </div>
      <div className="flex items-center gap-3">
        <p>Your Rate :</p>
        <RatingStar rating={0} className="text-blue-600 dark:text-blue-400" />
      </div>
      <Textarea
        placeholder="Write you are review ..."
        className="h-40 placeholder:text-blue-500"
        icon={<MessageSquare />}
      />
      <div className="flex items-center justify-end gap-2 ">
        <Button variant="outline" className="dark:bg-gray-400">
          Cancel
        </Button>
        <Button variant="default" className="w-32">
          Send
        </Button>
      </div>
    </div>
  );
}
