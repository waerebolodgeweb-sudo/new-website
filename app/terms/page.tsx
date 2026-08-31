import type { Metadata } from "next";
import LegalPage from "@/components/sections/LegalPage";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Terms & Conditions — Waerebo Lodge",
  description:
    "The terms and conditions governing bookings, treks, and use of Waerebo Lodge services.",
  path: "/terms",
});

export default function TermsPage() {
  return <LegalPage pageType="terms" />;
}
