"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { gallery } from "@/data/site";

export default function Gallery({ onBook }: { onBook: () => void }) {
  const [active, setActive] = useState<number | null>(null);
  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive(v => v === null ? null : (v + 1) % gallery.length);
      if (event.key === "ArrowLeft") setActive(v => v === null ? null : (v - 1 + gallery.length) % gallery.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section className="gallery-section section" id="gallery" aria-labelledby="gallery-title">
      <div className="container">
        <div className="center-heading"><h2 id="gallery-title">Nail Art <em>Gallery.</em></h2><p>Find inspiration for your next set. Select a photo to see the details.</p></div>
        <div className="gallery-grid">
          {gallery.map((item, index) => (
            <button type="button" className="gallery-item" key={item.image} onClick={() => setActive(index)} aria-label={`View ${item.alt.toLowerCase()}`}>
              <Image src={item.image} alt="" fill sizes="(max-width: 600px) 50vw, (max-width: 1164px) 33vw, 360px" />
              <span className="gallery-zoom" aria-hidden="true">View design <Expand size={15} /></span>
            </button>
          ))}
        </div>
        <div className="center-cta"><button type="button" className="button button-primary" onClick={onBook}>Book your set</button></div>
      </div>
      {active !== null && <div className="lightbox" role="presentation" onMouseDown={e => {if (e.target === e.currentTarget) setActive(null);}}><div className="lightbox-content" role="dialog" aria-modal="true" aria-label="Nail art design preview"><button className="icon-button lightbox-close" onClick={() => setActive(null)} aria-label="Close image"><X size={24}/></button><button className="icon-button lightbox-prev" onClick={() => setActive(v => v === null ? null : (v - 1 + gallery.length) % gallery.length)} aria-label="Previous image"><ChevronLeft/></button><div className="lightbox-image"><Image src={gallery[active].image} alt={gallery[active].alt} fill sizes="90vw" /></div><button className="icon-button lightbox-next" onClick={() => setActive(v => v === null ? null : (v + 1) % gallery.length)} aria-label="Next image"><ChevronRight/></button><p>{gallery[active].alt} <span>{active + 1} / {gallery.length}</span></p></div></div>}
    </section>
  );
}
