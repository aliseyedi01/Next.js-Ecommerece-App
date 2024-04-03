import React from "react";
import EditPhotoProfile from "./_components/edit-photo-profile";
import EditInformationProfile from "./_components/edit-information-profile";
import EditPasswordProfile from "./_components/edit-password-profile";

export default function EditProfile() {
  return (
    <div className="flex h-full gap-5">
      <div className="w-1/2">
        <EditInformationProfile />
      </div>
      <div className="flex h-full max-h-fit w-1/2 flex-col gap-3">
        <EditPhotoProfile />
        <EditPasswordProfile />
      </div>
    </div>
  );
}
