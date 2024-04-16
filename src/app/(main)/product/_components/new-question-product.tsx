import { Button, Textarea } from "@components/ui";
import { question } from "@constants/images";
import { CircleHelp } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function NewQuestionProduct() {
  return (
    <div className="flex w-full flex-col justify-between gap-7 px-2 py-7">
      <div className="flex w-full justify-between">
        <div className="flex w-full flex-col items-start justify-start gap-1 gap-2">
          <p className="text-lg md:text-xl">Ask a Question</p>
          <p className="text-sm md:text-base">
            If you have a new question that is not answered here, feel free to
            ask us.
          </p>
        </div>
        <Image
          src={question}
          alt="About Us Image"
          width={300}
          height={300}
          className="size-20 rounded-full object-contain md:size-32"
        />
      </div>

      <div className="flex flex-col gap-4 ">
        <Textarea
          placeholder="Write new question ..."
          className="h-40 placeholder:text-blue-500"
          icon={<CircleHelp />}
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
    </div>
  );
}
