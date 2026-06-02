"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/#services" },
  { label: "Testimonials", href: "/#reviews" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Transparent only at the very top of pages with a full-bleed hero
  const heroRoutes = ["/", "/trips"];
  const transparent = heroRoutes.includes(pathname) && !scrolled && !open;

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-colors duration-300 ${
        transparent
          ? "bg-transparent"
          : "border-b border-pale-green-100/40 bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
            aria-label="Waerebo Lodge — Home"
          >
            <Image
              src="/logo.png"
              alt="Waerebo Lodge"
              width={508}
              height={168}
              priority
              className={`h-9 w-auto transition-[filter] duration-300 lg:h-10 ${
                transparent ? "" : "brightness-0"
              }`}
            />
          </Link>

          {/* Desktop nav — centered */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  transparent
                    ? "text-white/90 hover:text-white"
                    : "text-neutral-300 hover:text-green-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact Us — right */}
          <Link
            href="/#contact"
            className={`hidden rounded-full px-5 py-2.5 text-sm font-semibold transition-colors lg:inline-flex ${
              transparent
                ? "border border-white/50 text-white hover:bg-white hover:text-neutral-900"
                : "bg-neutral-900 text-white hover:bg-green-400"
            }`}
          >
            Contact Us
          </Link>

          {/* Mobile button */}
          <button
            className={`p-2 lg:hidden ${
              transparent ? "text-white" : "text-green-400"
            }`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <IoCloseOutline size={26} /> : <IoMenuOutline size={26} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="space-y-1 border-t border-pale-green-100/30 py-4 lg:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block rounded-lg px-4 py-2.5 text-sm font-medium text-neutral-300 transition-colors hover:bg-pale-green-100/20 hover:text-green-400"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Link
                href="/#contact"
                className="block rounded-full bg-neutral-900 px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-green-400"
                onClick={() => setOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
