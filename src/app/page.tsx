"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { ArrowRight, ArrowUpRight, BadgeCheck, Brush, CalendarDays, Check, Flower2, Heart, Leaf, ShieldCheck, Sparkles, Star, WandSparkles } from "lucide-react";
import BookingModal from "@/components/BookingModal";
import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import Newsletter from "@/components/Newsletter";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import { services } from "@/data/site";
import WhatsAppPopup from "@/components/WhatsAppPopup";

const features = [
  { label: "An Artistic Touch", description: "Made with love and precision", Icon: Sparkles },
  { label: "Premium Products", description: "Quality in every little detail", Icon: Leaf },
  { label: "Care Comes First", description: "A thoughtful, hygienic approach", Icon: ShieldCheck },
  { label: "Uniquely You", description: "Personalised for your style", Icon: Heart },
];

const steps = [
  { number: "01", title: "Choose your style", description: "Browse our services or bring along the nail inspiration you've been saving." },
  { number: "02", title: "Request your visit", description: "Tell us your preferred day and what you'd love to have done." },
  { number: "03", title: "Enjoy your moment", description: "Once confirmed, leave the details to us. Your nail moment awaits." },
];

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const openBooking = useCallback((service = "") => { setSelectedService(service); setBookingOpen(true); }, []);
  const closeBooking = useCallback(() => setBookingOpen(false), []);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header onBook={openBooking} />
      <main id="main-content">
        <section className="hero" id="home">
          <div className="hero-photo"><Image src="/images/hero-artist.webp" alt="Nail artist carefully painting a client's nails" fill priority sizes="(max-width: 820px) 100vw, 50vw" /><div className="photo-vignette"/><div className="hero-photo-badge"><span>✳</span> THE ART OF BEAUTIFUL DETAILS</div></div>
          <div className="hero-content">
            <div className="hero-content-inner"><div className="eyebrow hero-eyebrow"><span className="eyebrow-dash"/> WELCOME TO THE NAIL ART STUDIO</div><h1>Your Nails,<br/>Your <em>Canvas.</em></h1><div className="hero-flourish" aria-hidden="true"><svg viewBox="0 0 150 27" width="150" height="27" fill="none"><path d="M2 22C20 9 35 8 43 15S59 22 72 12c11-9 18-9 23-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><path d="M101 15c13-7 22-7 46 0M117 9c4 6 4 8 0 13" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/></svg></div><p>From timeless manicures to tiny works of art, we make every set feel a little more <em>you.</em></p><div className="hero-actions"><button className="button button-primary" onClick={() => openBooking()}>Book an Appointment <ArrowRight size={18}/></button><a className="text-link" href="#services">Explore our services <ArrowUpRight size={17}/></a></div><div className="hero-micro"><Star size={14} fill="currentColor"/> Little details. Lovely moments. Beautiful nails.</div></div>
            <div className="hero-botanical" aria-hidden="true"><svg viewBox="0 0 190 220" fill="none"><path d="M178 217C130 155 105 85 111 9M117 55C87 57 55 36 47 13c34-4 63 9 70 42ZM125 85C151 58 170 56 188 63c-7 25-30 34-63 22ZM134 120C97 120 73 105 65 83c35-4 59 10 69 37ZM153 161C168 136 182 129 191 134M149 161C118 162 93 149 84 129c31-5 57 6 65 32Z" stroke="currentColor" strokeWidth="1.4"/></svg></div>
            <div className="hero-art-arch" aria-hidden="true"><div className="arch-line">✧<br/><span>handcrafted<br/>with love</span><br/>✳</div></div>
          </div>
        </section>
        <section className="features-strip" aria-label="Why choose our studio"><div className="container features-grid">{features.map(({label, description, Icon}) => <div className="feature" key={label}><span className="feature-icon"><Icon size={22} strokeWidth={1.4}/></span><span><strong>{label}</strong><small>{description}</small></span></div>)}</div></section>

        <section className="section services-section" id="services"><div className="container"><div className="section-head"><div><div className="eyebrow rose">THE STUDIO EDIT</div><h2>Discover your <em>nail moment.</em></h2></div><p>Whether you love understated classics or creative designs, there&apos;s something here for every mood.</p></div><div className="service-grid">{services.map(s => <article className="service-card" key={s.id}><div className="service-image"><Image src={s.image} alt={s.name} fill sizes="(max-width: 600px) 46vw, (max-width: 960px) 46vw, 24vw"/><span className="service-image-mark">✳</span></div><div className="service-body"><span>{s.eyebrow}</span><h3>{s.name}</h3><p>{s.short}</p><button type="button" onClick={() => openBooking(s.name)}>EXPLORE SERVICE <ArrowRight size={15}/></button></div></article>)}</div></div></section>

        <section className="promo-section"><div className="container promo-grid">
          <article className="promo-card promo-creative"><div className="promo-text"><span className="eyebrow">MADE WITH IMAGINATION</span><h3>Learn. Create.<br/><em>Inspire.</em></h3><p>A little creativity goes a long way. Find your next favourite look.</p><a href="#gallery">EXPLORE DESIGNS <ArrowRight size={16}/></a></div><div className="promo-image promo-image-nail"><Image src="/images/promo-art.webp" alt="Artist painting a delicate floral nail design" fill sizes="250px"/></div></article>
          <article className="promo-card promo-trending"><div className="promo-text"><span className="eyebrow">FRESH INSPIRATION</span><h3>Trending <em>Styles</em></h3><p>From romantic florals to a little extra shine.</p><a href="#gallery">SEE WHAT&apos;S NEW <ArrowRight size={16}/></a></div><div className="promo-image promo-image-trends"><Image src="/images/promo-trends.webp" alt="Elegant manicure with floral details" fill sizes="220px"/></div></article>
          <article className="promo-card promo-bride"><div className="promo-text"><span className="eyebrow">YOUR SPECIAL MOMENTS</span><h3>Bridal &amp; <em>Beyond</em></h3><p>Beautiful little details for your big moments.</p><button onClick={() => openBooking("Creative Nail Art")}>PLAN YOUR SET <ArrowRight size={16}/></button></div><div className="promo-image promo-image-care"><Image src="/images/promo-care.webp" alt="Premium manicure products" fill sizes="240px"/></div></article>
        </div></section>

        <Gallery onBook={() => openBooking()} />

        <section className="about-section section" id="about"><div className="container about-grid"><div className="about-visual"><div className="about-arch"><Image src="/images/hero-artist.webp" alt="Carefully crafted nail artistry inside the studio" fill sizes="(max-width: 800px) 90vw, 42vw" /></div><div className="about-seal"><Image src="/images/studio-logo.png" alt="The Nail Art Studio brand emblem" width={122} height={122}/></div><div className="about-flower">✳</div></div><div className="about-copy"><div className="eyebrow rose">WELCOME TO OUR WORLD</div><h2>More than nails.<br/><em>A little moment for you.</em></h2><p>We believe nail art is a form of self-expression. A pop of colour, the tiniest floral, or an effortlessly clean finish — every detail tells your story.</p><p>At The Nail Art Studio, it&apos;s all about making room for creativity, care, and the joy of feeling beautifully yourself.</p><div className="about-values"><span><Check size={17}/> Designs with personality</span><span><Check size={17}/> Thoughtful attention to detail</span><span><Check size={17}/> A look that feels like you</span></div><button className="button button-outline" onClick={() => openBooking()}>Let&apos;s create your look <ArrowUpRight size={18}/></button></div></div></section>

        <section className="experience-section section"><div className="container"><div className="center-heading"><div className="eyebrow rose">THE NAIL ART STUDIO EXPERIENCE</div><h2>Beauty in <em>three little steps.</em></h2><p>Getting the nails you love should feel as lovely as wearing them.</p></div><div className="steps-grid">{steps.map((step, index) => <div className="step" key={step.number}><span className="step-num">{step.number}</span><span className="step-icon">{index===0 ? <Brush size={22}/> : index===1 ? <CalendarDays size={22}/> : <WandSparkles size={22}/>}</span><h3>{step.title}</h3><p>{step.description}</p></div>)}</div><div className="center-cta"><button className="button button-primary" onClick={() => openBooking()}>Request an Appointment <ArrowRight size={17}/></button></div></div></section>
        <Reviews />
        <Newsletter />
      </main>
      <Footer onBook={() => openBooking()} />
      <WhatsAppPopup onBook={openBooking} />
      <BookingModal open={bookingOpen} onClose={closeBooking} initialService={selectedService}/>
    </>
  );
}
