import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * 用户信息接口
 */
interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  bio?: string;
  createdAt: string;
}

/**
 * 认证状态接口
 */
interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (user: User, token: string) => void;
  logout: () => void;
  updateUser: (user: Partial<User>) => void;
}

/**
 * 认证状态管理
 */
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,

      /**
       * 用户登录
       */
      login: (user: User, token: string) =>
        set({
          user,
          token,
          isAuthenticated: true,
        }),

      /**
       * 用户登出
       */
      logout: () =>
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        }),

      /**
       * 更新用户信息
       */
      updateUser: (userData: Partial<User>) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...userData } : null,
        })),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ user: state.user, token: state.token }),
    }
  )
); 