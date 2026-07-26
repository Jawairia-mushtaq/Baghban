import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { motion, AnimatePresence } from 'motion/react';

export const AIAssistantScreen: React.FC = () => {
  const { chatMessages, sendChatMessage, isAiThinking, setCurrentScreen, language, t } = useApp();
  const [inputText, setInputText] = useState<string>('');
  const [isSending, setIsListening] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages, isAiThinking]);

  const handleSend = () => {
    if (inputText.trim() === '') return;
    const textToSend = inputText;
    setInputText('');
    sendChatMessage(textToSend);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestionClick = (questionText: string) => {
    sendChatMessage(questionText);
  };

  const handlePhotoAttach = () => {
    // Simulates uploading a leaf photo to ask Ivy about it
    const prompt = language === 'ur' 
      ? "میں نے اس پودے کی تصویر لی ہے۔ براہ کرم اس کی صحت کا معائنہ کریں؟" 
      : "I attached a photo of this leaf. Could you examine its health markers?";
    const sampleImg = "https://lh3.googleusercontent.com/aida-public/AB6AXuCTNCppHvoifsEWhbZ_nzvIKChnafToB3Xh3cCprx--NJaGENTrsZTQZQVn9UlZVWe8HBfb2bC6GqP1gkl8duD6vJTdk3Y3AGl7XSABLsnhUliEl5dxH3fa1c8W0jddTkcewz3zfO37ntwrC9MEnWtxYdayYTTys-w1hU8CmnfW5Pc411dD7bva3RcZ3Ycf25ZWOt9u_a7ZemCgJPvSGzEDDupbQa2X3RnEeJFPBNxcpJi5e-YBHTit6NZSWoTbwlMq0hP_Sp8VCxU";
    sendChatMessage(prompt, sampleImg);
  };

  const handleMicClick = () => {
    setIsListening(true);
    setTimeout(() => {
      setIsListening(false);
      const simulatedVoice = language === 'ur'
        ? "میرے گلاب کے پودے پر سفید دھبے کیوں بن رہے ہیں؟"
        : "How do I prevent root rot during rainy season?";
      sendChatMessage(simulatedVoice);
    }, 1500);
  };

  const suggestions = [
    { en: "Why are my leaves yellow?", ur: "میرے پتے پیلے کیوں ہو رہے ہیں؟" },
    { en: "Best soil for Aloe Vera?", ur: "گوارپٹھا کے لیے بہترین مٹی کونسی ہے؟" },
    { en: "How much water for Mango?", ur: "آم کے پودے کو کتنا پانی چاہیے؟" }
  ];

  return (
    <div className="flex flex-col flex-grow max-w-4xl mx-auto w-full px-4 md:px-6 pt-4 pb-44">
      {/* Welcome Persona Card */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center text-center gap-3 py-6 mb-4"
      >
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-[#abf4ac] dark:bg-[#286b33] flex items-center justify-center shadow-md">
          <span className="material-symbols-outlined text-[42px] md:text-[48px] text-[#2e7238] dark:text-[#ffffff] fill-icon">psychology</span>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#171d14] dark:text-[#ecf3e4]">
            {t('meetIvy')}
          </h2>
          <p className="text-xs md:text-sm text-[#40493d] dark:text-[#bfcaba] max-w-xs mt-1.5 mx-auto leading-relaxed">
            {t('ivyBio')}
          </p>
        </div>
      </motion.div>

      {/* Chat Messages Stream */}
      <div className="flex flex-col gap-4">
        <AnimatePresence>
          {chatMessages.map((msg, index) => {
            const isUser = msg.sender === 'user';
            return (
              <motion.div
                key={msg.id || index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className={`flex flex-col gap-1 ${
                  isUser ? 'items-end self-end' : 'items-start'
                } max-w-[88%] md:max-w-[75%]`}
              >
                <div className={`p-4 shadow-sm text-sm md:text-base leading-relaxed ${
                  isUser 
                    ? 'bg-[#2e7d32] chat-bubble-user text-[#cbffc2]' 
                    : 'bg-[#e3ebdc] dark:bg-[#2c3228] chat-bubble-ai text-[#171d14] dark:text-[#ecf3e4] border border-[#707a6c]/10'
                }`}>
                  {msg.image && (
                    <div className="w-full h-44 md:h-52 rounded-2xl mb-3 overflow-hidden border border-[#bfcaba]/30 bg-black/10">
                      <img 
                        src={msg.image} 
                        alt="Attached leaf context" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  )}
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>
                <span className={`text-[11px] text-[#40493d] dark:text-[#bfcaba] ${
                  isUser ? 'mr-2' : 'ml-2'
                }`}>
                  {msg.timestamp}
                </span>
              </motion.div>
            );
          })}
        </AnimatePresence>
        {isAiThinking && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="flex flex-col gap-1 items-start max-w-[75%]"
          >
            <div className="p-4 bg-[#e3ebdc] dark:bg-[#2c3228] rounded-[24px] rounded-tl-sm text-[#171d14] dark:text-[#ecf3e4] border border-[#707a6c]/10 flex items-center gap-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0d631b] dark:bg-[#a3f69c] animate-bounce"></span>
              <span className="w-2 h-2 rounded-full bg-[#0d631b] dark:bg-[#a3f69c] animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-2 h-2 rounded-full bg-[#0d631b] dark:bg-[#a3f69c] animate-bounce [animation-delay:0.4s]"></span>
              <span className="text-xs font-medium text-[#40493d] dark:text-[#bfcaba] ml-1">
                {language === 'ur' ? 'آئیوی سوچ رہی ہے...' : 'Ivy is analyzing...'}
              </span>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Question Bubbles */}
      <div className="flex flex-wrap gap-2 mt-6">
        {suggestions.map((item, idx) => (
          <button
            key={idx}
            onClick={() => handleSuggestionClick(language === 'ur' ? item.ur : item.en)}
            className="px-4 py-2 bg-[#f5fced] dark:bg-[#1a1c19] border border-[#bfcaba]/50 dark:border-[#707a6c]/40 rounded-full text-xs md:text-sm font-medium text-[#0d631b] dark:text-[#a3f69c] hover:bg-[#eff6e7] dark:hover:bg-[#2c3228] active:scale-95 transition-all shadow-sm"
          >
            {language === 'ur' ? item.ur : item.en}
          </button>
        ))}
      </div>

      {/* Fixed Bottom Input Area */}
      <div className="fixed bottom-20 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-[#f5fced] dark:from-[#1a1c19] via-[#f5fced]/95 dark:via-[#1a1c19]/95 to-transparent z-[60]">
        <div className="max-w-4xl mx-auto flex flex-col gap-3">
          <div className={`bg-[#dee5d6] dark:bg-[#2c3228] rounded-full p-1.5 md:p-2 flex items-center gap-2 shadow-lg border border-[#707a6c]/20 transition-all ${
            isSending ? 'ring-2 ring-[#ba1a1a]' : 'focus-within:ring-2 focus-within:ring-[#0d631b]'
          }`}>
            <button 
              onClick={() => setCurrentScreen('scanner')}
              title="Open Smart Scanner"
              className="w-10 h-10 flex items-center justify-center text-[#40493d] dark:text-[#bfcaba] hover:bg-[#e3ebdc] dark:hover:bg-[#40493d]/20 rounded-full active:scale-90 transition-all shrink-0"
            >
              <span className="material-symbols-outlined">add</span>
            </button>

            <div className="flex-grow relative h-10 flex items-center">
              <input 
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder={isSending ? (language === 'ur' ? 'سن رہا ہے...' : 'Listening...') : t('askIvyPlaceholder')}
                className="w-full h-full bg-transparent border-none focus:outline-none text-[#171d14] dark:text-[#ecf3e4] px-2 placeholder-[#40493d]/60 dark:placeholder-[#bfcaba]/60 text-sm md:text-base"
              />
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <button 
                onClick={handlePhotoAttach}
                title="Attach Photo"
                className="w-10 h-10 flex items-center justify-center text-[#40493d] dark:text-[#bfcaba] hover:bg-[#e3ebdc] dark:hover:bg-[#40493d]/20 rounded-full active:scale-90 transition-all"
              >
                <span className="material-symbols-outlined">photo_camera</span>
              </button>
              <button 
                onClick={handleMicClick}
                title="Voice Input"
                className={`w-10 h-10 flex items-center justify-center rounded-full active:scale-90 transition-all ${
                  isSending ? 'bg-[#ba1a1a] text-white animate-pulse' : 'text-[#40493d] dark:text-[#bfcaba] hover:bg-[#e3ebdc] dark:hover:bg-[#40493d]/20'
                }`}
              >
                <span className="material-symbols-outlined">mic</span>
              </button>
              <button 
                onClick={handleSend}
                title="Send Message"
                disabled={inputText.trim() === ''}
                className={`w-10 h-10 flex items-center justify-center rounded-full shadow-md transition-all ${
                  inputText.trim() === ''
                    ? 'bg-[#707a6c]/30 text-white/60 cursor-not-allowed'
                    : 'bg-[#0d631b] dark:bg-[#a3f69c] text-[#ffffff] dark:text-[#002204] hover:brightness-110 active:scale-95'
                }`}
              >
                <span className="material-symbols-outlined fill-icon">send</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
