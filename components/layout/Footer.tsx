"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-white pb-5 sm:bg-neutral-050 sm:pb-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-3 py-5 sm:flex-row sm:gap-4 sm:border-t sm:border-black/10 sm:py-6">
          <p className="order-2 text-[11px] font-medium text-neutral-400 sm:order-1 sm:text-base">
            &copy;{new Date().getFullYear()} Waerebo Lodge. {t("footer.rights")}
          </p>
          <div className="order-1 flex items-center gap-5 sm:order-2">
            <Link
              href="/terms"
              className="text-[11px] font-medium text-neutral-400 transition-colors hover:text-neutral-600 sm:text-base"
            >
              {t("footer.terms")}
            </Link>
            <span className="h-3 w-px bg-black/20 sm:h-4" />
            <Link
              href="/privacy"
              className="text-[11px] font-medium text-neutral-400 transition-colors hover:text-neutral-600 sm:text-base"
            >
              {t("footer.privacy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
