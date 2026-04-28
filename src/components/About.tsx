import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-white/30 font-medium mb-6">
            About
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-12">
            About Hinata Labs
          </h2>
        </FadeIn>

        <div className="max-w-2xl space-y-6">
          <FadeIn delay={0.2}>
            <p className="text-base text-white/55 leading-relaxed">
              Hinata Labs is a small team of experienced Web3 professionals
              focused on building practical tools and growth systems for
              on-chain ecosystems.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-base text-white/55 leading-relaxed">
              We work closely with projects to design and ship software that
              improves user experience, supports data-driven decisions, and
              unlocks new growth opportunities.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-base text-white/55 leading-relaxed">
              Beyond building, we actively contribute to ecosystem expansion
              through business development, partnerships, and strategic
              positioning.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
