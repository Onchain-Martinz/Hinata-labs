import FadeIn from "./FadeIn";

const steps = [
  {
    label: "Data → Insight",
    text: "We analyze on-chain behavior and platform activity to uncover what actually drives user engagement.",
  },
  {
    label: "Insight → Strategy",
    text: "We turn insights into clear growth strategies and actionable plans.",
  },
  {
    label: "Strategy → Execution",
    text: "We execute through tools, partnerships, and coordinated growth initiatives.",
  },
];

export default function GrowthProcess() {
  return (
    <section className="py-16 md:py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-white/30 font-medium mb-6">
            Process
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-16">
            How We Help Projects Grow
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step, i) => (
            <FadeIn key={step.label} delay={0.1 + i * 0.1}>
              <div>
                <h3 className="text-base font-semibold text-white tracking-tight mb-4">
                  {step.label}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {step.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
