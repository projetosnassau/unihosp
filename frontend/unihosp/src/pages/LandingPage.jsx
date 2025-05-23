import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Sobre from "./components/Sobre";
import Serviços from "./components/Serviços";
import Footer from "./components/Footer";

function LandingPage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Sobre />
      <Serviços />
      <Footer />
    </div>
  );
}

export default LandingPage;
