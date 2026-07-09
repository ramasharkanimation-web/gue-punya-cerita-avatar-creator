import type { Metadata } from "next";
import { Fredoka, Space_Grotesk } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fredoka"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk"
});

export const metadata: Metadata = {
  title: "GPC Avatar Maker",
  description: "Bikin profile pic karaktermu — base body, hair, dan clothes."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${fredoka.variable} ${spaceGrotesk.variable} font-body text-ink halftone-bg min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
