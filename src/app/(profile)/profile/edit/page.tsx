import React from "react";
import EditPhotoProfile from "./_components/edit-photo-profile";
import EditInformationProfile from "./_components/edit-information-profile";

export default function EditProfile() {
  return (
    <div className="flex h-full gap-5">
      <EditInformationProfile />

      <EditPhotoProfile />
    </div>
  );
}
