import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";

import { websiteSchema, organizationSchema } from "@/lib/structured-data";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";

const siteUrl = "https://college-survival-guide-plum.vercel.app";
const measurementId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "College Survival Guide for Students",
    template: "%s | College Survival Guide",
  },

  description:
    "Practical guides, student tools and useful advice for academics, careers, money, productivity and everyday college life.",

  verification: {
    google: "bkX5kM1rYm2L_9P12IDDzSKU_DWeLq_Vpi-DeFXueTs",
  },

  keywords: [
    "college survival guide",
    "college student guide",
    "student resources",
    "college tips",
    "college life",
    "college students",
    "student productivity",
    "student budgeting",
    "college internships",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "College Survival Guide | Practical Guides for Students",
    description:
      "Practical guides, student tools and useful advice for college students.",
    url: siteUrl,
    siteName: "College Survival Guide",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "College Survival Guide | Practical Guides for Students",
    description:
      "Practical guides, student tools and useful advice for college students.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const website = websiteSchema();
  const organization = organizationSchema();

  return (
    <html lang="en">
      <body>
        {measurementId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
              strategy="afterInteractive"
            />

            <Script id="google-analytics-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                window.gtag = function() {
                  window.dataLayer.push(arguments);
                };
                window.gtag('js', new Date());
                window.gtag('config', '${measurementId}');
              `}
            </Script>
          </>
        )}

        <Navbar />
        <Breadcrumbs />

        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(website),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organization),
          }}
        />
      </body>
    </html>
  );
}