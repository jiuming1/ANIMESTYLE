import { create } from 'zustand';

/**
 * 通知类型
 */
type NotificationType = 'success' | 'error' | 'info' | 'warning';

/**
 * 通知接口
 */
interface Notification {
  id: string;
  type: NotificationType;
  message: string;
  duration?: number;
}

/**
 * UI状态接口
 */
interface UIState {
  isLoading: boolean;
  notifications: Notification[];
  setLoading: (status: boolean) => void;
  addNotification: (notification: Omit<Notification, 'id'>) => void;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;
}

/**
 * UI状态管理
 */
export const useUIStore = create<UIState>((set) => ({
  isLoading: false,
  notifications: [],

  /**
   * 设置加载状态
   */
  setLoading: (status) => set({ isLoading: status }),

  /**
   * 添加通知
   */
  addNotification: (notification) =>
    set((state) => ({
      notifications: [
        ...state.notifications,
        { ...notification, id: Math.random().toString(36).substr(2, 9) },
      ],
    })),

  /**
   * 移除通知
   */
  removeNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    })),

  /**
   * 清空所有通知
   */
  clearNotifications: () => set({ notifications: [] }),
})); 