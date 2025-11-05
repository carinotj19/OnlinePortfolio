import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';

export const ThemeContext = createContext({ theme: 'system', setTheme: () => {}, toggleTheme: () => {} });

const getSystemTheme = () => (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      return saved || 'system';
    } catch {
      return 'system';
    }
  });

  const effectiveTheme = theme === 'system' ? getSystemTheme() : theme;

  const applyTheme = useCallback((t) => {
    const root = document.documentElement;
    root.setAttribute('data-theme', t);
  }, []);

  useEffect(() => {
    applyTheme(effectiveTheme);

    if (theme === 'system') {
      const mq = window.matchMedia('(prefers-color-scheme: light)');
      const handler = () => applyTheme(getSystemTheme());
      mq.addEventListener ? mq.addEventListener('change', handler) : mq.addListener(handler);
      return () => {
        mq.removeEventListener ? mq.removeEventListener('change', handler) : mq.removeListener(handler);
      };
    }
  }, [theme, effectiveTheme, applyTheme]);

  const setTheme = useCallback((t) => {
    setThemeState(t);
    try { localStorage.setItem('theme', t); } catch {}
  }, []);

  const toggleTheme = useCallback(() => {
    const next = effectiveTheme === 'dark' ? 'light' : 'dark';
    setThemeState(next);
    try { localStorage.setItem('theme', next); } catch {}
  }, [effectiveTheme]);

  const value = useMemo(() => ({ theme, effectiveTheme, setTheme, toggleTheme }), [theme, effectiveTheme, setTheme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export default ThemeProvider;

