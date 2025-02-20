import React from 'react';
import './UserPanel.css'; 

const UserPanel = ({
  theme,
  toggleTheme,
  language,
  switchLanguage,
  likes,
  handleLike,
  t
}) => {
  const isDark = theme === 'dark';

  return (
    <div className={`user-panel ${isDark ? 'dark' : 'light'}`}>
      <h1>{t.helloUser}</h1>

      <p>
        {t.likes}: {likes}
      </p>

      <button onClick={handleLike}>
        {likes > 0 ? t.liked : t.like}
      </button>

      <button onClick={toggleTheme}>
        {t.toggleTheme}
      </button>

      <button onClick={switchLanguage}>
        {t.switchLanguage}
      </button>
    </div>
  );
};

export default UserPanel;
