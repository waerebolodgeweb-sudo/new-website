import type { Metadata } from "next";
import LegalPage from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Waerebo Lodge",
  description:
    "How Waerebo Lodge collects, uses, and protects the personal information you share when booking with us.",
};

export default function PrivacyPage() {
  return <LegalPage pageType="privacy" />;
}
