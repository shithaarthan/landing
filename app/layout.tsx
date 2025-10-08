import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import HydrationLoader from "./components/HydrationLoader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tinty — AI Stylist: Try outfits on your body",
  description: "Tinty is an AI stylist that lets you preview clothing on your own photo. Upload a full-body photo, try outfits, and save your favorite looks before you buy.",
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://shithaarthan.github.io/landing' : 'http://localhost:3000'),
  openGraph: {
    title: "Tinty — AI Stylist: Try outfits on your body",
    description: "Preview outfits on your photo instantly with AI. Upload, try, save.",
    images: [
      {
        url: "/og-image.jpg", // Need to create or provide
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tinty — AI Stylist",
    description: "Preview outfits on your photo instantly with AI.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'Tinty',
        description: 'AI stylist that lets you preview clothing on your own photo.',
        url: 'https://tinty.com',
        logo: 'https://tinty.com/logo.png',
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Tinty',
        description: 'AI stylist application for outfit preview on your body.',
        applicationCategory: 'LifestyleApplication',
        operatingSystem: 'Web',
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfairDisplay.variable} antialiased`}
      >
        <HydrationLoader>
          {children}
        </HydrationLoader>
      </body>
    </html>
  );
}
