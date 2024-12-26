'use client';

import { FC, useCallback, useState } from 'react';
import Layout from '@/components/layout/Layout';
import Gallery from '@/components/features/Gallery/Gallery';

/**
 * 示例作品数据
 */
const demoItems = [
  {
    id: '1',
    originalUrl: 'https://picsum.photos/800/600?random=10',
    convertedUrl: 'https://picsum.photos/800/600?random=11',
    title: '夏日街景',
    createdAt: '2024-01-01T12:00:00Z',
    style: '宫崎骏风格',
    likes: 128
  },
  {
    id: '2',
    originalUrl: 'https://picsum.photos/800/600?random=12',
    convertedUrl: 'https://picsum.photos/800/600?random=13',
    title: '城市夜景',
    createdAt: '2024-01-02T12:00:00Z',
    style: '新海诚风格',
    likes: 256
  },
  {
    id: '3',
    originalUrl: 'https://picsum.photos/800/600?random=14',
    convertedUrl: 'https://picsum.photos/800/600?random=15',
    title: '春日樱花',
    createdAt: '2024-01-03T12:00:00Z',
    style: '京都动画风格',
    likes: 384
  },
  {
    id: '4',
    originalUrl: 'https://picsum.photos/800/600?random=16',
    convertedUrl: 'https://picsum.photos/800/600?random=17',
    title: '雨中漫步',
    createdAt: '2024-01-04T12:00:00Z',
    style: '漫画风格',
    likes: 192
  }
];

/**
 * 作品展示页面
 * @component GalleryPage
 */
const GalleryPage: FC = () => {
  const [styleFilter, setStyleFilter] = useState('');
  const [sortBy, setSortBy] = useState('latest');
  const [loading, setLoading] = useState(false);

  const handleStyleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setStyleFilter(e.target.value);
  }, []);

  const handleSortChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  }, []);

  const handleLoadMore = useCallback(() => {
    setLoading(true);
    // TODO: 实现加载更多逻辑
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">
            作品展示
          </h1>
          <p className="mt-4 text-gray-600">
            欣赏用户使用 AnimeStyle 创作的精美作品
          </p>
        </div>

        {/* 筛选器 */}
        <div className="mb-8 flex flex-wrap gap-4">
          <select
            className="px-4 py-2 border rounded-lg"
            value={styleFilter}
            onChange={handleStyleChange}
          >
            <option value="">全部风格</option>
            <option value="ghibli">宫崎骏风格</option>
            <option value="shinkai">新海诚风格</option>
            <option value="kyoani">京都动画风格</option>
          </select>

          <select
            className="px-4 py-2 border rounded-lg"
            value={sortBy}
            onChange={handleSortChange}
          >
            <option value="latest">最新发布</option>
            <option value="popular">最受欢迎</option>
          </select>
        </div>

        {/* 作品展示 */}
        <Gallery items={demoItems} loading={loading} />

        {/* 加载更多 */}
        <div className="text-center mt-12">
          <button
            className="px-6 py-2 border rounded-lg text-gray-600 hover:text-gray-900 hover:border-gray-900 transition-colors"
            onClick={handleLoadMore}
            disabled={loading}
          >
            {loading ? '加载中...' : '加载更多'}
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default GalleryPage; 