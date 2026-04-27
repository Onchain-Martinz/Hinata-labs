import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 px-6 md:px-20 border-t border-white/8">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-white/30 font-medium mb-8">
            Contact
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="space-y-2">
            <a
              href="mailto:HinataLabsAI@gmail.com"
              className="block text-sm text-white/55 hover:text-white transition-colors duration-200"
            >
              HinataLabsAI@gmail.com
            </a>
            <a
              href="https://x.com/hinatalabsai"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-white/55 hover:text-[#7C5CFF] transition-colors duration-200"
            >
              @HinataLabsAI
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
