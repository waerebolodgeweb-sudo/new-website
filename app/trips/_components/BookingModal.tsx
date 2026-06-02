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

const travelersOptions = ["1 Person", "2 People", "3 People", "4 People", "5 People", "6+ People"];

export default function BookingModal({ isOpen, onClose, programs, defaultProgramId }: Props) {
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
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const set = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

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
      <div className="relative z-10 w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-pale-green-100/40">
          <h2 className="text-base font-bold text-neutral-900">
            Please fill Booking Information
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-pale-green-100/30 transition-colors text-neutral-300"
            aria-label="Close"
          >
            <IoCloseOutline size={20} />
          </button>
        </div>

        {/* Form */}
        <div className="px-6 py-5 space-y-3 max-h-[65vh] overflow-y-auto">
          {/* Name */}
          <Field icon={<IoPersonOutline size={16} />} label="Name">
            <input
              type="text"
              placeholder="Input your name"
              value={form.name}
              onChange={set("name")}
              className="flex-1 text-sm text-neutral-900 placeholder:text-neutral-300 outline-none bg-transparent"
            />
          </Field>

          {/* Origin */}
          <Field icon={<IoLocationOutline size={16} />} label="Origin">
            <input
              type="text"
              placeholder="Where are you from?"
              value={form.origin}
              onChange={set("origin")}
              className="flex-1 text-sm text-neutral-900 placeholder:text-neutral-300 outline-none bg-transparent"
            />
          </Field>

          {/* Phone */}
          <Field icon={<IoCallOutline size={16} />} label="Phone Number">
            <input
              type="tel"
              placeholder="Input your phone number"
              value={form.phone}
              onChange={set("phone")}
              className="flex-1 text-sm text-neutral-900 placeholder:text-neutral-300 outline-none bg-transparent"
            />
          </Field>

          {/* Email */}
          <Field icon={<IoMailOutline size={16} />} label="Email">
            <input
              type="email"
              placeholder="Input your email address"
              value={form.email}
              onChange={set("email")}
              className="flex-1 text-sm text-neutral-900 placeholder:text-neutral-300 outline-none bg-transparent"
            />
          </Field>

          {/* Trip Program */}
          <Field icon={<IoListOutline size={16} />} label="Trip Program">
            <select
              value={form.program}
              onChange={set("program")}
              className="flex-1 text-sm text-neutral-900 outline-none bg-transparent appearance-none cursor-pointer"
            >
              <option value="" disabled>Select your trip type</option>
              {programs.map((p) => (
                <option key={p.id} value={p.id}>{p.label}</option>
              ))}
            </select>
          </Field>

          {/* Trip Date */}
          <Field icon={<IoCalendarOutline size={16} />} label="Trip Date">
            <input
              type="date"
              value={form.date}
              onChange={set("date")}
              min={new Date().toISOString().split("T")[0]}
              className="flex-1 text-sm text-neutral-900 outline-none bg-transparent cursor-pointer"
            />
          </Field>

          {/* Travelers */}
          <Field icon={<IoPeopleOutline size={16} />} label="Travelers">
            <select
              value={form.travelers}
              onChange={set("travelers")}
              className="flex-1 text-sm text-neutral-900 outline-none bg-transparent appearance-none cursor-pointer"
            >
              <option value="" disabled>Select number of guests</option>
              {travelersOptions.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </Field>
        </div>

        {/* Action buttons */}
        <div className="px-6 pb-6 pt-4 grid grid-cols-2 gap-3 border-t border-pale-green-100/40">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-3 bg-green-400 text-white text-sm font-semibold rounded-full hover:bg-pale-green-500 transition-colors"
          >
            <IoLogoWhatsapp size={16} />
            Book Via Whatsapp
          </a>
          <a
            href={mailLink}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-neutral-900 text-white text-sm font-semibold rounded-full hover:bg-neutral-300/80 transition-colors"
          >
            <IoSendOutline size={15} />
            Book Via Email
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
    <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-pale-green-100/50 bg-light-green-100/60 focus-within:border-green-400 focus-within:bg-white transition-colors">
      <span className="text-green-400 flex-shrink-0">{icon}</span>
      <div className="flex-1 min-w-0">
        <p className="text-[9px] font-semibold text-neutral-300 uppercase tracking-wider mb-0.5">
          {label}
        </p>
        {children}
      </div>
    </div>
  );
}
