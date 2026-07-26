import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ONBOARDING_SLIDES, LOGO_IMG } from '../../data/plants';
import { motion, AnimatePresence } from 'motion/react';

export const OnboardingScreen: React.FC = () => {
  const { setCurrentScreen, language, setLanguage, theme, setTheme } = useApp();
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const toggleLang = () => {
    setLanguage(language === 'en' ? 'ur' : 'en');
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const nextSlide = () => {
    if (currentSlide < ONBOARDING_SLIDES.length - 1) {
      setCurrentSlide(prev => prev + 1);
    } else {
      setCurrentScreen('home');
    }
  };

  const slide = ONBOARDING_SLIDES[currentSlide];

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between bg-[#f5fced] dark:bg-[#1a1c19] text-[#171d14] dark:text-[#ecf3e4] overflow-hidden">
      {/* Top Header */}
      <header className="flex items-center justify-between px-6 pt-10 pb-4 h-16 w-full z-50">
        <div className="flex items-center gap-2">
          <img 
            alt="Baghban Logo" 
            className="w-8 h-8 rounded-lg shadow-sm" 
            src={LOGO_IMG} 
          />
          <span className="font-bold text-[#0d631b] dark:text-[#a3f69c] text-xl tracking-tight">
            {language === 'ur' ? 'باغبان' : 'Baghban'}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-[#707a6c]/40 text-[#0d631b] dark:text-[#a3f69c] hover:bg-[#dee5d6]/50 dark:hover:bg-[#2c3228]/50 transition-colors shadow-sm"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            <span className="material-symbols-outlined text-[18px]">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          {/* Language Toggle */}
          <button 
            onClick={toggleLang}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#707a6c]/40 text-xs font-semibold hover:bg-[#dee5d6]/50 dark:hover:bg-[#2c3228]/50 transition-colors shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px]">translate</span>
            <span>{language === 'en' ? 'اردو (Urdu)' : 'English'}</span>
          </button>
        </div>
      </header>

      {/* Slide Content Area */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-8 relative max-w-md mx-auto w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="w-full flex flex-col items-center text-center"
          >
            {/* Organic Masked Image */}
            <div className="w-full max-w-xs aspect-square relative organic-mask mb-10 overflow-hidden shadow-xl bg-[#abf4ac]/30 dark:bg-[#286b33]/20">
              <div className="absolute inset-0 bg-[#abf4ac] dark:bg-[#286b33] opacity-20"></div>
              <img 
                className="w-full h-full object-cover scale-105 transition-transform duration-700" 
                alt={language === 'ur' ? slide.titleUrdu : slide.title}
                src={slide.image} 
              />
            </div>

            {/* Title & Description */}
            <h1 className="text-2xl md:text-3xl font-bold text-[#171d14] dark:text-[#ecf3e4] mb-4 px-2 leading-tight">
              {language === 'ur' ? slide.titleUrdu : slide.title}
            </h1>
            <p className="text-sm md:text-base text-[#40493d] dark:text-[#bfcaba] max-w-xs px-2 leading-relaxed">
              {language === 'ur' ? slide.descUrdu : slide.desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer / Controls */}
      <footer className="px-6 pb-12 w-full flex flex-col items-center gap-8 max-w-md mx-auto">
        {/* Indicators */}
        <div className="flex gap-2.5">
          {ONBOARDING_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === currentSlide 
                  ? 'w-7 bg-[#0d631b] dark:bg-[#a3f69c]' 
                  : 'w-2.5 bg-[#bfcaba] dark:bg-[#707a6c]/40 hover:bg-[#707a6c]'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="w-full flex flex-col gap-3">
          <button 
            onClick={nextSlide}
            className="w-full bg-[#0d631b] dark:bg-[#a3f69c] text-[#ffffff] dark:text-[#002204] py-4 rounded-full font-bold text-base shadow-lg active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 hover:brightness-110"
          >
            <span>
              {language === 'ur' ? 'شروع کریں' : (currentSlide === ONBOARDING_SLIDES.length - 1 ? 'Get Started' : 'Next')}
            </span>
            <span className="material-symbols-outlined">
              {language === 'ur' ? 'arrow_back' : 'arrow_forward'}
            </span>
          </button>

          {currentSlide < ONBOARDING_SLIDES.length - 1 && (
            <button
              onClick={() => setCurrentScreen('home')}
              className="text-xs font-semibold text-[#40493d] dark:text-[#bfcaba] hover:underline py-2"
            >
              {language === 'ur' ? 'چھوڑیں اور باغ پر جائیں' : 'Skip directly to Garden Dashboard'}
            </button>
          )}
        </div>
      </footer>
    </div>
  );
};
