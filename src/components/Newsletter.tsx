"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "demo" | "error">("idle");
  const endpoint = process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT;
  async function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!endpoint) { setStatus("demo"); return; }
    setStatus("loading");
    try {
      const response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
      if (!response.ok) throw new Error("Subscription failed");
      setStatus("success"); setEmail("");
    } catch { setStatus("error"); }
  }
  return (
    <section className="newsletter-section" id="contact">
      <div className="container newsletter-wrap">
        <div className="newsletter-art" aria-hidden="true"><svg width="176" height="160" viewBox="0 0 176 160" fill="none"><path d="M20 160C32 96 49 64 97 15M33 122C10 106 7 83 18 60C43 80 48 101 33 122ZM54 83C32 58 31 40 42 17C65 34 70 58 54 83ZM73 52C86 21 108 14 128 16C116 43 98 52 73 52ZM42 134C75 117 96 119 115 137C88 153 62 151 42 134ZM84 75C114 64 137 72 149 89C124 100 103 92 84 75Z" stroke="currentColor" strokeWidth="1.1" opacity=".54"/></svg></div>
        <div className="newsletter-copy"><span className="eyebrow">A LITTLE LOVE LETTER</span><h2>Be the first to <em>know.</em></h2><p>New looks, nail care tips and a little inspiration, delivered with love.</p></div>
        <div className="newsletter-input-area"><form onSubmit={subscribe} className="newsletter-form"><label className="sr-only" htmlFor="newsletter-email">Email address</label><input id="newsletter-email" type="email" required value={email} onChange={e => {setEmail(e.target.value); setStatus("idle");}} placeholder="Enter your email address"/><button type="submit" disabled={status === "loading"}>{status === "loading" ? <Loader2 className="spin" size={16}/> : status === "success" ? <Check size={16}/> : <ArrowRight size={18}/>}<span>Subscribe</span></button></form><div className="newsletter-status" role="status">{status === "success" && "You're subscribed — thank you!"}{status === "demo" && "Newsletter is in demo mode. Connect your email platform to activate signups."}{status === "error" && "Could not subscribe right now. Please try again."}{status === "idle" && "Just lovely updates. No spam."}</div></div>
      </div>
    </section>
  );
}
