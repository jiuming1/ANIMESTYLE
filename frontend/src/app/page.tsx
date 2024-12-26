import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/common/Button';
import Layout from '@/components/layout/Layout';

/**
 * 首页组件
 * @component HomePage
 */
export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            将照片转换为精美动漫风格
          </h1>
          <p className="mt-6 text-xl text-muted max-w-2xl mx-auto">
            使用先进的AI技术，一键将您的照片转换成独特的动漫艺术作品
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/convert" className="inline-block">
              <Button size="lg" className="button-gradient w-full sm:w-auto">
                立即体验
              </Button>
            </Link>
            <Link href="/gallery" className="inline-block">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                浏览作品
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">
            为什么选择 AnimeStyle
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 hover-card">
              <div className="w-12 h-12 mx-auto bg-primary/10 text-primary rounded-xl flex items-center justify-center text-2xl mb-4">
                🎨
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">多种动漫风格</h3>
              <p className="text-muted text-center">
                提供多种经典动漫风格供选择，满足不同审美需求
              </p>
            </div>
            <div className="card p-6 hover-card">
              <div className="w-12 h-12 mx-auto bg-secondary/10 text-secondary rounded-xl flex items-center justify-center text-2xl mb-4">
                ⚡
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">快速处理</h3>
              <p className="text-muted text-center">
                采用高效的AI模型，秒级完成图片转换
              </p>
            </div>
            <div className="card p-6 hover-card">
              <div className="w-12 h-12 mx-auto bg-accent/10 text-accent rounded-xl flex items-center justify-center text-2xl mb-4">
                ✨
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">高质量输出</h3>
              <p className="text-muted text-center">
                精心调教的模型确保输出高质量的转换效果
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold gradient-text mb-6">
            准备好开始了吗？
          </h2>
          <p className="mt-4 text-xl text-muted mb-8">
            立即体验AI图片风格转换的魅力，创作属于你的动漫艺术作品
          </p>
          <div className="inline-flex gap-4">
            <Link href="/convert" className="inline-block">
              <Button size="lg" className="button-gradient">
                开始创作
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
