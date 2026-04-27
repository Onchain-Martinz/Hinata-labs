import FadeIn from "./FadeIn";

export default function CTA() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-20 border-t border-white/8">
      <div className="max-w-6xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-10 leading-tight">
            Have something you&apos;re building?
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <a
            href="mailto:hello@hinatalabs.xyz"
            className="inline-flex items-center px-8 py-4 bg-white text-[#0B0B0F] text-sm font-semibold rounded-full hover:bg-white/90 transition-colors duration-200"
          >
            Let&apos;s Work
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
