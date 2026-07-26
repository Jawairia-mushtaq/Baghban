import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { motion } from 'motion/react';

export const JournalModal: React.FC = () => {
  const { isJournalModalOpen, setIsJournalModalOpen, journalEntries, addJournalEntry, userPlants, language, t, triggerConfetti } = useApp();
  const [selectedPlant, setSelectedPlant] = useState(userPlants[0]?.name || 'Garden');
  const [note, setNote] = useState('');

  if (!isJournalModalOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!note.trim()) return;
    addJournalEntry(selectedPlant, note.trim());
    triggerConfetti();
    setNote('');
    setIsJournalModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-[#f5fced] dark:bg-[#1a1c19] rounded-[32px] p-6 max-w-md w-full shadow-2xl border border-[#707a6c]/20 max-h-[85vh] flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-[#171d14] dark:text-[#ecf3e4] flex items-center gap-2">
            <span className="material-symbols-outlined text-[#0d631b]">edit_note</span>
            <span>{t('addJournal')}</span>
          </h3>
          <button onClick={() => setIsJournalModalOpen(false)} className="w-8 h-8 rounded-full bg-[#dee5d6]/50 flex items-center justify-center">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <form onSubmit={handleSave} className="space-y-3 mb-6">
          <div>
            <label className="block text-xs font-bold uppercase mb-1">{t('plantName')}</label>
            <select value={selectedPlant} onChange={e => setSelectedPlant(e.target.value)} className="w-full px-4 py-2.5 rounded-2xl bg-[#eff6e7] dark:bg-[#2c3228] border border-[#bfcaba]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d631b]">
              {userPlants.map(p => (
                <option key={p.id} value={p.name}>{language === 'ur' ? `${p.name} (${p.nameUrdu})` : p.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase mb-1">{language === 'ur' ? 'نوٹس' : 'Notes'}</label>
            <textarea required rows={3} placeholder={t('enterNotes')} value={note} onChange={e => setNote(e.target.value)} className="w-full px-4 py-2.5 rounded-2xl bg-[#eff6e7] dark:bg-[#2c3228] border border-[#bfcaba]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d631b] resize-none" />
          </div>
          <button type="submit" className="w-full py-3 rounded-full bg-[#0d631b] text-white font-bold text-sm shadow-md hover:brightness-110">{t('save')}</button>
        </form>

        <h4 className="text-xs font-bold uppercase text-[#40493d] dark:text-[#bfcaba] mb-2">{language === 'ur' ? 'حالیہ اندراجات' : 'Recent Entries'}</h4>
        <div className="overflow-y-auto space-y-2.5 pr-1 flex-grow">
          {journalEntries.map(entry => (
            <div key={entry.id} className="bg-[#eff6e7] dark:bg-[#2c3228] p-3.5 rounded-2xl border border-[#bfcaba]/30 text-xs">
              <div className="flex justify-between font-bold text-[#0d631b] dark:text-[#a3f69c] mb-1">
                <span>{entry.plantName}</span>
                <span className="text-[10px] text-[#40493d] dark:text-[#bfcaba] font-normal">{entry.date}</span>
              </div>
              <p className="text-[#171d14] dark:text-[#ecf3e4] leading-relaxed">{entry.text}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
