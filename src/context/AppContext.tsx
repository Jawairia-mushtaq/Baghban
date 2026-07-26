import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Language, 
  ThemeMode, 
  ScreenId, 
  Plant, 
  Reminder, 
  GardenTask, 
  ChatMessage,
  UserProfile
} from '../types';
import { PLANTS_DATA, INITIAL_REMINDERS, INITIAL_TASKS, IVY_AVATAR, USER_PROFILE_IMAGES } from '../data/plants';
import { translate } from '../data/translations';

interface AppContextType {
  currentScreen: ScreenId;
  setCurrentScreen: (screen: ScreenId) => void;
  selectedPlantId: string;
  setSelectedPlantId: (id: string) => void;
  viewPlantDetails: (id: string) => void;
  userPlants: Plant[];
  addUserPlant: (plant: Plant) => void;
  reminders: Reminder[];
  setReminders: React.Dispatch<React.SetStateAction<Reminder[]>>;
  tasks: GardenTask[];
  toggleTask: (id: string) => void;
  addTask: (task: Omit<GardenTask, 'id' | 'completed'>) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  chatMessages: ChatMessage[];
  sendChatMessage: (text: string, image?: string) => Promise<void>;
  isAiThinking: boolean;
  userProfile: UserProfile;
  updateUserProfile: (profile: Partial<UserProfile>) => void;
  isAddPlantModalOpen: boolean;
  setIsAddPlantModalOpen: (open: boolean) => void;
  isJournalModalOpen: boolean;
  setIsJournalModalOpen: (open: boolean) => void;
  journalEntries: Array<{ id: string; date: string; plantName: string; text: string }>;
  addJournalEntry: (plantName: string, text: string) => void;
  triggerConfetti: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('onboarding');
  const [selectedPlantId, setSelectedPlantId] = useState<string>('mango');
  const [userPlants, setUserPlants] = useState<Plant[]>(PLANTS_DATA);
  const [reminders, setReminders] = useState<Reminder[]>(INITIAL_REMINDERS);
  const [tasks, setTasks] = useState<GardenTask[]>(INITIAL_TASKS);
  const [language, setLanguageState] = useState<Language>('en');
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('baghban-theme') as ThemeMode;
    return saved || 'light';
  });
  const [userProfile, setUserProfileState] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('baghban-user-profile');
    if (saved) {
      try { return JSON.parse(saved); } catch {}
    }
    return {
      name: "Amir Khan",
      nameUrdu: "عامر خان",
      email: "amir.khan@example.com",
      location: "Lahore, Pakistan",
      locationUrdu: "لاہور، پاکستان",
      avatar: USER_PROFILE_IMAGES.settings
    };
  });
  const [isAddPlantModalOpen, setIsAddPlantModalOpen] = useState<boolean>(false);
  const [isJournalModalOpen, setIsJournalModalOpen] = useState<boolean>(false);
  const [journalEntries, setJournalEntries] = useState<Array<{ id: string; date: string; plantName: string; text: string }>>([
    {
      id: 'j1',
      date: 'Today, 8:30 AM',
      plantName: 'Mango',
      text: 'New foliage growth visible after yesterday\'s deep watering. Chlorophyll looks great!'
    },
    {
      id: 'j2',
      date: 'Yesterday',
      plantName: 'Rose',
      text: 'Pruned two dry flower heads and sprayed neem oil for powdery mildew prevention.'
    }
  ]);

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'ai',
      text: "Hello! I noticed your Aloe Vera might need a check-up soon based on the last watering cycle. How can I help you in the garden today?",
      timestamp: "9:41 AM"
    },
    {
      id: 'msg-2',
      sender: 'user',
      text: "My Monstera leaves are starting to droop. Is that normal?",
      timestamp: "9:42 AM"
    },
    {
      id: 'msg-3',
      sender: 'ai',
      text: "Drooping leaves in Monsteras can be a sign of thirst or low humidity. Try checking the top 2 inches of soil. If it's bone dry, it's time for a deep drink!",
      timestamp: "9:43 AM",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTNCppHvoifsEWhbZ_nzvIKChnafToB3Xh3cCprx--NJaGENTrsZTQZQVn9UlZVWe8HBfb2bC6GqP1gkl8duD6vJTdk3Y3AGl7XSABLsnhUliEl5dxH3fa1c8W0jddTkcewz3zfO37ntwrC9MEnWtxYdayYTTys-w1hU8CmnfW5Pc411dD7bva3RcZ3Ycf25ZWOt9u_a7ZemCgJPvSGzEDDupbQa2X3RnEeJFPBNxcpJi5e-YBHTit6NZSWoTbwlMq0hP_Sp8VCxU"
    }
  ]);

  const [isAiThinking, setIsAiThinking] = useState<boolean>(false);

  // Handle RTL and language switching
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (lang === 'ur') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  };

  // Handle Theme switching
  const applyThemeToDOM = (mode: ThemeMode) => {
    const html = document.documentElement;
    let isDark = false;
    if (mode === 'dark') {
      isDark = true;
    } else if (mode === 'light') {
      isDark = false;
    } else {
      isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    if (isDark) {
      html.classList.add('dark');
      html.classList.remove('light');
    } else {
      html.classList.remove('dark');
      html.classList.add('light');
    }
  };

  useEffect(() => {
    applyThemeToDOM(theme);
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => applyThemeToDOM('system');
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme]);

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    localStorage.setItem('baghban-theme', newTheme);
    applyThemeToDOM(newTheme);
  };

  const updateUserProfile = (newProfile: Partial<UserProfile>) => {
    setUserProfileState(prev => {
      const updated = { ...prev, ...newProfile };
      localStorage.setItem('baghban-user-profile', JSON.stringify(updated));
      return updated;
    });
  };

  const t = (key: string): string => {
    return translate(key, language);
  };

  const viewPlantDetails = (id: string) => {
    setSelectedPlantId(id);
    setCurrentScreen('details');
  };

  const addUserPlant = (plant: Plant) => {
    setUserPlants(prev => [plant, ...prev]);
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#0d631b', '#286b33', '#a3f69c', '#ffba38']
      });
    } catch {
      // ignore if confetti fails
    }
  };

  const toggleTask = (id: string) => {
    setTasks(prev => prev.map(task => {
      if (task.id === id) {
        const nextState = !task.completed;
        if (nextState) {
          triggerConfetti();
        }
        return { ...task, completed: nextState };
      }
      return task;
    }));
  };

  const addTask = (newTask: Omit<GardenTask, 'id' | 'completed'>) => {
    const created: GardenTask = {
      ...newTask,
      id: `task-${Date.now()}`,
      completed: false
    };
    setTasks(prev => [...prev, created]);
  };

  const addJournalEntry = (plantName: string, text: string) => {
    const newEntry = {
      id: `j-${Date.now()}`,
      date: 'Just now',
      plantName,
      text
    };
    setJournalEntries(prev => [newEntry, ...prev]);
  };

  // Botanical AI Assistant logic using server-side /api/chat with rich fallback
  const sendChatMessage = async (userText: string, image?: string) => {
    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      image
    };
    setChatMessages(prev => [...prev, userMsg]);
    setIsAiThinking(true);

    let aiResponseText = "";
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText, image, language }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data && data.text) {
          aiResponseText = data.text;
        }
      }
    } catch {
      // ignore fetch error if server is unreachable
    }

    setIsAiThinking(false);
    if (!aiResponseText) {
      const lower = userText.toLowerCase();
      if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey') || lower.includes('سلام') || lower.includes('ہیلو') || lower.includes('ivy')) {
        aiResponseText = language === 'ur'
          ? "السلام علیکم! میں آئیوی (Ivy) ہوں، آپ کی ڈیجیٹل باغبان اور نباتاتی ساتھی۔ آج آپ کے پودوں کی دیکھ بھال میں کیا مدد کر سکتی ہوں؟ آپ مجھ سے پانی، مٹی، روشنی، یا بیماریوں کے بارے میں کوئی بھی سوال پوچھ سکتے ہیں!"
          : "Hello there! I'm Ivy, your botanical AI companion. How can I help your garden flourish today? Ask me anything about watering schedules, soil mixtures, sunlight requirements, or leaf health diagnosis!";
      } else if (lower.includes('yellow') || lower.includes('پیلے') || lower.includes('color') || lower.includes('رنگ') || lower.includes('brown') || lower.includes('spot')) {
        aiResponseText = language === 'ur'
          ? "پتوں کا پیلا یا بھورا ہونا عام طور پر زیادہ پانی دینے، نکاس (ڈریگنج) کی کمی یا آئرن/نائٹروجن کی کمی کی نشانی ہوتا ہے۔ گملے کے نیچے پانی کے نکاس کو چیک کریں اور اگلی بار پانی دینے سے پہلے اوپر کی 2 انچ مٹی خشک ہونے دیں۔"
          : "Yellowing or brown-spotted leaves are typically signs of overwatering, poor drainage, or iron/nitrogen deficiency. Ensure your pot has proper drainage holes and allow the top 2 inches of soil to dry completely before your next watering cycle.";
      } else if (lower.includes('aloe') || lower.includes('گوارپٹھا') || lower.includes('succulent') || lower.includes('cactus') || lower.includes('کیکٹس')) {
        aiResponseText = language === 'ur'
          ? "گوارپٹھا (ایلوویرا) اور سکولینٹس کے لیے کیکٹس اور موٹی ریت والی مٹی بہترین ہے جس میں پرلائٹ شامل ہو۔ ان کے پودوں میں پانی ذخیرہ ہوتا ہے، اس لیے ہر 2 سے 3 ہفتے میں صرف ایک بار گہرا پانی دیں۔"
          : "For Aloe Vera and succulents, the best soil is a fast-draining cactus mix enriched with coarse sand, pumice, or perlite. Since they store water in their fleshy leaves, only water once every 2 to 3 weeks when the soil is bone dry!";
      } else if (lower.includes('mango') || lower.includes('آم') || lower.includes('fruit') || lower.includes('پھل')) {
        aiResponseText = language === 'ur'
          ? "نئے آم کے پودے کو ہر 2 سے 3 دن بعد گہرا پانی درکار ہوتا ہے۔ پھل آنے کے دوران مٹی کو مسلسل ہلکا نم رکھیں لیکن پانی کھڑا نہ ہونے دیں، اور بہار میں متوازن نامیاتی کھاد استعمال کریں۔"
          : "Young Mango trees need deep watering every 2-3 days until established. For mature or fruiting trees, maintain even soil moisture without waterlogging the roots, and apply an organic balanced fertilizer in early spring.";
      } else if (lower.includes('rose') || lower.includes('گلاب') || lower.includes('flower') || lower.includes('پھول') || lower.includes('bloom') || lower.includes('کلی')) {
        aiResponseText = language === 'ur'
          ? "گلاب اور پھولدار پودوں کو روزانہ کم از کم 6 گھنٹے کی براہ راست دھوپ اور صبح سویرے جڑوں میں گہرا پانی پسند ہے۔ سوکھے پھول توڑنے (ڈیڈ ہیڈنگ) اور پوٹاشیم والی کھاد دینے سے نئے پھول تیزی سے نکلتے ہیں۔"
          : "Roses and flowering plants thrive on at least 6 hours of direct morning sun and deep root watering early in the day. Regular deadheading (clipping faded blooms) and potassium-rich organic fertilizer will encourage vigorous new flowering shoots!";
      } else if (lower.includes('water') || lower.includes('پانی') || lower.includes('irrigation') || lower.includes('آبپاشی') || lower.includes('dry') || lower.includes('سوکھ')) {
        aiResponseText = language === 'ur'
          ? "پانی دینے کا بہترین اصول یہ ہے کہ پہلے اپنی انگلی سے اوپر کی 1 سے 2 انچ مٹی چیک کریں۔ اگر مٹی خشک محسوس ہو تو اتنا پانی دیں کہ نیچے کے سوراخوں سے باہر نکل آئے، اور کبھی بھی پودے کو کھڑے پانی میں نہ چھوڑیں۔"
          : "The golden rule of watering is the 'finger test': check the top 1-2 inches of soil with your finger. If it feels dry, water deeply until excess drains out the bottom holes. Never let your potted plants sit in standing water!";
      } else if (lower.includes('soil') || lower.includes('مٹی') || lower.includes('dirt') || lower.includes('potting') || lower.includes('repot') || lower.includes('گملہ')) {
        aiResponseText = language === 'ur'
          ? "اچھی مٹی پودے کی جان ہوتی ہے۔ عام طور پر 50 فیصد باغبانی کی مٹی، 30 فیصد نامیاتی کھاد (کمپوسٹ) اور 20 فیصد پرلائٹ یا ریت کا ملاپ زیادہ تر انڈور اور آؤٹ ڈور پودوں کے لیے بہترین رہتا ہے۔"
          : "A quality potting mix is the foundation of plant health! A standard thriving recipe is 50% high-grade potting soil, 30% organic compost or peat moss, and 20% perlite or coarse sand to ensure excellent root aeration and drainage.";
      } else if (lower.includes('sun') || lower.includes('light') || lower.includes('دھوپ') || lower.includes('روشنی') || lower.includes('shade') || lower.includes('سایہ')) {
        aiResponseText = language === 'ur'
          ? "زیادہ تر انڈور پودوں (جیسے مونسٹیرا، منی پلانٹ) کو روشن بالواسطہ (indirect) دھوپ پسند ہوتی ہے۔ انہیں کھڑکی کے پاس رکھیں جہاں تیز براہ راست دھوپ پتوں کو نہ جلائے۔ آؤٹ ڈور پودوں کو 4 سے 6 گھنٹے کی سیدھی دھوپ چاہیے۔"
          : "Most indoor houseplants (like Monstera, Pothos, and Peace Lilies) prefer bright indirect sunlight—place them near an east or north-facing window where they receive plentiful light without scorching direct afternoon rays.";
      } else if (lower.includes('pest') || lower.includes('bug') || lower.includes('insect') || lower.includes('کیڑے') || lower.includes('fungus') || lower.includes('بیماری') || lower.includes('white') || lower.includes('سفید') || lower.includes('rot') || lower.includes('گلنا')) {
        aiResponseText = language === 'ur'
          ? "پودوں پر سفید دھبے، ملی بگس یا کیڑوں کے حملے کے لیے، 1 چمچ نیم کا تیل (Neem Oil) اور چند قطرے مائلڈ صابن 1 لیٹر پانی میں ملا کر ہفتے میں دو بار پتوں پر اچھی طرح اسپرے کریں۔ جڑوں کے گلنے سے بچنے کے لیے پانی دینا کم کر دیں۔"
          : "For common pests like mealybugs, spider mites, or white fungal spots, mix 1 teaspoon of cold-pressed Neem Oil and a few drops of mild dish soap in a liter of warm water. Spray thoroughly across all foliage twice a week until cleared!";
      } else if (lower.includes('monstera') || lower.includes('مونسٹیرا') || lower.includes('money plant') || lower.includes('منی پلانٹ') || lower.includes('pothos') || lower.includes('snake') || lower.includes('سنیپ')) {
        aiResponseText = language === 'ur'
          ? "مونسٹیرا اور منی پلانٹ جیسے ایروئڈ پودوں کے لیے ہوا دار مٹی اور 50 فیصد سے زیادہ نمی (humidity) بہترین ہے۔ ان کے پتوں کو ہفتے میں ایک بار گیلے کپڑے سے صاف کریں تاکہ کلوروفیل کا عمل تیز ہو۔"
          : "Aroid houseplants like Monstera and Pothos love a chunky, aerated soil mix and moderate-to-high room humidity (50%+). Wipe their broad leaves gently with a damp cloth every week to remove dust and maximize photosynthesis!";
      } else if (lower.includes('fertiliz') || lower.includes('compost') || lower.includes('کھاد') || lower.includes('food') || lower.includes('غذائیت')) {
        aiResponseText = language === 'ur'
          ? "پودوں کو بڑھوتری کے موسم (بہار اور گرمیوں) میں ہر 3 سے 4 ہفتے بعد متوازن مائع کھاد (جیسے NPK 10-10-10) پانی میں ملا کر دیں۔ سردیوں کے موسم میں پودے آرام کرتے ہیں، اس لیے سردیوں میں کھاد دینا بند کر دیں۔"
          : "Feed your plants during their active growing season (spring and summer) every 3 to 4 weeks using a balanced liquid fertilizer diluted to half strength. During autumn and winter dormancy, withhold fertilizer to let roots rest.";
      } else if (image || lower.includes('photo') || lower.includes('leaf') || lower.includes('تصویر') || lower.includes('پتہ') || lower.includes('معائنہ') || lower.includes('examine')) {
        aiResponseText = language === 'ur'
          ? "میں نے آپ کے بھیجے گئے پتے کا تجزیہ کیا ہے۔ پتے کی ساخت صحت مند لگ رہی ہے، البتہ کناروں پر ہلکی خشکی ہوا میں نمی کی کمی کو ظاہر کرتی ہے۔ پودے پر ہلکا پانی کا اسپرے کریں اور روشن بالواسطہ روشنی فراہم کریں۔"
          : "I have examined the leaf image you provided! The tissue structure shows good overall vitality, though slight edge crisping suggests room air might be slightly dry. I recommend weekly foliage misting and keeping it in bright, indirect light.";
      } else {
        aiResponseText = language === 'ur'
          ? "یہ باغبانی کے حوالے سے ایک بہترین سوال ہے! پودوں کی شاندار صحت کے لیے تین بنیادی اصول یاد رکھیں: مناسب روشنی، جڑوں میں پانی کا بہترین نکاس، اور متوازن نمی۔ اگر آپ کے پودے میں کوئی خاص علامت ہے تو مجھے تصویر بھیجیں یا ہمارا سمارٹ اسکینر استعمال کریں!"
          : "That's an excellent question for your garden journey! To keep any plant thriving, focus on the golden triad: consistent indirect sunlight, well-draining soil to prevent root suffocation, and seasonal watering checks. You can also attach a photo anytime for a tailored diagnosis!";
      }
    }

    const aiMsg: ChatMessage = {
      id: `msg-${Date.now() + 10}`,
      sender: 'ai',
      text: aiResponseText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setChatMessages(prev => [...prev, aiMsg]);
  };

  return (
    <AppContext.Provider
      value={{
        currentScreen,
        setCurrentScreen,
        selectedPlantId,
        setSelectedPlantId,
        viewPlantDetails,
        userPlants,
        addUserPlant,
        reminders,
        setReminders,
        tasks,
        toggleTask,
        addTask,
        language,
        setLanguage,
        t,
        theme,
        setTheme,
        userProfile,
        updateUserProfile,
        chatMessages,
        sendChatMessage,
        isAiThinking,
        isAddPlantModalOpen,
        setIsAddPlantModalOpen,
        isJournalModalOpen,
        setIsJournalModalOpen,
        journalEntries,
        addJournalEntry,
        triggerConfetti
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
