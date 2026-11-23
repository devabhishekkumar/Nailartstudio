"use client";

import { useEffect, useState, type FormEvent } from "react";
import { CalendarDays, Check, Copy, MessageCircle, X } from "lucide-react";
import { services } from "@/data/site";
import { studioInquiryLink, studioWhatsAppLink } from "@/data/whatsapp";

type Props = {
  open: boolean;
  onClose: () => void;
  initialService?: string;
};

function localToday() {
  const d = new Date();
  const yyyy = d.getFullYear();
  return `${yyyy}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export default function BookingModal({ open, onClose, initialService = "" }: Props) {
  const [service, setService] = useState(initialService);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");
  const [request, setRequest] = useState("");
  const [copied, setCopied] = useState(false);
  const whatsapp = studioInquiryLink;
  const requestLink = request ? studioWhatsAppLink(request) : null;

  useEffect(() => {
    if (open) {
      setService(initialService);
      setRequest("");
      setCopied(false);
    }
  }, [open, initialService]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previous;
    };
  }, [open, onClose]);

  if (!open) return null;

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = [
      "Hello, I'd like to request an appointment at The Nail Art Studio.",
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      `Service: ${service || "Please advise"}`,
      `Preferred date: ${date}`,
      `Preferred time: ${time.trim() || "Flexible"}`,
      note.trim() ? `Notes: ${note.trim()}` : "",
      "Please confirm availability and pricing. Thank you!",
    ].filter(Boolean).join("\n");
    setRequest(message);
    const link = studioWhatsAppLink(message);
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  }

  async function copyRequest() {
    try {
      await navigator.clipboard.writeText(request);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="booking-modal" role="dialog" aria-modal="true" aria-labelledby="booking-title">
        <button className="icon-button modal-close" onClick={onClose} aria-label="Close booking form"><X size={21} /></button>
        <div className="booking-intro">
          <div className="eyebrow rose">A LITTLE SELF-CARE AWAITS</div>
          <h2 id="booking-title">Let&apos;s make it <em>beautiful.</em></h2>
          <p>Tell us what you have in mind. Your appointment is confirmed only when the studio responds.</p>
        </div>
        {request ? (
          <div className="booking-finished">
            <div className="success-icon"><Check size={24} /></div>
            <h3>Your request is ready</h3>
            <p>{requestLink ? "Send the prefilled message in WhatsApp to request your appointment." : "WhatsApp booking is currently unavailable. You can copy your request below."}</p>
            <pre>{request}</pre>
            <div className="booking-request-actions">
              {requestLink && <a className="button button-primary" href={requestLink} target="_blank" rel="noopener noreferrer"><MessageCircle size={17} /> Open WhatsApp</a>}
              <button className={requestLink ? "button button-outline" : "button button-primary"} type="button" onClick={copyRequest}>
                {copied ? <Check size={17} /> : <Copy size={17} />} {copied ? "Copied" : "Copy request"}
              </button>
            </div>
            <button type="button" className="text-link button-as-link" onClick={onClose}>Close</button>
          </div>
        ) : (
          <form onSubmit={submit} className="booking-form">
            <label>What would you love?
              <select value={service} onChange={(e) => setService(e.target.value)} required>
                <option value="" disabled>Select a service</option>
                {services.map((item) => <option key={item.id} value={item.name}>{item.name}</option>)}
                <option value="Not sure yet">Not sure yet — help me choose</option>
              </select>
            </label>
            <div className="form-row">
              <label>Your name<input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Full name" autoComplete="name" minLength={2} maxLength={100} required /></label>
              <label>Phone number<input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Your contact number" autoComplete="tel" minLength={7} maxLength={20} required /></label>
            </div>
            <div className="form-row">
              <label>Preferred date<input type="date" value={date} onChange={e => setDate(e.target.value)} min={localToday()} required /></label>
              <label>Preferred time<input type="text" value={time} onChange={e => setTime(e.target.value)} placeholder="e.g. Afternoon" maxLength={50} /></label>
            </div>
            <label>Anything we should know? <span className="optional">(optional)</span><textarea rows={3} value={note} onChange={e => setNote(e.target.value)} maxLength={500} placeholder="Nail length, a special occasion, design ideas..." /></label>
            <button className="button button-primary booking-submit" type="submit">{whatsapp ? <MessageCircle size={18} /> : <CalendarDays size={18} />} {whatsapp ? "Continue to WhatsApp" : "Prepare Booking Request"}</button>
            <small>No payment is taken here. Booking requests and prices are subject to studio confirmation.</small>
          </form>
        )}
      </section>
    </div>
  );
}
