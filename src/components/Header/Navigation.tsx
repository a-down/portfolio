import resume from "@/assets/alec-downing-resume.pdf";
import { Location } from "./HeaderTypes";
import { Link } from "@/components/atoms";

type NavigationProps = {
  location: Location;
};

export function Navigation({ location }: NavigationProps) {
  return (
    <nav className=" text-base flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-6 text-brand-400">
      <Link href="/" color={location === "home" ? "#2E459F" : "#699EE8"}>
        Home
      </Link>
      <Link href="/about" color="#699EE8">
        About
      </Link>
      <Link
        href="/projects"
        color={location === "projects" ? "#2E459F" : "#699EE8"}
      >
        Projects
      </Link>
      <Link href="/contact" color="#699EE8">
        Contact
      </Link>
      <Link
        href={resume}
        download="alec-downing-resume"
        color="#2E459F"
        variant="button-outline"
      >
        Resume
      </Link>
    </nav>
  );
}
