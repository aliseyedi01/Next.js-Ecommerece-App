import { avatar1 } from "@constants/images";
import type { Metadata } from "next";
import Image from "next/image";

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
    <div className="flex flex-col gap-3">
      {/* Header */}
      <div className="profile-gradient rounded-lg rounded-es-none">
        <div className="flex translate-x-5 translate-y-16 items-end gap-4">
          <Image
            src={avatar1}
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
      {/* Show Information */}
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
  );
}
