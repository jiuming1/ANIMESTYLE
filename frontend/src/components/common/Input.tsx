'use client';

import { InputHTMLAttributes, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

/**
 * 输入框组件的属性接口
 * @interface InputProps
 * @extends {InputHTMLAttributes<HTMLInputElement>}
 */
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** 输入框标签 */
  label?: string;
  /** 错误信息 */
  error?: string;
  /** 帮助文本 */
  helpText?: string;
}

/**
 * 通用输入框组件
 * @component Input
 * @param {InputProps} props - 输入框组件的属性
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helpText, ...props }, ref) => {
    const baseStyles = 'w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors';
    const errorStyles = error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300';
    
    const inputClasses = twMerge(
      baseStyles,
      errorStyles,
      className
    );

    return (
      <div className="space-y-1">
        {label && (
          <label className="block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={inputClasses}
          {...props}
        />
        {helpText && !error && (
          <p className="text-sm text-gray-500">{helpText}</p>
        )}
        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input; 