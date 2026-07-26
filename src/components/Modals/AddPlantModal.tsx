import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { PlantCategory, Plant } from '../../types';
import { motion, AnimatePresence } from 'motion/react';

export const AddPlantModal: React.FC = () => {
  const { isAddPlantModalOpen, setIsAddPlantModalOpen, addUserPlant, language, t, triggerConfetti } = useApp();
  const [name, setName] = useState('');
  const [scientific, setScientific] = useState('');
  const [category, setCategory] = useState<PlantCategory>('indoor');

  if (!isAddPlantModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newPlant: Plant = {
      id: `custom-${Date.now()}`,
      name: name.trim(),
      nameUrdu: name.trim(),
      scientificName: scientific.trim() || 'Botanical specimen',
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTNCppHvoifsEWhbZ_nzvIKChnafToB3Xh3cCprx--NJaGENTrsZTQZQVn9UlZVWe8HBfb2bC6GqP1gkl8duD6vJTdk3Y3AGl7XSABLsnhUliEl5dxH3fa1c8W0jddTkcewz3zfO37ntwrC9MEnWtxYdayYTTys-w1hU8CmnfW5Pc411dD7bva3RcZ3Ycf25ZWOt9u_a7ZemCgJPvSGzEDDupbQa2X3RnEeJFPBNxcpJi5e-YBHTit6NZSWoTbwlMq0hP_Sp8VCxU",
      category,
      status: 'Healthy',
      statusUrdu: 'صحت مند',
      health: 'Good (90% Chlorophyll)',
      healthUrdu: 'بہترین (90% کلوروفیل)',
      waterFrequency: '5 Days',
      waterFrequencyUrdu: '5 دن',
      lastWatered: 'Today',
      lastWateredUrdu: 'آج',
      recommendedWaterLeft: 'Optimal',
      recommendedWaterLeftUrdu: "بہترین",
      sunlight: 'Indirect Sun',
      sunlightUrdu: 'بالواسطہ دھوپ',
      nextFertilize: 'In 2 weeks',
      nextFertilizeUrdu: '2 ہفتوں میں',
      age: 'New Plant',
      ageUrdu: 'نیا پودا',
      careGuide: {
        overview: { text: "Keep soil moderately moist and provide filtered sunlight.", textUrdu: "مٹی کو درمیانہ نم رکھیں اور بالواسطہ دھوپ دیں۔", list: ["Water weekly", "Avoid direct heat"], listUrdu: ["ہفتہ وار پانی دیں", "تیز دھوپ سے بچائیں"] },
        watering: { text: "Water when top inch of soil is dry.", textUrdu: "جب اوپر کی مٹی خشک ہو جائے تو پانی دیں۔", list: ["Check drainage"], listUrdu: ["نکاس چیک کریں"] },
        sunlight: { text: "Bright indirect light.", textUrdu: "روشن بالواسطہ روشنی۔", list: ["6 hours daily"], listUrdu: ["روزانہ 6 گھنٹے"] },
        soil: { text: "Standard well-draining potting mix.", textUrdu: "معیاری ہوا دار مٹی۔", list: ["Perlite enriched"], listUrdu: ["پرلائٹ شامل کریں"] },
        fertilizer: { text: "Monthly balanced fertilizer.", textUrdu: "ماہانہ متوازن کھاد۔", list: ["Spring season"], listUrdu: ["بہار کے موسم میں"] }
      }
    };

    addUserPlant(newPlant);
    triggerConfetti();
    setIsAddPlantModalOpen(false);
    setName('');
    setScientific('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-[#f5fced] dark:bg-[#1a1c19] rounded-[32px] p-6 max-w-md w-full shadow-2xl border border-[#707a6c]/20">
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-xl font-bold text-[#171d14] dark:text-[#ecf3e4]">{t('addPlant')}</h3>
          <button onClick={() => setIsAddPlantModalOpen(false)} className="w-8 h-8 rounded-full bg-[#dee5d6]/50 flex items-center justify-center">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase mb-1">{t('plantName')}</label>
            <input required type="text" placeholder={language === 'ur' ? "مثلاً: گلاب" : "e.g., Peace Lily"} value={name} onChange={e => setName(e.target.value)} className="w-full px-4 py-3 rounded-2xl bg-[#eff6e7] dark:bg-[#2c3228] border border-[#bfcaba]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d631b]" />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase mb-1">{language === 'ur' ? 'سائنسی نام' : 'Scientific Name'}</label>
            <input type="text" placeholder="e.g., Spathiphyllum" value={scientific} onChange={e => setScientific(e.target.value)} className="w-full px-4 py-3 rounded-2xl bg-[#eff6e7] dark:bg-[#2c3228] border border-[#bfcaba]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d631b]" />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase mb-1">{t('selectCategory')}</label>
            <div className="grid grid-cols-2 gap-2">
              {(['indoor', 'outdoor', 'flowering', 'fruit'] as PlantCategory[]).map(cat => (
                <button key={cat} type="button" onClick={() => setCategory(cat)} className={`py-2 rounded-xl text-xs font-bold capitalize border transition-all ${category === cat ? 'bg-[#0d631b] text-white border-[#0d631b]' : 'border-[#bfcaba]/40 text-[#40493d] dark:text-[#bfcaba]'}`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="pt-4 flex gap-3">
            <button type="button" onClick={() => setIsAddPlantModalOpen(false)} className="flex-1 py-3 rounded-full border border-[#bfcaba] font-bold text-sm">{t('cancel')}</button>
            <button type="submit" className="flex-1 py-3 rounded-full bg-[#0d631b] text-white font-bold text-sm shadow-md">{t('save')}</button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};
