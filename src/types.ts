export type Language = 'en' | 'ur';
export type ThemeMode = 'light' | 'dark' | 'system';
export type ScreenId = 'onboarding' | 'home' | 'library' | 'details' | 'ai-assistant' | 'scanner' | 'calendar' | 'settings';
export type PlantCategory = 'all' | 'indoor' | 'outdoor' | 'flowering' | 'fruit';
export type HealthStatus = 'Healthy' | 'Thirsty' | 'Perfect' | 'Vibrant' | 'Strong' | 'Blooming' | 'Needs Care';

export interface CareGuideTab {
  id: 'overview' | 'watering' | 'sunlight' | 'soil' | 'fertilizer';
  label: string;
  labelUrdu: string;
  text: string;
  textUrdu: string;
  list: string[];
  listUrdu: string[];
}

export interface CommonIssue {
  name: string;
  nameUrdu: string;
  description: string;
  descriptionUrdu: string;
  image: string;
  treatment: string[];
  treatmentUrdu: string[];
}

export interface Plant {
  id: string;
  name: string;
  nameUrdu: string;
  scientificName: string;
  image: string;
  category: 'indoor' | 'outdoor' | 'flowering' | 'fruit';
  status: HealthStatus;
  statusUrdu: string;
  health: string;
  healthUrdu: string;
  waterFrequency: string;
  waterFrequencyUrdu: string;
  lastWatered: string;
  lastWateredUrdu: string;
  recommendedWaterLeft: string;
  recommendedWaterLeftUrdu: string;
  sunlight: string;
  sunlightUrdu: string;
  nextFertilize: string;
  nextFertilizeUrdu: string;
  age: string;
  ageUrdu: string;
  careGuide: Record<'overview' | 'watering' | 'sunlight' | 'soil' | 'fertilizer', {
    text: string;
    textUrdu: string;
    list: string[];
    listUrdu: string[];
  }>;
  commonIssues?: CommonIssue[];
}

export interface Reminder {
  id: string;
  plantId: string;
  plantName: string;
  plantNameUrdu: string;
  action: string;
  actionUrdu: string;
  amount: string;
  amountUrdu: string;
  time: string;
  timeUrdu: string;
  dueStatus: string;
  dueStatusUrdu: string;
  type: 'water' | 'fertilize' | 'repot' | 'check';
}

export interface GardenTask {
  id: string;
  title: string;
  titleUrdu: string;
  time: string;
  timeUrdu: string;
  type: 'water' | 'repot' | 'check' | 'harvest';
  completed: boolean;
  icon: string;
  iconBg: string;
  iconColor: string;
  image?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  image?: string;
  plantReference?: {
    name: string;
    status: string;
  };
}

export interface ScanResult {
  plantName: string;
  plantNameUrdu: string;
  scientificName: string;
  confidence: number;
  healthStatus: HealthStatus;
  chlorophyll: number;
  hydration: string;
  diagnosis: string;
  diagnosisUrdu: string;
  recommendations: string[];
}

export interface UserProfile {
  name: string;
  nameUrdu: string;
  email: string;
  location: string;
  locationUrdu: string;
  avatar: string;
}
