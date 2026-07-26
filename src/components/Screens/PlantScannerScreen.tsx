import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { motion, AnimatePresence } from 'motion/react';
import { Plant } from '../../types';

export const PlantScannerScreen: React.FC = () => {
  const { setCurrentScreen, addUserPlant, viewPlantDetails, language, t, triggerConfetti } = useApp();
  const [isFlashOn, setIsFlashOn] = useState<boolean>(false);
  const [isDiagnosing, setIsDiagnosing] = useState<boolean>(false);
  const [scanComplete, setScanComplete] = useState<boolean>(false);
  const [scannedPlantName, setScannedPlantName] = useState<string>("Monstera Deliciosa");

  const bgImg = "https://lh3.googleusercontent.com/aida-public/AB6AXuDUHzJONV8IyMS3z3Tn5UEQrC90u4aRLRNNh8_kXZCl1E8Xr_NmTWsfUFw4YfH8xxHjEo3tl06FjjrRYBG1LjTnUxROTC_Ue2SR3f8Rsl0jxfN1tYbRCxfcg_pkJwH0zgzIacA1WMmFg3pyAqHXDBSgtPDR0iLtedqQAl3Mi435fyQAjY13019I4fI6rnjGDiHRRMuuf-EtChKuCaDQMNfHW5S54bNl_rI1sUfomgnW_Jd8LvqLJ0_QFbzPWkKqYfaON2aDc5revLs";

  const handleCapture = () => {
    // Flash animation
    const flashEl = document.getElementById('camera-flash');
    if (flashEl) {
      flashEl.style.opacity = '0.9';
      setTimeout(() => { flashEl.style.opacity = '0'; }, 150);
    }

    setIsDiagnosing(true);
    setScanComplete(false);

    // Simulate analysis time
    setTimeout(() => {
      setIsDiagnosing(false);
      setScanComplete(true);
      triggerConfetti();
    }, 2200);
  };

  const handleAddScannedPlant = () => {
    const newPlant: Plant = {
      id: `scanned-${Date.now()}`,
      name: scannedPlantName,
      nameUrdu: language === 'ur' ? "مونسٹیرا" : "Monstera",
      scientificName: "Monstera deliciosa",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTNCppHvoifsEWhbZ_nzvIKChnafToB3Xh3cCprx--NJaGENTrsZTQZQVn9UlZVWe8HBfb2bC6GqP1gkl8duD6vJTdk3Y3AGl7XSABLsnhUliEl5dxH3fa1c8W0jddTkcewz3zfO37ntwrC9MEnWtxYdayYTTys-w1hU8CmnfW5Pc411dD7bva3RcZ3Ycf25ZWOt9u_a7ZemCgJPvSGzEDDupbQa2X3RnEeJFPBNxcpJi5e-YBHTit6NZSWoTbwlMq0hP_Sp8VCxU",
      category: "indoor",
      status: "Healthy",
      statusUrdu: "صحت مند",
      health: "Flourishing (88% Chlorophyll)",
      healthUrdu: "شاندار (88% کلوروفیل)",
      waterFrequency: "7 Days",
      waterFrequencyUrdu: "7 دن",
      lastWatered: "Scanned just now",
      lastWateredUrdu: "ابھی اسکین کیا گیا",
      recommendedWaterLeft: "Optimal moisture level",
      recommendedWaterLeftUrdu: "نمی کی بہترین سطح",
      sunlight: "Bright Indirect",
      sunlightUrdu: "روشن بالواسطہ",
      nextFertilize: "Next week",
      nextFertilizeUrdu: "اگلے ہفتے",
      age: "Scanned Specimen • Young",
      ageUrdu: "اسکین شدہ پودا • نیا",
      careGuide: {
        overview: {
          text: "Scanned specimen shows high leaf turgor and exceptional fenestration. Keep in bright indirect light and maintain 50%+ humidity.",
          textUrdu: "اسکین کیے گئے پودے کے پتے شاندار اور سرسبز ہیں۔ روشن بالواسطہ روشنی میں رکھیں اور 50 فیصد سے زیادہ نمی برقرار رکھیں۔",
          list: ["Chlorophyll index: 88% (Excellent)", "Soil hydration: Optimal"],
          listUrdu: ["کلوروفیل انڈیکس: 88 فیصد (بہترین)", "مٹی کی نمی: بہترین"]
        },
        watering: {
          text: "Water once every 7 days when top soil feels dry.",
          textUrdu: "جب اوپر کی مٹی خشک محسوس ہو تو ہر 7 دن بعد پانی دیں۔",
          list: ["Avoid root waterlogging", "Mist leaves weekly"],
          listUrdu: ["جڑوں میں پانی نہ کھڑا ہونے دیں", "ہفتہ وار پتوں پر اسپرے کریں"]
        },
        sunlight: {
          text: "Bright indirect daylight is best for this species.",
          textUrdu: "اس پودے کے لیے روشن بالواسطہ دھوپ بہترین ہے۔",
          list: ["No harsh afternoon sun", "Rotate pot monthly"],
          listUrdu: ["دوپہر کی تیز دھوپ سے بچائیں", "ہر مہینے گملے کا رخ گھمائیں"]
        },
        soil: {
          text: "Chunky aerated aroid potting mix.",
          textUrdu: "موٹی اور ہوا دار مٹی استعمال کریں۔",
          list: ["Add perlite or bark", "Ensure drainage holes"],
          listUrdu: ["پرلائٹ یا چھال شامل کریں", "نکاس کے سوراخ یقینی بنائیں"]
        },
        fertilizer: {
          text: "Balanced liquid fertilizer monthly in spring and summer.",
          textUrdu: "بہار اور گرمیوں میں ہر مہینے متوازن مائع کھاد دیں۔",
          list: ["Dilute to half strength", "No fertilizer in winter"],
          listUrdu: ["پانی میں ملا کر ہلکی کھاد دیں", "سردیوں میں کھاد نہ دیں"]
        }
      }
    };

    addUserPlant(newPlant);
    triggerConfetti();
    viewPlantDetails(newPlant.id);
  };

  const handleGalleryUpload = () => {
    setScannedPlantName(language === 'ur' ? "انار (Pomegranate)" : "Pomegranate Specimen");
    handleCapture();
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between bg-black text-white overflow-hidden select-none">
      {/* Flash simulation overlay */}
      <div id="camera-flash" className="fixed inset-0 bg-white z-[100] pointer-events-none opacity-0 transition-opacity duration-150" />

      {/* Background Live Camera Stream */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center opacity-85 scale-105" 
          style={{ backgroundImage: `url('${bgImg}')` }}
        />
        <div className="absolute inset-0 bg-black/25 backdrop-blur-[2px]"></div>
      </div>

      {/* Top App Bar */}
      <header className="relative z-30 flex items-center justify-between px-6 pt-10 pb-4 h-24 max-w-4xl mx-auto w-full">
        <button 
          onClick={() => setCurrentScreen('home')}
          className="w-12 h-12 flex items-center justify-center bg-black/40 backdrop-blur-md rounded-full text-white active:scale-90 transition-all border border-white/20 hover:bg-black/60"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="bg-black/40 backdrop-blur-md px-5 py-2 rounded-full border border-[#a3f69c]/40 flex items-center gap-2 shadow-lg">
          <span className="w-2.5 h-2.5 rounded-full bg-[#a3f69c] animate-ping"></span>
          <p className="text-xs md:text-sm font-bold text-white tracking-wide uppercase">
            {t('smartScanActive')}
          </p>
        </div>

        <button 
          onClick={() => setIsFlashOn(!isFlashOn)}
          className={`w-12 h-12 flex items-center justify-center backdrop-blur-md rounded-full active:scale-90 transition-all border ${
            isFlashOn 
              ? 'bg-[#a3f69c] text-[#002204] border-[#a3f69c]' 
              : 'bg-black/40 text-white border-white/20 hover:bg-black/60'
          }`}
        >
          <span className="material-symbols-outlined">{isFlashOn ? 'flash_off' : 'flash_on'}</span>
        </button>
      </header>

      {/* Viewfinder & Overlay UI */}
      <main className="flex-grow relative flex items-center justify-center px-6 max-w-md mx-auto w-full">
        {/* Viewfinder Frame */}
        <div className="relative w-full max-w-xs aspect-[3/4] z-10">
          <div className="corner-tl viewfinder-corner"></div>
          <div className="corner-tr viewfinder-corner"></div>
          <div className="corner-bl viewfinder-corner"></div>
          <div className="corner-br viewfinder-corner"></div>

          {/* Animated Scanning Line */}
          <div className="scan-line"></div>

          {/* Guidance Text */}
          <div className="absolute -bottom-16 left-0 right-0 text-center">
            <p className="text-xs md:text-sm font-bold text-white drop-shadow-lg bg-black/40 backdrop-blur-md py-2.5 px-4 rounded-full border border-white/10 inline-block">
              {t('alignLeaf')}
            </p>
          </div>
        </div>

        {/* Floating Data Points */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 3 }}
          className="absolute top-1/4 left-4 md:left-10 z-20 flex items-center gap-2 bg-[#0d631b]/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#a3f69c]/40 shadow-lg"
        >
          <span className="material-symbols-outlined text-[#a3f69c] text-[18px]">temp_preferences_custom</span>
          <span className="text-[10px] md:text-xs text-white font-bold tracking-wider">{t('chlorophyll')}</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 3, delay: 1 }}
          className="absolute bottom-1/3 right-4 md:right-8 z-20 flex items-center gap-2 bg-[#286b33]/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#abf4ac]/40 shadow-lg"
        >
          <span className="material-symbols-outlined text-[#abf4ac] text-[18px]">humidity_mid</span>
          <span className="text-[10px] md:text-xs text-white font-bold tracking-wider">{t('hydrationOptimal')}</span>
        </motion.div>
      </main>

      {/* Bottom Controls & Results Preview */}
      <footer className="relative z-30 px-6 pb-12 flex flex-col items-center gap-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent max-w-4xl mx-auto w-full">
        {/* Diagnosing / Result Card */}
        <AnimatePresence>
          {(isDiagnosing || scanComplete) && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="w-full max-w-sm bg-[#1a1c19]/95 backdrop-blur-2xl rounded-[32px] p-5 border border-white/20 shadow-2xl"
            >
              {isDiagnosing ? (
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#286b33] flex items-center justify-center animate-spin">
                    <span className="material-symbols-outlined text-white fill-icon text-3xl">psychology</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-lg text-white">{t('diagnosing')}</h3>
                    <p className="text-xs text-[#bfcaba]">{t('analyzingMarkers')}</p>
                    <div className="w-full bg-white/20 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className="bg-[#a3f69c] h-full w-2/3 animate-pulse rounded-full"></div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#a3f69c] text-[#002204] flex items-center justify-center font-bold">
                        <span className="material-symbols-outlined fill-icon">check_circle</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-base text-white">{scannedPlantName}</h4>
                        <span className="text-xs text-[#a3f69c] font-semibold">Healthy Specimen • 96% Match</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => setScanComplete(false)}
                      className="text-xs text-[#bfcaba] hover:text-white"
                    >
                      {t('close')}
                    </button>
                  </div>

                  <div className="bg-white/10 p-3 rounded-2xl text-xs text-[#ecf3e4] leading-relaxed">
                    {language === 'ur'
                      ? "پودا مکمل صحت مند ہے۔ پتیوں کا رنگ اور نمی کی سطح شاندار ہے۔"
                      : "Analysis confirms optimal chlorophyll density and no visible pest or fungus damage."}
                  </div>

                  <button
                    onClick={handleAddScannedPlant}
                    className="w-full py-3.5 bg-[#a3f69c] text-[#002204] font-bold text-sm rounded-full shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 hover:brightness-110"
                  >
                    <span className="material-symbols-outlined fill-icon text-[18px]">add</span>
                    <span>{t('addToMyGarden')}</span>
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Primary Controls Row */}
        <div className="w-full flex items-center justify-around max-w-xs">
          {/* Gallery Button */}
          <button 
            onClick={handleGalleryUpload}
            className="flex flex-col items-center gap-1.5 group active:scale-95 transition-all"
          >
            <div className="w-14 h-14 bg-white/15 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:bg-white/25 transition-colors">
              <span className="material-symbols-outlined text-white text-3xl">photo_library</span>
            </div>
            <span className="text-xs font-medium text-white/90">{t('gallery')}</span>
          </button>

          {/* Main Capture Button */}
          <button 
            onClick={handleCapture}
            disabled={isDiagnosing}
            className="relative group disabled:opacity-50"
            title="Capture Photo"
          >
            <div className="absolute -inset-2.5 border-2 border-white/40 rounded-full animate-[pulse-ring_2s_infinite]"></div>
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl active:scale-90 transition-transform duration-200 hover:bg-[#eff6e7]">
              <div className="w-16 h-16 border-2 border-[#88d982] rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-[#0d631b] text-4xl fill-icon">camera</span>
              </div>
            </div>
          </button>

          {/* History / Library */}
          <button 
            onClick={() => setCurrentScreen('library')}
            className="flex flex-col items-center gap-1.5 group active:scale-95 transition-all"
          >
            <div className="w-14 h-14 bg-white/15 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:bg-white/25 transition-colors">
              <span className="material-symbols-outlined text-white text-3xl">history</span>
            </div>
            <span className="text-xs font-medium text-white/90">{t('history')}</span>
          </button>
        </div>
      </footer>
    </div>
  );
};
