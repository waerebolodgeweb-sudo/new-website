import Link from "next/link";
import { IoLogoInstagram, IoMusicalNotesOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 py-8 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm font-normal text-white/50">
            © {new Date().getFullYear()} Waerebo Lodge. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              aria-label="Instagram"
              className="text-white/50 transition-colors hover:text-white"
            >
              <IoLogoInstagram size={18} />
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="text-white/50 transition-colors hover:text-white"
            >
              <IoMusicalNotesOutline size={18} />
            </a>
            <Link
              href="#"
              className="text-sm font-normal text-white/50 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm font-normal text-white/50 transition-colors hover:text-white"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
