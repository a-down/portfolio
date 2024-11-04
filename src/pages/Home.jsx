import { About, Contact, Header, Hero, ProjectsSection } from "../components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Footer } from "@/components";

export default function Home() {
  const { section } = useParams();
  useEffect(() => {
    const element = document.getElementById(section);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }, []);

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
