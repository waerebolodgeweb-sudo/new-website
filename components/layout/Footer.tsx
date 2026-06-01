import Link from "next/link";
import { IoLogoInstagram, IoMusicalNotesOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-lodge-dark text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50 font-normal">
            © {new Date().getFullYear()} Waerebo Lodge. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              aria-label="Instagram"
              className="text-white/50 hover:text-white transition-colors"
            >
              <IoLogoInstagram size={18} />
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="text-white/50 hover:text-white transition-colors"
            >
              <IoMusicalNotesOutline size={18} />
            </a>
            <Link
              href="#"
              className="text-sm text-white/50 hover:text-white transition-colors font-normal"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-white/50 hover:text-white transition-colors font-normal"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
