import type { Metadata } from "next";
import { Nunito, Baloo_2 } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

const baloo2 = Baloo_2({
  weight: ["700", "800"],
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "HammerHacks II",
  description:
    "Hamilton's largest high school hackathon. Build. Break. Bloom. May 23 at McMaster University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${baloo2.variable} ${nunito.className} antialiased`}
        style={{ color: "var(--foreground)" }}
      >
        {children}
      </body>
    </html>
  );
}
