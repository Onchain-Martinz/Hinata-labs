import FadeIn from "./FadeIn";

const lines = [
  "We focus on clarity over complexity.",
  "We build tools that solve real problems.",
  "We prioritize execution over noise.",
  "And we work closely with projects to create outcomes that actually matter.",
];

export default function Philosophy() {
  return (
    <section className="py-16 md:py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-white/30 font-medium mb-6">
            Philosophy
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-14">
            How We Work
          </h2>
        </FadeIn>

        <div className="space-y-5 max-w-lg mx-auto">
          {lines.map((line, i) => (
            <FadeIn key={i} delay={0.15 + i * 0.1}>
              <p className="text-base md:text-lg text-white/55 leading-relaxed">
                {line}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
