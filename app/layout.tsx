"use client";

import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Toaster } from 'react-hot-toast';
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isContactPage = pathname === '/contact';

  return (
    <>
      {!isContactPage && <Navigation />}
      <main className="min-h-screen">
        {children}
      </main>
      {!isContactPage && <Footer />}
      <Toaster position="bottom-right" />
    </>
  );
}

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
          <LayoutContent>
            {children}
          </LayoutContent>
        </ThemeProvider>
      </body>
    </html>
  );
}