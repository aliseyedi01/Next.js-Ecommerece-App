import OTPPage from "@components/auth/OTPPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OTP | Online Shop",
};

export default function OTP() {
  return <OTPPage />;
}
