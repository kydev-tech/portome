import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Galang Rizky Arridho - Web Developer & Operations Specialist Portfolio",
  description: "Professional portfolio of Galang Rizky Arridho. Experienced Web Developer specializing in Next.js, Laravel, PHP, and TypeScript. Also skilled in operations management, warehouse management, and laser machine operations.",
  keywords: [
    "Galang Rizky Arridho",
    "Web Developer",
    "Full Stack Developer",
    "Next.js Developer",
    "Laravel Developer",
    "PHP Developer",
    "TypeScript Developer",
    "Portfolio",
    "Jakarta Developer",
    "Warehouse Management",
    "Operations Management",
    "Purchasing Staff",
    "Laser Machine Operator",
    "Frontend Developer",
    "Backend Developer"
  ],
  authors: [{ name: "Galang Rizky Arridho" }],
  creator: "Galang Rizky Arridho",
  publisher: "Galang Rizky Arridho",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: ["en_US", "ja_JP"],
    url: "https://yourwebsite.com",
    title: "Galang Rizky Arridho - Web Developer & Operations Specialist",
    description: "Professional portfolio showcasing web development projects and operational expertise in Jakarta, Indonesia.",
    siteName: "Galang Rizky Arridho Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Galang Rizky Arridho Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galang Rizky Arridho - Web Developer & Operations Specialist",
    description: "Professional portfolio showcasing web development projects and operational expertise.",
    images: ["/og-image.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://yourwebsite.com",
    languages: {
      'id-ID': 'https://yourwebsite.com',
      'en-US': 'https://yourwebsite.com/en',
      'ja-JP': 'https://yourwebsite.com/ja',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="color-scheme" content="light dark" />
        <link rel="canonical" href="https://yourwebsite.com" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Galang Rizky Arridho",
              "url": "https://yourwebsite.com",
              "image": "https://yourwebsite.com/profile.jpg",
              "jobTitle": "Web Developer & Operations Specialist",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jakarta Timur",
                "addressRegion": "DKI Jakarta",
                "addressCountry": "ID"
              },
              "email": "rizkygalang729@gmail.com",
              "telephone": "+6285714608649",
              "sameAs": [
                "https://github.com/kydev-tech/",
                "https://www.linkedin.com/in/galang-rizky-9a06522a8",
                "https://www.instagram.com/kylangs12"
              ],
              "alumniOf": "Web Development & Operations",
              "knowsAbout": [
                "Web Development",
                "Next.js",
                "Laravel",
                "PHP",
                "TypeScript",
                "MySQL",
                "Warehouse Management",
                "Operations Management",
                "Purchasing",
                "Laser Machine Operations"
              ]
            })
          }}
        />
        
        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Galang Rizky Arridho Portfolio",
              "url": "https://yourwebsite.com",
              "description": "Professional portfolio of Galang Rizky Arridho - Web Developer and Operations Specialist",
              "inLanguage": ["id-ID", "en-US", "ja-JP"],
              "author": {
                "@type": "Person",
                "name": "Galang Rizky Arridho"
              }
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}