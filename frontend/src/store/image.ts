import { create } from 'zustand';

/**
 * 图片信息接口
 */
interface ImageInfo {
  id: string;
  originalUrl: string;
  convertedUrl?: string;
  title: string;
  style: string;
  createdAt: string;
  likes: number;
}

/**
 * 图片状态接口
 */
interface ImageState {
  currentImage: ImageInfo | null;
  uploadedImages: ImageInfo[];
  isConverting: boolean;
  setCurrentImage: (image: ImageInfo | null) => void;
  addUploadedImage: (image: ImageInfo) => void;
  removeUploadedImage: (id: string) => void;
  setIsConverting: (status: boolean) => void;
  updateImageInfo: (id: string, info: Partial<ImageInfo>) => void;
}

/**
 * 图片状态管理
 */
export const useImageStore = create<ImageState>((set) => ({
  currentImage: null,
  uploadedImages: [],
  isConverting: false,

  /**
   * 设置当前图片
   */
  setCurrentImage: (image) => set({ currentImage: image }),

  /**
   * 添加上传的图片
   */
  addUploadedImage: (image) =>
    set((state) => ({
      uploadedImages: [...state.uploadedImages, image],
    })),

  /**
   * 移除上传的图片
   */
  removeUploadedImage: (id) =>
    set((state) => ({
      uploadedImages: state.uploadedImages.filter((img) => img.id !== id),
    })),

  /**
   * 设置转换状态
   */
  setIsConverting: (status) => set({ isConverting: status }),

  /**
   * 更新图片信息
   */
  updateImageInfo: (id, info) =>
    set((state) => ({
      uploadedImages: state.uploadedImages.map((img) =>
        img.id === id ? { ...img, ...info } : img
      ),
    })),
})); 