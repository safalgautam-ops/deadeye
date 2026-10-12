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

const title = "Safal Gautam — Cybersecurity Enthusiast";
const description =
  "Safal Gautam (deadeye), a cybersecurity enthusiast from Nepal focused on digital forensics and binary exploitation. CTF placings, projects, writeups, and certifications.";
const shareImage = {
  url: "/og.png",
  width: 2400,
  height: 1260,
  alt: "Safal Gautam (deadeye) — Cybersecurity Enthusiast",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.safal-gautam.com.np"),
  title,
  description,
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Safal Gautam",
    title,
    description,
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage],
  },
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
