import FadeIn from "./FadeIn";

const items = [
  {
    title: "Onchain-Fi vs InfoFi",
    description:
      "A breakdown of emerging on-chain financial paradigms, exploring the shift from traditional DeFi models to information-driven financial systems.",
    label: "Read Article →",
    href: "https://thisissimon.substack.com/p/onchain-fi-vs-infofi",
    tag: "Writing",
  },
  {
    title: "Growth & Positioning Design",
    description:
      "Visual and strategic work focused on positioning Web3 projects and communicating value clearly to users.",
    label: "View Work →",
    href: "https://www.canva.com/design/DAGpqIaQPRg/UJiyuEvDEzRcXcYGwqDa1A/edit",
    tag: "Design",
  },
];

export default function Insights() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-white/30 font-medium mb-6">
            Insights &amp; Growth
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            Ideas, Strategy &amp; Growth Thinking
          </h2>
        </FadeIn>

        <FadeIn delay={0.18}>
          <p className="text-sm text-white/40 leading-relaxed max-w-xl mb-16">
            Beyond building, we contribute to the ideas and frameworks shaping
            how Web3 projects grow.
          </p>
        </FadeIn>

        <div className="space-y-0">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={0.1 + i * 0.1}>
              <div className="group border-t border-white/8 py-10 md:py-12 flex flex-col md:flex-row md:gap-24">
                <div className="md:w-56 shrink-0 mb-4 md:mb-0 flex items-start">
                  <span className="text-xs text-white/25 font-medium uppercase tracking-[0.15em]">
                    {item.tag}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-white tracking-tight mb-3 group-hover:text-[#7C5CFF] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-5">
                    {item.description}
                  </p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-medium text-white/40 hover:text-[#7C5CFF] transition-colors duration-200 tracking-wide"
                  >
                    {item.label}
                  </a>
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
