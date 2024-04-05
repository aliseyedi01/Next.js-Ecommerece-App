import React from "react";
import { DeleteProfileForm } from "./_components/delete-profile-form";

export default function DeleteProfile() {
  return (
    <div className="flex h-full w-1/2 flex-col gap-3 p-10">
      <h2 className="text-xl font-semibold">Permanently Delete Account</h2>
      <p>
        Deleting your account will remove all of your information from our
        database , This cannot be undone.
      </p>
      <DeleteProfileForm />
    </div>
  );
}
