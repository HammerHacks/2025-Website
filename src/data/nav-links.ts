export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  // { label: "Schedule", href: "#schedule" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "FAQ", href: "#faq" },
  { label: "Team", href: "#team" },
];

export const DONATE_URL =
  "https://hcb.hackclub.com/donations/start/hammerhacks";

export const REGISTER_URL =
  "https://hammerhacks.fillout.com/participant";
