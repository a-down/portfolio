import { useEffect, useState } from "react";
import { HiOutlineExternalLink, HiOutlineMail } from "react-icons/hi";

import { Link } from "@/components/atoms";
import { StackDisplay, TechnologyName } from "./StackDisplay";
import { projectDescriptions } from "../components";

/**
 *
 * @returns {Element}
 */
export function Footer() {
  const [projectsArr, setProjectsArr] = useState<
    { name: string; link: string }[]
  >([]);

  const footerStack: TechnologyName[] = [
    "React",
    "Tailwind",
    "TypeScript",
    "Vite",
    "Vercel",
  ];

  const linksLinks = {
    title: "Links",
    links: [
      { name: "Home", link: "/" },
      { name: "About", link: "/about" },
      { name: "Projects", link: "/projects" },
      {
        name: "GitHub",
        link: "https://github.com/a-down",
        isExternal: true,
        icon: <HiOutlineExternalLink />,
      },
    ],
  };

  const contactLinks = {
    title: "Contact",
    links: [
      { name: "Form", link: "/contact" },
      {
        name: "Email",
        link: "mailto:alec@alecdowning.com",
        icon: <HiOutlineMail />,
      },
      {
        name: "LinkedIn",
        link: "https://linkedin.com/in/alec-downing/",
        isExternal: true,
        icon: <HiOutlineExternalLink />,
      },
    ],
  };

  let projectsLinks = {
    title: "Projects",
    links: projectsArr,
  };

  useEffect(() => {
    let projectsForState: { name: string; link: string }[] = [];
    projectDescriptions.forEach((project) => {
      projectsForState.push({
        name: project.title,
        link: `/projects/${project.slug}`,
      });
    });
    setProjectsArr(projectsForState);
  }, []);

  const LinkColumn = ({
    column,
  }: {
    column: {
      title: string;
      links: {
        name: string;
        link: string;
        isExternal?: boolean;
        icon?: React.ReactNode;
      }[];
    };
  }) => {
    return (
      <div className="flex flex-col gap-2">
        <h5 className="text-brand-200 font-semibold">{column.title}</h5>
        {column.links.map((link, index) => {
          return (
            <Link
              href={link.link}
              target={link.isExternal ? "_blank" : undefined}
              key={index + link.name}
              rel="noreferrer"
              color="#DFEAFA"
              aria-label={link.name}
            >
              <span className="flex gap-1 items-center">
                {link.name}
                {link.icon}
              </span>
            </Link>
          );
        })}
      </div>
    );
  };

  return (
    <footer className=" bg-brand-950 w-full py-12 flex flex-col lg:flex-row justify-center font-thin">
      <div className="w-full max-w-[1400px] px-4 md:px-12 lg:px-24 flex flex-wrap md:flex-row gap-12 gap-y-16 flex-shrink-0">
        <LinkColumn column={linksLinks} />
        <LinkColumn column={contactLinks} />
        <LinkColumn column={projectsLinks} />
        <div className="flex flex-col lg:ml-auto justify-start items-center lg:items-end gap-2">
          <h5 className="text-slate-300 w-full text-left lg:text-center">
            alecdowning.com is built with
          </h5>
          <StackDisplay
            stackArr={footerStack}
            isDark={false}
            centered={false}
          />
        </div>
      </div>
    </footer>
  );
}
