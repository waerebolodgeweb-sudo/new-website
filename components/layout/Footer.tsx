import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-050 pb-8">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-black/10 py-6 sm:flex-row">
          <p className="text-base font-medium text-neutral-400">
            ©{new Date().getFullYear()} Waerebo Lodge. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/terms"
              className="text-base font-medium text-neutral-400 transition-colors hover:text-neutral-600"
            >
              Terms &amp; Conditions
            </Link>
            <span className="h-4 w-px bg-black/20" />
            <Link
              href="/privacy"
              className="text-base font-medium text-neutral-400 transition-colors hover:text-neutral-600"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
