import React from 'react';
import UserPanel from './UserPanel';

import { useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../hooks/useLanguage';
import { useLikes } from '../../hooks/useLikes';

import en from '../../translations/en.json';
import ru from '../../translations/ru.json';

const translations = { en, ru };

const UserPanelContainer = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, switchLanguage } = useLanguage();
  const { likes, handleLike } = useLikes();

  // Выбираем перевод в зависимости от текущего языка
  const t = translations[language];

  return (
    <UserPanel
      theme={theme}
      toggleTheme={toggleTheme}
      language={language}
      switchLanguage={switchLanguage}
      likes={likes}
      handleLike={handleLike}
      t={t}
    />
  );
};

export default UserPanelContainer;
