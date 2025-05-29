import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Sobre from "./components/Sobre";
import Servicos from "./components/Serviços";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

function LandingPage() {
  return (
    <div>
      <Header isLandingPage={true} /> {}
      <HeroSection id="inicio" /> {}
      <Sobre id="sobre" />
      <Servicos id="servicos" />
      <Contato id="contato" /> {}
      <Footer />
    </div>
  );
}

export default LandingPage;
