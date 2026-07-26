"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IoMenuOutline,
  IoCloseOutline,
  IoChevronDownOutline,
  IoChevronUpOutline,
  IoArrowUndoOutline,
  IoLogoInstagram,
  IoLogoTiktok,
  IoLogoYoutube,
} from "react-icons/io5";
import { useLang } from "@/lib/i18n";

type NavLink = {
  key: string;
  href: string;
  children?: { key: string; href: string }[];
};

const navLinks: NavLink[] = [
  { key: "nav.home", href: "/" },
  {
    key: "nav.services",
    href: "/#services",
    children: [
      { key: "nav.trip", href: "/trips" },
      { key: "nav.lodge", href: "/lodge" },
      { key: "nav.restaurant", href: "/restaurant" },
      { key: "nav.transport", href: "/transport" },
    ],
  },
  { key: "nav.about", href: "/about" },
  { key: "nav.testimonials", href: "/#testimonials" },
  { key: "nav.gallery", href: "/gallery" },
  { key: "nav.reviews", href: "/#reviews" },
  { key: "nav.faq", href: "/faq" },
];

const mobileSocialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/waerebolodge.official",
    Icon: IoLogoInstagram,
  },
  {
    label: "Youtube",
    href: "https://www.youtube.com",
    Icon: IoLogoYoutube,
  },
  {
    label: "Tik Tok",
    href: "https://www.tiktok.com/@waerebolodge.official",
    Icon: IoLogoTiktok,
  },
];

