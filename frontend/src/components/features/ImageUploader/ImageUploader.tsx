'use client';

import { FC, useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import Button from '@/components/common/Button';

/**
 * 图片上传组件的属性接口
 * @interface ImageUploaderProps
 */
interface ImageUploaderProps {
  /** 自定义类名 */
  className?: string;
  /** 上传完成回调 */
  onUpload?: (file: File) => void;
  /** 最大文件大小（MB） */
  maxSize?: number;
}

/**
 * 图片上传组件
 * @component ImageUploader
 * @param {ImageUploaderProps} props - 图片上传组件的属性
 */
const ImageUploader: FC<ImageUploaderProps> = ({
  className,
  onUpload,
  maxSize = 5
}) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setError(null);
    const file = acceptedFiles[0];

    if (file) {
      // 检查文件大小
      if (file.size > maxSize * 1024 * 1024) {
        setError(`文件大小不能超过 ${maxSize}MB`);
        return;
      }

      // 创建预览URL
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
      onUpload?.(file);

      // 清理预览URL
      return () => URL.revokeObjectURL(previewUrl);
    }
  }, [maxSize, onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif']
    },
    maxFiles: 1
  });

  const clearPreview = useCallback(() => {
    setPreview(null);
    setError(null);
  }, []);

  const handleStartConvert = useCallback(() => {
    // TODO: 实现转换逻辑
    console.log('开始转换');
  }, []);

  return (
    <div className={twMerge('space-y-4', className)}>
      <div
        {...getRootProps()}
        className={twMerge(
          'border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors',
          isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400',
          preview ? 'border-green-500' : ''
        )}
      >
        <input {...getInputProps()} />
        
        {preview ? (
          <div className="relative w-full aspect-video">
            <Image
              src={preview}
              alt="预览图"
              fill
              className="object-contain rounded-lg"
              unoptimized
            />
          </div>
        ) : (
          <div className="space-y-2">
            <div className="text-4xl text-gray-400">📸</div>
            <p className="text-gray-600">
              {isDragActive
                ? '放开以上传图片'
                : '拖拽图片到此处或点击上传'}
            </p>
            <p className="text-sm text-gray-500">
              支持 JPG、PNG、GIF 格式，最大 {maxSize}MB
            </p>
          </div>
        )}
      </div>

      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}

      {preview && (
        <div className="flex justify-end space-x-4">
          <Button
            variant="outline"
            onClick={clearPreview}
          >
            重新上传
          </Button>
          <Button onClick={handleStartConvert}>
            开始转换
          </Button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader; 