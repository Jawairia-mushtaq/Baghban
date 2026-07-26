/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { TopAppBar } from './components/Navigation/TopAppBar';
import { BottomNavBar } from './components/Navigation/BottomNavBar';
import { OnboardingScreen } from './components/Screens/OnboardingScreen';
import { HomeScreen } from './components/Screens/HomeScreen';
import { PlantLibraryScreen } from './components/Screens/PlantLibraryScreen';
import { PlantDetailsScreen } from './components/Screens/PlantDetailsScreen';
import { AIAssistantScreen } from './components/Screens/AIAssistantScreen';
import { PlantScannerScreen } from './components/Screens/PlantScannerScreen';
import { CalendarScreen } from './components/Screens/CalendarScreen';
import { SettingsScreen } from './components/Screens/SettingsScreen';
import { AddPlantModal } from './components/Modals/AddPlantModal';
import { JournalModal } from './components/Modals/JournalModal';

const AppContent: React.FC = () => {
  const { currentScreen } = useApp();

  const renderScreen = () => {
    switch (currentScreen) {
      case 'onboarding':
        return <OnboardingScreen />;
      case 'home':
        return <HomeScreen />;
      case 'library':
        return <PlantLibraryScreen />;
      case 'details':
        return <PlantDetailsScreen />;
      case 'ai-assistant':
        return <AIAssistantScreen />;
      case 'scanner':
        return <PlantScannerScreen />;
      case 'calendar':
        return <CalendarScreen />;
      case 'settings':
        return <SettingsScreen />;
      default:
        return <HomeScreen />;
    }
  };

  const isFullBleedScreen = currentScreen === 'onboarding' || currentScreen === 'scanner';

  return (
    <div className="min-h-screen bg-[#f5fced] dark:bg-[#1a1c19] text-[#171d14] dark:text-[#ecf3e4] flex flex-col font-sans transition-colors duration-300">
      <TopAppBar />
      <main className={`flex-grow w-full ${isFullBleedScreen ? '' : 'px-4 md:px-6 pt-4 pb-28 max-w-4xl mx-auto'}`}>
        {renderScreen()}
      </main>
      <BottomNavBar />
      <AddPlantModal />
      <JournalModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

