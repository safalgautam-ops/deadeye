import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./motion.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Safal Gautam — Cybersecurity Enthusiast",
  description:
    "Safal Gautam (deadeye), a cybersecurity enthusiast from Nepal focused on digital forensics and binary exploitation. CTF placings, projects, and certifications.",
};

// Without JS the intro never finishes, so drop it and show the hero logo.
const noScriptStyles =
  "<style>.intro{display:none}html[data-intro=running] [data-logo-target]{visibility:visible}</style>";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} data-intro="running">
      <body>
        <noscript dangerouslySetInnerHTML={{ __html: noScriptStyles }} />
        {children}
      </body>
    </html>
  );
}
