'use client';

import { usePathname } from 'next/navigation';
import { Navigation } from './navigation';
import { Footer } from './footer';

export function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isContactPage = pathname === '/contact';

  return (
    <>
      {!isContactPage && <Navigation />}
      <main className="min-h-screen">{children}</main>
      {!isContactPage && <Footer />}
    </>
  );
}
