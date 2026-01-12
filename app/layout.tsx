import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.kydev.my.id";
const siteName = "Galang Rizky Arridho - Web Developer & Operations Specialist";
const siteDescription = "Professional portfolio of Galang Rizky Arridho (KyDev). Experienced Web Developer specializing in Next.js, Laravel, PHP, and TypeScript. Also skilled in operations management, warehouse management, purchasing, and laser machine operations based in Jakarta, Indonesia.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "Galang Rizky Arridho",
    "KyDev",
    "kydev.my.id",
    "Web Developer Jakarta",
    "Full Stack Developer Indonesia",
    "Next.js Developer",
    "Laravel Developer",
    "PHP Developer",
    "TypeScript Developer",
    "React Developer",
    "Tailwind CSS",
    "MySQL Database",
    "Portfolio Website",
    "Rawamangun Jakarta",
    "Warehouse Management Specialist",
    "Operations Management",
    "Purchasing Staff",
    "Laser Machine Operator",
    "Frontend Developer",
    "Backend Developer",
    "Web Development Services",
    "Jakarta Timur Developer",
    "Indonesian Developer",
    "Freelance Web Developer",
    "CV Mandiri Teknik",
    "PT Insvira Solusi Teknologi",
    "Jakarta Web Developer",
    "Professional Portfolio Indonesia",
  ],
  authors: [
    { 
      name: "Galang Rizky Arridho",
      url: siteUrl,
    }
  ],
  creator: "Galang Rizky Arridho",
  publisher: "Galang Rizky Arridho",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: ["en_US", "ja_JP"],
    url: siteUrl,
    title: siteName,
    description: siteDescription,
    siteName: "KyDev Portfolio - Galang Rizky Arridho",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Galang Rizky Arridho - Web Developer & Operations Specialist Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/og-image.png"],
    creator: "@kylangs12",
    site: "@kylangs12",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'id-ID': siteUrl,
      'en-US': `${siteUrl}/en`,
      'ja-JP': `${siteUrl}/ja`,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  category: 'technology',
  verification: {
    google: '7gmsUSSW5fm_qKyO1sJ9gc6moz2SSFb2ZJbnEII5tVI', // Google Search Console verification
    // yandex: 'your-yandex-verification-code', // Opsional
    // bing: 'your-bing-verification-code', // Opsional
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
        {/* Primary Meta Tags */}
        <meta name="theme-color" content="#3b82f6" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1e3a8a" media="(prefers-color-scheme: dark)" />
        <meta name="color-scheme" content="light dark" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="ID-JK" />
        <meta name="geo.placename" content="Jakarta" />
        <meta name="geo.position" content="-6.199523;106.900858" />
        <meta name="ICBM" content="-6.199523, 106.900858" />
        
        {/* Additional SEO */}
        <meta name="rating" content="general" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="KyDev Portfolio" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Preconnect untuk performa */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={siteUrl} />
        
        {/* Structured Data - Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": `${siteUrl}/#person`,
              "name": "Galang Rizky Arridho",
              "alternateName": ["KyDev", "Galang Rizky"],
              "url": siteUrl,
              "image": {
                "@type": "ImageObject",
                "url": `${siteUrl}/profile.jpg`,
                "width": 400,
                "height": 400
              },
              "jobTitle": ["Web Developer", "Operations Specialist", "Full Stack Developer"],
              "description": siteDescription,
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "CV. Mandiri Teknik",
                  "url": siteUrl
                },
                {
                  "@type": "Organization",
                  "name": "PT. Insvira Solusi Teknologi"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Poncol Atas No.87, RT.20/RW.6, Jati",
                "addressLocality": "Pulo Gadung",
                "addressRegion": "Jakarta Timur",
                "postalCode": "13220",
                "addressCountry": "ID"
              },
              "email": "rizkygalang729@gmail.com",
              "telephone": "+62-857-1460-8649",
              "sameAs": [
                "https://github.com/kydev-tech/",
                "https://www.linkedin.com/in/galang-rizky-9a06522a8",
                "https://www.instagram.com/kylangs12"
              ],
              "knowsAbout": [
                "Web Development",
                "Next.js",
                "React",
                "Laravel",
                "PHP",
                "TypeScript",
                "JavaScript",
                "MySQL",
                "Tailwind CSS",
                "Warehouse Management",
                "Operations Management",
                "Purchasing",
                "Laser Machine Operations",
                "Administrative Management"
              ],
              "hasOccupation": [
                {
                  "@type": "Occupation",
                  "name": "Web Developer",
                  "occupationLocation": {
                    "@type": "City",
                    "name": "Jakarta"
                  },
                  "skills": "Next.js, Laravel, PHP, TypeScript, MySQL, Tailwind CSS"
                },
                {
                  "@type": "Occupation",
                  "name": "Operations Specialist",
                  "occupationLocation": {
                    "@type": "City",
                    "name": "Jakarta"
                  },
                  "skills": "Warehouse Management, Purchasing, Laser Machine Operations"
                }
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
              "@id": `${siteUrl}/#website`,
              "name": "KyDev Portfolio",
              "alternateName": "Galang Rizky Arridho Portfolio",
              "url": siteUrl,
              "description": siteDescription,
              "inLanguage": ["id-ID", "en-US", "ja-JP"],
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": `${siteUrl}/?q={search_term_string}`
                },
                "query-input": "required name=search_term_string"
              },
              "author": {
                "@type": "Person",
                "@id": `${siteUrl}/#person`,
                "name": "Galang Rizky Arridho"
              },
              "publisher": {
                "@type": "Person",
                "@id": `${siteUrl}/#person`
              }
            })
          }}
        />

        {/* Structured Data - ProfilePage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              "mainEntity": {
                "@id": `${siteUrl}/#person`
              },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": siteUrl
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "About",
                    "item": `${siteUrl}#about`
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Experience",
                    "item": `${siteUrl}#experience`
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Skills",
                    "item": `${siteUrl}#skills`
                  },
                  {
                    "@type": "ListItem",
                    "position": 5,
                    "name": "Projects",
                    "item": `${siteUrl}#projects`
                  },
                  {
                    "@type": "ListItem",
                    "position": 6,
                    "name": "Contact",
                    "item": `${siteUrl}#contact`
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        itemScope
        itemType="https://schema.org/WebPage"
      >
        {children}
      </body>
    </html>
  );
}