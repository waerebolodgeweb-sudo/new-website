import type { Metadata } from "next";
import LegalPage from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions — Waerebo Lodge",
  description:
    "The terms and conditions governing bookings, treks, and use of Waerebo Lodge services.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="Welcome to Waerebo Lodge. By booking a stay, trek, or any of our services, you agree to the terms set out below. Please read them carefully."
      lastUpdated="June 14, 2026"
      sections={[
        {
          heading: "Bookings & Reservations",
          body: [
            "All bookings are confirmed only after we acknowledge your request via WhatsApp or email. A reservation is considered tentative until you receive a written confirmation from us.",
            "Prices for rooms, treks, transport, and meals are quoted in Indonesian Rupiah (IDR) and may change without prior notice until your booking is confirmed.",
          ],
        },
        {
          heading: "Payment",
          body: [
            "We may request a deposit to secure your booking, with the balance payable on or before arrival. Accepted payment methods will be communicated at the time of booking.",
            "Failure to pay the agreed deposit by the requested date may result in the cancellation of your reservation.",
          ],
        },
        {
          heading: "Cancellations & Refunds",
          body: [
            "Cancellation terms depend on the package booked and how far in advance you cancel. The applicable policy will be shared with you in writing when your booking is confirmed.",
            "We are not able to provide refunds for no-shows, early departures, or unused services once a trip has begun.",
          ],
        },
        {
          heading: "The Waerebo Trek",
          body: [
            "The trek to Waerebo Village involves moderate physical activity over mountainous terrain. You confirm that you and your party are in suitable health to undertake the trek you have booked.",
            "Itineraries, timings, and routes may be adjusted by our guides for reasons of safety, weather, or local conditions. Such changes are made in your best interest and do not constitute a breach of these terms.",
            "Waerebo Village is a living cultural and religious site. Guests agree to respect local customs, follow the guidance of our porters and guides, and observe any ceremonies or restrictions requested by the community.",
          ],
        },
        {
          heading: "Conduct & Responsibility",
          body: [
            "Guests are responsible for their own belongings and for any damage caused to lodge property or the natural environment through negligence or misconduct.",
            "We reserve the right to refuse service to, or remove from the premises, any guest whose behaviour endangers themselves, other guests, our staff, or the community.",
          ],
        },
        {
          heading: "Liability",
          body: [
            "To the fullest extent permitted by law, Waerebo Lodge is not liable for injury, loss, or damage arising from activities undertaken at your own risk, including trekking and outdoor excursions, except where caused by our proven negligence.",
            "We strongly recommend that all guests arrange their own travel and medical insurance before their trip.",
          ],
        },
        {
          heading: "Changes to These Terms",
          body: [
            "We may update these Terms & Conditions from time to time. The version in effect at the time of your booking is the one that applies to your stay.",
          ],
        },
      ]}
    />
  );
}
