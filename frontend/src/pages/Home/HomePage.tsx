import HeroSection from "../../components/ui/Hero/HeroSection"
import InfoSection from "../../components/ui/Info/InfoSection"
import "./HomePage.module.scss"
import AboutSection from "../../components/ui/About/AboutSection"
import OurProductsSection from "../../components/ui/OurProductsSection/OurProductsSection"
import Footer from "../../components/layout/Footer/Footer";

function HomePage() {
  return (
    <div className="p-0">
      <HeroSection />
      <InfoSection />
      <AboutSection />
      <OurProductsSection />
      <Footer />
    </div>
  );
}

export default HomePage