import './globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { LayoutContent } from '@/components/LayoutContent';

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
    url: 'https://portfolio-personal-4xvx.vercel.app/',
    title: 'Harsh Shukla - Full Stack Developer',
    description: 'Portfolio showcasing React, Next.js, Node.js projects.',
    siteName: 'Harsh Shukla Portfolio',
    images: [
      {
        url: 'https://portfolio-personal-4xvx.vercel.app/portfolio-thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'Harsh Shukla Portfolio',
      },
    ],
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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LayoutContent>{children}</LayoutContent>
        </ThemeProvider>
      </body>
    </html>
  );
}