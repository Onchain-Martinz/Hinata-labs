import FadeIn from "./FadeIn";

const services = [
  {
    title: "Product & Tool Development",
    text: "We design and build high-impact tools for Web3 ecosystems, including analytics dashboards, automation systems, and trader-focused utilities.",
  },
  {
    title: "Growth & Ecosystem Strategy",
    text: "We help projects grow through structured execution, data-driven insights, and user-focused strategies that drive real traction.",
  },
  {
    title: "Business Development & Partnerships",
    text: "We identify and execute high-value partnerships that expand ecosystems, improve distribution, and unlock new opportunities.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-20 px-6 md:px-20">
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
              <div>
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
