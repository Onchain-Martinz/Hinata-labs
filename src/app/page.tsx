import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Team from "@/components/Team";
import Philosophy from "@/components/Philosophy";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedWork />
        <About />
        <Services />
        <Work />
        <Team />
        <Philosophy />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
