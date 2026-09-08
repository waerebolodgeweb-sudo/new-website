import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/JsonLd";
import { LanguageProvider } from "@/lib/i18n";
import {
  createMetadata,
  DEFAULT_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";

const jakarta = localFont({
  src: "./fonts/PlusJakartaSans-latin.woff2",
  variable: "--font-jakarta",
  weight: "400 800",
  display: "swap",
});

const dancing = localFont({
  src: "./fonts/DancingScript-latin.woff2",
  variable: "--font-dancing",
  weight: "400 700",
  display: "swap",
});

const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...createMetadata({
    title: "Waerebo Lodge — A Lodge Stop Before Your Journey",
    description: DEFAULT_DESCRIPTION,
    path: "/",
  }),
  applicationName: SITE_NAME,
  keywords: [
    "Waerebo Lodge",
    "Waerebo accommodation",
    "Waerebo trek",
    "Flores lodge",
    "Manggarai travel",
    "East Nusa Tenggara accommodation",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "travel",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: googleSiteVerification
    ? { google: googleSiteVerification }
    : undefined,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: DEFAULT_DESCRIPTION,
      inLanguage: ["en", "id"],
      publisher: { "@id": `${SITE_URL}/#lodge` },
    },
    {
      "@type": "LodgingBusiness",
      "@id": `${SITE_URL}/#lodge`,
      name: SITE_NAME,
      url: SITE_URL,
      description: DEFAULT_DESCRIPTION,
      image: `${SITE_URL}/home/hero.png`,
      logo: `${SITE_URL}/logo.png`,
      telephone: "+62 853-3902-1145",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dintor",
        addressRegion: "Manggarai, East Nusa Tenggara",
        addressCountry: "ID",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -8.8465902,
        longitude: 120.3055812,
      },
      hasMap: "https://www.google.com/maps/@-8.8465902,120.3055812,17z",
      sameAs: [
        "https://www.instagram.com/waerebolodge.official",
        "https://www.youtube.com/@WaereboLodge",
        "https://www.tiktok.com/@waerebolodge.official",
      ],
    },
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${dancing.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-savana-050 font-sans">
        <JsonLd data={websiteJsonLd} />
        <LanguageProvider>
          {children}
          <ScrollReveal />
        </LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-NRRTDS8MR6"
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NRRTDS8MR6');
        `}
      </Script>
    </html>
  );
}
