"use client";

import { useEffect, useState } from "react";

const scenes = [
  {
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1800&q=90",
    label: "LANDSCAPES & OPEN COUNTRY",
    alt: "Wide African landscape"
  },
  {
    image: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=1800&q=90",
    label: "CITIES & EVERYDAY LIFE",
    alt: "Urban scene in Africa"
  },
  {
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1800&q=90",
    label: "URBAN AFRICA",
    alt: "African cityscape"
  },
  {
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1800&q=90",
    label: "WILDLIFE & WILDERNESS",
    alt: "African wildlife in its natural setting"
  },
  {
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=90",
    label: "WORK & ENTERPRISE",
    alt: "People collaborating at work"
  },
  {
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1800&q=90",
    label: "ART & CULTURE",
    alt: "Contemporary art and cultural event"
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
