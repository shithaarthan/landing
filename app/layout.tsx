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
  metadataBase: new URL("https://tinty.fashion"),
  alternates: {
    canonical: "https://tinty.fashion/",
  },
  title: {
    default: "Tinty",
    template: "%s | Tinty",
  },
  description: "Tinty is an AI virtual try-on app that helps shoppers preview outfits before they buy.",
  openGraph: {
    type: "website",
    siteName: "Tinty Virtual Dressing Room",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "User trying on clothes virtually using Tinty AI App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
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
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Tinty",
        description: "AI virtual try-on technology company reducing fashion returns.",
        url: "https://tinty.fashion",
        logo: "https://tinty.fashion/logo.png",
      },
      {
        "@type": "SoftwareApplication",
        name: "Tinty JS AI Fashion App",
        description: "AI fashion technology application for virtual clothing try-on.",
        applicationCategory: "LifestyleApplication",
        operatingSystem: "iOS, Android",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description: "Free to download",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          ratingCount: "10000",
        },
      },
      {
        "@type": "WebSite",
        name: "Tinty AI Virtual Try-On",
        url: "https://tinty.fashion",
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
      <body className={`${inter.variable} ${playfairDisplay.variable} antialiased`}>
        <HydrationLoader>{children}</HydrationLoader>
      </body>
    </html>
  );
}
