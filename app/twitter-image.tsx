import { ImageResponse } from "next/og";

export const alt = "Merve Uçar — Freelance Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #111827 0%, #1f2937 50%, #0f172a 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#fbbf24",
            marginBottom: 16,
          }}
        >
          Merve Uçar
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#e5e7eb",
            marginBottom: 48,
          }}
        >
          Full Stack Developer · Web & Mobile
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#f97316",
            padding: "12px 32px",
            border: "2px solid #f97316",
            borderRadius: 999,
          }}
        >
          merveucar.dev
        </div>
      </div>
    ),
    { ...size },
  );
}
