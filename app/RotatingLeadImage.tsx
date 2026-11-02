"use client";

import { useEffect, useState } from "react";

// Photographs documented by their contributors as scenes in Nairobi, Kenya.
// Each image depicts Kenyan/African people rather than generic stock subjects.
const scenes = [
  {
    image: "https://images.unsplash.com/photo-1656068218535-85db26125e13?auto=format&fit=crop&w=1800&q=85",
    label: "NAIROBI STREET LIFE",
    alt: "People crossing a busy street in Nairobi, Kenya"
  },
  {
    image: "https://images.unsplash.com/photo-1770283556599-9ce7898ffbd1?auto=format&fit=crop&w=1800&q=85",
    label: "CREATIVE ENTERPRISE",
    alt: "Young Kenyan creatives in a Nairobi apparel district store"
  },
  {
    image: "https://images.unsplash.com/photo-1693432396195-75261a69ab49?auto=format&fit=crop&w=1800&q=85",
    label: "STREET STYLE",
    alt: "Two African men in contemporary street fashion"
  },
  {
    image: "https://images.unsplash.com/photo-1773864931052-ea56474bcc84?auto=format&fit=crop&w=1800&q=85",
    label: "AFRICAN FASHION",
    alt: "Two Kenyan women among clothing racks in a Nairobi fashion space"
  },
  {
    image: "https://images.unsplash.com/photo-1776781205743-33b4c1106adc?auto=format&fit=crop&w=1800&q=85",
    label: "PEOPLE & PERSPECTIVES",
    alt: "Portrait of a young Kenyan man"
  }
];

export default function RotatingLeadImage() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % scenes.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  const scene = scenes[active];

  return (
    <div className="lead-image" role="img" aria-label={scene.alt}>
      <div
        key={scene.image}
        className="lead-image-background"
        style={{ backgroundImage: `url("${scene.image}")` }}
        aria-hidden="true"
      />
      <div className="image-caption">
        {scene.label} &nbsp; / &nbsp; A CONTINENT IN MOTION
      </div>
      <div className="scene-indicator" aria-label={`Scene ${active + 1} of ${scenes.length}`}>
        {scenes.map((item, index) => (
          <span key={item.image} className={index === active ? "active" : ""} />
        ))}
      </div>
    </div>
  );
}
