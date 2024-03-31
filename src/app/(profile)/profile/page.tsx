import { Button } from "@components/ui";
import { boyProf, girlProf } from "@constants/images";
import type { Metadata } from "next";
import Image from "next/image";
import { title } from "process";

export const metadata: Metadata = {
  title: "Profile | Online Shop",
};

const InformationList = [
  { title: "fullname", value: "ali seyedi" },
  { title: "gender", value: "man" },
  { title: "email", value: "aliseyedi@gmail.com" },
  { title: "password", value: "●●●●●●●●●●" },
];

export default function Profile() {
  return (
    <div className="size-full p-6">
      <div className="flex size-full flex-col gap-3 rounded-lg bg-white p-6 dark:bg-white/95">
        <div className="rounded-lg rounded-es-none bg-gradient-to-r from-blue-300 to-yellow-300">
          <div className="flex translate-x-5 translate-y-16 items-end gap-4">
            <Image
              src={boyProf}
              alt="profile"
              height={100}
              width={100}
              className="size-28 rounded-full border-2 border-white"
            ></Image>
            <div className="-translate-y-3 text-primary">
              <p className="font-bold tracking-wider">Ali Seyedi</p>
              <p className="text-sm">member</p>
            </div>
          </div>
        </div>

        <div className="mt-20 flex w-4/12 flex-col gap-4">
          <h3 className="font-semibold text-blue-950">Personal Information</h3>
          <div className="flex flex-col gap-4">
            {InformationList.map((info, index) => (
              <div key={index} className="grid grid-cols-2">
                <span className="font-medium capitalize text-gray-400">
                  {info.title}
                </span>
                <span className="text-left text-black">{info.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
