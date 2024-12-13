"use client";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
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
