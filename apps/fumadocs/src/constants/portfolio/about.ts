import { Mail } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiBun,
  SiDiscord,
  SiDrizzle,
  SiFigma,
  SiHono,
  SiNotion,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export interface InfoCard {
  icon: IconType;
  link: string;
  name: string;
}

export const techStacks: InfoCard[] = [
  {
    name: "Bun",
    icon: SiBun,
    link: "https://bun.sh/",
  },
  {
    name: "Typescript",
    icon: SiTypescript,
    link: "https://www.typescriptlang.org",
  },
  {
    name: "Drizzle ORM",
    icon: SiDrizzle,
    link: "https://orm.drizzle.team/",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    link: "https://www.postgresql.org/",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    link: "https://tailwindcss.com",
  },
  {
    name: "Hono",
    icon: SiHono,
    link: "https://hono.dev",
  },
  {
    name: "Notion",
    icon: SiNotion,
    link: "https://www.notion.com",
  },
  {
    name: "Figma",
    icon: SiFigma,
    link: "https://www.figma.com",
  },
];

export const contacts: (InfoCard & { contact: string })[] = [
  {
    name: "email",
    contact: "me@hexagonn.my.id",
    icon: Mail,
    link: "mailto:me@hexagonn.my.id",
  },
  {
    name: "discord",
    contact: "@black-randy",
    icon: SiDiscord,
    link: "https://discord.com/users/12345678901234567890",
  },
];
