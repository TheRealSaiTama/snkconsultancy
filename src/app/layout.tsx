import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import GlobalBackground from '@/components/layout/global-background';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'SNK Global | Global Manpower Solutions from India to Middle East & Europe',
  description:
    'Empowering Indian talent with overseas jobs in the Middle East and Europe. Expert recruitment consultancy.',
  openGraph: {
    title: 'SNK Global | Global Manpower Solutions from India to Middle East & Europe',
    description: 'Empowering Indian talent with overseas jobs in the Middle East and Europe. Expert recruitment consultancy.',
    type: 'website',
    url: 'https://snk-overseas.example.com',
    images: [
      {
        url: 'https://picsum.photos/seed/og-image/1200/630',
        width: 1200,
        height: 630,
        alt: 'SNK Global',
      },
    ],
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
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
