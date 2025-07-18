import { useState } from "react";
import { HiOutlineExternalLink } from "react-icons/hi";

import { Link } from "@/components/atoms";
import { Project as ProjectType } from "./ProjectsTypes";

type ProjectProps = {
  project: ProjectType;
};

export function Project({ project }: ProjectProps) {
  const [overlay, setOverlay] = useState(false);

  return (
    <div
      className="block cursor-pointer relative active:scale-[101%] transition-all"
      style={{ backgroundColor: project.color }}
      onMouseEnter={() => setOverlay(true)}
      onMouseLeave={() => setOverlay(false)}
    >
      <div
        onClick={() => (window.location.href = `/projects/${project.slug}`)}
        className="p-4 md:p-0 w-full h-[calc(100dvh-64px)] md:h-auto md:aspect-video bg-slate-50/20 flex justify-center items-center"
      >
        <img
          src={project.images[0].img}
          className={`max-h-[70%] md:h-[80%] drop-shadow-2xl ${overlay ? "scale-[101%]" : ""}`}
        />

        {overlay && (
          <>
            <div
              className="h-full w-full absolute top-0 left-0 opacity-20 flex justify-center items-center"
              style={{ backgroundColor: project.color }}
            ></div>
          </>
        )}
      </div>

      <div
        className="absolute top-0 left-0 w-full md:top-auto md:w-auto md:left-4 md:bottom-4 lg:bottom-12 lg:left-12 p-4 shadow-md md:shadow-none md:rounded-lg text-slate-50"
        style={{ backgroundColor: project.color }}
      >
        <Link href={`/projects/${project.slug}`} color="#EBF2ED">
          <h5 className=" text-2xl md:text-2xl lg:text-4xl font-medium flex w-fit gap-2 items-center hover:scale-105">
            {project.title}
            <HiOutlineExternalLink className="md:hidden" />
          </h5>
        </Link>

        <div className="flex flex-row gap-2 text-slate-50/90">
          {project.repoLink && (
            <>
              <a
                href={project.repoLink}
                className="hover:scale-105 transition-all"
                target="_blank"
                rel="noreferrer"
              >
                Repo
              </a>
              <span className="select-none">/</span>
            </>
          )}
          {project.deployedLink && (
            <>
              <a
                href={project.deployedLink}
                className="hover:scale-105 transition-all"
                target="_blank"
                rel="noreferrer"
              >
                Deployed Site
              </a>
              <span className="select-none">/</span>
            </>
          )}
          <a
            href={`/projects/${project.slug}`}
            className="hover:scale-105 transition-all"
          >
            Full Project Details
          </a>
        </div>
      </div>
    </div>
  );
}
