import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  weight: "500",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hammer Hacks II",
  description: "Hamilton's High School Hackathon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased text-black`}>
        {children}
      </body>
    </html>
  );
}
