import type { Metadata } from "next";
import LegalPage from "@/components/sections/LegalPage";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy — Waerebo Lodge",
  description:
    "How Waerebo Lodge collects, uses, and protects the personal information you share when booking with us.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return <LegalPage pageType="privacy" />;
}
