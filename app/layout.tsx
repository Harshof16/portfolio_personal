import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Harsh Shukla - Full Stack Developer & Designer',
  description: 'Portfolio of Harsh Shukla - Full Stack Developer specializing in React, Next.js, and modern web technologies. View my projects and get in touch.',
  keywords: 'developer, portfolio, react, nextjs, typescript, javascript',
  authors: [{ name: 'Harsh Shukla' }],
  creator: 'Harsh Shukla',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://johndoe.dev',
    title: 'Harsh Shukla - Full Stack Developer & Designer',
    description: 'Portfolio of Harsh Shukla - Full Stack Developer specializing in React, Next.js, and modern web technologies.',
    siteName: 'Harsh Shukla Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harsh Shukla - Full Stack Developer & Designer',
    description: 'Portfolio of Harsh Shukla - Full Stack Developer specializing in React, Next.js, and modern web technologies.',
    creator: '@johndoe',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}