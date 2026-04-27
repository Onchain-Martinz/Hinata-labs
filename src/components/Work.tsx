import FadeIn from "./FadeIn";

const items = [
  {
    title: "Limitless Analytics Dashboard",
    paragraphs: [
      "Designed and developed a full analytics dashboard to track user behavior, incentives, and volume patterns.",
      "Revealed key insights about incentive-driven activity and built a data foundation for further automation and strategy.",
    ],
  },
  {
    title: "Automation & Trading Tools",
    paragraphs: [
      "Built and tested automation systems leveraging on-chain data to generate consistent trading opportunities and insights.",
    ],
  },
  {
    title: "Bloxwap",
    paragraphs: [
      "Led operations, growth initiatives, and ecosystem coordination for a Web3 trading platform, gaining deep experience in user acquisition and product delivery.",
    ],
  },
  {
    title: "Growth & Marketing",
    paragraphs: [
      "Contributed to marketing and growth strategies across DeFi and RWA platforms, focusing on positioning, campaigns, and user engagement.",
    ],
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-white/30 font-medium mb-6">
            Work
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-16">
            Selected Work &amp; Experience
          </h2>
        </FadeIn>

        <div className="space-y-0">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={0.1 + i * 0.08}>
              <div className="group border-t border-white/8 py-10 md:py-12 flex flex-col md:flex-row md:gap-24">
                <div className="md:w-56 shrink-0 mb-4 md:mb-0">
                  <span className="text-xs text-white/25 font-medium tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-white tracking-tight mb-4 group-hover:text-[#7C5CFF] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <div className="space-y-3">
                    {item.paragraphs.map((p, j) => (
                      <p key={j} className="text-sm text-white/50 leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
          <div className="border-t border-white/8" />
        </div>
      </div>
    </section>
  );
}
