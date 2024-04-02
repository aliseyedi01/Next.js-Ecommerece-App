"use client";
import {
  Button,
  Label,
  RadioGroup,
  RadioGroupItem,
  Separator,
} from "@components/ui";
import { AvatarsData, DefaultAvatar } from "@data/avatar-data";
import Image from "next/image";
import React, { useState } from "react";

export default function EditPhotoProfile() {
  const [selectedAvatar, setSelectedAvatar] = useState(DefaultAvatar.src);

  const changeRadioButton = (e: string) => {
    setSelectedAvatar(e);
  };

  return (
    <div className="bg-section-profile flex h-fit w-1/2 flex-col overflow-hidden rounded-lg">
      {/* Photo */}
      <div className="profile-gradient relative  h-20 w-full">
        <Image
          src={selectedAvatar}
          alt="profile"
          height={100}
          width={100}
          className="border-1 absolute -bottom-7 left-6 size-20 rounded-3xl border-white"
        ></Image>
      </div>
      {/* Photo Information & Selected */}
      <div className="flex  flex-row items-center justify-start space-x-4 ">
        {/* Photo Profile */}
        <div className="mt-8 space-y-4 p-3 pr-2">
          <div className="text-sm text-slate-500">
            <h3 className="mb-2 font-semibold text-blue-950">
              Your Profile Photo
            </h3>
            <p>This photo will be your profile picture.</p>
            <p>Acceptable formats: .jpg .jpeg, .png</p>
            <p>Maximum file size: 5 MB</p>
          </div>

          <div className="text-right">
            <Button variant="outline" className="h-8 w-24">
              Upload Now
            </Button>
          </div>
        </div>
        <Separator orientation="vertical" className="h-40 bg-slate-500" />
        {/* Avatar */}
        <div className="flex translate-y-2 flex-col gap-3">
          <div className="font-semibold text-blue-950">Avatar Default</div>
          <RadioGroup
            value={selectedAvatar}
            onValueChange={changeRadioButton}
            defaultValue={DefaultAvatar as unknown as string}
            className="grid grid-cols-6 gap-1"
          >
            {AvatarsData.map((avatar, index) => (
              <Label
                key={index}
                className="rounded-full border-2 border-muted ring-offset-1  transition-shadow duration-200  ease-in hover:ring-1 [&:has([data-state=checked])]:ring-2"
              >
                <RadioGroupItem value={avatar.src} className="sr-only" />
                <Image
                  src={avatar.src}
                  alt={avatar.alt}
                  width={50}
                  height={50}
                  className="size-10 rounded-full"
                />
              </Label>
            ))}
          </RadioGroup>
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
