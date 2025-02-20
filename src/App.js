import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { LikesProvider } from './context/LikesContext';

import UserPanel from './components/UserPanel';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <LikesProvider>
          <UserPanel />
        </LikesProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
