import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { USER_PROFILE_IMAGES } from '../../data/plants';
import { ThemeMode } from '../../types';
import { motion, AnimatePresence } from 'motion/react';

export const SettingsScreen: React.FC = () => {
  const { language, setLanguage, theme, setTheme, t, triggerConfetti, userProfile, updateUserProfile } = useApp();
  const [waterNotifs, setWaterNotifs] = useState<boolean>(true);
  const [aiTipsNotifs, setAiTipsNotifs] = useState<boolean>(true);
  const [appUpdateNotifs, setAppUpdateNotifs] = useState<boolean>(false);
  const [toast, setToast] = useState<string | null>(null);

  // Profile Edit State
  const [isEditingProfile, setIsEditingProfile] = useState<boolean>(false);
  const [editName, setEditName] = useState<string>("");
  const [editNameUrdu, setEditNameUrdu] = useState<string>("");
  const [editEmail, setEditEmail] = useState<string>("");
  const [editLocation, setEditLocation] = useState<string>("");
  const [editLocationUrdu, setEditLocationUrdu] = useState<string>("");
  const [editAvatar, setEditAvatar] = useState<string>("");

  const PRESET_AVATARS = [
    USER_PROFILE_IMAGES.settings,
    USER_PROFILE_IMAGES.main,
    USER_PROFILE_IMAGES.calendar,
    USER_PROFILE_IMAGES.library
  ];

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const handleOpenProfileEditor = () => {
    setEditName(userProfile?.name || "");
    setEditNameUrdu(userProfile?.nameUrdu || "");
    setEditEmail(userProfile?.email || "");
    setEditLocation(userProfile?.location || "");
    setEditLocationUrdu(userProfile?.locationUrdu || "");
    setEditAvatar(userProfile?.avatar || USER_PROFILE_IMAGES.settings);
    setIsEditingProfile(true);
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateUserProfile({
      name: editName.trim() || "User",
      nameUrdu: editNameUrdu.trim() || "صارف",
      email: editEmail.trim(),
      location: editLocation.trim(),
      locationUrdu: editLocationUrdu.trim(),
      avatar: editAvatar
    });
    setIsEditingProfile(false);
    triggerConfetti();
    showToast(language === 'ur' ? 'پروفائل کامیابی سے اپڈیٹ ہو گیا!' : 'Profile updated successfully!');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setEditAvatar(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProClick = () => {
    triggerConfetti();
    showToast(language === 'ur' ? 'ورڈنٹ پرو کی تمام خصوصیات انلاک ہیں!' : 'Verdant Pro benefits active & unlocked!');
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-12 relative">
      {/* Toast */}
      {toast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-[#0d631b] dark:bg-[#a3f69c] text-white dark:text-[#002204] px-6 py-3 rounded-full shadow-2xl font-bold text-sm flex items-center gap-2">
          <span className="material-symbols-outlined fill-icon text-lg">check_circle</span>
          <span>{toast}</span>
        </div>
      )}

      {/* User Hero & Pro Badge */}
      <section className="bg-[#abf4ac] dark:bg-[#286b33] rounded-[32px] p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm relative overflow-hidden">
        <div 
          onClick={handleOpenProfileEditor}
          className="w-24 h-24 rounded-[28px] overflow-hidden border-4 border-white/40 shadow-md shrink-0 relative group cursor-pointer"
          title={language === 'ur' ? 'تصویر تبدیل کریں' : 'Change photo'}
        >
          <img 
            src={userProfile?.avatar || USER_PROFILE_IMAGES.settings} 
            alt={userProfile?.name || "User profile"} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-xl">edit</span>
          </div>
        </div>

        <div className="flex-grow text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            <h2 className="text-2xl md:text-3xl font-bold text-[#002107] dark:text-[#ffffff] flex items-center gap-2">
              <span>{language === 'ur' ? (userProfile?.nameUrdu || 'عامر خان') : (userProfile?.name || 'Amir Khan')}</span>
              <button 
                onClick={handleOpenProfileEditor}
                className="w-7 h-7 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center text-[#002107] dark:text-white transition-colors active:scale-95"
                title={language === 'ur' ? 'پروفائل تبدیل کریں' : 'Edit profile'}
              >
                <span className="material-symbols-outlined text-sm">edit</span>
              </button>
            </h2>
            <span className="bg-[#002107] text-[#abf4ac] text-[10px] font-bold px-3 py-1 rounded-full tracking-wider uppercase">
              {t('premiumMember')}
            </span>
          </div>
          <p className="text-sm text-[#002107]/80 dark:text-[#ffffff]/90 mt-1 flex items-center justify-center md:justify-start gap-1">
            <span className="material-symbols-outlined text-base">location_on</span>
            <span>{language === 'ur' ? (userProfile?.locationUrdu || 'لاہور، پاکستان') : (userProfile?.location || 'Lahore, Pakistan')}</span>
          </p>
          <p className="text-xs text-[#002107]/70 dark:text-[#ffffff]/80 mt-0.5">
            {userProfile?.email || 'amir.khan@example.com'}
          </p>
        </div>

        <button
          onClick={handleProClick}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-md px-5 py-3 rounded-[24px] border border-white/40 flex items-center gap-3 transition-all active:scale-95 shrink-0 shadow-sm"
        >
          <span className="material-symbols-outlined text-[#002107] dark:text-[#ffffff] text-2xl fill-icon">workspace_premium</span>
          <div className="text-left">
            <h4 className="font-bold text-xs md:text-sm text-[#002107] dark:text-[#ffffff]">
              {t('verdantProActive')}
            </h4>
            <p className="text-[11px] text-[#002107]/80 dark:text-[#ffffff]/90">
              {t('renewsOn')}
            </p>
          </div>
        </button>
      </section>

      {/* Account Section */}
      <section className="bg-[#eff6e7] dark:bg-[#2c3228] rounded-[28px] p-6 shadow-sm border border-[#bfcaba]/30 space-y-4">
        <h3 className="font-bold text-lg text-[#171d14] dark:text-[#ecf3e4]">{t('account')}</h3>
        
        <div 
          onClick={handleOpenProfileEditor}
          className="flex items-center justify-between p-3.5 rounded-2xl hover:bg-[#dee5d6]/50 dark:hover:bg-[#40493d]/30 transition-colors cursor-pointer group"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-[#abf4ac]/30 dark:bg-[#286b33]/30 flex items-center justify-center text-[#0d631b] dark:text-[#a3f69c]">
              <span className="material-symbols-outlined">person</span>
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#171d14] dark:text-[#ecf3e4] group-hover:text-[#0d631b] dark:group-hover:text-[#a3f69c] transition-colors">{t('profileInfo')}</h4>
              <p className="text-xs text-[#40493d] dark:text-[#bfcaba]">{t('updateNameEmail')}</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-[#40493d] dark:text-[#bfcaba]">chevron_right</span>
        </div>

        <div 
          onClick={() => showToast(language === 'ur' ? 'آپ کی سبسکرپشن فعال ہے' : 'Subscription active via Apple/Google Store')}
          className="flex items-center justify-between p-3.5 rounded-2xl hover:bg-[#dee5d6]/50 dark:hover:bg-[#40493d]/30 transition-colors cursor-pointer group"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-[#ffdeac]/40 dark:bg-[#734e00]/40 flex items-center justify-center text-[#926500] dark:text-[#ffdeac]">
              <span className="material-symbols-outlined">credit_card</span>
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#171d14] dark:text-[#ecf3e4] group-hover:text-[#0d631b] dark:group-hover:text-[#a3f69c] transition-colors">{t('subManagement')}</h4>
              <p className="text-xs text-[#40493d] dark:text-[#bfcaba]">{t('manageBilling')}</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-[#40493d] dark:text-[#bfcaba]">chevron_right</span>
        </div>
      </section>

      {/* Preferences Section */}
      <section className="bg-[#eff6e7] dark:bg-[#2c3228] rounded-[28px] p-6 shadow-sm border border-[#bfcaba]/30 space-y-6">
        <h3 className="font-bold text-lg text-[#171d14] dark:text-[#ecf3e4]">{t('preferences')}</h3>

        {/* Language Selection */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-2">
          <div>
            <h4 className="font-bold text-sm text-[#171d14] dark:text-[#ecf3e4]">{t('appLanguage')}</h4>
            <p className="text-xs text-[#40493d] dark:text-[#bfcaba]">Bilingual support for Urdu and English</p>
          </div>
          <div className="flex bg-[#dee5d6] dark:bg-[#1a1c19] p-1 rounded-full self-start md:self-auto border border-[#bfcaba]/40">
            <button
              onClick={() => setLanguage('en')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                language === 'en'
                  ? 'bg-[#0d631b] text-white shadow-sm'
                  : 'text-[#40493d] dark:text-[#bfcaba] hover:text-[#171d14]'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage('ur')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                language === 'ur'
                  ? 'bg-[#0d631b] text-white shadow-sm'
                  : 'text-[#40493d] dark:text-[#bfcaba] hover:text-[#171d14]'
              }`}
            >
              اردو (Urdu)
            </button>
          </div>
        </div>

        {/* Theme Selection */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-4 border-t border-[#707a6c]/10">
          <div>
            <h4 className="font-bold text-sm text-[#171d14] dark:text-[#ecf3e4]">{t('displayTheme')}</h4>
            <p className="text-xs text-[#40493d] dark:text-[#bfcaba]">Choose between light, dark, or system color schemes</p>
          </div>
          <div className="flex bg-[#dee5d6] dark:bg-[#1a1c19] p-1 rounded-full self-start md:self-auto border border-[#bfcaba]/40">
            {(['light', 'dark', 'system'] as ThemeMode[]).map((m) => (
              <button
                key={m}
                onClick={() => setTheme(m)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 transition-all capitalize ${
                  theme === m
                    ? 'bg-[#0d631b] text-white shadow-sm'
                    : 'text-[#40493d] dark:text-[#bfcaba]'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">
                  {m === 'light' ? 'light_mode' : m === 'dark' ? 'dark_mode' : 'settings_brightness'}
                </span>
                <span>{t(m)}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* System & Notifications Section */}
      <section className="bg-[#eff6e7] dark:bg-[#2c3228] rounded-[28px] p-6 shadow-sm border border-[#bfcaba]/30 space-y-5">
        <h3 className="font-bold text-lg text-[#171d14] dark:text-[#ecf3e4]">{t('systemNotifications')}</h3>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-bold text-sm text-[#171d14] dark:text-[#ecf3e4]">{t('waterReminders')}</h4>
            <p className="text-xs text-[#40493d] dark:text-[#bfcaba]">{t('soilMoistureAlerts')}</p>
          </div>
          <button
            type="button"
            onClick={() => setWaterNotifs(!waterNotifs)}
            className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out relative ${
              waterNotifs ? 'bg-[#0d631b]' : 'bg-[#bfcaba]'
            }`}
          >
            <div className={`w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-200 ${
              waterNotifs ? 'translate-x-6' : 'translate-x-0'
            }`} />
          </button>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-[#707a6c]/10">
          <div>
            <h4 className="font-bold text-sm text-[#171d14] dark:text-[#ecf3e4]">{t('aiGrowingTips')}</h4>
            <p className="text-xs text-[#40493d] dark:text-[#bfcaba]">{t('dailyAdvice')}</p>
          </div>
          <button
            type="button"
            onClick={() => setAiTipsNotifs(!aiTipsNotifs)}
            className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out relative ${
              aiTipsNotifs ? 'bg-[#0d631b]' : 'bg-[#bfcaba]'
            }`}
          >
            <div className={`w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-200 ${
              aiTipsNotifs ? 'translate-x-6' : 'translate-x-0'
            }`} />
          </button>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-[#707a6c]/10">
          <div>
            <h4 className="font-bold text-sm text-[#171d14] dark:text-[#ecf3e4]">{t('appUpdates')}</h4>
            <p className="text-xs text-[#40493d] dark:text-[#bfcaba]">{t('featureNews')}</p>
          </div>
          <button
            type="button"
            onClick={() => setAppUpdateNotifs(!appUpdateNotifs)}
            className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out relative ${
              appUpdateNotifs ? 'bg-[#0d631b]' : 'bg-[#bfcaba]'
            }`}
          >
            <div className={`w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-200 ${
              appUpdateNotifs ? 'translate-x-6' : 'translate-x-0'
            }`} />
          </button>
        </div>
      </section>

      {/* Footer / Version */}
      <footer className="text-center pt-4 pb-8 space-y-1">
        <p className="text-xs font-bold text-[#40493d] dark:text-[#bfcaba] tracking-wide">
          {t('madeWithLove')}
        </p>
        <p className="text-[11px] text-[#707a6c] font-mono">
          Baghban v2.4.0 (Build 894) • AI Studio
        </p>
      </footer>

      {/* Profile Editor Modal */}
      <AnimatePresence>
        {isEditingProfile && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#f5fced] dark:bg-[#1a1c19] border border-[#bfcaba]/30 rounded-[32px] p-6 md:p-8 w-full max-w-lg shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between border-b border-[#bfcaba]/20 pb-4">
                <h3 className="text-xl font-bold text-[#171d14] dark:text-[#ecf3e4] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#0d631b] dark:text-[#a3f69c]">manage_accounts</span>
                  <span>{language === 'ur' ? 'پروفائل تبدیل کریں' : 'Edit Profile'}</span>
                </h3>
                <button
                  type="button"
                  onClick={() => setIsEditingProfile(false)}
                  className="w-10 h-10 rounded-full hover:bg-[#dee5d6]/60 dark:hover:bg-[#2c3228]/60 flex items-center justify-center text-[#40493d] dark:text-[#bfcaba] transition-colors"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <form onSubmit={handleSaveProfile} className="space-y-5">
                {/* Avatar Picker */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#0d631b]/30 dark:border-[#a3f69c]/40 shadow-inner">
                    <img src={editAvatar} alt="Avatar preview" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex items-center gap-2 flex-wrap justify-center">
                    {PRESET_AVATARS.map((url, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setEditAvatar(url)}
                        className={`w-9 h-9 rounded-full overflow-hidden border-2 transition-transform ${
                          editAvatar === url ? 'border-[#0d631b] dark:border-[#a3f69c] scale-110 shadow-sm' : 'border-transparent opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img src={url} alt={`Preset ${idx + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                    <label className="w-9 h-9 rounded-full bg-[#dee5d6] dark:bg-[#2c3228] border border-[#bfcaba]/50 flex items-center justify-center text-[#0d631b] dark:text-[#a3f69c] cursor-pointer hover:bg-[#a3f69c]/30 transition-colors" title="Upload Photo">
                      <span className="material-symbols-outlined text-sm">upload_file</span>
                      <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                    </label>
                  </div>
                </div>

                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#40493d] dark:text-[#bfcaba] block">
                      {language === 'ur' ? 'نام (انگریزی)' : 'Name (English)'}
                    </label>
                    <input
                      type="text"
                      required
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#2c3228] border border-[#bfcaba]/40 text-sm font-medium text-[#171d14] dark:text-[#ecf3e4] focus:outline-none focus:border-[#0d631b] dark:focus:border-[#a3f69c] transition-colors"
                      placeholder="e.g. Amir Khan"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#40493d] dark:text-[#bfcaba] block">
                      {language === 'ur' ? 'نام (اردو)' : 'Name (Urdu)'}
                    </label>
                    <input
                      type="text"
                      required
                      value={editNameUrdu}
                      onChange={(e) => setEditNameUrdu(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#2c3228] border border-[#bfcaba]/40 text-sm font-medium text-[#171d14] dark:text-[#ecf3e4] focus:outline-none focus:border-[#0d631b] dark:focus:border-[#a3f69c] transition-colors"
                      placeholder="مثلاً عامر خان"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#40493d] dark:text-[#bfcaba] block">
                    {language === 'ur' ? 'ای میل ایڈریس' : 'Email Address'}
                  </label>
                  <input
                    type="email"
                    required
                    value={editEmail}
                    onChange={(e) => setEditEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#2c3228] border border-[#bfcaba]/40 text-sm font-medium text-[#171d14] dark:text-[#ecf3e4] focus:outline-none focus:border-[#0d631b] dark:focus:border-[#a3f69c] transition-colors"
                    placeholder="amir@example.com"
                  />
                </div>

                {/* Location Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#40493d] dark:text-[#bfcaba] block">
                      {language === 'ur' ? 'مقام (انگریزی)' : 'Location (English)'}
                    </label>
                    <input
                      type="text"
                      required
                      value={editLocation}
                      onChange={(e) => setEditLocation(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#2c3228] border border-[#bfcaba]/40 text-sm font-medium text-[#171d14] dark:text-[#ecf3e4] focus:outline-none focus:border-[#0d631b] dark:focus:border-[#a3f69c] transition-colors"
                      placeholder="e.g. Lahore, Pakistan"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#40493d] dark:text-[#bfcaba] block">
                      {language === 'ur' ? 'مقام (اردو)' : 'Location (Urdu)'}
                    </label>
                    <input
                      type="text"
                      required
                      value={editLocationUrdu}
                      onChange={(e) => setEditLocationUrdu(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#2c3228] border border-[#bfcaba]/40 text-sm font-medium text-[#171d14] dark:text-[#ecf3e4] focus:outline-none focus:border-[#0d631b] dark:focus:border-[#a3f69c] transition-colors"
                      placeholder="مثلاً لاہور، پاکستان"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#bfcaba]/20">
                  <button
                    type="button"
                    onClick={() => setIsEditingProfile(false)}
                    className="px-5 py-2.5 rounded-full text-xs font-bold text-[#40493d] dark:text-[#bfcaba] hover:bg-[#dee5d6]/50 dark:hover:bg-[#2c3228] transition-colors"
                  >
                    {language === 'ur' ? 'منسوخ کریں' : 'Cancel'}
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-full text-xs font-bold bg-[#0d631b] dark:bg-[#a3f69c] text-white dark:text-[#002204] shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-sm">save</span>
                    <span>{language === 'ur' ? 'محفوظ کریں' : 'Save Changes'}</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
