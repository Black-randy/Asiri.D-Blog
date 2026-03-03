import { AtSign } from "lucide-react";
import { SiGithub, SiInstagram, SiX } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";

export const socials = [
  {
    name: "Email",
    href: "mailto:me@asirid.me",
    icon: AtSign,
  },
  {
    name: "GitHub",
    href: "https://github.com/Black-Randy",
    icon: SiGithub,
  },
  {
    name: "X (Twitter)",
    href: "https://twitter.com/Asiri.D",
    icon: SiX,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/Asiri.D",
    icon: SiInstagram,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/asiri-bandara/",
    icon: SlSocialLinkedin,
  },
];

export const pages = {
  personal: [
    { name: "blog", href: "/blog" },
    { name: "about me", href: "/about" },
    { name: "projects", href: "/projects" },
  ],
  explore: [{ name: "home", href: "/" }],
  meta: [
    { name: "rss", href: "/rss.xml" },
    { name: "sitemap", href: "/sitemap.xml" },
  ],
};
