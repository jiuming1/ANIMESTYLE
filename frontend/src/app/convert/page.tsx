'use client';

import { FC, useCallback, useState } from 'react';
import Layout from '@/components/layout/Layout';
import ImageUploader from '@/components/features/ImageUploader/ImageUploader';
import StyleSelector from '@/components/features/StyleSelector/StyleSelector';
import Image from 'next/image';

/**
 * 图片转换页面
 * @component ConvertPage
 */
const ConvertPage: FC = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string>();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [convertedUrl, setConvertedUrl] = useState<string | null>(null);

  const handleUpload = useCallback((file: File) => {
    setUploadedFile(file);
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    setConvertedUrl(null); // 清除之前的转换结果
    console.log('Uploaded file:', file);
  }, []);

  const handleStyleSelect = useCallback((styleId: string) => {
    setSelectedStyle(styleId);
    // 模拟转换效果
    if (previewUrl) {
      setConvertedUrl('https://picsum.photos/800/600?random=20');
    }
    console.log('Selected style:', styleId);
  }, [previewUrl]);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">
            图片风格转换
          </h1>
          <p className="mt-4 text-gray-600">
            上传您的照片，选择喜欢的动漫风格，即可开始转换
          </p>
        </div>

        <div className="space-y-12">
          {/* 步骤1：上传图片 */}
          <section>
            <h2 className="text-xl font-semibold mb-4">
              第一步：上传图片
            </h2>
            <ImageUploader onUpload={handleUpload} />
          </section>

          {/* 步骤2：选择风格 */}
          <section>
            <h2 className="text-xl font-semibold mb-4">
              第二步：选择风格
            </h2>
            <StyleSelector
              selectedId={selectedStyle}
              onSelect={handleStyleSelect}
            />
          </section>

          {/* 转换结果 */}
          <section className="border rounded-lg p-8">
            <h2 className="text-xl font-semibold mb-4 text-center">
              转换结果
            </h2>
            {!previewUrl ? (
              <p className="text-center text-gray-600">
                请先上传图片并选择风格开始转换
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <h3 className="font-medium text-center">原始图片</h3>
                  <div className="relative aspect-video">
                    <Image
                      src={previewUrl}
                      alt="原始图片"
                      fill
                      className="object-contain rounded-lg"
                      unoptimized
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-center">转换效果</h3>
                  <div className="relative aspect-video">
                    {convertedUrl ? (
                      <Image
                        src={convertedUrl}
                        alt="转换效果"
                        fill
                        className="object-contain rounded-lg"
                        unoptimized
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
                        <p className="text-gray-500">
                          {selectedStyle ? '正在转换...' : '请选择风格'}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default ConvertPage; 