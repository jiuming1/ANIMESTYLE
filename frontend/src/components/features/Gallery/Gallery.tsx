'use client';

import { FC, useCallback, useState } from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import Button from '@/components/common/Button';

/**
 * 作品项接口
 * @interface ArtworkItem
 */
interface ArtworkItem {
  /** 作品ID */
  id: string;
  /** 原始图片URL */
  originalUrl: string;
  /** 转换后图片URL */
  convertedUrl: string;
  /** 作品标题 */
  title: string;
  /** 创建时间 */
  createdAt: string;
  /** 使用的风格 */
  style: string;
  /** 点赞数 */
  likes: number;
}

/**
 * 作品展示组件的属性接口
 * @interface GalleryProps
 */
interface GalleryProps {
  /** 自定义类名 */
  className?: string;
  /** 作品列表 */
  items?: ArtworkItem[];
  /** 是否加载中 */
  loading?: boolean;
}

/**
 * 作品展示组件
 * @component Gallery
 * @param {GalleryProps} props - 作品展示组件的属性
 */
const Gallery: FC<GalleryProps> = ({
  className,
  items = [],
  loading = false
}) => {
  const [selectedItem, setSelectedItem] = useState<ArtworkItem | null>(null);

  const handleItemClick = useCallback((item: ArtworkItem) => {
    setSelectedItem(item);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedItem(null);
  }, []);

  const handleLike = useCallback((e: React.MouseEvent, itemId: string) => {
    e.stopPropagation();
    // TODO: 实现点赞功能
    console.log('点赞:', itemId);
  }, []);

  return (
    <div className={className}>
      {/* 作品网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => handleItemClick(item)}
          >
            <div className="relative aspect-square">
              <Image
                src={item.convertedUrl}
                alt={item.title}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-1 text-sm text-gray-500">
                风格：{item.style}
              </p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {new Date(item.createdAt).toLocaleDateString()}
                </span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">
                    {item.likes} 赞
                  </span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={(e) => handleLike(e, item.id)}
                  >
                    👍
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 作品详情弹窗 */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">{selectedItem.title}</h2>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={handleCloseModal}
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="font-medium">原始图片</h3>
                  <div className="relative aspect-square">
                    <Image
                      src={selectedItem.originalUrl}
                      alt="原始图片"
                      fill
                      className="object-cover rounded-lg"
                      unoptimized
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">转换效果</h3>
                  <div className="relative aspect-square">
                    <Image
                      src={selectedItem.convertedUrl}
                      alt="转换效果"
                      fill
                      className="object-cover rounded-lg"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">
                  创建时间：{new Date(selectedItem.createdAt).toLocaleString()}
                </p>
                <p className="text-sm text-gray-500">
                  使用风格：{selectedItem.style}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 加载状态 */}
      {loading && (
        <div className="flex justify-center py-8">
          <div className="w-8 h-8 border-t-2 border-b-2 border-blue-500 rounded-full animate-spin" />
        </div>
      )}

      {/* 空状态 */}
      {!loading && items.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">暂无作品</p>
        </div>
      )}
    </div>
  );
};

export default Gallery; 