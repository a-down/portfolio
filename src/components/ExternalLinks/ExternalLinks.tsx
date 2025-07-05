import { FaGithubSquare, FaLinkedin, FaEnvelope } from "react-icons/fa";

export function ExternalLinks() {
  return (
    <div className="w-full md:w-auto flex md:flex-col items-end justify-around md:justify-end gap-4">
      <a
        href="https://www.linkedin.com/in/alec-downing"
        target="_blank"
        className=" text-accent"
        rel="noreferrer"
      >
        <FaLinkedin className="w-12 h-12 mt-[3px] text-brand-400/90 hover:scale-105 active:text-brand-400 transition-all" />
      </a>

      <a href="https://www.github.com/a-down" target="_blank" rel="noreferrer">
        <FaGithubSquare className="w-12 h-12 mt-[3px]  text-brand-400/90 hover:scale-105 active:text-brand-400 transition-all" />
      </a>

      <a
        href="mailto:alec@alecdowning.com"
        className="flex items-center gap-4 text-brand-400/90 hover:scale-105 active:text-brand-400 transition-all"
      >
        <FaEnvelope className="w-11 h-12 mr-[3px]" />
      </a>
    </div>
  );
}
