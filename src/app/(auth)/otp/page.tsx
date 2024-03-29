import OTPForm from "@components/auth/OTPForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OTP | Online Shop",
};

export default function OTP() {
  return <OTPForm />;
}
