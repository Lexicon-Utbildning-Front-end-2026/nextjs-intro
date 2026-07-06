import type { Metadata } from "next";
import { Outfit, Rubik } from "next/font/google";
import localFont from "next/font/local"
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const materialSymbols = localFont({
 src:"./fonts/MaterialSymbolsRounded.woff2",
 weight: "100 900",
 variable: "--font-material-symbols"
})

export const metadata: Metadata = {
  title: "Welcome to Planet Express Academy",
  description: "Master the art of intergalactic delivery, advanced propulsion physics, and avoiding Zapp Brannigan's tactical incompetence. Your journey to the 31st century starts here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${rubik.variable} ${materialSymbols.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
