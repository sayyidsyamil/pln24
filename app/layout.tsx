import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/nav-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PLN 2024 - Programming League National",
  description: "Official website for Programming League National (PLN 2024). Get the latest updates, schedules, and news on PLN 2024.",
  keywords: "PLN 2024, Programming League National, PLN24, programming competition, coding event 2024",
  openGraph: {
    title: "PLN 2024 - Programming League National",
    description: "Official website for Programming League National (PLN 2024). Get the latest updates, schedules, and news on PLN 2024.",
    url: "https://pln24.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://pln24.vercel.app/_next/image?url=%2Flogo.png&w=128&q=75",
        width: 128,
        height: 75,
        alt: "PLN 2024 Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Official website for Programming League National (PLN 2024). Get the latest updates, schedules, and news on PLN 2024." />
        <meta name="keywords" content="PLN 2024, Programming League National, PLN24, programming competition, coding event 2024" />
        <meta property="og:title" content="PLN 2024 - Programming League National" />
        <meta property="og:description" content="Official website for Programming League National (PLN 2024). Get the latest updates, schedules, and news on PLN 2024." />
        <meta property="og:url" content="https://pln24.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://pln24.vercel.app/_next/image?url=%2Flogo.png&w=128&q=75" />
        <meta property="og:image:width" content="128" />
        <meta property="og:image:height" content="75" />
        <meta property="og:image:alt" content="PLN 2024 Logo" />
        <link rel="canonical" href="https://pln24.vercel.app/" />
      </head>
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
