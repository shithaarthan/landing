import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import HydrationLoader from "./components/HydrationLoader";
import Providers from "./components/Providers";

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
  title: "Tinty AI Virtual Try-On App | See Clothes On You Instantly",
  description: "Try clothes on virtually with the Tinty AI virtual try-on app. See exactly how outfits look on you before buying. Reduce fashion returns with our realistic virtual dressing room.",
  keywords: ["AI virtual try-on app", "virtual dressing room", "try clothes on virtually", "AI fashion technology", "see how clothes look on me", "best app to try on clothes before buying", "AI clothing try-on for online shopping", "reduce fashion returns with AI"],
  openGraph: {
    title: "Tinty AI Virtual Try-On App | See Clothes On You Instantly",
    description: "Try clothes on virtually with the Tinty AI virtual try-on app. See exactly how outfits look on you before buying. Reduce fashion returns with our realistic virtual dressing room.",
    type: "website",
    url: "https://tinty.com",
    siteName: "Tinty Virtual Dressing Room",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "User trying on clothes virtually using Tinty AI App"
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tinty AI Virtual Try-On App | See Clothes On You Instantly",
    description: "Try clothes on virtually with the Tinty AI virtual try-on app. See exactly how outfits look on you before buying.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
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
        description: 'AI virtual try-on technology company reducing fashion returns.',
        url: 'https://tinty.com',
        logo: 'https://tinty.com/logo.png',
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Tinty JS AI Fashion App',
        description: 'AI fashion technology application for virtual clothing try-on.',
        applicationCategory: 'LifestyleApplication',
        operatingSystem: 'iOS, Android',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          description: 'Free to download'
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          ratingCount: '10000'
        }
      },
      {
        '@type': 'WebSite',
        name: 'Tinty AI Virtual Try-On',
        url: 'https://tinty.com',
      }
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
        <Providers>
          <HydrationLoader>
            {children}
          </HydrationLoader>
        </Providers>
      </body>
    </html>
  );
}
