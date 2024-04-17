import OTPPage from "@app/(auth)/otp/_components/OTPPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OTP",
};

export default function OTP() {
  return <OTPPage />;
}
