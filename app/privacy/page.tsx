import type { Metadata } from "next";
import LegalPage from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Waerebo Lodge",
  description:
    "How Waerebo Lodge collects, uses, and protects the personal information you share when booking with us.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="Your privacy matters to us. This policy explains what information we collect when you contact or book with Waerebo Lodge, and how we use and protect it."
      lastUpdated="June 14, 2026"
      sections={[
        {
          heading: "Information We Collect",
          body: [
            "When you make a booking or enquiry, we may collect your name, country or origin, phone number, email address, travel dates, party size, and any preferences or requests you share with us.",
            "We only collect information that you provide to us directly through WhatsApp, email, or our booking form. This is a frontend-only website and does not run trackers or analytics that profile you.",
          ],
        },
        {
          heading: "How We Use Your Information",
          body: [
            "We use your information solely to respond to your enquiry, arrange and manage your booking, coordinate trekking, transport, and meals, and keep you informed about your trip.",
            "We may contact you regarding your reservation using the phone number or email you provided.",
          ],
        },
        {
          heading: "Sharing Your Information",
          body: [
            "We share your details only with the local guides, porters, and transport providers necessary to deliver the services you have booked.",
            "We do not sell, rent, or trade your personal information to third parties for marketing purposes.",
          ],
        },
        {
          heading: "Data Retention",
          body: [
            "We keep your booking information only for as long as needed to provide our services and to meet any legal or accounting obligations, after which it is deleted or anonymised.",
          ],
        },
        {
          heading: "Your Rights",
          body: [
            "You may request to access, correct, or delete the personal information we hold about you at any time by contacting us using the details below.",
            "Because bookings are arranged directly with our team, you can ask us to update your details whenever your plans change.",
          ],
        },
        {
          heading: "Messaging Platforms",
          body: [
            "When you contact us via WhatsApp or email, your messages are handled under the privacy terms of those providers in addition to this policy. We recommend reviewing their respective privacy practices.",
          ],
        },
        {
          heading: "Changes to This Policy",
          body: [
            "We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised “Last updated” date.",
          ],
        },
      ]}
    />
  );
}
