import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { Poiret_One } from "next/font/google"; // Correct import name
import "./globals.css";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-lato",
});

const poiretOne = Poiret_One({
  weight: "400", 
  subsets: ["latin"],
  variable: "--font-poiret-one",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${poiretOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
