"use client";

import { useEffect, useState } from "react";
import {
  IoArrowBackOutline,
  IoCloseOutline,
  IoLogoWhatsapp,
} from "react-icons/io5";
import { useLang, type Lang } from "@/lib/i18n";

type Topic = "lodge" | "trip" | "transport" | "restaurant";
type RoomType = "standard" | "wooden" | "deluxe";

const WHATSAPP_NUMBER = "6285339021145";

const topics: Topic[] = ["lodge", "trip", "transport", "restaurant"];
const roomTypes: RoomType[] = ["standard", "wooden", "deluxe"];

function createMessage(lang: Lang, topic: Topic, roomType?: RoomType) {
  if (lang === "id") {
    if (topic === "lodge" && roomType) {
      const roomLabels: Record<RoomType, string> = {
        standard: "Standard",
        wooden: "Traditional Wooden",
        deluxe: "Deluxe",
      };
      return `Halo Waerebo Lodge! 🌿\n\nSaya ingin menanyakan pemesanan tipe kamar ${roomLabels[roomType]}.\n\nMohon informasikan ketersediaan dan harganya. Terima kasih!`;
    }

    const topicLabels: Record<Exclude<Topic, "lodge">, string> = {
      trip: "paket trip",
      transport: "layanan transportasi",
      restaurant: "restoran",
    };
    return `Halo Waerebo Lodge! 🌿\n\nSaya ingin menanyakan tentang ${topicLabels[topic as Exclude<Topic, "lodge">]}.\n\nMohon informasikan pilihan dan detailnya. Terima kasih!`;
  }

  if (topic === "lodge" && roomType) {
    const roomLabels: Record<RoomType, string> = {
      standard: "Standard",
      wooden: "Traditional Wooden",
      deluxe: "Deluxe",
    };
    return `Hello Waerebo Lodge! 🌿\n\nI'd like to ask about booking a ${roomLabels[roomType]} room.\n\nPlease share availability and pricing. Thank you!`;
  }

  const topicLabels: Record<Exclude<Topic, "lodge">, string> = {
    trip: "your trip packages",
    transport: "your transportation services",
    restaurant: "your restaurant",
  };
  return `Hello Waerebo Lodge! 🌿\n\nI'd like to ask about ${topicLabels[topic as Exclude<Topic, "lodge">]}.\n\nPlease share the available options and details. Thank you!`;
}

