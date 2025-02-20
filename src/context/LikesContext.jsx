import React, { createContext, useState } from 'react';

export const LikesContext = createContext();

export const LikesProvider = ({ children }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes((prev) => prev + 1);
  };

  return (
    <LikesContext.Provider value={{ likes, handleLike }}>
      {children}
    </LikesContext.Provider>
  );
};
