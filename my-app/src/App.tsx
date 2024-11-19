import React from 'react';
import logo from './logo.svg';
import './styles/globals.css'
import MinimalCV from './minimalCV';
import { ThemeProvider } from "@/theme-provider"
import { useEffect } from 'react';
import { LanguageProvider, useLanguage } from './languageContext';

function App() {
  useEffect(() => {
    document.title = 'Piotr Sobas | Portfolio';
  }, []);

  return (
    <LanguageProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <MinimalCV />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
