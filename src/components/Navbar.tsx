"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ease = "easeOut" as const;

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Team", href: "#team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0B0B0F]/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-20 flex items-center justify-between h-16">
        <a
          href="#"
          className="flex items-center gap-2.5 hover:opacity-80 transition-opacity duration-200"
        >
          <Image
            src="/logo.svg"
            alt="Hinata Labs"
            width={32}
            height={32}
            className="h-8 w-8 md:h-9 md:w-9 shrink-0"
            priority
          />
          <span className="text-white font-semibold tracking-tight text-base">
            Hinata Labs
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white/60 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <MobileMenu />
      </div>
    </motion.nav>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="text-white/60 hover:text-white transition-colors duration-200 p-1"
        aria-label="Toggle menu"
      >
        <div className="flex flex-col gap-1.5 w-5">
          <span
            className={`block h-px bg-current transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-px bg-current transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px bg-current transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </div>
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease }}
          className="absolute top-16 left-0 right-0 bg-[#0B0B0F]/95 backdrop-blur-md border-b border-white/5 px-6 py-4 flex flex-col gap-4"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-white/60 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </div>
  );
}
