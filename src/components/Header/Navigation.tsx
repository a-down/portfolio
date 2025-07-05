import resume from "@/assets/alec-downing-resume.pdf";
import { Location } from "./HeaderTypes";

type NavigationProps = {
  location: Location;
};

export function Navigation({ location }: NavigationProps) {
  return (
    <nav className=" text-base flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-6 text-brand-400">
      <a
        href="/"
        className="hover:scale-105 transition-all active:scale-[102%]"
        style={{ color: location === "home" ? "#2E459F" : "#699EE8" }}
      >
        Home
      </a>
      <a
        href="/about"
        className=" hover:scale-105 transition-all active:scale-[102%]"
      >
        About
      </a>
      <a
        href="/projects"
        className=" hover:scale-105 transition-all active:scale-[102%]"
        style={{ color: location === "projects" ? "#2E459F" : "#699EE8" }}
      >
        Projects
      </a>
      <a
        href="/contact"
        className=" hover:scale-105 transition-all active:scale-[102%]"
      >
        Contact
      </a>

      <a
        href={resume}
        download="alec-downing-resume"
        className="bg-brand-400/80 py-2 px-4 rounded-md text-slate-50 hover:scale-105 active:scale-[102%] transition-all w-full md:w-auto text-center"
      >
        Resume
      </a>
    </nav>
  );
}
