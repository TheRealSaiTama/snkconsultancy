import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import GlobalBackground from '@/components/layout/global-background';
import SocialBar from '@/components/layout/social-bar';
import JsonLd from '@/components/seo/json-ld';
import { businessInfo, defaultSeo } from '@/lib/business-info';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(businessInfo.url),
  title: {
    default: defaultSeo.title,
    template: `%s | ${businessInfo.name}`,
  },
  description: defaultSeo.description,
  keywords: defaultSeo.keywords,
  alternates: {
    canonical: '/',
  },
  applicationName: businessInfo.name,
  authors: [{ name: businessInfo.name, url: businessInfo.url }],
  creator: businessInfo.name,
  publisher: businessInfo.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: defaultSeo.title,
    description: defaultSeo.description,
    type: 'website',
    url: businessInfo.url,
    siteName: businessInfo.name,
    locale: 'en_IN',
    images: [
      {
        url: '/LOGO2.png',
        width: 800,
        height: 800,
        alt: businessInfo.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultSeo.title,
    description: defaultSeo.description,
    images: ['/LOGO2.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', inter.variable)}>
        <GlobalBackground />
        <div className="flex flex-col min-h-screen">
          <Header />
          <SocialBar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <JsonLd />
        <Toaster />
      </body>
    </html>
  );
}
