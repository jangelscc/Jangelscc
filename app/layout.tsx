import type { Metadata } from "next";
import "./globals.css";

const siteTitle =
  "J Angels Carpet Cleaning | San Diego Carpet Cleaning Service";
const siteDescription =
  "J Angels Carpet Cleaning is a San Diego carpet cleaning service for residential carpet cleaning, upholstery and couch cleaning, move-out carpet refreshes, pet stains, and area rugs.";

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
    "@type": ["LocalBusiness", "CleaningService"],
    name: "J Angels Carpet Cleaning",
    description: siteDescription,
    url: "https://www.jangelscc.com/",
    telephone: "+1-858-663-2079",
    email: "j.angels.cc@gmail.com",
    knowsAbout: [
      "Residential carpet cleaning",
      "Upholstery cleaning",
      "Couch cleaning",
      "Move-out carpet refresh",
      "Pet stain and odor cleaning",
      "Area rug cleaning",
    ],
    areaServed: [
      "San Diego County, CA",
      "San Diego, CA",
      "La Mesa, CA",
      "Chula Vista, CA",
      "El Cajon, CA",
      "Pacific Beach, San Diego, CA",
      "Mira Mesa, San Diego, CA",
      "Mission Valley, San Diego, CA",
      "North Park, San Diego, CA",
    ],
    priceRange: "$$",
    image: "https://www.jangelscc.com/j-angels-logo.png",
    logo: "https://www.jangelscc.com/j-angels-logo.png",
    sameAs: [
      "https://www.yelp.com/biz/j-angel-s-carpet-cleaning-san-diego",
      "https://g.page/r/CfDY5ewbKTjBEAE/review",
    ],
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Carpet cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Move-out rental refresh" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Upholstery and couch cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pet stain and odor cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Area rug cleaning" } },
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
