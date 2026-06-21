// src/lib/socialLinks.ts
import {
  RiFacebookCircleFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiYoutubeFill,
} from "@remixicon/react";
import type { RemixiconComponentType } from "@remixicon/react";

export interface SocialLink {
  href: string;
  label: string;
  icon: RemixiconComponentType;
}

export const socialLinks: SocialLink[] = [
  {
    href: "https://www.facebook.com/designs.by.eyad",
    label: "Facebook",
    icon: RiFacebookCircleFill,
  },
  {
    href: "https://www.instagram.com/designs.by.eyad",
    label: "Instagram",
    icon: RiInstagramLine,
  },
  {
    href: "https://www.linkedin.com/company/designsbyeyad",
    label: "LinkedIn",
    icon: RiLinkedinFill,
  },
  {
    href: "https://www.youtube.com/@designsbyeyad",
    label: "YouTube",
    icon: RiYoutubeFill,
  },
];
