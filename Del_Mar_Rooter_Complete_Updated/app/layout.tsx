import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Del Mar Rooter Test Website",
  description: "A modern test website for Del Mar Rooter featuring local service throughout Orange County and 24/7 emergency support.",
  metadataBase: new URL("https://del-mar-plumbing-test.stony-tide-5591.chatgpt.site"),
  openGraph: {
    title: "Del Mar Plumbing",
    description: "Plumbing done right. Every time.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Del Mar Plumbing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Del Mar Plumbing",
    description: "Plumbing done right. Every time.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
