'use client';

import { FC, useCallback, useState } from 'react';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Gallery from '@/components/features/Gallery/Gallery';

/**
 * 用户信息接口
 */
interface UserProfile {
  avatar: string;
  username: string;
  email: string;
  bio: string;
  createdAt: string;
  worksCount: number;
  likesCount: number;
}

/**
 * 示例用户数据
 */
const demoUser: UserProfile = {
  avatar: 'https://picsum.photos/200',
  username: '演示用户',
  email: 'demo@example.com',
  bio: '热爱动漫和艺术创作',
  createdAt: '2024-01-01',
  worksCount: 12,
  likesCount: 384
};

/**
 * 示例作品数据
 */
const demoWorks = [
  {
    id: '1',
    originalUrl: 'https://picsum.photos/800/600?random=1',
    convertedUrl: 'https://picsum.photos/800/600?random=2',
    title: '我的第一幅作品',
    createdAt: '2024-01-01T12:00:00Z',
    style: '宫崎骏风格',
    likes: 128
  },
  {
    id: '2',
    originalUrl: 'https://picsum.photos/800/600?random=3',
    convertedUrl: 'https://picsum.photos/800/600?random=4',
    title: '城市印象',
    createdAt: '2024-01-02T12:00:00Z',
    style: '新海诚风格',
    likes: 256
  }
];

/**
 * 个人中心页面
 * @component ProfilePage
 */
const ProfilePage: FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(demoUser);

  const handleEdit = useCallback(() => {
    setIsEditing(true);
  }, []);

  const handleSave = useCallback(() => {
    setIsEditing(false);
    // TODO: 保存用户信息
  }, []);

  const handleCancel = useCallback(() => {
    setIsEditing(false);
    setProfile(demoUser); // 重置为原始数据
  }, []);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 个人信息卡片 */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="relative w-24 h-24 rounded-full overflow-hidden">
              <Image
                src={profile.avatar}
                alt={profile.username}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="flex-grow">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  {isEditing ? (
                    <Input
                      value={profile.username}
                      onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                      className="mb-2"
                    />
                  ) : (
                    <h1 className="text-2xl font-bold text-gray-900">{profile.username}</h1>
                  )}
                  <p className="text-sm text-gray-500">
                    加入时间：{new Date(profile.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex space-x-4">
                  {isEditing ? (
                    <>
                      <Button variant="outline" onClick={handleCancel} className="flex-1 sm:flex-none">
                        取消
                      </Button>
                      <Button onClick={handleSave} className="flex-1 sm:flex-none">
                        保存
                      </Button>
                    </>
                  ) : (
                    <Button onClick={handleEdit} className="w-full sm:w-auto">
                      编辑资料
                    </Button>
                  )}
                </div>
              </div>
              <div className="mt-4">
                {isEditing ? (
                  <Input
                    value={profile.bio}
                    onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                    placeholder="写点什么介绍自己..."
                  />
                ) : (
                  <p className="text-gray-600">{profile.bio}</p>
                )}
              </div>
              <div className="mt-4 flex gap-6">
                <div>
                  <span className="text-lg font-semibold">{profile.worksCount}</span>
                  <span className="ml-1 text-gray-500">作品</span>
                </div>
                <div>
                  <span className="text-lg font-semibold">{profile.likesCount}</span>
                  <span className="ml-1 text-gray-500">获赞</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 我的作品 */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">我的作品</h2>
          <Gallery items={demoWorks} />
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage; 