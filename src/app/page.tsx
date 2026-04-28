import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import GrowthProcess from "@/components/GrowthProcess";
import SelectedWork from "@/components/SelectedWork";
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
        <About />
        <Services />
        <GrowthProcess />
        <SelectedWork />
        <Team />
        <Philosophy />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
