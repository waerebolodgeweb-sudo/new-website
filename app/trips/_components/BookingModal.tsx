"use client";

import { useState, useEffect } from "react";
import {
  IoCloseOutline,
  IoPersonOutline,
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline,
  IoListOutline,
  IoCalendarOutline,
  IoPeopleOutline,
  IoLogoWhatsapp,
  IoSendOutline,
} from "react-icons/io5";
import type { TripProgram } from "../data";
import { useLang } from "@/lib/i18n";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  programs: TripProgram[];
  defaultProgramId: string;
}

interface FormState {
  name: string;
  origin: string;
  phone: string;
  email: string;
  program: string;
  date: string;
  travelers: string;
}

const travelersOptions = [
  "1 Person",
  "2 People",
  "3 People",
  "4 People",
  "5 People",
  "6+ People",
];

export default function BookingModal({
  isOpen,
  onClose,
  programs,
  defaultProgramId,
}: Props) {
  const { t } = useLang();
  const [form, setForm] = useState<FormState>({
    name: "",
    origin: "",
    phone: "",
    email: "",
    program: defaultProgramId,
    date: "",
    travelers: "",
  });

  // Sync program when parent selection changes
  useEffect(() => {
    setForm((prev) => ({ ...prev, program: defaultProgramId }));
  }, [defaultProgramId]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const set =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const programLabel =
    programs.find((p) => p.id === form.program)?.title ?? form.program;

  const messageBody = `Hello Waerebo Lodge! 🌿

I'd like to book a trip:

Name: ${form.name}
Origin: ${form.origin}
Phone: ${form.phone}
Email: ${form.email}
Trip Program: ${programLabel}
Trip Date: ${form.date}
Travelers: ${form.travelers}

Thank you!`;

  const waLink = `https://wa.me/6285339021145?text=${encodeURIComponent(messageBody)}`;
  const mailLink = `mailto:waerebolodge@gmail.com?subject=${encodeURIComponent(
    `Booking Request — ${programLabel}`
  )}&body=${encodeURIComponent(messageBody)}`;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-pale-green-100/40 px-6 pt-6 pb-4">
          <h2 className="text-base font-bold text-neutral-900">
            {t("booking.heading")}
          </h2>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-300 transition-colors hover:bg-pale-green-100/30"
            aria-label="Close"
          >
            <IoCloseOutline size={20} />
          </button>
        </div>

        {/* Form */}
        <div className="max-h-[65vh] space-y-3 overflow-y-auto px-6 py-5">
          {/* Name */}
          <Field icon={<IoPersonOutline size={16} />} label={t("booking.name")}>
            <input
              type="text"
              placeholder={t("booking.name.placeholder")}
              value={form.name}
              onChange={set("name")}
              className="flex-1 bg-transparent text-sm text-neutral-900 outline-none placeholder:text-neutral-300"
            />
          </Field>

          {/* Origin */}
          <Field icon={<IoLocationOutline size={16} />} label={t("booking.origin")}>
            <input
              type="text"
              placeholder={t("booking.origin.placeholder")}
              value={form.origin}
              onChange={set("origin")}
              className="flex-1 bg-transparent text-sm text-neutral-900 outline-none placeholder:text-neutral-300"
            />
          </Field>

          {/* Phone */}
          <Field icon={<IoCallOutline size={16} />} label={t("booking.phone")}>
            <input
              type="tel"
              placeholder={t("booking.phone.placeholder")}
              value={form.phone}
              onChange={set("phone")}
              className="flex-1 bg-transparent text-sm text-neutral-900 outline-none placeholder:text-neutral-300"
            />
          </Field>

          {/* Email */}
          <Field icon={<IoMailOutline size={16} />} label={t("booking.email")}>
            <input
              type="email"
              placeholder={t("booking.email.placeholder")}
              value={form.email}
              onChange={set("email")}
              className="flex-1 bg-transparent text-sm text-neutral-900 outline-none placeholder:text-neutral-300"
            />
          </Field>

          {/* Trip Program */}
          <Field icon={<IoListOutline size={16} />} label={t("booking.program")}>
            <select
              value={form.program}
              onChange={set("program")}
              className="flex-1 cursor-pointer appearance-none bg-transparent text-sm text-neutral-900 outline-none"
            >
              <option value="" disabled>
                {t("booking.program.placeholder")}
              </option>
              {programs.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.label}
                </option>
              ))}
            </select>
          </Field>

          {/* Trip Date */}
          <Field icon={<IoCalendarOutline size={16} />} label={t("booking.date")}>
            <input
              type="date"
              value={form.date}
              onChange={set("date")}
              min={new Date().toISOString().split("T")[0]}
              className="flex-1 cursor-pointer bg-transparent text-sm text-neutral-900 outline-none"
            />
          </Field>

          {/* Travelers */}
          <Field icon={<IoPeopleOutline size={16} />} label={t("booking.travelers")}>
            <select
              value={form.travelers}
              onChange={set("travelers")}
              className="flex-1 cursor-pointer appearance-none bg-transparent text-sm text-neutral-900 outline-none"
            >
              <option value="" disabled>
                {t("booking.travelers.placeholder")}
              </option>
              {travelersOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </Field>
        </div>

        {/* Action buttons */}
        <div className="grid grid-cols-2 gap-3 border-t border-pale-green-100/40 px-6 pt-4 pb-6">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-green-400 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-pale-green-500"
          >
            <IoLogoWhatsapp size={16} />
            {t("booking.via.whatsapp")}
          </a>
          <a
            href={mailLink}
            className="flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-300/80"
          >
            <IoSendOutline size={15} />
            {t("booking.via.email")}
          </a>
        </div>
      </div>
    </div>
  );
}

function Field({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-pale-green-100/50 bg-light-green-100/60 px-4 py-3 transition-colors focus-within:border-green-400 focus-within:bg-white">
      <span className="flex-shrink-0 text-green-400">{icon}</span>
      <div className="min-w-0 flex-1">
        <p className="mb-0.5 text-[9px] font-semibold tracking-wider text-neutral-300 uppercase">
          {label}
        </p>
        {children}
      </div>
    </div>
  );
}
