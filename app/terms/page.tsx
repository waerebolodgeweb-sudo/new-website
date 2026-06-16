import type { Metadata } from "next";
import LegalPage from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions — Waerebo Lodge",
  description:
    "The terms and conditions governing bookings, treks, and use of Waerebo Lodge services.",
};

export default function TermsPage() {
  return <LegalPage pageType="terms" />;
}
