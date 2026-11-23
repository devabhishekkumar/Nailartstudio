"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { studioInquiryLink } from "@/data/whatsapp";

export default function WhatsAppPopup({ onBook }: { onBook: () => void }) {
  const [open, setOpen] = useState(false);
  const launcher = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) closeButton.current?.focus();
  }, [open]);

  function closePopup() {
    setOpen(false);
    launcher.current?.focus();
  }

  return (
    <div className="whatsapp-widget" onKeyDown={(event) => {
      if (open && event.key === "Escape") {
        event.stopPropagation();
        closePopup();
      }
    }}>
      <button
        ref={launcher}
        type="button"
        className="whatsapp-chat"
        aria-label="WhatsApp chat"
        aria-expanded={open}
        aria-controls="whatsapp-panel"
        onClick={() => setOpen(!open)}
      >
        <MessageCircle size={22} aria-hidden="true" />
        <span>WhatsApp</span>
      </button>
      <section id="whatsapp-panel" className="whatsapp-panel" aria-labelledby="whatsapp-title" hidden={!open}>
        <div className="whatsapp-panel-header">
          <MessageCircle size={22} aria-hidden="true" />
          <h2 id="whatsapp-title">The Nail Art Studio</h2>
          <button ref={closeButton} type="button" aria-label="Close WhatsApp chat" onClick={closePopup}>
            <X size={19} aria-hidden="true" />
          </button>
        </div>
        <div className="whatsapp-panel-body">
          <p>{studioInquiryLink
            ? "Hi! Have a question about nail art, services, or booking? Send us a message."
            : "WhatsApp chat is currently unavailable. You can still prepare an appointment request."}</p>
          {studioInquiryLink ? (
            <a className="button button-primary" href={studioInquiryLink} target="_blank" rel="noopener noreferrer">
              Open WhatsApp <span className="sr-only">(opens in a new tab)</span>
            </a>
          ) : (
            <button className="button button-primary" type="button" onClick={() => { closePopup(); onBook(); }}>
              Request an appointment
            </button>
          )}
        </div>
      </section>
    </div>
  );
}
