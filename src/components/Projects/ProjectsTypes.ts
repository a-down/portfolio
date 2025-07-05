import { TechnologyName } from "@/components";

export type Project = {
  slug: string;
  title: string;
  color: string;
  deployedLink?: string;
  repoLink?: string;
  appStoreLink?: string;
  documentationLink?: string;
  description: string;
  description2?: string;
  description3?: string;
  images: { img: string; type: "phone" | "browser" }[];
  techStack: TechnologyName[];
};
