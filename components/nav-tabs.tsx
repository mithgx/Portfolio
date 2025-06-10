'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';

const tabs = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Resume', href: '/resume' },
  { name: 'Contact', href: '/contact' },
];

export function NavTabs() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] border-b bg-background/80 backdrop-blur-lg backdrop-saturate-200">
      <div className="container mx-auto px-4">
        <nav className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            {tabs.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  pathname === tab.href
                    ? 'text-foreground'
                    : 'text-foreground/60'
                )}
              >
                {tab.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
} 