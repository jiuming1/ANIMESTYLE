'use client';

import { ButtonHTMLAttributes, FC } from 'react';
import { twMerge } from 'tailwind-merge';

/**
 * 按钮组件的属性接口
 * @interface ButtonProps
 * @extends {ButtonHTMLAttributes<HTMLButtonElement>}
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** 按钮变体类型 */
  variant?: 'primary' | 'secondary' | 'outline';
  /** 按钮尺寸 */
  size?: 'sm' | 'md' | 'lg';
  /** 是否显示加载状态 */
  isLoading?: boolean;
}

/**
 * 通用按钮组件
 * @component Button
 * @param {ButtonProps} props - 按钮组件的属性
 */
const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled,
  ...props
}) => {
  const baseStyles = 'rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const classes = twMerge(
    baseStyles,
    variants[variant],
    sizes[size],
    isLoading && 'opacity-70 cursor-not-allowed',
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );

  return (
    <button
      className={classes}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="w-5 h-5 border-t-2 border-b-2 border-current rounded-full animate-spin" />
          <span className="ml-2">加载中...</span>
        </div>
      ) : children}
    </button>
  );
};

export default Button; 