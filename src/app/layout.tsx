import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hinata Labs — Web3 Product & Growth Studio",
  description:
    "Hinata Labs is a Web3 product and growth studio focused on building software tools, enabling partnerships, and helping ecosystems scale with clarity and efficiency.",
  keywords: ["Web3", "DeFi", "blockchain", "product studio", "growth", "partnerships"],
  openGraph: {
    title: "Hinata Labs",
    description: "Building tools that drive real growth in Web3",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full bg-[#0B0B0F] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
