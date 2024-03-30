import SignUpForm from "@app/(auth)/signup/_components/SignUpForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Log In| Online Shop",
};

export default function LogIn() {
  return <SignUpForm />;
}
