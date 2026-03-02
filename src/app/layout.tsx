import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "NextGen AIR Academy | AI & Robotics Training in Dayton/Miami Valley",
    template: "%s | NextGen AIR Academy",
  },
  description: "Empowering the Miami Valley workforce with cutting-edge AI and robotics training. Building the future of inclusive technology careers through our 52-week AIR certification program.",
  keywords: ["AI training", "robotics", "Dayton", "Miami Valley", "workforce development", "career training", "AIR curriculum", "technology education", "job training"],
  authors: [{ name: "NextGen AIR Academy" }],
  creator: "NextGen AIR Academy",
  publisher: "NextGen AIR Academy",
  metadataBase: new URL("https://nextgenairacademy.org"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nextgenairacademy.org",
    siteName: "NextGen AIR Academy",
    title: "NextGen AIR Academy | AI & Robotics Training in Dayton/Miami Valley",
    description: "Empowering the Miami Valley workforce with cutting-edge AI and robotics training. Building the future of inclusive technology careers.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NextGen AIR Academy - Building the future of the Miami Valley Workforce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NextGen AIR Academy | AI & Robotics Training",
    description: "Empowering the Miami Valley workforce with cutting-edge AI and robotics training.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <div className="h-[10px] bg-cobalt" />
        <Navbar />
        <main id="main-content" role="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
