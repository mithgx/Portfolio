'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';
import { Menu, X } from 'lucide-react';

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
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] border-b bg-background/80 backdrop-blur-lg backdrop-saturate-200">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <nav className="flex h-16 items-center justify-between">
          <div className="flex-1 flex justify-center sm:justify-center">
            <div className="sm:hidden absolute left-4">
              <button onClick={toggleMenu} className="text-foreground focus:outline-none">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
            <div className="hidden sm:flex items-center space-x-8">
              {tabs.map((tab) => (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={cn(
                    'text-base font-medium transition-colors hover:text-primary',
                    pathname === tab.href ? 'text-foreground' : 'text-foreground/60'
                  )}
                >
                  {tab.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="absolute right-4 sm:static flex items-center">
            <ThemeToggle />
          </div>
        </nav>
        {isOpen && (
          <div className="sm:hidden mt-2 space-y-2 text-center">
            {tabs.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                onClick={closeMenu}
                className={cn(
                  'block text-sm font-medium px-2 py-1 rounded hover:bg-accent hover:text-accent-foreground',
                  pathname === tab.href ? 'text-foreground' : 'text-foreground/60'
                )}
              >
                {tab.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
