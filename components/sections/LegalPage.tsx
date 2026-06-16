"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLang, type Lang } from "@/lib/i18n";

interface LegalSection {
  heading: string;
  body: string[];
}

interface LegalContent {
  title: string;
  intro: string;
  lastUpdated: string;
  sections: LegalSection[];
}

type LegalContentMap = Record<Lang, LegalContent>;

const termsContent: LegalContentMap = {
  en: {
    title: "Terms & Conditions",
    intro:
      "Welcome to Waerebo Lodge. By booking a stay, trek, or any of our services, you agree to the terms set out below. Please read them carefully.",
    lastUpdated: "June 14, 2026",
    sections: [
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
    ],
  },
  id: {
    title: "Syarat & Ketentuan",
    intro:
      "Selamat datang di Waerebo Lodge. Dengan memesan menginap, trek, atau layanan kami, Anda menyetujui syarat-syarat berikut. Harap baca dengan seksama.",
    lastUpdated: "14 Juni 2026",
    sections: [
      {
        heading: "Pemesanan & Reservasi",
        body: [
          "Semua pemesanan hanya dikonfirmasi setelah kami mengakui permintaan Anda melalui WhatsApp atau email. Reservasi dianggap sementara hingga Anda menerima konfirmasi tertulis dari kami.",
          "Harga kamar, trek, transportasi, dan makanan dikutip dalam Rupiah Indonesia (IDR) dan dapat berubah tanpa pemberitahuan sebelumnya hingga pemesanan Anda dikonfirmasi.",
        ],
      },
      {
        heading: "Pembayaran",
        body: [
          "Kami mungkin meminta uang muka untuk mengamankan pemesanan Anda, dengan sisa pembayaran yang harus dilakukan sebelum atau saat kedatangan. Metode pembayaran yang diterima akan dikomunikasikan pada saat pemesanan.",
          "Kegagalan membayar uang muka yang disepakati sesuai tanggal yang diminta dapat mengakibatkan pembatalan reservasi Anda.",
        ],
      },
      {
        heading: "Pembatalan & Pengembalian Dana",
        body: [
          "Ketentuan pembatalan tergantung pada paket yang dipesan dan seberapa jauh sebelumnya Anda membatalkan. Kebijakan yang berlaku akan disampaikan secara tertulis saat pemesanan Anda dikonfirmasi.",
          "Kami tidak dapat memberikan pengembalian dana untuk tidak hadir (no-show), keberangkatan lebih awal, atau layanan yang tidak digunakan setelah perjalanan dimulai.",
        ],
      },
      {
        heading: "Trek Waerebo",
        body: [
          "Trek ke Desa Waerebo melibatkan aktivitas fisik sedang melalui medan pegunungan. Anda menegaskan bahwa Anda dan rombongan dalam kondisi kesehatan yang layak untuk menjalani trek yang telah dipesan.",
          "Itinerary, waktu, dan rute dapat disesuaikan oleh pemandu kami demi alasan keselamatan, cuaca, atau kondisi lokal. Perubahan tersebut dilakukan demi kepentingan terbaik Anda dan tidak merupakan pelanggaran ketentuan ini.",
          "Desa Waerebo adalah situs budaya dan religi yang hidup. Tamu setuju untuk menghormati adat lokal, mengikuti panduan porter dan pemandu kami, serta mematuhi upacara atau batasan yang diminta oleh komunitas.",
        ],
      },
      {
        heading: "Perilaku & Tanggung Jawab",
        body: [
          "Tamu bertanggung jawab atas barang bawaan mereka sendiri dan atas kerusakan yang disebabkan pada properti lodge atau lingkungan alam akibat kelalaian atau pelanggaran.",
          "Kami berhak menolak layanan atau mengusir dari properti, tamu mana pun yang perilakunya membahayakan diri mereka sendiri, tamu lain, staf kami, atau komunitas.",
        ],
      },
      {
        heading: "Tanggung Jawab Hukum",
        body: [
          "Sejauh yang diizinkan oleh hukum, Waerebo Lodge tidak bertanggung jawab atas cedera, kehilangan, atau kerusakan yang timbul dari aktivitas yang dilakukan atas risiko Anda sendiri, termasuk trekking dan perjalanan di luar ruangan, kecuali yang disebabkan oleh kelalaian kami yang terbukti.",
          "Kami sangat menyarankan semua tamu untuk mengatur asuransi perjalanan dan medis mereka sendiri sebelum perjalanan.",
        ],
      },
      {
        heading: "Perubahan Ketentuan Ini",
        body: [
          "Kami dapat memperbarui Syarat & Ketentuan ini dari waktu ke waktu. Versi yang berlaku pada saat pemesanan Anda adalah yang berlaku untuk menginap Anda.",
        ],
      },
    ],
  },
};

