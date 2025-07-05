import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { Header, Footer } from "@/components";
import {
  HeroSection,
  AboutSection,
  ContactSection,
  ProjectsSection,
} from "./sections";

export function Home() {
  const { section } = useParams();
  useEffect(() => {
    const element = section ? document.getElementById(section) : null;
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }, [section]);

  return (
    <div className="bg-slate-100">
      <Header location={"home"} />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
