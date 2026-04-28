import FadeIn from "./FadeIn";

const items = [
  {
    title: "Limitless Analytics Dashboard",
    description:
      "A data-driven analytics dashboard for tracking user behavior and incentives.",
    link: { label: "View Live →", href: "https://limitlessdashboard.netlify.app/" },
  },
  {
    title: "Onchain-Fi vs InfoFi",
    description:
      "Exploring the shift toward information-driven financial systems on-chain.",
    link: {
      label: "Read Article →",
      href: "https://thisissimon.substack.com/p/onchain-fi-vs-infofi",
    },
  },
  {
    title: "Growth & Positioning Design",
    description:
      "Visual and strategic work focused on positioning Web3 projects and communicating value clearly.",
    link: {
      label: "View Work →",
      href: "https://www.canva.com/design/DAGpqIaQPRg/UJiyuEvDEzRcXcYGwqDa1A/edit",
    },
  },
  {
    title: "Bloxwap",
    description:
      "Led operations and growth initiatives for a Web3 trading platform.",
    link: null,
  },
  {
    title: "Automation & Trading Tools",
    description:
      "Built automation systems leveraging on-chain data for trading insights.",
    link: null,
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="py-16 md:py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-white/30 font-medium mb-6">
            Work &amp; Strategy
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-16">
            Work &amp; Strategy
          </h2>
        </FadeIn>

        <div className="max-w-2xl space-y-12">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={0.1 + i * 0.08}>
              <div>
                <h3 className="text-base font-semibold text-white tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed mb-3">
                  {item.description}
                </p>
                {item.link && (
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-white/35 hover:text-[#7C5CFF] transition-colors duration-200"
                  >
                    {item.link.label}
                  </a>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
