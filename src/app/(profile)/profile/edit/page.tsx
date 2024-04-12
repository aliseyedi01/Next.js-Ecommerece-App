import React from "react";

import EditInformationProfile from "./_components/edit-information-profile";
import EditPasswordProfile from "./_components/edit-password-profile";
import EditPhotoProfile from "./_components/edit-photo-profile";

export default function EditProfile() {
  return (
    <div className="flex h-full flex-col  gap-5 md:flex-row">
      <div className="w-full md:w-1/2">
        <EditInformationProfile />
      </div>
      <div className="flex h-full max-h-fit w-full  flex-col gap-3 md:w-1/2">
        <EditPhotoProfile />
        <EditPasswordProfile />
      </div>
    </div>
  );
}
