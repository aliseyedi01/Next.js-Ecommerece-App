import { Button, Separator } from "@components/ui";
import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
} from "@constants/images";
import Image from "next/image";
import React from "react";

const avatarOptions = [
  { src: avatar1, alt: "Avatar 1" },
  { src: avatar2, alt: "Avatar 2" },
  { src: avatar3, alt: "Avatar 3" },
  { src: avatar4, alt: "Avatar 4" },
  { src: avatar5, alt: "Avatar 5" },
  { src: avatar6, alt: "Avatar 6" },
];

export default function EditPhotoProfile() {
  return (
    <div className="flex h-fit w-1/2 flex-col overflow-hidden rounded-lg bg-slate-100">
      <div className="relative h-20  w-full bg-gradient-to-r from-blue-300 to-yellow-300">
        <Image
          src={avatar1}
          alt="profile"
          height={100}
          width={100}
          className="border-1 absolute -bottom-7 left-6 size-20 rounded-3xl border-white"
        ></Image>
      </div>

      <div className="flex  flex-row items-center justify-start space-x-4 ">
        <div className="mt-8 space-y-4 p-3 pr-2">
          {/* Photo Profile */}
          <div className="text-sm text-slate-500">
            <h3 className="mb-2 font-semibold text-blue-950">
              Your Profile Photo
            </h3>
            <p>This photo will be your profile picture.</p>
            <p>Acceptable formats: .jpg, .jpeg, .png</p>
            <p>Maximum file size: 5 MB</p>
          </div>

          <div className="text-right">
            <Button variant="outline" className="h-8 w-24">
              Upload Now
            </Button>
          </div>
        </div>
        <Separator orientation="vertical" className="h-40  bg-slate-500" />
        {/* Avatar */}
        <div className="flex translate-y-2 flex-col gap-3">
          <div className="font-semibold text-blue-950">Avatar Default</div>
          <div className="grid grid-cols-6 gap-2">
            {avatarOptions.map((avatar, index) => (
              <div key={index}>
                <Image
                  src={avatar.src}
                  alt={avatar.alt}
                  width={50}
                  height={50}
                  className="size-10 rounded-full"
                />
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-500">Select one for your profile </p>
          <div className="space-x-2 text-right">
            <Button variant="destructive" className="h-8 w-20">
              Remove
            </Button>
            <Button className="h-8 w-20">Save</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
