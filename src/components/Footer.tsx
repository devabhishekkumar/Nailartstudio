import Image from "next/image";
import { ArrowUpRight, Heart, Instagram, MapPin, Phone } from "lucide-react";
import { studioPhone } from "@/data/site";

export default function Footer({ onBook }: { onBook: () => void }) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand-col"><a href="#home" className="footer-brand"><Image src="/images/studio-logo.png" alt="The Nail Art Studio logo" width={76} height={76}/><span>The Nail Art <em>Studio</em><small>ART AT YOUR FINGERTIPS</small></span></a><p>An expression of you, one beautiful nail at a time. Thoughtful artistry and little moments of joy.</p><a className="footer-social" href="#gallery" aria-label="See nail art inspiration"><Instagram size={19}/><span>Our inspiration gallery</span></a></div>
        <div className="footer-links"><h3>Explore</h3><a href="#home">Home</a><a href="#services">Our Services</a><a href="#gallery">Nail Art Gallery</a><a href="#about">About the Studio</a></div>
        <div className="footer-links"><h3>Services</h3><a href="#services">Signature Manicures</a><a href="#services">Nail Extensions</a><a href="#services">Creative Nail Art</a><a href="#services">Custom Press-Ons</a></div>
        <div className="footer-contact"><h3>Come say hello</h3><p><MapPin size={17}/> Utkal Kanika Galleria, Gautam Nagar, Bhubaneswar, Odisha 751009</p><p><Phone size={17} aria-hidden="true"/><a href={`tel:${studioPhone.international}`}>{studioPhone.display}</a></p><button onClick={onBook}>Request an appointment <ArrowUpRight size={16}/></button><div className="footer-deco">✳</div></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} The Nail Art Studio. All rights reserved.</span><span>Made with <Heart size={13} fill="currentColor"/> and a little nail magic.</span></div>
    </footer>
  );
}
