"use client";

import React from "react";

interface TechLogo {
  name: string;
  icon: React.ReactNode;
}

const TECH_LOGOS: TechLogo[] = [
  {
    name: "WHMCS",
    icon: (
      <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 4h4v16H3V4zm7 6h4v10h-4V10zm7-3h4v13h-4V7z" />
      </svg>
    ),
  },
  {
    name: "JetBackup",
    icon: (
      <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2zm0 2.3L5 8.3v7.4l7 4 7-4V8.3l-7-4zm0 3.7l4.5 2.6v5.2L12 18.4l-4.5-2.6v-5.2L12 8z" />
      </svg>
    ),
  },
  {
    name: "MySQL",
    icon: (
      <svg className="w-4 h-4 text-[#00E4B8]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4 21l3.5-.94C8.94 20.62 10.42 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
      </svg>
    ),
  },
  {
    name: "MariaDB",
    icon: (
      <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
      </svg>
    ),
  },
  {
    name: "Nginx",
    icon: (
      <svg className="w-4 h-4 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7.7v8.6L12 22l10-5.7V7.7L12 2zm4.3 13.5l-5.6-7.8v7.8H8.5V8.5h2.2l5.6 7.8V8.5h2.2v7z" />
      </svg>
    ),
  },
  {
    name: "Apache",
    icon: (
      <svg className="w-4 h-4 text-rose-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2c1.1 0 2 .9 2 2v6.5l3.5-3.5 1.4 1.4L14 13.3V20c0 1.1-.9 2-2 2s-2-.9-2-2v-6.7l-4.9-4.9 1.4-1.4L10 10.5V4c0-1.1.9-2 2-2z" />
      </svg>
    ),
  },
  {
    name: "Linux",
    icon: (
      <svg className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a4 4 0 0 0-4 4c0 1.5.8 2.8 2 3.5-.7 1.2-1 2.6-1 4.5 0 2.2.8 4 2 5v1a1 1 0 0 0 2 0v-1c1.2-1 2-2.8 2-5 0-1.9-.3-3.3-1-4.5 1.2-.7 2-2 2-3.5a4 4 0 0 0-4-4zm-1.5 4a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z" />
      </svg>
    ),
  },
  {
    name: "cPanel",
    icon: (
      <svg className="w-4 h-4 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6zm0-8h-6V7h6v2z" />
      </svg>
    ),
  },
  {
    name: "Imunify360",
    icon: (
      <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 16l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z" />
      </svg>
    ),
  },
  {
    name: "Cloudflare",
    icon: (
      <svg className="w-4 h-4 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
      </svg>
    ),
  },
  {
    name: "LiteSpeed",
    icon: (
      <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11 21h-1l1-7H7.5c-.88 0-.33-.75-.31-.78C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .88.4.67.92-.7 1.63-2.67 6.08-6.17 10.08z" />
      </svg>
    ),
  },
  {
    name: "Softaculous",
    icon: (
      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.5s-4 4-4 8.5c0 2.2 1.8 4 4 4s4-1.8 4-4c0-4.5-4-8.5-4-8.5zm-5 13.5c-1.1 0-2 .9-2 2s.9 2 2 2h10c1.1 0 2-.9 2-2s-.9-2-2-2H7z" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l8.5 4.9v9.8L12 21.6l-8.5-4.9V6.9L12 2zm0 2.3L5.5 8.1v7.8L12 19.3l6.5-3.4V8.1L12 4.3z" />
      </svg>
    ),
  },
  {
    name: "Redis",
    icon: (
      <svg className="w-4 h-4 text-rose-600" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8L19.2 8 12 11.6 4.8 8 12 4.8z" />
      </svg>
    ),
  },
  {
    name: "WordPress",
    icon: (
      <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.4 16.4L7 8.5h2l2.3 6.9 2.1-6.9h2l-3.6 9.9h-1.2z" />
      </svg>
    ),
  },
  {
    name: "PHP 8.x",
    icon: (
      <svg className="w-4 h-4 text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-4 13h-2V9h3.5c1.4 0 2.5 1.1 2.5 2.5S10.9 14 9.5 14H8v1zm5 0h-2V9h2v6zm4-1c0 .6-.4 1-1 1h-2V9h2c.6 0 1 .4 1 1v4z" />
      </svg>
    ),
  }
];

export default function TechStackGrid() {
  // We duplicate the array 2 times to ensure seamless infinite looping animation
  const duplicatedLogos = [...TECH_LOGOS, ...TECH_LOGOS];

  return (
    <section className="py-10 border-y border-white/[0.04] bg-[#05070B] overflow-hidden relative">
      {/* Subtle Gradient Fade Masks on Left & Right */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#05070B] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#05070B] to-transparent z-10" />

      <div className="w-full">
        {/* Infinite Carousel Container */}
        <div className="flex animate-marquee hover:[animation-play-state:paused] gap-3.5 py-1">
          {duplicatedLogos.map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#0D0F16] border border-white/[0.08] hover:border-white/[0.2] hover:bg-[#12151E] transition-all shrink-0 cursor-default select-none shadow-sm group"
            >
              <div className="shrink-0 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <span className="text-xs font-medium text-white/80 group-hover:text-white transition-colors whitespace-nowrap">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
