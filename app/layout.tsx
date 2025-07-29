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
    url: 'https://yourdomain.com', // replace this
    title: 'Harsh Shukla - Full Stack Developer & Designer',
    description: 'Portfolio of Harsh Shukla - Full Stack Developer specializing in React, Next.js, and modern web technologies.',
    siteName: 'Harsh Shukla Portfolio',
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