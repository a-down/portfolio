import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { Contact, Header, ProjectsSection, Footer } from "@/components";
import { Hero, About } from "./sections";

export function Home() {
  const { section } = useParams();
  useEffect(() => {
    const element = section ? document.getElementById(section) : null;
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }, [section]);

  return (
    <div className="bg-slate-100">
      <Header location={"home"} />
      <Hero />
      <About />
      <ProjectsSection />
      <Contact />
      <Footer />
    </div>
  );
}
