import type { Metadata } from "next";
import "./globals.css";

const siteTitle =
  "J Angels Carpet Cleaning | San Diego Carpet & Upholstery Cleaning";
const siteDescription =
  "Call or text J Angels Carpet Cleaning for residential carpet cleaning, move-out rental refreshes, upholstery cleaning, pet stains, and area rugs in San Diego County.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jangelscc.com"),
  title: siteTitle,
  description: siteDescription,
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "en_US",
    siteName: "J Angels Carpet Cleaning",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "J Angels Carpet Cleaning in San Diego",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "J Angels Carpet Cleaning",
    url: "https://www.jangelscc.com/",
    telephone: "+1-858-663-2079",
    email: "j.angels.cc@gmail.com",
    areaServed: "San Diego County, CA",
    priceRange: "$$",
    image: "https://www.jangelscc.com/",
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Carpet cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Move-out rental refresh" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Upholstery and couch cleaning" } },
    ],
  };

  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}