function LangToggle({ transparent }: { transparent: boolean }) {
  const { lang, toggle } = useLang();
  return (
    <button
      onClick={toggle}
      aria-label={`Switch language — current ${lang === "en" ? "English" : "Indonesian"}`}
      className={`inline-flex items-center gap-1 rounded-lg border px-3 py-2.5 text-sm font-semibold transition-colors ${
        transparent
          ? "border-white/50 text-white hover:bg-white/10"
          : "border-pale-green-100 text-neutral-600 hover:border-green-400 hover:text-green-400"
      }`}
    >
      <span className={lang === "en" ? "" : "opacity-40"}>EN</span>
      <span className="opacity-40">/</span>
      <span className={lang === "id" ? "" : "opacity-40"}>ID</span>
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Transparent only at the very top of pages with a full-bleed hero
  const heroRoutes = ["/", "/trips"];
  const hasHero =
    heroRoutes.includes(pathname) || pathname.startsWith("/destination");
  const transparent = hasHero && !scrolled && !open;
  const servicesLink = navLinks.find((link) => link.key === "nav.services");
  const servicePaths = servicesLink?.children?.map((child) => child.href) ?? [];
  const servicesActive =
    mobileServicesOpen || servicePaths.some((href) => pathname === href);

  const isActivePath = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href;
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-colors duration-300 ${
        transparent
          ? "bg-transparent"
          : "border-b border-pale-green-100/40 bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
            aria-label="Waerebo Lodge — Home"
          >
            <Image
              src={transparent ? "/logo-white.png" : "/logo.png"}
              alt="Waerebo Lodge"
              width={508}
              height={168}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop nav — centered */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 whitespace-nowrap lg:flex xl:gap-7">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.key} className="group relative">
                  <button
                    className={`flex items-center gap-1 text-base font-medium transition-colors ${
                      transparent
                        ? "text-white hover:text-white/80"
                        : "text-neutral-300 hover:text-green-400"
                    }`}
                  >
                    {t(link.key)}
                    <IoChevronDownOutline
                      size={14}
                      className="transition-transform duration-200 group-hover:rotate-180"
                    />
                  </button>
                  {/* Dropdown */}
                  <div className="invisible absolute top-full left-1/2 z-50 w-48 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <div className="overflow-hidden rounded-2xl border border-pale-green-100/40 bg-white py-2 shadow-lg">
                      {link.children.map((child) => (
                        <Link
                          key={child.key}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm font-medium text-neutral-300 transition-colors hover:bg-pale-green-100/20 hover:text-green-400"
                        >
                          {t(child.key)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.key}
                  href={link.href}
                  className={`text-base font-medium transition-colors ${
                    transparent
                      ? "text-white hover:text-white/80"
                      : "text-neutral-300 hover:text-green-400"
                  }`}
                >
                  {t(link.key)}
                </Link>
              )
            )}
          </div>

          {/* Language toggle + Contact Us — right */}
          <div className="hidden items-center gap-3 lg:flex">
            <LangToggle transparent={transparent} />
            <Link
              href="/#contact"
              className={`rounded-xl px-4 py-2.5 text-base font-medium transition-colors ${
                transparent
                  ? "bg-white text-neutral-900 hover:bg-white/90"
                  : "bg-neutral-900 text-white hover:bg-green-400"
              }`}
            >
              {t("nav.contact")}
            </Link>
          </div>

          {/* Mobile: language toggle + menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <LangToggle transparent={transparent} />
            <button
              className={`p-2 text-[32px] ${transparent ? "text-white" : "text-savana-green-500"}`}
              onClick={() => setOpen((current) => !current)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? (
                <IoCloseOutline size={32} />
              ) : (
                <IoMenuOutline size={32} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="fixed top-20 right-0 bottom-0 left-0 flex h-[92vh] flex-col bg-savana-50 lg:hidden">
          <div className="flex-1 overflow-y-auto px-4 pt-4 pb-6">
            <div className="space-y-1">
              <Link
                href="/"
                className={`block rounded-lg px-4 py-3.5 text-base font-medium transition-colors ${
                  isActivePath("/") && !mobileServicesOpen
                    ? "bg-savana-200 text-savana-green-500"
                    : "text-pale-savana-200 hover:bg-savana-200/60"
                }`}
                onClick={() => setOpen(false)}
              >
                {t("nav.home")}
              </Link>

              <button
                type="button"
                className={`flex w-full items-center justify-between rounded-lg px-4 py-3.5 text-left text-base font-medium transition-colors ${
                  servicesActive
                    ? "bg-savana-200 text-savana-green-500"
                    : "text-pale-savana-200 hover:bg-savana-200/60"
                }`}
                aria-expanded={mobileServicesOpen}
                onClick={() => setMobileServicesOpen((current) => !current)}
              >
                <span>{t("nav.services")}</span>
                {mobileServicesOpen ? (
                  <IoChevronUpOutline size={16} />
                ) : (
                  <IoChevronDownOutline size={16} />
                )}
              </button>

              {mobileServicesOpen && (
                <div className="space-y-1 py-1 pl-6">
                  {navLinks
                    .find((link) => link.key === "nav.services")
                    ?.children?.map((child) => (
                      <Link
                        key={child.key}
                        href={child.href}
                        className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors hover:bg-savana-200/60 hover:text-savana-green-500 ${
                          isActivePath(child.href)
                            ? "text-savana-green-500"
                            : "text-pale-savana-200"
                        }`}
                        onClick={() => setOpen(false)}
                      >
                        <IoArrowUndoOutline
                          size={14}
                          className={`-rotate-90 ${
                            isActivePath(child.href)
                              ? "text-savana-green-500"
                              : "text-pale-savana-200"
                          }`}
                        />
                        {t(child.key)}
                      </Link>
                    ))}
                </div>
              )}

              {navLinks
                .filter(
                  (link) =>
                    link.key !== "nav.home" && link.key !== "nav.services"
                )
                .map((link) => (
                  <Link
                    key={link.key}
                    href={link.href}
                    className={`block rounded-lg px-4 py-3.5 text-base font-medium transition-colors hover:bg-savana-200/60 hover:text-savana-green-500 ${
                      isActivePath(link.href)
                        ? "bg-savana-200 text-savana-green-500"
                        : "text-pale-savana-200"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {t(link.key)}
                  </Link>
                ))}
            </div>
          </div>

          <div className="px-4 pb-4">
            <Link
              href="/#contact"
              className="block rounded-lg bg-savana-green-500 px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-savana-green-400"
              onClick={() => setOpen(false)}
            >
              {t("nav.contact")}
            </Link>

            <div className="mt-5 grid grid-cols-3 border-t border-savana-200 pt-3">
              {mobileSocialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm font-medium text-savana-600 transition-opacity hover:opacity-75"
                >
                  <Icon size={16} className="text-neutral-400" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