const privacyContent: LegalContentMap = {
  en: {
    title: "Privacy Policy",
    intro:
      "Your privacy matters to us. This policy explains what information we collect when you contact or book with Waerebo Lodge, and how we use and protect it.",
    lastUpdated: "June 14, 2026",
    sections: [
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
          'We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised "Last updated" date.',
        ],
      },
    ],
  },
  id: {
    title: "Kebijakan Privasi",
    intro:
      "Privasi Anda penting bagi kami. Kebijakan ini menjelaskan informasi apa yang kami kumpulkan saat Anda menghubungi atau memesan layanan Waerebo Lodge, serta cara kami menggunakannya dan melindunginya.",
    lastUpdated: "14 Juni 2026",
    sections: [
      {
        heading: "Informasi yang Kami Kumpulkan",
        body: [
          "Saat Anda melakukan pemesanan atau pertanyaan, kami mungkin mengumpulkan nama, negara asal, nomor telepon, alamat email, tanggal perjalanan, jumlah rombongan, dan preferensi atau permintaan yang Anda bagikan kepada kami.",
          "Kami hanya mengumpulkan informasi yang Anda berikan langsung kepada kami melalui WhatsApp, email, atau formulir pemesanan kami. Ini adalah situs web frontend saja dan tidak menjalankan pelacak atau analitik yang membuat profil Anda.",
        ],
      },
      {
        heading: "Cara Kami Menggunakan Informasi Anda",
        body: [
          "Kami menggunakan informasi Anda semata-mata untuk merespons pertanyaan Anda, mengatur dan mengelola pemesanan Anda, mengoordinasikan trekking, transportasi, dan makanan, serta memberi tahu Anda tentang perjalanan Anda.",
          "Kami mungkin menghubungi Anda mengenai reservasi Anda menggunakan nomor telepon atau email yang Anda berikan.",
        ],
      },
      {
        heading: "Berbagi Informasi Anda",
        body: [
          "Kami berbagi detail Anda hanya dengan pemandu lokal, porter, dan penyedia transportasi yang diperlukan untuk memberikan layanan yang telah Anda pesan.",
          "Kami tidak menjual, menyewakan, atau memperdagangkan informasi pribadi Anda kepada pihak ketiga untuk tujuan pemasaran.",
        ],
      },
      {
        heading: "Retensi Data",
        body: [
          "Kami menyimpan informasi pemesanan Anda hanya selama yang diperlukan untuk menyediakan layanan kami dan memenuhi kewajiban hukum atau akuntansi, setelah itu dihapus atau dianonimkan.",
        ],
      },
      {
        heading: "Hak Anda",
        body: [
          "Anda dapat meminta untuk mengakses, mengoreksi, atau menghapus informasi pribadi yang kami miliki tentang Anda kapan saja dengan menghubungi kami menggunakan detail di bawah ini.",
          "Karena pemesanan diatur langsung dengan tim kami, Anda dapat meminta kami memperbarui detail Anda kapan pun rencana Anda berubah.",
        ],
      },
      {
        heading: "Platform Pesan",
        body: [
          "Ketika Anda menghubungi kami melalui WhatsApp atau email, pesan Anda ditangani berdasarkan ketentuan privasi penyedia tersebut selain kebijakan ini. Kami menyarankan Anda untuk meninjau praktik privasi masing-masing.",
        ],
      },
      {
        heading: "Perubahan Kebijakan Ini",
        body: [
          'Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan apa pun akan diposting di halaman ini dengan tanggal "Terakhir diperbarui" yang direvisi.',
        ],
      },
    ],
  },
};

interface LegalPageProps {
  pageType: "terms" | "privacy";
}

export default function LegalPage({ pageType }: LegalPageProps) {
  const { lang, t } = useLang();
  const content =
    pageType === "terms" ? termsContent[lang] : privacyContent[lang];

  return (
    <>
      <Navbar />
      <main className="bg-white pt-16 lg:pt-20">
        <section className="mx-auto max-w-3xl px-6 pt-12 pb-20 lg:px-10 lg:pt-20 lg:pb-28">
          <p className="mb-3 text-base font-normal text-savana-600">
            {t("legal.eyebrow")}
          </p>
          <h1 className="mb-4 text-4xl leading-tight font-semibold text-neutral-900 lg:text-5xl">
            {content.title}
          </h1>
          <p className="mb-2 text-base leading-relaxed text-pale-savana-500">
            {content.intro}
          </p>
          <p className="mb-12 text-sm text-neutral-300">
            {t("legal.lastUpdated")} {content.lastUpdated}
          </p>

          <div className="space-y-10">
            {content.sections.map((section, i) => (
              <div key={section.heading}>
                <h2 className="mb-3 text-xl font-semibold text-neutral-900 lg:text-2xl">
                  {i + 1}. {section.heading}
                </h2>
                <div className="space-y-4">
                  {section.body.map((paragraph, j) => (
                    <p
                      key={j}
                      className="text-base leading-relaxed text-neutral-600"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl bg-neutral-050 p-6 lg:p-8">
            <h2 className="mb-2 text-lg font-semibold text-neutral-900">
              {t("legal.questions.heading")}
            </h2>
            <p className="text-base leading-relaxed text-neutral-600">
              {t("legal.questions.body")}{" "}
              <a
                href="mailto:waerebolodge@gmail.com"
                className="font-medium text-savana-700 hover:underline"
              >
                waerebolodge@gmail.com
              </a>{" "}
              {t("legal.questions.or")}{" "}
              <a
                href="https://wa.me/6285339021145"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-savana-700 hover:underline"
              >
                +62 853 3902 1145
              </a>
              . {t("legal.questions.address")}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
