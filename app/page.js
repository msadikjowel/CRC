import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import Services from "../components/Services";
import ParallaxSection from "../components/ParallaxSection";
import Stats from "../components/Stats";
import TestimonialsSlider from "../components/TestimonialsSlider";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import AboutPreview from "../components/home/AboutPreview";
import Approach from "../components/home/Approach";
import WhyCrc from "../components/home/WhyCrc";
import Sectors from "../components/home/Sectors"
import ResearchImpact from "../components/home/ResearchImpact";
import HomeCTA from "../components/home/HomeCTA";

export default function Home() {
  return (
    <>
      {/* <Topbar />
      <Navbar /> */}
      <HeroSlider />
      <AboutPreview />
      <Services />
      <Approach />
      <WhyCrc />
      <Sectors />
      <ResearchImpact />
      <HomeCTA />
      {/* <ParallaxSection /> */}
      {/* <Stats /> */}
      {/* <TestimonialsSlider /> */}
    </>
  );
}
