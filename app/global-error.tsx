"use client";

// Root-layout crash fallback — must render its own <html>/<body>.
// Global CSS may not be available here, so styles are inline.
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
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
            Something went wrong
          </h1>
          <p
            style={{
              margin: "16px 0 0",
              fontSize: 16,
              lineHeight: 1.6,
              color: "rgba(250,248,242,0.75)",
            }}
          >
            A critical error occurred while loading the site. Please try again.
          </p>
          <button
            onClick={reset}
            style={{
              marginTop: 32,
              padding: "14px 28px",
              borderRadius: 12,
              border: "none",
              background: "#faf8f2",
              color: "#453d18",
              fontSize: 16,
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
