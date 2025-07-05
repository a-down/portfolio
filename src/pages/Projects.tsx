import { Header, FullProject, projects, Footer } from "../components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

/**
 *
 * @returns {Element}
 */
export function Projects() {
  const { projectSlug } = useParams();

  useEffect(() => {
    const element = projectSlug ? document.getElementById(projectSlug) : null;
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }, [projectSlug]);

  return (
    <>
      <div className="bg-slate-100 flex flex-col items-center mx-auto">
        <Header location={"projects"} />
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 lg:px-24">
          <div className="py-12 md:py-16 lg:py-24 w-full">
            <h1 className="w-full text-left text-7xl leading-none font-bold tracking-tight text-brand-900">
              Projects
            </h1>
          </div>

          <div className="w-full mt-0 md:mt-4 lg:mt-12 mb-24">
            {projects.map((project, index) => (
              <FullProject
                project={project}
                key={project.title + index}
                stackArr={project.techStack}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
