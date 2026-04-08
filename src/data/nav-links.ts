export interface NavLink {
  label: string;
  href: string;
}

// TODO: Add schedule back once schedule is confirmed
export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  // { label: "Schedule", href: "#schedule" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "FAQ", href: "#faq-section" },
  { label: "Team", href: "#team-section" },
];

export const DONATE_URL =
  "https://hcb.hackclub.com/donations/start/hammerhacks";

export const REGISTER_URL =
  "https://hcb.hackclub.com/donations/start/hammerhacks";
