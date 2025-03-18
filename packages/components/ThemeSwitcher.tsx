import React, { useState, useEffect } from 'react';
import colorThemes from '../json/colourthemes.json';  // Import your JSON file

type ThemeSwitcherProps = {
  constraints: string
}

export default function ThemeSwitcher({ constraints } : ThemeSwitcherProps) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'vintage');
  
  const applyTheme = (themeName: string) => {
  const themeColors = colorThemes.themes[themeName as keyof typeof colorThemes.themes];
  if (themeColors) {
    Object.keys(themeColors).forEach((key) => {
      document.documentElement.style.setProperty(
        `--${key}`,
        themeColors[key as keyof typeof themeColors] // Type assertion here
      );
    });
  } else {
    console.error(`Theme "${themeName}" not found.`);
  }
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
    <p className={constraints} id='theme-button' onClick={handleThemeSwitch}>Tema</p>
  );
}
