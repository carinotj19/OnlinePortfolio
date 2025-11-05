import React, { useContext } from 'react';
import './Theme.css';
import { ThemeContext } from './ThemeProvider';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../icons";

const ThemeToggle = () => {
  const { effectiveTheme, toggleTheme } = useContext(ThemeContext);
  const isDark = effectiveTheme === 'dark';

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      onClick={toggleTheme}
    >
      <span className="theme-toggle-icon" aria-hidden="true">
        <FontAwesomeIcon icon={["fas", isDark ? "sun" : "moon"]} />
      </span>
    </button>
  );
};

export default ThemeToggle;

