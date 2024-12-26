'use client';

import { FC, useCallback } from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

/**
 * 风格选项接口
 * @interface StyleOption
 */
interface StyleOption {
  /** 风格ID */
  id: string;
  /** 风格名称 */
  name: string;
  /** 风格描述 */
  description: string;
  /** 预览图URL */
  previewUrl: string;
}

/**
 * 风格选择器组件的属性接口
 * @interface StyleSelectorProps
 */
interface StyleSelectorProps {
  /** 自定义类名 */
  className?: string;
  /** 选中的风格ID */
  selectedId?: string;
  /** 选择回调 */
  onSelect?: (id: string) => void;
}

/**
 * 预设风格选项
 */
const styleOptions: StyleOption[] = [
  {
    id: 'style1',
    name: '宫崎骏风格',
    description: '温暖柔和的色调，充满童话般的梦幻感',
    previewUrl: 'https://picsum.photos/800/450?random=5'
  },
  {
    id: 'style2',
    name: '新海诚风格',
    description: '细腻的光影效果，唯美写实的画面风格',
    previewUrl: 'https://picsum.photos/800/450?random=6'
  },
  {
    id: 'style3',
    name: '京都动画风格',
    description: '清新细腻的画风，细节丰富的人物刻画',
    previewUrl: 'https://picsum.photos/800/450?random=7'
  },
  {
    id: 'style4',
    name: '漫画风格',
    description: '黑白分明的线条，富有表现力的画面效果',
    previewUrl: 'https://picsum.photos/800/450?random=8'
  }
];

/**
 * 风格选择器组件
 * @component StyleSelector
 * @param {StyleSelectorProps} props - 风格选择器组件的属性
 */
const StyleSelector: FC<StyleSelectorProps> = ({
  className,
  selectedId,
  onSelect
}) => {
  const handleSelect = useCallback((id: string) => {
    onSelect?.(id);
  }, [onSelect]);

  return (
    <div className={twMerge('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6', className)}>
      {styleOptions.map((style) => (
        <div
          key={style.id}
          className={twMerge(
            'border rounded-lg overflow-hidden cursor-pointer transition-all hover:shadow-lg',
            selectedId === style.id ? 'ring-2 ring-blue-500' : ''
          )}
          onClick={() => handleSelect(style.id)}
        >
          <div className="relative aspect-video">
            <Image
              src={style.previewUrl}
              alt={style.name}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-gray-900">{style.name}</h3>
            <p className="mt-1 text-sm text-gray-500">{style.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StyleSelector; 