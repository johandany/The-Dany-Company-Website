import React, { useState } from 'react';
import { ScreenType } from '../types';
import { ASSETS } from '../data/mockData';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  isDark,
  onToggleTheme
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ScreenType; label: string }[] = [
    { id: 'home', label: 'Overview' },
    { id: 'services', label: 'Services' },
    { id: 'crm', label: 'Executive CRM' },
    { id: 'trust', label: 'RICE Trust' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'contact', label: 'Inquiries' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f9f9f7]/90 dark:bg-[#0b192c]/95 backdrop-blur-md border-b border-[#e2e3e1] dark:border-[rgba(197,168,128,0.25)] transition-colors duration-200">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single Text Element with Crest Icon) */}
        <button
          onClick={() => {
            onNavigate('home');
            setMobileMenuOpen(false);
          }}
          className="flex items-center gap-3 text-left group whitespace-nowrap shrink-0 cursor-pointer focus:outline-none"
        >
          <img
            src={ASSETS.danyCrest}
            alt="The Dany Company Crest"
            referrerPolicy="no-referrer"
            className="w-10 h-10 object-contain rounded-full border border-[#c5a880]/40 group-hover:border-[#c5a880] transition-colors shadow-sm bg-white"
          />
          <div className="flex flex-col">
            <span className="font-serif-luxury text-xl lg:text-2xl font-semibold tracking-tight text-[#0b192c] dark:text-[#fbfbf9] group-hover:text-[#725b38] dark:group-hover:text-[#fedeb2] transition-colors leading-none">
              The Dany Company
            </span>
            <span className="text-[10px] tracking-[0.16em] uppercase text-[#725b38] dark:text-[#c5a880] font-sans-editorial font-semibold mt-1">
              Architectural High-Tech & Trust
            </span>
          </div>
        </button>

        {/* Zone 2: 4-6 Clean Single-Line Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-sans-editorial font-medium">
          {navItems.map((item) => {
            const isActive = currentScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 relative cursor-pointer ${
                  isActive
                    ? 'text-[#0b192c] dark:text-[#fedeb2] font-semibold'
                    : 'text-[#44474c] dark:text-[#dadad8] hover:text-[#0b192c] dark:hover:text-[#ffffff]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#c5a880] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action + Theme Mode */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle visual theme"
            className="p-2 text-[#44474c] dark:text-[#c5a880] hover:text-[#0b192c] dark:hover:text-[#ffffff] rounded border border-transparent hover:border-[#c5a880]/30 transition-colors cursor-pointer"
            title={isDark ? 'Switch to Ivory Daylight' : 'Switch to Sovereign Midnight'}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="hidden sm:inline-flex items-center px-4 py-2 text-xs font-semibold tracking-wider uppercase font-sans-editorial text-[#fbfbf9] bg-[#0b192c] dark:bg-[#c5a880] dark:text-[#0b192c] rounded border border-[#c5a880]/40 hover:bg-[#112240] dark:hover:bg-[#fedeb2] transition-all shadow-sm hover:shadow-[0_0_12px_rgba(197,168,128,0.4)] whitespace-nowrap shrink-0 cursor-pointer"
          >
            Request Proposal
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#0b192c] dark:text-[#fbfbf9] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f9f9f7] dark:bg-[#0b192c] border-b border-[#e2e3e1] dark:border-[rgba(197,168,128,0.3)] px-6 py-5 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left py-2 px-3 text-sm font-sans-editorial rounded ${
                currentScreen === item.id
                  ? 'bg-[#fedeb2]/40 dark:bg-[#112240] text-[#0b192c] dark:text-[#fedeb2] font-semibold border-l-2 border-[#c5a880]'
                  : 'text-[#44474c] dark:text-[#dadad8] hover:bg-[#f4f4f2] dark:hover:bg-[#112240]/50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                onNavigate('contact');
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 text-xs font-semibold tracking-wider uppercase text-center text-[#fbfbf9] bg-[#0b192c] dark:bg-[#c5a880] dark:text-[#0b192c] rounded border border-[#c5a880]/40"
            >
              Request Proposal
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
