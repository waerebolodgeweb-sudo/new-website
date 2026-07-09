"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-neutral-050 pb-8">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-black/10 py-6 sm:flex-row">
          <p className="text-base font-medium text-neutral-400">
            &copy;{new Date().getFullYear()} Waerebo Lodge. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/terms"
              className="text-base font-medium text-neutral-400 transition-colors hover:text-neutral-600"
            >
              {t("footer.terms")}
            </Link>
            <span className="h-4 w-px bg-black/20" />
            <Link
              href="/privacy"
              className="text-base font-medium text-neutral-400 transition-colors hover:text-neutral-600"
            >
              {t("footer.privacy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
