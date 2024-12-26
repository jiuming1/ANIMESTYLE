import { FC } from 'react';
import Link from 'next/link';

/**
 * 页脚链接项接口
 */
interface FooterLink {
  title: string;
  href: string;
}

/**
 * 页脚分组接口
 */
interface FooterGroup {
  title: string;
  links: FooterLink[];
}

/**
 * 页脚链接配置
 */
const footerGroups: FooterGroup[] = [
  {
    title: '快速链接',
    links: [
      { title: '首页', href: '/' },
      { title: '图片转换', href: '/convert' },
      { title: '作品展示', href: '/gallery' },
      { title: '个人中心', href: '/profile' },
    ],
  },
  {
    title: '帮助支持',
    links: [
      { title: '使用教程', href: '#' },
      { title: '常见问题', href: '#' },
      { title: '服务条款', href: '#' },
      { title: '隐私政策', href: '#' },
    ],
  },
  {
    title: '关于我们',
    links: [
      { title: '公司介绍', href: '#' },
      { title: '联系我们', href: '#' },
      { title: '加入我们', href: '#' },
      { title: '技术博客', href: '#' },
    ],
  },
];

/**
 * 页面底部组件
 */
const Footer: FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto pt-12 pb-8 px-4 sm:px-6 lg:px-8">
        {/* 主要内容区 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          {/* 品牌区域 */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                AnimeStyle
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              AnimeStyle是一个基于深度学习的智能图像风格转换平台，
              致力于为用户提供高质量的真实照片转动漫风格服务。
            </p>
            {/* 社交媒体图标 */}
            <div className="flex space-x-4">
              <a href="#" className="hover:opacity-80 transition-opacity duration-200">
                <span className="sr-only">微博</span>
                <svg viewBox="0 0 1024 1024" className="h-6 w-6" fill="#E6162D">
                  <path d="M851.4 590.193c-22.196-66.233-90.385-90.422-105.912-91.863-15.523-1.442-29.593-9.94-19.295-27.505 10.302-17.566 29.304-68.684-7.248-104.681-36.564-36.14-116.512-22.462-173.094 0.866-56.434 23.327-53.39 7.055-51.65-8.925 1.89-16.848 32.355-111.02-60.791-122.395C311.395 220.86 154.85 370.754 99.572 457.15 16 587.607 29.208 675.873 29.208 675.873h0.58c10.009 121.819 190.787 218.869 412.328 218.869 190.5 0 350.961-71.853 398.402-169.478 0 0 0.143-0.433 0.575-1.156 4.938-10.506 8.71-21.168 11.035-32.254 6.668-26.205 11.755-64.215-0.728-101.66zm-436.7 251.27c-157.71 0-285.674-84.095-285.674-187.768 0-103.671 127.82-187.76 285.674-187.76 157.705 0 285.673 84.089 285.673 187.76 0 103.815-127.968 187.768-285.673 187.768z m0-336.147c-128.472 0-232.622 66.421-232.622 148.379 0 81.961 104.15 148.379 232.622 148.379 128.47 0 232.623-66.417 232.623-148.379 0.001-81.958-104.153-148.379-232.623-148.379zM675.656 359.073c20.727 0.67 41.176 10.82 48.26 26.318 7.095 15.501 2.62 30.68-6.13 37.456-8.75 6.775-23.751 11.463-43.45 3.377-19.697-8.086-31.847-11.908-23.75-36.464 8.086-24.557 4.19-31.498 25.07-30.687z m185.64-112.523c42.909 12.498 88.771 55.125 77.426 96.32-11.345 41.194-46.565 40.523-46.565 40.523s-28.482 4.033-57.825-26.841c-29.343-30.873-30.69-67.675-30.69-67.675s-0.347-35.523 2.084-40.523c2.551-5.009 12.677 0 12.677 0s0.472-4.366 13.894-6.133c13.42-1.767 28.999 4.329 28.999 4.329z"/>
                </svg>
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity duration-200">
                <span className="sr-only">微信</span>
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="#07C160">
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.182 0 .653-.52 1.182-1.162 1.182-.642 0-1.162-.529-1.162-1.182 0-.653.52-1.182 1.162-1.182zm5.813 0c.642 0 1.162.529 1.162 1.182 0 .653-.52 1.182-1.162 1.182-.642 0-1.162-.529-1.162-1.182 0-.653.52-1.182 1.162-1.182zm6.636 4.246c-3.863 0-7 2.579-7 5.755 0 3.177 3.137 5.755 7 5.755.831 0 1.623-.103 2.36-.284a.706.706 0 0 1 .593.082l1.592.931a.265.265 0 0 0 .139.045c.134 0 .242-.11.242-.246 0-.06-.024-.118-.04-.177l-.326-1.232a.49.49 0 0 1 .177-.552C24.368 19.014 25.363 17.386 25.363 15.58c0-3.177-3.137-5.755-7-5.755zm-3.127 3.249c.535 0 .969.44.969.984 0 .544-.434.984-.969.984s-.969-.44-.969-.984c0-.544.434-.984.969-.984zm6.254 0c.535 0 .969.44.969.984 0 .544-.434.984-.969.984s-.969-.44-.969-.984c0-.544.434-.984.969-.984z"/>
                </svg>
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity duration-200">
                <span className="sr-only">GitHub</span>
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="#ffffff">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* 链接分组 */}
          {footerGroups.map((group) => (
            <div key={group.title} className="space-y-4">
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 block py-1"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 分隔线 */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* 版权信息 */}
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} AnimeStyle. All rights reserved.
            </p>
            {/* 备案信息 */}
            <div className="flex space-x-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-200">
                隐私政策
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="hover:text-white transition-colors duration-200">
                服务条款
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="hover:text-white transition-colors duration-200">
                京ICP备xxxxxx号
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 