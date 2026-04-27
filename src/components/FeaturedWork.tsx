import FadeIn from "./FadeIn";

export default function FeaturedWork() {
  return (
    <section id="featured" className="py-16 md:py-20 px-6 md:px-20 border-t border-white/8">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-sm text-white/40 mb-10 font-medium">
            Selected Work
          </p>
        </FadeIn>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-xl">
            <FadeIn delay={0.1}>
              <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4">
                Limitless Analytics Dashboard
              </h3>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-sm md:text-base text-white/45 leading-relaxed">
                A data-driven analytics dashboard designed to track user
                behavior, incentives, and trading activity across the
                Limitless ecosystem.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.25}>
            <a
              href="https://limitlessdashboard.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-[#7C5CFF] transition-colors duration-200"
            >
              View Live
              <svg
                width="11"
                height="11"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
