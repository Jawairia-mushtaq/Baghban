import React from 'react';
import { useApp } from '../../context/AppContext';
import { USER_PROFILE_IMAGES, LOGO_IMG, IVY_AVATAR } from '../../data/plants';

export const TopAppBar: React.FC = () => {
  const { currentScreen, setCurrentScreen, language, setLanguage, t, theme, setTheme, userProfile } = useApp();

  // Onboarding screen has its own header embedded in the HTML layout
  if (currentScreen === 'onboarding' || currentScreen === 'scanner') {
    return null;
  }

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ur' : 'en');
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (currentScreen === 'details') {
    return (
      <header className="w-full sticky top-0 z-50 flex items-center justify-between px-4 md:px-6 h-16 bg-[#f5fced]/90 dark:bg-[#1a1c19]/90 backdrop-blur-md border-b border-[#707a6c]/10">
        <button 
          onClick={() => setCurrentScreen('home')}
          className="w-10 h-10 flex items-center justify-center rounded-full active:scale-95 transition-transform hover:bg-[#dee5d6]/50 dark:hover:bg-[#2c3228]/50"
        >
          <span className="material-symbols-outlined text-[#171d14] dark:text-[#ecf3e4]">close</span>
        </button>
        <h1 className="font-medium text-lg md:text-xl text-[#171d14] dark:text-[#ecf3e4] font-bold">
          {t('plantDetails')}
        </h1>
        <div className="flex items-center gap-2">
          <button 
            onClick={toggleTheme}
            className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full border border-[#707a6c]/30 text-[#0d631b] dark:text-[#a3f69c] hover:bg-[#dee5d6]/50 dark:hover:bg-[#2c3228]/50 transition-colors shadow-sm"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            <span className="material-symbols-outlined text-[18px]">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#707a6c]/30 text-xs font-medium hover:bg-[#dee5d6]/40 transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">translate</span>
            <span>{language === 'en' ? 'Urdu' : 'ENG'}</span>
          </button>
        </div>
      </header>
    );
  }

  if (currentScreen === 'ai-assistant') {
    return (
      <header className="w-full sticky top-0 z-50 bg-[#f5fced] dark:bg-[#1a1c19] flex items-center justify-between px-4 md:px-6 h-16 border-b border-[#707a6c]/10">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setCurrentScreen('home')}
            className="w-10 h-10 flex items-center justify-center text-[#40493d] dark:text-[#bfcaba] hover:bg-[#dee5d6]/50 rounded-full active:scale-95 duration-200"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div className="flex flex-col">
            <h1 className="font-medium text-lg md:text-xl text-[#0d631b] dark:text-[#a3f69c] leading-tight font-bold">
              {t('aiAssistant')}
            </h1>
            <span className="text-[12px] text-[#286b33] dark:text-[#abf4ac] flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#286b33] dark:bg-[#a3f69c] animate-pulse"></span>
              {t('gardenSpecialistOnline')}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={toggleTheme}
            className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full border border-[#707a6c]/30 text-[#0d631b] dark:text-[#a3f69c] hover:bg-[#dee5d6]/50 dark:hover:bg-[#2c3228]/50 transition-colors shadow-sm"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            <span className="material-symbols-outlined text-[18px]">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#707a6c]/30 text-xs font-medium hover:bg-[#dee5d6]/40 transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">translate</span>
            <span>{language === 'en' ? 'Urdu' : 'ENG'}</span>
          </button>
          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-[#a3f69c] shadow-sm">
            <img 
              src={IVY_AVATAR} 
              alt="Ivy Botanical AI" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </header>
    );
  }

  // Default header for Home, Library, Calendar, Settings
  const getHeaderTitle = () => {
    switch (currentScreen) {
      case 'home': return t('greeting');
      case 'library': return t('plantLibrary');
      case 'calendar': return t('greeting');
      case 'settings': return t('settings');
      default: return t('greeting');
    }
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-[#f5fced] dark:bg-[#1a1c19] flex items-center justify-between px-4 md:px-6 h-16 border-b border-[#707a6c]/10">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#0d631b]/20 dark:border-[#a3f69c]/30">
          <img 
            src={userProfile?.avatar || USER_PROFILE_IMAGES.main} 
            alt={userProfile?.name || "User profile"} 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-lg md:text-xl text-[#0d631b] dark:text-[#a3f69c]">
            {getHeaderTitle()}
          </h1>
          {currentScreen === 'home' && (
            <span className="text-xs text-[#40493d] dark:text-[#bfcaba] font-medium flex items-center gap-1">
              <span className="inline-block w-2 h-2 rounded-full bg-[#0d631b] dark:bg-[#a3f69c]"></span>
              {language === 'en' ? 'Baghban Digital Sanctuary' : 'باغبان ڈیجیٹل باغ'}
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* Theme Toggle Button */}
        <button 
          onClick={toggleTheme}
          className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-[#707a6c]/40 text-[#0d631b] dark:text-[#a3f69c] hover:bg-[#dee5d6]/50 dark:hover:bg-[#2c3228]/50 transition-colors shadow-sm"
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          <span className="material-symbols-outlined text-[18px] md:text-[20px]">
            {theme === 'dark' ? 'light_mode' : 'dark_mode'}
          </span>
        </button>

        {/* Language Toggle Button */}
        <button 
          onClick={toggleLanguage}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#707a6c]/40 text-xs font-semibold hover:bg-[#dee5d6]/50 dark:hover:bg-[#2c3228]/50 transition-colors shadow-sm"
          title="Toggle Urdu/English"
        >
          <span className="material-symbols-outlined text-[18px] text-[#0d631b] dark:text-[#a3f69c]">translate</span>
          <span>{language === 'en' ? 'اردو (Urdu)' : 'English'}</span>
        </button>

        <button 
          onClick={() => setCurrentScreen('settings')}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#dee5d6]/50 dark:hover:bg-[#2c3228]/50 transition-colors active:scale-95 duration-200"
          title="Notifications"
        >
          <span className="material-symbols-outlined text-[#40493d] dark:text-[#bfcaba]">notifications</span>
        </button>
      </div>
    </header>
  );
};
