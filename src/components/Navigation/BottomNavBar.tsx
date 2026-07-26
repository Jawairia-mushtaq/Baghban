import React from 'react';
import { useApp } from '../../context/AppContext';
import { ScreenId } from '../../types';

export const BottomNavBar: React.FC = () => {
  const { currentScreen, setCurrentScreen, t } = useApp();

  // Hide bottom nav on Onboarding, Scanner, and Details screens for cleaner focus
  if (currentScreen === 'onboarding' || currentScreen === 'scanner' || currentScreen === 'details') {
    return null;
  }

  const navItems: Array<{ id: ScreenId; icon: string; labelKey: string; filled?: boolean }> = [
    { id: 'home', icon: 'home', labelKey: 'home' },
    { id: 'library', icon: 'local_florist', labelKey: 'plants', filled: true },
    { id: 'ai-assistant', icon: 'psychology', labelKey: 'aiAssistant' },
    { id: 'calendar', icon: 'calendar_month', labelKey: 'calendar' },
    { id: 'settings', icon: 'settings', labelKey: 'settings' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 rounded-t-[28px] bg-[#e9f0e1] dark:bg-[#2c3228] shadow-[0_-2px_10px_rgba(0,0,0,0.08)] flex justify-around items-center h-20 pb-safe px-2 max-w-4xl mx-auto transition-all">
      {navItems.map((item) => {
        const isActive = currentScreen === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setCurrentScreen(item.id)}
            className={`flex flex-col items-center justify-center p-2 rounded-full active:scale-90 transition-all duration-150 ${
              isActive 
                ? 'bg-[#abf4ac] dark:bg-[#286b33] text-[#2e7238] dark:text-[#ffffff] px-5 py-1 font-bold' 
                : 'text-[#40493d] dark:text-[#bfcaba] hover:bg-[#40493d]/10'
            }`}
          >
            <span className={`material-symbols-outlined ${isActive || item.filled ? 'fill-icon' : ''}`}>
              {item.icon}
            </span>
            <span className="text-xs font-medium mt-1">
              {t(item.labelKey)}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
