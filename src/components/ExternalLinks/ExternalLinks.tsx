import { FaGithubSquare, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "@/components/atoms";

export function ExternalLinks() {
  return (
    <div className="w-full md:w-auto flex md:flex-col items-end justify-around md:justify-end gap-4">
      <Link
        href="https://www.linkedin.com/in/alec-downing"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin className="w-12 h-12 mt-[3px] text-brand-400/90 hover:scale-105 active:text-brand-400 transition-all" />
      </Link>

      <Link
        href="https://www.github.com/a-down"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithubSquare className="w-12 h-12 mt-[3px]  text-brand-400/90 hover:scale-105 active:text-brand-400 transition-all" />
      </Link>

      <Link href="mailto:alec@alecdowning.com">
        <FaEnvelope className="w-11 h-12 mr-[3px] text-brand-400/90" />
      </Link>
    </div>
  );
}
