"use client";

import { track } from "@vercel/analytics";

const WHATSAPP_NUMBER = "917737012198";
const WHATSAPP_MESSAGE = "hello sir";

export function whatsAppHref() {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}

export function trackWhatsApp(source: string) {
  void track("WhatsApp Click", { source });
  const body = new Blob([JSON.stringify({ source })], {
    type: "application/json",
  });
  if (typeof navigator !== "undefined" && navigator.sendBeacon) {
    const sent = navigator.sendBeacon("/api/clicks", body);
    if (sent) return;
  }
  void fetch("/api/clicks", { method: "POST", body, keepalive: true });
}

export function WaLink({
  source,
  className,
  children,
}: {
  source: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      className={className}
      href={whatsAppHref()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsApp(source)}
    >
      {children}
    </a>
  );
}
