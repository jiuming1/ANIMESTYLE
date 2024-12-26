'use client';

import { FC, useEffect, useState } from 'react';
import { useThemeStore } from '@/store/theme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

/**
 * 主题提供者组件
 */
const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const { isDark, setTheme } = useThemeStore();

  // 初始化挂载状态
  useEffect(() => {
    setMounted(true);
  }, []);

  // 初始化主题
  useEffect(() => {
    const root = document.documentElement;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // 尝试从localStorage获取主题
    try {
      const storedTheme = localStorage.getItem('theme-storage');
      if (storedTheme) {
        const { state } = JSON.parse(storedTheme);
        const theme = !!state.isDark;
        setTheme(theme);
        root.classList.toggle('dark', theme);
      } else {
        setTheme(prefersDark);
        root.classList.toggle('dark', prefersDark);
      }
    } catch {
      setTheme(prefersDark);
      root.classList.toggle('dark', prefersDark);
    }

    // 监听系统主题变化
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme-storage')) {
        setTheme(e.matches);
        root.classList.toggle('dark', e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [setTheme]);

  // 监听主题变化并应用
  useEffect(() => {
    if (mounted) {
      const root = document.documentElement;
      root.classList.toggle('dark', isDark);
      
      // 更新localStorage
      localStorage.setItem('theme-storage', JSON.stringify({ state: { isDark } }));
    }
  }, [isDark, mounted]);

  // 避免服务端渲染闪烁
  if (!mounted) {
    return (
      <div suppressHydrationWarning>
        {children}
      </div>
    );
  }

  return children;
};

export default ThemeProvider; 