import React, { useState, useEffect } from 'react';
import { ScreenType } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeScreen } from './components/screens/HomeScreen';
import { ServicesScreen } from './components/screens/ServicesScreen';
import { CrmScreen } from './components/screens/CrmScreen';
import { TrustScreen } from './components/screens/TrustScreen';
import { LeadershipScreen } from './components/screens/LeadershipScreen';
import { ContactScreen } from './components/screens/ContactScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [isDark, setIsDark] = useState<boolean>(false);
  const [preselectedService, setPreselectedService] = useState<string>('');

  useEffect(() => {
    // Sync dark mode class on document element
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleNavigate = (screen: ScreenType) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectServiceForInquiry = (serviceName: string) => {
    setPreselectedService(serviceName);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9f7] dark:bg-[#07101c] text-[#1a1c1b] dark:text-[#fbfbf9] transition-colors duration-200">
      {/* Sovereign Top Bar */}
      <Header
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
      />

      {/* Main Dynamic Screen Viewport */}
      <main className="flex-1">
        {currentScreen === 'home' && (
          <HomeScreen onNavigate={handleNavigate} />
        )}

        {currentScreen === 'services' && (
          <ServicesScreen
            onNavigate={handleNavigate}
            onSelectServiceForInquiry={handleSelectServiceForInquiry}
          />
        )}

        {currentScreen === 'crm' && (
          <CrmScreen />
        )}

        {currentScreen === 'trust' && (
          <TrustScreen onNavigate={handleNavigate} />
        )}

        {currentScreen === 'leadership' && (
          <LeadershipScreen onNavigate={handleNavigate} />
        )}

        {currentScreen === 'contact' && (
          <ContactScreen
            onNavigate={handleNavigate}
            preselectedService={preselectedService}
          />
        )}
      </main>

      {/* Institutional Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