function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function WhatsAppAssistant() {
  const { lang, t } = useLang();
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useState<Topic | null>(null);
  const [roomType, setRoomType] = useState<RoomType | null>(null);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  const directMessage =
    lang === "id"
      ? "Halo Waerebo Lodge! 🌿\n\nSaya ingin menghubungi Waerebo Lodge. Mohon bantuannya. Terima kasih!"
      : "Hello Waerebo Lodge! 🌿\n\nI'd like to contact Waerebo Lodge. Please let me know how you can help. Thank you!";
  const selectedMessage =
    topic && (topic !== "lodge" || roomType)
      ? createMessage(lang, topic, roomType ?? undefined)
      : null;

  const toggleOpen = () => setOpen((current) => !current);
  const close = () => {
    setOpen(false);
    setTopic(null);
    setRoomType(null);
  };
  const chooseTopic = (nextTopic: Topic) => {
    setTopic(nextTopic);
    setRoomType(null);
  };
  const chooseRoom = (nextRoomType: RoomType) => setRoomType(nextRoomType);
  const goBack = () => {
    if (roomType) {
      setRoomType(null);
      return;
    }
    setTopic(null);
  };

  return (
    <>
      {open && (
        <section
          id="whatsapp-assistant-dialog"
          role="dialog"
          aria-modal="false"
          aria-labelledby="whatsapp-assistant-title"
          className="fixed right-4 bottom-24 z-[60] w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-2xl border border-savana-200 bg-savana-050 shadow-[0_18px_50px_rgba(38,35,22,0.2)] sm:right-6 lg:right-8"
        >
          <div className="flex items-center justify-between bg-[#25D366] px-4 py-3 text-white">
            <div className="flex items-center gap-2.5">
              <IoLogoWhatsapp size={22} aria-hidden="true" />
              <div>
                <h2 id="whatsapp-assistant-title" className="text-sm font-semibold">
                  {t("whatsappAssistant.title")}
                </h2>
                <p className="text-xs text-white/80">
                  {t("whatsappAssistant.subtitle")}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label={t("whatsappAssistant.close")}
              className="rounded-full p-1.5 transition-colors hover:bg-white/15 focus-visible:ring-2 focus-visible:ring-white"
            >
              <IoCloseOutline size={21} aria-hidden="true" />
            </button>
          </div>

          <div className="space-y-3 p-4">
            {topic && (
              <button
                type="button"
                onClick={goBack}
                className="inline-flex items-center gap-1 text-xs font-semibold text-savana-600 hover:text-savana-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-savana-600"
              >
                <IoArrowBackOutline size={15} aria-hidden="true" />
                {t("whatsappAssistant.back")}
              </button>
            )}

            {!topic && (
              <>
                <p className="text-sm font-medium text-savana-800">
                  {t("whatsappAssistant.chooseTopic")}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {topics.map((nextTopic) => (
                    <button
                      key={nextTopic}
                      type="button"
                      onClick={() => chooseTopic(nextTopic)}
                      className="rounded-xl border border-savana-200 bg-white px-3 py-3 text-left text-sm font-semibold text-savana-800 transition-colors hover:border-savana-500 hover:bg-savana-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-savana-600"
                    >
                      {t(`whatsappAssistant.topic.${nextTopic}`)}
                    </button>
                  ))}
                </div>
              </>
            )}

            {topic === "lodge" && !roomType && (
              <>
                <p className="text-sm font-medium text-savana-800">
                  {t("whatsappAssistant.chooseRoom")}
                </p>
                <div className="space-y-2">
                  {roomTypes.map((nextRoomType) => (
                    <button
                      key={nextRoomType}
                      type="button"
                      onClick={() => chooseRoom(nextRoomType)}
                      className="flex w-full items-center justify-between rounded-xl border border-savana-200 bg-white px-3 py-3 text-left text-sm font-semibold text-savana-800 transition-colors hover:border-savana-500 hover:bg-savana-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-savana-600"
                    >
                      {t(`whatsappAssistant.room.${nextRoomType}`)}
                      <span aria-hidden="true">›</span>
                    </button>
                  ))}
                </div>
              </>
            )}

            {selectedMessage && (
              <>
                <p className="text-xs font-semibold tracking-wide text-pale-savana-300 uppercase">
                  {t("whatsappAssistant.messagePreview")}
                </p>
                <p className="rounded-xl bg-white p-3 text-xs leading-5 whitespace-pre-line text-pale-savana-500 ring-1 ring-savana-200">
                  {selectedMessage}
                </p>
                <a
                  href={whatsappUrl(selectedMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1ebe5d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
                >
                  <IoLogoWhatsapp size={18} aria-hidden="true" />
                  {t("whatsappAssistant.continue")}
                </a>
              </>
            )}

            <a
              href={whatsappUrl(directMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-xs font-semibold text-savana-600 underline-offset-4 hover:text-savana-800 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-savana-600"
            >
              {t("whatsappAssistant.direct")}
            </a>
          </div>
        </section>
      )}

      <button
        type="button"
        onClick={toggleOpen}
        aria-label={t("whatsappAssistant.button")}
        aria-expanded={open}
        aria-controls="whatsapp-assistant-dialog"
        className="fixed right-5 bottom-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.35)] transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 lg:right-8 lg:bottom-8 lg:h-16 lg:w-16"
      >
        {open ? (
          <IoCloseOutline size={30} aria-hidden="true" />
        ) : (
          <IoLogoWhatsapp size={30} aria-hidden="true" />
        )}
      </button>
    </>
  );
}
