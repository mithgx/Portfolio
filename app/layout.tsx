import './globals.css';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { NavTabs } from '@/components/nav-tabs';
import { Analytics } from "@vercel/analytics/next"
import Script from 'next/script';

const outfit = Outfit({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Mithilesh Gopalakrishnan | Portfolio",
  description: "Official portfolio of Mithilesh Gopalakrishnan - engineering student, developer, and tech enthusiast.",
  verification: {
    google: 'CkIut9YGzcQN0hhQFD9wEud5BUUkJv5NKmAxi3JCERQ',
  },
  openGraph: {
    title: "Mithilesh Gopalakrishnan | Portfolio",
    description: "Official portfolio of Mithilesh Gopalakrishnan - engineering student, developer, and tech enthusiast.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mithilesh Gopalakrishnan | Portfolio",
    description: "Official portfolio of Mithilesh Gopalakrishnan - engineering student, developer, and tech enthusiast.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="schema-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Mithilesh Gopalakrishnan",
              "url": "https://mithilesh.vercel.app",
              "sameAs": [
                "https://github.com/mithgx",
                "https://linkedin.com/in/mithileshgopalakrishnan"
              ],
              "jobTitle": "Engineering Student",
              "description": "Engineering student, developer, and tech enthusiast passionate about building innovative solutions.",
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Vellore Institute of Technology"
              }
            })
          }}
        />
      </head>
      <body className={outfit.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavTabs />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
