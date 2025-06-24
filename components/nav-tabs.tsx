'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const tabs = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Contact', href: '/contact' },
];

export function NavTabs() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] border-b border-border/50 bg-background/80 backdrop-blur-xl backdrop-saturate-150">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <nav className="flex h-20 items-center justify-between">
          <div className="flex-1 flex justify-center sm:justify-center">
            <div className="sm:hidden absolute left-4">
              <button 
                onClick={toggleMenu} 
                className="text-foreground focus:outline-none p-2 rounded-lg hover:bg-accent transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
            <div className="hidden sm:flex items-center space-x-2">
              {tabs.map((tab) => (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={cn(
                    'relative px-6 py-3 text-base font-medium transition-all duration-300 rounded-lg hover:bg-accent/50',
                    pathname === tab.href 
                      ? 'text-foreground bg-accent' 
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {tab.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
        {isOpen && (
          <div className="sm:hidden mt-2 pb-4 space-y-2 text-center border-t border-border/50 pt-4">
            {tabs.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                onClick={closeMenu}
                className={cn(
                  'block text-base font-medium px-6 py-4 rounded-lg transition-all duration-300 mx-4',
                  pathname === tab.href 
                    ? 'text-foreground bg-accent' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
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