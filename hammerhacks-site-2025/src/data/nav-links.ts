export interface NavLink {
    label: string;
    href: string;
}

export const NAV_LINKS: NavLink[] = [
    { label: "About", href: "#about" },
    { label: "Sponsors", href: "#sponsors" },
    { label: "FAQ", href: "#faq-section" },
    { label: "Team", href: "#team-section" },
];

export const DONATE_URL =
    "https://hcb.hackclub.com/donations/start/hammerhacks";
