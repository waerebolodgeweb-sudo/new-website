"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IoMenuOutline,
  IoCloseOutline,
  IoChevronDownOutline,
} from "react-icons/io5";

type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Our Services",
    href: "/#services",
    children: [
      { label: "Lodge", href: "/lodge" },
      { label: "Restaurant", href: "/restaurant" },
      { label: "Transport", href: "/transport" },
    ],
  },
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
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="group relative">
                  <button
                    className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                      transparent
                        ? "text-white/90 hover:text-white"
                        : "text-neutral-300 hover:text-green-400"
                    }`}
                  >
                    {link.label}
                    <IoChevronDownOutline
                      size={14}
                      className="transition-transform duration-200 group-hover:rotate-180"
                    />
                  </button>
                  {/* Dropdown */}
                  <div className="invisible absolute top-full left-1/2 z-50 w-48 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="overflow-hidden rounded-2xl border border-pale-green-100/40 bg-white py-2 shadow-lg">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm font-medium text-neutral-300 transition-colors hover:bg-pale-green-100/20 hover:text-green-400"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
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
              )
            )}
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
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className="block rounded-lg px-4 py-2.5 text-sm font-medium text-neutral-300 transition-colors hover:bg-pale-green-100/20 hover:text-green-400"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                  <div className="ml-4 border-l border-pale-green-100/30 pl-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block rounded-lg px-4 py-2.5 text-sm font-medium text-neutral-300 transition-colors hover:bg-pale-green-100/20 hover:text-green-400"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block rounded-lg px-4 py-2.5 text-sm font-medium text-neutral-300 transition-colors hover:bg-pale-green-100/20 hover:text-green-400"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
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
