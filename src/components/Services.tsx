import FadeIn from "./FadeIn";

const services = [
  {
    title: "Product & Tool Development",
    text: "We design and build custom tools for Web3 projects, including dashboards, automation systems, and user-focused utilities that enhance platform usage and decision-making.",
  },
  {
    title: "Ecosystem Growth",
    text: "We help projects grow through strategic initiatives, data insights, and structured execution focused on real traction, not vanity metrics.",
  },
  {
    title: "Business Development & Partnerships",
    text: "We connect projects with the right opportunities, forming partnerships that drive long-term ecosystem expansion.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-white/30 font-medium mb-6">
            Services
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-16">
            What We Do
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={0.1 + i * 0.1}>
              <div className="group">
                <div className="w-8 h-px bg-white/20 mb-6 group-hover:bg-[#7C5CFF]/60 transition-colors duration-300" />
                <h3 className="text-base font-semibold text-white tracking-tight mb-4">
                  {service.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {service.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
