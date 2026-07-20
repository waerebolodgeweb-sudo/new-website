"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { IoHomeOutline, IoRefreshOutline } from "react-icons/io5";
import Navbar from "@/components/layout/Navbar";
import { useLang } from "@/lib/i18n";

const copy = {
  eyebrow: { en: "Something Went Wrong", id: "Terjadi Kesalahan" },
  heading: { en: "The Trail Hit a Rough Patch", id: "Jalur Menemui Hambatan" },
  body: {
    en: "An unexpected error occurred while loading this page. Catch your breath, then try again — the view is worth it.",
    id: "Terjadi kesalahan tak terduga saat memuat halaman ini. Tarik napas sejenak, lalu coba lagi — pemandangannya sepadan.",
  },
  retry: { en: "Try Again", id: "Coba Lagi" },
  home: { en: "Back to the Lodge", id: "Kembali ke Lodge" },
};

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { lang } = useLang();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Navbar />
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <Image
          src="/Gallery/Waerebo-Lodge-Gallery-Ikat-Weaving-Desktop.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hidden object-cover sm:block"
        />
        <Image
          src="/Gallery/Waerebo-Lodge-Gallery-Ikat-Weaving-Mobile.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover sm:hidden"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/75" />

        <div className="iconic-fade relative z-10 mx-auto max-w-2xl px-6 py-32 text-center">
          <p className="mb-3 text-sm font-semibold tracking-[0.25em] text-cream-200 uppercase">
            {copy.eyebrow[lang]}
          </p>
          <h1 className="text-3xl leading-tight font-semibold text-white lg:text-4xl">
            {copy.heading[lang]}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/80">
            {copy.body[lang]}
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              onClick={reset}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-base font-medium text-savana-800 transition-colors hover:bg-cream-200"
            >
              <IoRefreshOutline size={18} />
              {copy.retry[lang]}
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/60 px-6 py-4 text-base font-medium text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-savana-800"
            >
              <IoHomeOutline size={18} />
              {copy.home[lang]}
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
