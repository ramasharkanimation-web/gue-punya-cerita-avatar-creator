import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk"
});

export const metadata: Metadata = {
  title: "Gue Punya Cerita Avatar Creator",
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
        className={`${spaceGrotesk.variable} font-body text-ink halftone-bg min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
