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
  title: "Tinty — AI Virtual Try-On Mobile App",
  description: "See exactly how any outfit looks on you before buying with the Tinty mobile app. Ultra-realistic AI virtual try-on in seconds.",
  keywords: ["AI virtual try-on app", "fashion app", "clothing try-on", "AI fashion design"],
  openGraph: {
    title: "Tinty — AI Virtual Try-On Mobile App",
    description: "See exactly how any outfit looks on you before buying with the Tinty mobile app. Ultra-realistic AI virtual try-on in seconds.",
    type: "website",
    url: "https://tinty.com",
    siteName: "Tinty",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tinty AI Virtual Try-On App"
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tinty — AI Virtual Try-On Mobile App",
    description: "See exactly how any outfit looks on you before buying with the Tinty mobile app.",
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
        description: 'AI-powered virtual try-on mobile application.',
        url: 'https://tinty.com',
        logo: 'https://tinty.com/logo.png',
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Tinty',
        description: 'AI virtual try-on mobile application.',
        applicationCategory: 'LifestyleApplication',
        operatingSystem: 'iOS, Android',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          description: 'Free trial available'
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          ratingCount: '10000'
        }
      },
      {
        '@type': 'WebSite',
        name: 'Tinty',
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
