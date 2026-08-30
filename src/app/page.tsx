import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturedWork from "@/components/FeaturedWork";
import HowItWorks from "@/components/HowItWorks";
import ComparisonTable from "@/components/ComparisonTable";
import Timeline from "@/components/Timeline";
import BuiltFor from "@/components/BuiltFor";
import Promise from "@/components/Promise";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="main-wrapper" id="top">
        <Hero />
        <LogoStrip />
        {/* <ProblemSection /> */}
        <ServicesSection />
        <FeaturedWork />
        <HowItWorks />
        {/* <ComparisonTable /> */}
        {/* <Timeline /> */}
        <BuiltFor />
        <Promise />
        {/* <Stats /> */}
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
