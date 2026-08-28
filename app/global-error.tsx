"use client";

import { useState } from "react";

// Root-layout crash fallback — must render its own <html>/<body>.
// Global CSS may not be available here, so styles are inline.
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [lang] = useState<"en" | "id">(() => {
    if (typeof window === "undefined") return "en";
    return window.localStorage.getItem("waerebo-lang") === "id" ? "id" : "en";
  });
  const copy =
    lang === "id"
      ? {
          heading: "Terjadi kesalahan",
          body: "Terjadi kesalahan penting saat memuat situs. Silakan coba lagi.",
          retry: "Coba lagi",
        }
      : {
          heading: "Something went wrong",
          body: "A critical error occurred while loading the site. Please try again.",
          retry: "Try again",
        };

  return (
    <html lang={lang}>
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#262316",
          color: "#faf8f2",
          fontFamily:
            "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif",
          textAlign: "center",
          padding: "24px",
        }}
      >
        <style>{`
          .global-error-button {
            background: #ffffff;
            color: #453d18;
            transition: background-color 150ms ease, color 150ms ease;
          }

          .global-error-button:hover {
            background: #ded6b1;
            color: #453d18;
          }
        `}</style>
        <div style={{ maxWidth: 480 }}>
          <p
            style={{
              margin: 0,
              fontSize: 13,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#ded6b1",
              fontWeight: 600,
            }}
          >
            Waerebo Lodge
          </p>
          <h1
            style={{
              margin: "16px 0 0",
              fontSize: 32,
              lineHeight: 1.2,
              fontWeight: 600,
            }}
          >
            {copy.heading}
          </h1>
          <p
            style={{
              margin: "16px 0 0",
              fontSize: 16,
              lineHeight: 1.6,
              color: "rgba(250,248,242,0.75)",
            }}
          >
            {copy.body}
          </p>
          <button
            onClick={reset}
            className="global-error-button"
            style={{
              marginTop: 32,
              padding: "14px 28px",
              borderRadius: 12,
              border: "none",
              fontSize: 16,
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            {copy.retry}
          </button>
        </div>
      </body>
    </html>
  );
}
