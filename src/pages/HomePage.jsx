import React from 'react';
import { Link } from 'react-router-dom';
import { posts, categories, siteInfo } from '../data/siteData';
import BlogCard from '../components/BlogCard';
import CategoryCard from '../components/CategoryCard';

// الصفحة الرئيسية للموقع
export default function HomePage() {
  // جلب المقالات المحددة كمقالات مميزة
  const featuredPosts = posts.filter((p) => p.featured);

  // جلب أحدث 3 مقالات عادية
  const latestPosts = posts.filter((p) => !p.featured).slice(0, 3);

  // بيانات إحصائيات الموقع المعروضة في قسم الهيرو
  const stats = [
    { value: '+50', label: 'مقالة', icon: 'fa-solid fa-newspaper' },
    { value: '+10ألف', label: 'قارئ', icon: 'fa-solid fa-users' },
    { value: '4', label: 'تصنيفات', icon: 'fa-solid fa-folder-open' },
    { value: '6', label: 'كاتب', icon: 'fa-solid fa-pen-nib' },
  ];

  return (
    <>
      {/* 1. قسم الهيرو */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a]">
        {/* خلفية بنمط شبكي مع إضاءات عائمة */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '-2s' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            
            {/* الشارة */}
            <div className="section-label inline-flex items-center gap-2 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
              </span>
              <span className="text-sm font-medium text-neutral-300">
                مرحباً بك في {siteInfo.name}
              </span>
            </div>

            {/* العنوان الرئيسي */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              اكتشف <span className="gradient-text">فن</span>
              <br />
              التصوير الفوتوغرافي
            </h1>

            {/* الوصف */}
            <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
            </p>

            {/* أزرار الإجراء */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <Link
                to="/blog"
                className="btn-primary inline-flex items-center justify-center gap-2 group"
              >
                <span>استكشف المقالات</span>
                <svg
                  className="w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/about"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>اعرف المزيد</span>
              </Link>
            </div>

            {/* الإحصائيات */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {stats.map((item, idx) => (
                <div
                  key={item.label}
                  className="glass-card p-4 hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <i className={`${item.icon} text-2xl text-orange-500 mb-1`} />
                  <p className="text-2xl md:text-3xl font-bold gradient-text">{item.value}</p>
                  <p className="text-neutral-500 text-sm">{item.label}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 2. المقالات المختارة */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-500/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="section-label mb-4">
                <span className="relative flex h-2 w-2 ml-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                </span>
                مميز
              </span>
              <h2 className="section-title text-white">مقالات مختارة</h2>
              <p className="section-subtitle max-w-lg">محتوى منتقى لبدء رحلة تعلمك</p>
            </div>

            <Link
              to="/blog"
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-orange-500/20"
            >
              عرض الكل
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="space-y-8">
            {featuredPosts.map((post, idx) => (
              <BlogCard key={post.id} post={post} featured={true} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. التصنيفات */}
      <section className="py-24 bg-[#111111] relative border-y border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label mb-4">
              <span className="relative flex h-2 w-2 ml-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
              </span>
              التصنيفات
            </span>
            <h2 className="section-title text-white">استكشف حسب الموضوع</h2>
            <p className="section-subtitle max-w-lg mx-auto">اعثر على محتوى مصمم حسب اهتماماتك</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((cat, idx) => (
              <CategoryCard key={cat.name} category={cat} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. أحدث المقالات */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-orange-500/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="section-label mb-4">
                <span className="relative flex h-2 w-2 ml-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                </span>
                الأحدث
              </span>
              <h2 className="section-title text-white">أحدث المقالات</h2>
              <p className="section-subtitle max-w-lg">محتوى جديد طازج من المطبعة</p>
            </div>

            <Link
              to="/blog"
              className="group inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors"
            >
              عرض جميع المقالات
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post, idx) => (
              <BlogCard key={post.id} post={post} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. النشرة الإخبارية */}
      <section className="py-24 relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#161616] rounded-3xl border border-[#262626] p-8 md:p-12 lg:p-16 text-center">
            
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/30">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              اشترك في <span className="gradient-text">نشرتنا الإخبارية</span>
            </h2>

            <p className="text-neutral-400 text-lg mb-8 max-w-xl mx-auto">
              احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-5 py-4 rounded-xl bg-[#0a0a0a] border border-[#262626] focus:outline-none focus:border-orange-500/50 text-white placeholder-neutral-500 transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/20"
              >
                اشترك الآن
              </button>
            </form>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-500">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2 space-x-reverse">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face"
                    className="w-8 h-8 rounded-full border-2 border-[#161616] object-cover"
                    alt="Subscriber avatar"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face"
                    className="w-8 h-8 rounded-full border-2 border-[#161616] object-cover"
                    alt="Subscriber avatar"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                    className="w-8 h-8 rounded-full border-2 border-[#161616] object-cover"
                    alt="Subscriber avatar"
                  />
                </div>
                <span>
                  انضم لـ <span className="text-white font-medium">+10,000</span> مصور
                </span>
              </div>
              <span className="hidden sm:inline text-[#262626]">•</span>
              <span>بدون إزعاج</span>
              <span className="hidden sm:inline text-[#262626]">•</span>
              <span>إلغاء الاشتراك في أي وقت</span>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
