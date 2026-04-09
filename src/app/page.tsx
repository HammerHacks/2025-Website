import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import Schedule from "@/components/Schedule";
import Recap from "@/components/Recap";
import Sponsors from "@/components/Sponsors";
import FAQ from "@/components/FAQ";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <StatsBar />
      <About />
      <Schedule />
      <Recap />
      <Sponsors />
      <FAQ />
      <Team />
      <Footer />
    </main>
  );
}