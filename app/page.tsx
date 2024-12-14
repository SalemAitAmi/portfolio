"use client";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "/portfolio/components/Hero"
import Navbar from "/portfolio/components/Navbar";
import Projects from "/portfolio/components/Projects";
import Skills from "/portfolio/components/Skills";
import Contact from "/portfolio/components/Contact";
import Footer from "/portfolio/components/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration : 1300,
      offset : 100,
      disable : "mobile",
    });
  }, []);
  return (
    <div className="bg-gray-950">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};
