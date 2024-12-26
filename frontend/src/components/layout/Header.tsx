'use client';

import { FC, useState, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { useThemeStore } from '@/store/theme';

/**
 * 导航项接口
 */
interface NavItem {
  /** 导航项标题 */
  title: string;
  /** 导航项链接 */
  href: string;
  /** 导航项图标 */
  icon?: string;
}

/**
 * 导航菜单配置
 */
const navItems: NavItem[] = [
  { title: '首页', href: '/', icon: '🏠' },
  { title: '图片转换', href: '/convert', icon: '🎨' },
  { title: '作品展示', href: '/gallery', icon: '🖼️' },
  { title: '个人中心', href: '/profile', icon: '👤' },
];

/**
 * 页面头部组件
 */
const Header: FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useThemeStore();

  // 处理主题切换
  const handleThemeToggle = useCallback(() => {
    toggleTheme();
    // 直接操作DOM以确保立即反馈
    document.documentElement.classList.toggle('dark', !isDark);
  }, [isDark, toggleTheme]);

  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo区域 */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                AnimeStyle
              </span>
            </Link>
          </div>

          {/* 桌面端导航菜单 */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={twMerge(
                  'inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200',
                  pathname === item.href
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100'
                )}
              >
                <span className="mr-2">{item.icon}</span>
                {item.title}
              </Link>
            ))}
          </nav>

          {/* 用户操作区域 */}
          <div className="flex items-center space-x-4">
            {/* 主题切换按钮 */}
            <button
              onClick={handleThemeToggle}
              className="p-2 rounded-md text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="切换主题"
            >
              <span className="sr-only">切换主题</span>
              {isDark ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            {/* 移动端菜单按钮 */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-gray-100 dark:hover:bg-gray-800"
            >
              <span className="sr-only">打开菜单</span>
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* 移动端菜单 */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={twMerge(
                    'block px-3 py-2 rounded-md text-base font-medium',
                    pathname === item.href
                      ? 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
                      : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 