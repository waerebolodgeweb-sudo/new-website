"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { IoLogoInstagram, IoLogoTiktok, IoLogoYoutube } from "react-icons/io5";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-white pb-5 sm:pb-8">
      <div className="mx-auto flex max-w-[1512px] flex-row items-center justify-between px-5 sm:px-8 lg:px-20">
        <p className="block text-sm text-savana-800 lg:hidden">
          {t("footer.follow")}
        </p>
        <div className="hidden flex-col-reverse items-center gap-3 py-5 sm:flex-row sm:gap-4 sm:py-6 lg:flex">
          <div className="text-[11px] font-medium text-neutral-400 sm:text-base">
            &copy;{new Date().getFullYear()} Waerebo Lodge. {t("footer.rights")}
          </div>
          <span className="h-3 w-px bg-black/20 sm:h-4" />

          <Link
            href="/terms"
            className="text-[14px] font-medium text-neutral-400 transition-colors hover:text-neutral-600 md:text-base"
          >
            {t("footer.terms")}
          </Link>
          <span className="h-3 w-px bg-black/20 sm:h-4" />
          <Link
            href="/privacy"
            className="text-[14px] font-medium text-neutral-400 transition-colors hover:text-neutral-600 md:text-base"
          >
            {t("footer.privacy")}
          </Link>
          <span className="h-3 w-px bg-black/20 sm:h-4" />
          <Link
            href="/credits"
            className="text-[14px] font-medium text-neutral-400 transition-colors hover:text-neutral-600 md:text-base"
          >
            {t("footer.credits")}
          </Link>
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="flex flex-row items-center gap-2 font-semibold text-savana-600">
            <a
              href="https://www.youtube.com/@WaereboLodge"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#DED6B140] text-savana-800 lg:bg-transparent lg:text-savana-600"
            >
              <IoLogoYoutube size={19} />
            </a>
            <p className="hidden lg:block">Youtube</p>
          </div>
          <span className="ml-2 hidden h-3 w-px bg-black/20 sm:h-4 lg:block" />
          <div className="flex flex-row items-center gap-2 font-semibold text-savana-600">
            <a
              href="https://www.instagram.com/waerebolodge.official"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#DED6B140] text-savana-800 lg:bg-transparent lg:text-savana-600"
            >
              <IoLogoInstagram size={19} />
            </a>
            <p className="hidden lg:block">Instagram</p>
          </div>

          <span className="h -3 ml-2 hidden w-px bg-black/20 sm:h-4 lg:block" />
          <div className="flex flex-row items-center gap-2 font-semibold text-savana-600">
            <a
              href="https://www.tiktok.com/@waerebolodge.official"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#DED6B140] text-savana-800 lg:bg-transparent lg:text-savana-600"
            >
              <IoLogoTiktok size={18} />
            </a>
            <p className="hidden lg:block">TikTok</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse items-center gap-3 py-5 sm:gap-4 sm:py-6 lg:hidden lg:flex-row">
        <div className="text-[11px] font-medium text-neutral-400 sm:text-base">
          &copy;{new Date().getFullYear()} Waerebo Lodge. {t("footer.rights")}
        </div>

        <div className="flex w-full flex-row items-center justify-center gap-2">
          <Link
            href="/terms"
            className="text-[14px] font-medium text-neutral-400 transition-colors hover:text-neutral-600 md:text-base"
          >
            {t("footer.terms")}
          </Link>
          <span className="h-3 w-px bg-black/20 sm:h-4" />
          <Link
            href="/privacy"
            className="text-[14px] font-medium text-neutral-400 transition-colors hover:text-neutral-600 md:text-base"
          >
            {t("footer.privacy")}
          </Link>
          <span className="h-3 w-px bg-black/20 sm:h-4" />
          <Link
            href="/credits"
            className="text-[14px] font-medium text-neutral-400 transition-colors hover:text-neutral-600 md:text-base"
          >
            {t("footer.credits")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
