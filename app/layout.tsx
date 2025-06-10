import './globals.css';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { NavTabs } from '@/components/nav-tabs';
import { Analytics } from "@vercel/analytics/next"
const outfit = Outfit({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mithilesh Portfolio',
  description: 'Portfolio website showcasing my work and experience',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavTabs />
          <div className="main-content">
            <div className="grid-background min-h-screen bg-background">
              {children}
            </div>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
