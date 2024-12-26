import { FC, ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

/**
 * 布局组件的属性接口
 * @interface LayoutProps
 */
interface LayoutProps {
  /** 子组件 */
  children: ReactNode;
}

/**
 * 布局容器组件
 * @component Layout
 * @param {LayoutProps} props - 布局组件的属性
 */
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 