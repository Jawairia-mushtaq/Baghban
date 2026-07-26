import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { motion, AnimatePresence } from 'motion/react';
import { CareGuideTab, CommonIssue } from '../../types';

export const PlantDetailsScreen: React.FC = () => {
  const { 
    userPlants, 
    selectedPlantId, 
    setCurrentScreen, 
    language, 
    t, 
    triggerConfetti 
  } = useApp();

  const [activeTab, setActiveTab] = useState<CareGuideTab['id']>('overview');
  const [selectedIssue, setSelectedIssue] = useState<CommonIssue | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const plant = userPlants.find(p => p.id === selectedPlantId) || userPlants[0];

  const handleLogWater = () => {
    triggerConfetti();
    setToastMessage(t('successLogged'));
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleSnooze = () => {
    setToastMessage(language === 'ur' ? 'یاد دہانی 24 گھنٹوں کے لیے مؤخر کر دی گئی' : 'Reminder snoozed for 24 hours!');
    setTimeout(() => setToastMessage(null), 3000);
  };

  const tabs: Array<{ id: CareGuideTab['id']; labelKey: string }> = [
    { id: 'overview', labelKey: 'overview' },
    { id: 'watering', labelKey: 'watering' },
    { id: 'sunlight', labelKey: 'sunlight' },
    { id: 'soil', labelKey: 'soil' },
    { id: 'fertilizer', labelKey: 'fertilizer' }
  ];

  const tabData = plant.careGuide[activeTab];

  return (
    <div className="max-w-4xl mx-auto pb-24 relative">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-[#0d631b] dark:bg-[#a3f69c] text-white dark:text-[#002204] px-6 py-3 rounded-full shadow-2xl font-bold text-sm flex items-center gap-2"
          >
            <span className="material-symbols-outlined fill-icon text-lg">check_circle</span>
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative mt-2 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Main Plant Photo */}
          <div className="relative aspect-square md:aspect-[4/5] w-full overflow-hidden rounded-[40px] shadow-xl bg-[#abf4ac]/20 dark:bg-[#286b33]/20">
            <img 
              className="w-full h-full object-cover" 
              alt={language === 'ur' ? plant.nameUrdu : plant.name}
              src={plant.image} 
            />
            <div className="absolute bottom-6 left-6 right-6 glass-card p-6 rounded-[28px] shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0d631b] dark:text-[#a3f69c] leading-tight">
                    {language === 'ur' ? `${plant.name} (${plant.nameUrdu})` : plant.name}
                  </h2>
                  <p className="text-sm text-[#40493d] dark:text-[#bfcaba] mt-0.5 italic font-serif">
                    {plant.scientificName}
                  </p>
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                  plant.status === 'Healthy' || plant.status === 'Perfect' || plant.status === 'Strong'
                    ? 'bg-[#0d631b] text-white'
                    : 'bg-[#ba1a1a] text-white'
                }`}>
                  {language === 'ur' ? plant.statusUrdu : plant.status}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {/* Quick Stats Bento */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#abf4ac] dark:bg-[#286b33] p-5 rounded-[28px] flex flex-col items-center text-center shadow-sm">
                <span className="material-symbols-outlined text-[#2e7238] dark:text-[#ffffff] text-3xl mb-2 fill-icon">favorite</span>
                <p className="text-xs font-bold text-[#2e7238] dark:text-[#ffffff] opacity-80 uppercase tracking-wider">{t('health')}</p>
                <p className="font-bold text-lg text-[#002107] dark:text-[#ffffff]">
                  {language === 'ur' ? plant.healthUrdu : plant.health}
                </p>
              </div>

              <div className="bg-[#e3ebdc] dark:bg-[#2c3228] p-5 rounded-[28px] flex flex-col items-center text-center shadow-sm">
                <span className="material-symbols-outlined text-[#0d631b] dark:text-[#a3f69c] text-3xl mb-2 fill-icon">water_drop</span>
                <p className="text-xs font-bold text-[#40493d] dark:text-[#bfcaba] opacity-80 uppercase tracking-wider">{t('water')}</p>
                <p className="font-bold text-lg text-[#171d14] dark:text-[#ecf3e4]">
                  {language === 'ur' ? plant.waterFrequencyUrdu : plant.waterFrequency}
                </p>
              </div>

              <div className="bg-[#e3ebdc] dark:bg-[#2c3228] p-5 rounded-[28px] flex flex-col items-center text-center shadow-sm">
                <span className="material-symbols-outlined text-[#734e00] dark:text-[#ffdeac] text-3xl mb-2 fill-icon">light_mode</span>
                <p className="text-xs font-bold text-[#40493d] dark:text-[#bfcaba] opacity-80 uppercase tracking-wider">{t('sunlight')}</p>
                <p className="font-bold text-lg text-[#171d14] dark:text-[#ecf3e4]">
                  {language === 'ur' ? plant.sunlightUrdu : plant.sunlight}
                </p>
              </div>

              <div className="bg-[#ffdeac] dark:bg-[#734e00] p-5 rounded-[28px] flex flex-col items-center text-center shadow-sm">
                <span className="material-symbols-outlined text-[#604100] dark:text-[#ffdeac] text-3xl mb-2 fill-icon">calendar_month</span>
                <p className="text-xs font-bold text-[#604100] dark:text-[#ffdeac] opacity-80 uppercase tracking-wider">{t('nextFertilize')}</p>
                <p className="font-bold text-lg text-[#281900] dark:text-[#ffffff]">
                  {language === 'ur' ? plant.nextFertilizeUrdu : plant.nextFertilize}
                </p>
              </div>
            </div>

            {/* Reminder Card */}
            <div className="bg-[#eff6e7] dark:bg-[#2c3228] p-5 rounded-[28px] border border-[#bfcaba]/30 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#286b33]/15 dark:bg-[#a3f69c]/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#286b33] dark:text-[#a3f69c]">notifications_active</span>
                </div>
                <div>
                  <p className="text-sm md:text-base font-medium text-[#171d14] dark:text-[#ecf3e4]">
                    {language === 'ur' ? plant.lastWateredUrdu : plant.lastWatered}
                  </p>
                  <p className="text-xs font-semibold text-[#40493d] dark:text-[#bfcaba]">
                    {language === 'ur' ? plant.recommendedWaterLeftUrdu : plant.recommendedWaterLeft}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setCurrentScreen('calendar')}
                className="text-xs font-bold text-[#0d631b] dark:text-[#a3f69c] hover:underline"
              >
                {t('seeAll')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Care Guide Tabs */}
      <section className="mt-10">
        <h3 className="text-xl font-bold text-[#171d14] dark:text-[#ecf3e4] mb-5">{t('careGuide')}</h3>
        
        <div className="flex overflow-x-auto gap-2 pb-3 no-scrollbar">
          {tabs.map((tab) => {
            const isTabActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-bold whitespace-nowrap transition-all ${
                  isTabActive
                    ? 'bg-[#abf4ac] dark:bg-[#286b33] text-[#2e7238] dark:text-[#ffffff] shadow-sm'
                    : 'text-[#40493d] dark:text-[#bfcaba] hover:bg-[#dee5d6]/50 dark:hover:bg-[#2c3228]/50'
                }`}
              >
                {t(tab.labelKey)}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mt-4 p-6 md:p-8 bg-[#e9f0e1] dark:bg-[#2c3228] rounded-[32px] min-h-[200px] shadow-sm border border-[#707a6c]/10"
          >
            <p className="text-sm md:text-base text-[#40493d] dark:text-[#bfcaba] leading-relaxed">
              {language === 'ur' ? tabData.textUrdu : tabData.text}
            </p>
            <ul className="mt-5 space-y-3">
              {(language === 'ur' ? tabData.listUrdu : tabData.list).map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#0d631b] dark:text-[#a3f69c] text-base mt-0.5 fill-icon shrink-0">check_circle</span>
                  <span className="text-sm md:text-base text-[#171d14] dark:text-[#ecf3e4] font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Diseases & Common Issues */}
      {plant.commonIssues && plant.commonIssues.length > 0 && (
        <section className="mt-10">
          <h3 className="text-xl font-bold text-[#171d14] dark:text-[#ecf3e4] mb-5">{t('commonIssues')}</h3>
          {plant.commonIssues.map((issue, idx) => (
            <div 
              key={idx}
              className="bg-[#ffdad6]/40 dark:bg-[#93000a]/20 border border-[#ba1a1a]/20 p-6 rounded-[28px] flex flex-col md:flex-row gap-6 items-center shadow-sm"
            >
              <div className="w-24 h-24 shrink-0 rounded-[24px] overflow-hidden organic-mask bg-[#ba1a1a]/10">
                <img 
                  className="w-full h-full object-cover" 
                  alt={language === 'ur' ? issue.nameUrdu : issue.name}
                  src={issue.image} 
                />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h4 className="text-lg font-bold text-[#ba1a1a] dark:text-[#ffdad6] mb-1">
                  {language === 'ur' ? issue.nameUrdu : issue.name}
                </h4>
                <p className="text-sm text-[#40493d] dark:text-[#bfcaba]">
                  {language === 'ur' ? issue.descriptionUrdu : issue.description}
                </p>
              </div>
              <button 
                onClick={() => setSelectedIssue(issue)}
                className="px-6 py-3 rounded-full bg-[#ba1a1a] text-white font-bold text-xs md:text-sm flex items-center gap-2 hover:shadow-lg transition-all active:scale-95 shrink-0"
              >
                <span className="material-symbols-outlined text-[18px]">medical_services</span>
                <span>{t('treatmentPlan')}</span>
              </button>
            </div>
          ))}
        </section>
      )}

      {/* Floating Bottom Action Sheet */}
      <div className="fixed bottom-0 left-0 right-0 p-4 flex justify-center items-end pointer-events-none z-40 max-w-4xl mx-auto">
        <div className="w-full max-w-md bg-[#dee5d6] dark:bg-[#2c3228] shadow-2xl rounded-[32px] p-4 flex gap-3 pointer-events-auto border border-white/20 dark:border-white/10">
          <button 
            onClick={handleLogWater}
            className="flex-1 h-14 rounded-full bg-[#0d631b] dark:bg-[#a3f69c] text-white dark:text-[#002204] font-bold text-sm flex items-center justify-center gap-2 active:scale-95 transition-all shadow-md hover:brightness-110"
          >
            <span className="material-symbols-outlined fill-icon text-[20px]">water_drop</span>
            <span>{t('logWater')}</span>
          </button>
          <button 
            onClick={handleSnooze}
            className="flex-1 h-14 rounded-full border border-[#707a6c]/40 text-[#0d631b] dark:text-[#a3f69c] font-bold text-sm flex items-center justify-center gap-2 active:scale-95 transition-all bg-[#f5fced] dark:bg-[#1a1c19] hover:bg-[#dee5d6]/50"
          >
            <span className="material-symbols-outlined text-[20px]">snooze</span>
            <span>{t('snoozeReminder')}</span>
          </button>
        </div>
      </div>

      {/* Treatment Plan Modal */}
      <AnimatePresence>
        {selectedIssue && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedIssue(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#f5fced] dark:bg-[#1a1c19] rounded-[32px] p-6 md:p-8 max-w-md w-full shadow-2xl border border-[#707a6c]/20 max-h-[85vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2 text-[#ba1a1a] font-bold text-lg">
                  <span className="material-symbols-outlined">healing</span>
                  <h4>{language === 'ur' ? selectedIssue.nameUrdu : selectedIssue.name}</h4>
                </div>
                <button 
                  onClick={() => setSelectedIssue(null)}
                  className="w-8 h-8 rounded-full bg-[#dee5d6]/50 dark:bg-[#2c3228] flex items-center justify-center"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <div className="w-full h-44 rounded-2xl overflow-hidden mb-4 bg-[#ba1a1a]/10">
                <img src={selectedIssue.image} alt="Disease sample" className="w-full h-full object-cover" />
              </div>

              <p className="text-sm text-[#40493d] dark:text-[#bfcaba] mb-5">
                {language === 'ur' ? selectedIssue.descriptionUrdu : selectedIssue.description}
              </p>

              <h5 className="font-bold text-base text-[#171d14] dark:text-[#ecf3e4] mb-3">
                {language === 'ur' ? 'تجویز کردہ علاج:' : 'Recommended Action Steps:'}
              </h5>

              <div className="space-y-3">
                {(language === 'ur' ? selectedIssue.treatmentUrdu : selectedIssue.treatment).map((step, index) => (
                  <div key={index} className="flex items-start gap-3 bg-[#e9f0e1] dark:bg-[#2c3228] p-3.5 rounded-2xl">
                    <span className="w-6 h-6 rounded-full bg-[#0d631b] dark:bg-[#a3f69c] text-white dark:text-[#002204] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-xs md:text-sm text-[#171d14] dark:text-[#ecf3e4] font-medium">{step}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  setSelectedIssue(null);
                  triggerConfetti();
                  setToastMessage(language === 'ur' ? 'علاج شروع کر دیا گیا!' : 'Treatment plan started!');
                  setTimeout(() => setToastMessage(null), 3000);
                }}
                className="w-full mt-6 py-3.5 bg-[#0d631b] dark:bg-[#a3f69c] text-white dark:text-[#002204] font-bold text-sm rounded-full shadow-lg active:scale-95 transition-all"
              >
                {language === 'ur' ? 'علاج کا شیڈول شروع کریں' : 'Start Treatment Schedule'}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
