import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import AboutUs from "../AboutUs";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <AboutUs />
      <Footer />
    </>
  );
}

export default Home;
