import FadeIn from "./FadeIn";

const members = [
  {
    name: "Martinz",
    role: "Software & Product",
    bio: [
      "Web3 builder and operator focused on developing tools and managing product execution.",
      "Experienced in project management, business development, and building data-driven systems for on-chain applications.",
    ],
  },
  {
    name: "Simon",
    role: "Growth & Partnerships",
    bio: [
      "Business development and partnerships lead with experience in Web3 growth and marketing.",
      "Previously contributed to growth and positioning at Dinari Global and Flytrade, and now focused on driving ecosystem expansion through strategic partnerships, campaigns, and high-signal positioning.",
    ],
  },
];

export default function Team() {
  return (
    <section id="team" className="py-16 md:py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-white/30 font-medium mb-6">
            Team
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-16">
            The Team
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {members.map((member, i) => (
            <FadeIn key={member.name} delay={0.1 + i * 0.12}>
              <div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white tracking-tight mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.15em] text-[#7C5CFF]/80 font-medium">
                    {member.role}
                  </p>
                </div>
                <div className="space-y-3">
                  {member.bio.map((p, j) => (
                    <p key={j} className="text-sm text-white/50 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
