'use client';

import { create } from 'zustand';

interface ThemeState {
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (isDark: boolean) => void;
}

// 获取初始主题状态
const getInitialTheme = () => {
  if (typeof window === 'undefined') return false;
  
  try {
    const storedTheme = localStorage.getItem('theme-storage');
    if (storedTheme) {
      const { state } = JSON.parse(storedTheme);
      return !!state.isDark;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  } catch {
    return false;
  }
};

export const useThemeStore = create<ThemeState>((set) => ({
  isDark: getInitialTheme(),
  toggleTheme: () => 
    set((state) => {
      const newIsDark = !state.isDark;
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme-storage', JSON.stringify({ state: { isDark: newIsDark } }));
      }
      return { isDark: newIsDark };
    }),
  setTheme: (isDark: boolean) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme-storage', JSON.stringify({ state: { isDark } }));
    }
    set({ isDark });
  },
})); 