import Project from "./Project";
import { projects } from "./ProjectDescriptions";
import { HiArrowRight } from "react-icons/hi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

/**
 *
 * @returns {Element}
 */
export default function ProjectSection() {
  return (
    <div
      className="bg-slate-100 w-full md:py-12 lg:mt-24 lg:pb-36 flex justify-center items-center "
      id="projects"
    >
      <div className="max-w-[1400px] md:px-12 lg:px-24 w-full">
        <span className="hidden md:flex justify-between items-end mb-4 md:mb-8 lg:mb-12">
          <h3 className=" md:text-4xl lg:text-6xl text-brand-950 font-semibold">
            My Projects
          </h3>
          <a
            href="/projects"
            className=" text-xl lg:text-2xl text-brand-400/80 hover:scale-105 transition-all flex gap-2 items-center font-thin"
          >
            View All
            <HiArrowRight />
          </a>
        </span>
        <Carousel className="w-full h-[calc(100dvh-64px)] md:h-auto md:aspect-video shadow-xl">
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index}>
                <Project
                  project={project}
                  key={project.title}
                  stackArr={project.techStack}
                  isDark={true}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
