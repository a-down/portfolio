import { About, Contact, Header, Hero, ProjectsSection } from "../components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Footer } from "../components";

/**
 *
 * @returns {Element}
 */
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
