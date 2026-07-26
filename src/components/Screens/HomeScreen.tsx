import React from 'react';
import { useApp } from '../../context/AppContext';
import { motion } from 'motion/react';

export const HomeScreen: React.FC = () => {
  const { 
    userPlants, 
    reminders, 
    setReminders, 
    setCurrentScreen, 
    viewPlantDetails, 
    setIsAddPlantModalOpen, 
    setIsJournalModalOpen, 
    language, 
    t, 
    triggerConfetti 
  } = useApp();

  const handleCompleteReminder = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    triggerConfetti();
    setReminders(prev => prev.map(r => r.id === id ? { ...r, dueStatus: 'Done ✓', dueStatusUrdu: 'مکمل ✓' } : r));
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Garden Summary Card (Bento Style) */}
      <section className="grid grid-cols-2 gap-4">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => setCurrentScreen('library')}
          className="col-span-2 bg-[#abf4ac] dark:bg-[#286b33] p-6 rounded-[28px] relative overflow-hidden flex flex-col justify-end min-h-[160px] shadow-sm cursor-pointer hover:shadow-md transition-shadow group"
        >
          <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-110 transition-transform duration-500">
            <span className="material-symbols-outlined text-[80px] fill-icon text-[#002107] dark:text-[#ffffff]">potted_plant</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#002107] dark:text-[#ffffff]">
            {language === 'ur' ? `${userPlants.length} پودے فعال ہیں` : `${userPlants.length} Plants Active`}
          </h2>
          <p className="text-sm md:text-base text-[#002107]/80 dark:text-[#ffffff]/90 mt-1">
            {t('sanctuaryFlourishing')}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onClick={() => setCurrentScreen('calendar')}
          className="bg-[#ffdeac] dark:bg-[#734e00] p-6 rounded-[28px] flex flex-col justify-center items-center text-center gap-2 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
        >
          <span className="material-symbols-outlined text-[#734e00] dark:text-[#ffdeac] text-4xl fill-icon">water_drop</span>
          <span className="font-bold text-lg md:text-xl text-[#281900] dark:text-[#ffdeac]">
            {t('needWater')}
          </span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#a3f69c] dark:bg-[#0d631b] p-6 rounded-[28px] flex flex-col justify-center items-center text-center gap-2 shadow-sm"
        >
          <span className="material-symbols-outlined text-[#0d631b] dark:text-[#a3f69c] text-4xl fill-icon">sunny</span>
          <span className="font-bold text-lg md:text-xl text-[#002204] dark:text-[#ffffff]">
            {t('uvOptimal')}
          </span>
        </motion.div>
      </section>

      {/* Quick Actions */}
      <section className="flex justify-between items-center overflow-x-auto pb-2 gap-3 no-scrollbar">
        <button 
          onClick={() => setCurrentScreen('scanner')}
          className="flex flex-col items-center gap-2 min-w-[85px] group"
        >
          <div className="w-14 h-14 rounded-2xl bg-[#e3ebdc] dark:bg-[#2c3228] flex items-center justify-center group-active:scale-90 transition-all shadow-sm group-hover:bg-[#abf4ac]/40 dark:group-hover:bg-[#286b33]/40">
            <span className="material-symbols-outlined text-[#0d631b] dark:text-[#a3f69c] text-2xl">qr_code_scanner</span>
          </div>
          <span className="text-xs font-semibold text-[#171d14] dark:text-[#ecf3e4]">{t('scanPlant')}</span>
        </button>

        <button 
          onClick={() => setCurrentScreen('ai-assistant')}
          className="flex flex-col items-center gap-2 min-w-[85px] group"
        >
          <div className="w-14 h-14 rounded-2xl bg-[#e3ebdc] dark:bg-[#2c3228] flex items-center justify-center group-active:scale-90 transition-all shadow-sm group-hover:bg-[#abf4ac]/40 dark:group-hover:bg-[#286b33]/40">
            <span className="material-symbols-outlined text-[#0d631b] dark:text-[#a3f69c] text-2xl">psychology</span>
          </div>
          <span className="text-xs font-semibold text-[#171d14] dark:text-[#ecf3e4]">{t('askAI')}</span>
        </button>

        <button 
          onClick={() => setIsJournalModalOpen(true)}
          className="flex flex-col items-center gap-2 min-w-[85px] group"
        >
          <div className="w-14 h-14 rounded-2xl bg-[#e3ebdc] dark:bg-[#2c3228] flex items-center justify-center group-active:scale-90 transition-all shadow-sm group-hover:bg-[#abf4ac]/40 dark:group-hover:bg-[#286b33]/40">
            <span className="material-symbols-outlined text-[#0d631b] dark:text-[#a3f69c] text-2xl">edit_note</span>
          </div>
          <span className="text-xs font-semibold text-[#171d14] dark:text-[#ecf3e4]">{t('addJournal')}</span>
        </button>

        <button 
          onClick={() => setCurrentScreen('library')}
          className="flex flex-col items-center gap-2 min-w-[85px] group"
        >
          <div className="w-14 h-14 rounded-2xl bg-[#e3ebdc] dark:bg-[#2c3228] flex items-center justify-center group-active:scale-90 transition-all shadow-sm group-hover:bg-[#abf4ac]/40 dark:group-hover:bg-[#286b33]/40">
            <span className="material-symbols-outlined text-[#0d631b] dark:text-[#a3f69c] text-2xl">grid_view</span>
          </div>
          <span className="text-xs font-semibold text-[#171d14] dark:text-[#ecf3e4]">{t('viewAll')}</span>
        </button>
      </section>

      {/* Today's Reminders (Horizontal Scroll) */}
      <section>
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold text-lg text-[#171d14] dark:text-[#ecf3e4]">{t('todaysReminders')}</h3>
          <button 
            onClick={() => setCurrentScreen('calendar')}
            className="text-xs font-bold text-[#0d631b] dark:text-[#a3f69c] hover:underline"
          >
            {t('seeAll')}
          </button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-3 snap-x no-scrollbar">
          {reminders.slice(0, 3).map((rem, idx) => (
            <motion.div
              key={rem.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={(e) => handleCompleteReminder(rem.id, e)}
              className="min-w-[210px] snap-center bg-[#eff6e7] dark:bg-[#2c3228] p-4 rounded-[24px] flex flex-col gap-3 shadow-sm border border-[#bfcaba]/30 hover:border-[#0d631b]/40 transition-all cursor-pointer group"
              title="Click to mark done"
            >
              <div className="flex justify-between items-start">
                <div className={`w-11 h-11 rounded-full flex items-center justify-center ${
                  rem.type === 'water' 
                    ? 'bg-[#abf4ac] dark:bg-[#286b33] text-[#002107] dark:text-[#ffffff]' 
                    : 'bg-[#ffdeac] dark:bg-[#734e00] text-[#281900] dark:text-[#ffffff]'
                }`}>
                  <span className="material-symbols-outlined text-[20px]">
                    {rem.type === 'water' ? 'water_drop' : 'science'}
                  </span>
                </div>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                  rem.dueStatus.includes('Done') || rem.dueStatusUrdu.includes('مکمل')
                    ? 'bg-[#a3f69c] text-[#002204]'
                    : 'text-[#286b33] dark:text-[#a3f69c] bg-[#286b33]/10 dark:bg-[#a3f69c]/10'
                }`}>
                  {language === 'ur' ? rem.dueStatusUrdu : rem.dueStatus}
                </span>
              </div>
              <div>
                <h4 className="font-bold text-base text-[#171d14] dark:text-[#ecf3e4] group-hover:text-[#0d631b] dark:group-hover:text-[#a3f69c] transition-colors">
                  {language === 'ur' ? rem.plantNameUrdu : rem.plantName}
                </h4>
                <p className="text-xs text-[#40493d] dark:text-[#bfcaba] mt-0.5">
                  {language === 'ur' ? rem.amountUrdu : rem.amount}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AI Tip of the Day */}
      <section 
        onClick={() => setCurrentScreen('ai-assistant')}
        className="bg-[#dee5d6] dark:bg-[#2c3228] p-5 rounded-[28px] flex gap-4 items-center border border-[#0d631b]/15 dark:border-[#a3f69c]/20 shadow-sm cursor-pointer hover:bg-[#dee5d6]/80 dark:hover:bg-[#2c3228]/80 transition-colors"
      >
        <div className="w-14 h-14 shrink-0 rounded-full bg-[#2e7d32] text-[#cbffc2] flex items-center justify-center shadow-inner">
          <span className="material-symbols-outlined text-3xl">lightbulb</span>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-xs font-bold text-[#0d631b] dark:text-[#a3f69c] tracking-wider uppercase">
            {t('aiTipOfDay')}
          </h4>
          <p className="text-sm text-[#40493d] dark:text-[#bfcaba] leading-snug">
            {t('aiTipText')}
          </p>
        </div>
      </section>

      {/* Recent Plants (Grid) */}
      <section>
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold text-lg text-[#171d14] dark:text-[#ecf3e4]">{t('recentPlants')}</h3>
          <button 
            onClick={() => setCurrentScreen('library')}
            className="text-xs font-bold text-[#0d631b] dark:text-[#a3f69c] hover:underline"
          >
            {t('viewAll')} ({userPlants.length})
          </button>
        </div>
        <div className="grid grid-cols-1 gap-3.5">
          {userPlants.slice(0, 4).map((plant, index) => (
            <motion.div
              key={plant.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              onClick={() => viewPlantDetails(plant.id)}
              className="flex items-center gap-4 bg-[#e9f0e1] dark:bg-[#2c3228] p-3.5 rounded-[28px] hover:bg-[#e3ebdc] dark:hover:bg-[#2c3228]/80 transition-all cursor-pointer shadow-sm border border-transparent hover:border-[#0d631b]/20 group"
            >
              <div className="w-18 h-18 organic-mask overflow-hidden bg-[#abf4ac] dark:bg-[#286b33] shrink-0">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  alt={language === 'ur' ? plant.nameUrdu : plant.name}
                  src={plant.image} 
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-base md:text-lg text-[#171d14] dark:text-[#ecf3e4] truncate group-hover:text-[#0d631b] dark:group-hover:text-[#a3f69c] transition-colors">
                    {language === 'ur' ? `${plant.name} (${plant.nameUrdu})` : plant.name}
                  </h4>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                    plant.status === 'Healthy' || plant.status === 'Perfect' || plant.status === 'Strong'
                      ? 'bg-[#a3f69c] text-[#002204]'
                      : plant.status === 'Needs Care'
                      ? 'bg-[#ba1a1a] text-[#ffffff]'
                      : 'bg-[#ffdeac] text-[#281900]'
                  }`}>
                    {language === 'ur' ? plant.statusUrdu : plant.status}
                  </span>
                </div>
                <p className="text-xs text-[#40493d] dark:text-[#bfcaba] mt-1">
                  {language === 'ur' ? plant.ageUrdu : plant.age}
                </p>
              </div>
              <button className="w-10 h-10 flex items-center justify-center text-[#40493d] dark:text-[#bfcaba] group-hover:translate-x-1 transition-transform">
                <span className="material-symbols-outlined">
                  {language === 'ur' ? 'chevron_left' : 'chevron_right'}
                </span>
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed right-6 bottom-24 z-40">
        <button 
          onClick={() => setIsAddPlantModalOpen(true)}
          className="bg-[#0d631b] dark:bg-[#a3f69c] text-[#ffffff] dark:text-[#002204] flex items-center gap-2.5 px-6 py-4 rounded-[28px] shadow-xl hover:shadow-2xl active:scale-95 transition-all duration-200 group hover:brightness-110"
        >
          <span className="material-symbols-outlined fill-icon text-2xl group-hover:rotate-90 transition-transform duration-300">add</span>
          <span className="font-bold text-sm tracking-wide">{t('addPlant')}</span>
        </button>
      </div>
    </div>
  );
};
