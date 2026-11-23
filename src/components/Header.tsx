"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, CalendarDays, Instagram, Menu, Search, X } from "lucide-react";
import { navLinks, services } from "@/data/site";

type Props = { onBook: (service?: string) => void };

export default function Header({ onBook }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const matches = services.filter((service) => `${service.name} ${service.short}`.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setSearchOpen(false); setMenuOpen(false); }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <div className="announcement">A little nail magic, made just for you <span>✳</span> <a href="#services">Explore our services <ArrowRight size={12} /></a></div>
      <header className="site-header">
        <div className="container nav-shell">
          <a className="brand" href="#home" aria-label="The Nail Art Studio — home" onClick={() => setMenuOpen(false)}>
            <span className="brand-emblem"><Image src="/images/studio-logo.png" alt="" width={58} height={58} priority /></span>
            <span className="brand-text"><span>The Nail Art</span><strong>Studio</strong><small>ART AT YOUR FINGERTIPS</small></span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navLinks.map((item, index) => <a className={index === 0 ? "active" : ""} href={item.href} key={item.href}>{item.label}</a>)}
          </nav>
          <div className="nav-actions">
            <button className="icon-button search-trigger" onClick={() => { setSearchOpen(v => !v); setMenuOpen(false); }} aria-label={searchOpen ? "Close search" : "Search services"}><Search size={20} /></button>
            <a className="icon-button instagram-trigger" href="#gallery" aria-label="Explore nail art inspiration"><Instagram size={19} /></a>
            <button className="button button-primary nav-book" onClick={() => onBook()}><CalendarDays size={16} /> Book Now</button>
            <button className="icon-button mobile-toggle" onClick={() => { setMenuOpen(v => !v); setSearchOpen(false); }} aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>
          </div>
        </div>
        {searchOpen && <div className="search-panel"><div className="container search-inner"><div className="search-input-wrap"><Search size={20} /><input autoFocus value={query} onChange={e => setQuery(e.target.value)} placeholder="Search manicure, nail art, extensions..." aria-label="Search services" /><button className="icon-button" onClick={() => setSearchOpen(false)} aria-label="Close search"><X size={18}/></button></div><div className="search-results">{matches.length ? matches.map(s => <button key={s.id} onClick={() => { setSearchOpen(false); onBook(s.name); }}><span>{s.name}<small>{s.short}</small></span><ArrowRight size={16}/></button>) : <p>No matching services. Try a different search.</p>}</div></div></div>}
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{navLinks.map(item => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}<ArrowRight size={15}/></a>)}<button className="button button-primary" onClick={() => {setMenuOpen(false); onBook();}}>Book an Appointment <CalendarDays size={17}/></button></nav>}
      </header>
    </>
  );
}
