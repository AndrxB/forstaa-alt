import React, { useState, useEffect } from 'react';
import colorThemes from '../colourthemes.json';  // Import your JSON file

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'vintage');

  const applyTheme = (themeName) => {
    const themeColors = colorThemes.themes[themeName];
    Object.keys(themeColors).forEach((key) => {
      document.documentElement.style.setProperty(`--${key}`, themeColors[key]);
    });
  };

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    const newTheme = theme === 'vintage' ? 'dark' : theme === 'dark' ? 'lightTeal' : 'vintage';
    setTheme(newTheme);
  };

  return (
    <button onClick={handleThemeSwitch}>Switch Theme</button>
  );
}
