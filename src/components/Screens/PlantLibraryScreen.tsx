import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { PlantCategory } from '../../types';
import { motion, AnimatePresence } from 'motion/react';

export const PlantLibraryScreen: React.FC = () => {
  const { userPlants, viewPlantDetails, setIsAddPlantModalOpen, language, t } = useApp();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<PlantCategory>('all');
  const [isListening, setIsListening] = useState<boolean>(false);

  const categories: Array<{ id: PlantCategory; labelKey: string }> = [
    { id: 'all', labelKey: 'allPlants' },
    { id: 'indoor', labelKey: 'indoor' },
    { id: 'outdoor', labelKey: 'outdoor' },
    { id: 'flowering', labelKey: 'flowering' },
    { id: 'fruit', labelKey: 'fruit' }
  ];

  const filteredPlants = userPlants.filter(plant => {
    const matchesCategory = activeCategory === 'all' || plant.category === activeCategory;
    const matchesSearch = searchQuery.trim() === '' || 
      plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.nameUrdu.includes(searchQuery) ||
      plant.scientificName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleVoiceSearch = () => {
    setIsListening(true);
    setTimeout(() => {
      setIsListening(false);
      setSearchQuery(language === 'ur' ? 'آم' : 'Mango');
    }, 1500);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Search Section */}
      <section className="relative">
        <div className={`flex items-center bg-[#e3ebdc] dark:bg-[#2c3228] rounded-full px-4 py-1.5 shadow-sm transition-all ${
          isListening ? 'ring-2 ring-[#0d631b] dark:ring-[#a3f69c]' : 'focus-within:ring-2 focus-within:ring-[#0d631b]/50'
        }`}>
          <span className="material-symbols-outlined text-[#40493d] dark:text-[#bfcaba]">search</span>
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isListening ? (language === 'ur' ? 'سن رہا ہے...' : 'Listening...') : t('searchPlaceholder')}
            className="w-full bg-transparent border-none focus:outline-none text-[#171d14] dark:text-[#ecf3e4] py-2.5 px-3 placeholder-[#40493d]/60 dark:placeholder-[#bfcaba]/60 text-sm md:text-base"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="p-1 rounded-full hover:bg-[#40493d]/10 text-[#40493d] dark:text-[#bfcaba]"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          )}
          <button 
            onClick={handleVoiceSearch}
            title="Simulate Voice Search"
            className={`p-2 rounded-full transition-colors ${
              isListening 
                ? 'bg-[#ba1a1a] text-white animate-pulse' 
                : 'hover:bg-[#40493d]/10 text-[#40493d] dark:text-[#bfcaba]'
            }`}
          >
            <span className="material-symbols-outlined">mic</span>
          </button>
        </div>
      </section>

      {/* Filters Section */}
      <section className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex-shrink-0 px-5 py-2 rounded-full text-xs md:text-sm font-medium flex items-center gap-1.5 transition-all active:scale-95 ${
                isActive
                  ? 'bg-[#abf4ac] dark:bg-[#286b33] text-[#2e7238] dark:text-[#ffffff] shadow-sm font-bold'
                  : 'bg-[#dee5d6] dark:bg-[#2c3228] text-[#40493d] dark:text-[#bfcaba] hover:bg-[#dee5d6]/80'
              }`}
            >
              {isActive && <span className="material-symbols-outlined text-[16px]">done</span>}
              <span>{t(cat.labelKey)}</span>
            </button>
          );
        })}
      </section>

      {/* Bento Grid Plant Cards */}
      <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <AnimatePresence>
          {filteredPlants.map((plant, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25, delay: idx * 0.05 }}
              key={plant.id}
              onClick={() => viewPlantDetails(plant.id)}
              className="bg-[#eff6e7] dark:bg-[#2c3228] rounded-[28px] p-4 flex flex-col gap-3 group transition-all hover:-translate-y-1 hover:shadow-md cursor-pointer border border-transparent hover:border-[#0d631b]/30"
            >
              <div className="relative w-full aspect-square bg-[#a3f69c]/20 dark:bg-[#286b33]/20 rounded-[20px] overflow-hidden">
                <img 
                  src={plant.image} 
                  alt={language === 'ur' ? plant.nameUrdu : plant.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className={`absolute top-2 right-2 px-2.5 py-1 text-[10px] font-bold rounded-full uppercase tracking-wider shadow-sm ${
                  plant.status === 'Healthy' || plant.status === 'Perfect' || plant.status === 'Strong' || plant.status === 'Vibrant'
                    ? 'bg-[#0d631b] text-[#ffffff]'
                    : plant.status === 'Needs Care'
                    ? 'bg-[#ba1a1a] text-[#ffffff]'
                    : 'bg-[#926500] text-[#ffffff]'
                }`}>
                  {language === 'ur' ? plant.statusUrdu : plant.status}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline justify-between">
                  <span className="font-bold text-base md:text-lg text-[#171d14] dark:text-[#ecf3e4] group-hover:text-[#0d631b] dark:group-hover:text-[#a3f69c] transition-colors truncate">
                    {language === 'ur' ? `${plant.name} (${plant.nameUrdu})` : plant.name}
                  </span>
                </div>
                <span className="text-[#40493d] dark:text-[#bfcaba] text-xs font-serif opacity-80 mt-0.5 truncate italic">
                  {plant.scientificName}
                </span>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#707a6c]/10 text-[11px] text-[#286b33] dark:text-[#abf4ac]">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">water_drop</span>
                    {language === 'ur' ? plant.waterFrequencyUrdu : plant.waterFrequency}
                  </span>
                  <span>{language === 'ur' ? plant.sunlightUrdu : plant.sunlight}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredPlants.length === 0 && (
        <div className="text-center py-16 bg-[#eff6e7]/50 dark:bg-[#2c3228]/50 rounded-[28px] p-6 border border-dashed border-[#707a6c]/30">
          <span className="material-symbols-outlined text-5xl text-[#40493d]/50 mb-3">search_off</span>
          <h3 className="font-bold text-lg text-[#171d14] dark:text-[#ecf3e4]">No plants found</h3>
          <p className="text-sm text-[#40493d] dark:text-[#bfcaba] mt-1">
            Try searching for another variety or category, or add your own!
          </p>
          <button 
            onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
            className="mt-4 px-5 py-2 rounded-full bg-[#0d631b] text-white text-xs font-bold shadow-sm"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="fixed right-6 bottom-24 z-40">
        <button 
          onClick={() => setIsAddPlantModalOpen(true)}
          className="bg-[#0d631b] dark:bg-[#a3f69c] text-[#ffffff] dark:text-[#002204] w-14 h-14 rounded-[28px] flex items-center justify-center shadow-xl hover:shadow-2xl active:scale-90 transition-all duration-150 hover:brightness-110"
          title="Add New Plant"
        >
          <span className="material-symbols-outlined text-[32px]">add</span>
        </button>
      </div>
    </div>
  );
};
