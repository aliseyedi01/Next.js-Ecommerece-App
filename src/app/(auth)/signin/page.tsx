import SignInForm from "@components/auth/SignInForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Log In| Online Shop",
};

export default function LogIn() {
  return <SignInForm />;
}
