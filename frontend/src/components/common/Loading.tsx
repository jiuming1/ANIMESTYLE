'use client';

import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

/**
 * 加载组件的属性接口
 * @interface LoadingProps
 */
interface LoadingProps {
  /** 自定义类名 */
  className?: string;
  /** 加载文本 */
  text?: string;
  /** 尺寸 */
  size?: 'sm' | 'md' | 'lg';
}

/**
 * 通用加载组件
 * @component Loading
 * @param {LoadingProps} props - 加载组件的属性
 */
const Loading: FC<LoadingProps> = ({
  className,
  text = '加载中...',
  size = 'md'
}) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  return (
    <div className={twMerge('flex flex-col items-center justify-center', className)}>
      <div className={twMerge(
        'border-t-2 border-b-2 border-blue-600 rounded-full animate-spin',
        sizes[size]
      )} />
      {text && (
        <p className={twMerge('mt-2 text-gray-600', textSizes[size])}>
          {text}
        </p>
      )}
    </div>
  );
};

export default Loading; 