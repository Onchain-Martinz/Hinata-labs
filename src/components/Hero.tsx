"use client";

import { motion } from "framer-motion";

const ease = "easeOut" as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease, delay },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-20">
      {/* Very faint ambient — intentionally barely visible */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 38%, rgba(124,92,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full text-center pt-16">
        <motion.p
          {...fadeUp(0.1)}
          className="text-xs uppercase tracking-[0.22em] text-white/25 mb-8 font-medium"
        >
          Web3 Product &amp; Growth Studio
        </motion.p>

        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.08] mb-8"
        >
          Building tools that drive
          <br />
          real growth in Web3
        </motion.h1>

        <motion.p
          {...fadeUp(0.35)}
          className="text-base md:text-lg text-white/45 leading-relaxed max-w-xl mx-auto mb-10"
        >
          Hinata Labs is a Web3 product and growth studio. We build software
          tools, drive ecosystem growth, and form strategic partnerships that
          help projects scale.
        </motion.p>

        <motion.div
          {...fadeUp(0.5)}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5"
        >
          <a
            href="mailto:HinataLabsAI@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-white text-[#0B0B0F] text-sm font-semibold rounded-full hover:bg-white/90 transition-colors duration-200"
          >
            Work With Us
          </a>
          <a
            href="#featured"
            className="inline-flex items-center px-6 py-3 border border-white/12 text-white/70 text-sm font-medium rounded-full hover:border-[#7C5CFF]/50 hover:text-[#7C5CFF] transition-all duration-200"
          >
            View Projects
          </a>
        </motion.div>

        <motion.p
          {...fadeUp(0.6)}
          className="text-xs text-white/30"
        >
          or reach out on X →{" "}
          <a
            href="https://x.com/hinatalabsai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-[#7C5CFF] underline underline-offset-2 transition-colors duration-200"
          >
            @HinataLabsAI
          </a>
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-10 bg-gradient-to-b from-white/0 to-white/12" />
      </motion.div>
    </section>
  );
}
