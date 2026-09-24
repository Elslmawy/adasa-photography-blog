import React from 'react';
import { Link } from 'react-router-dom';

// خريطة لتحديد الألوان والأيقونات المناسبة لكل تصنيف
const colorMap = {
  emerald: {
    bg: 'from-orange-500 to-yellow-500',
    light: 'bg-orange-500/10',
    icon: 'fa-solid fa-sun',
  },
  purple: {
    bg: 'from-orange-600 to-orange-400',
    light: 'bg-orange-500/10',
    icon: 'fa-solid fa-user',
  },
  blue: {
    bg: 'from-orange-500 to-yellow-500',
    light: 'bg-orange-500/10',
    icon: 'fa-solid fa-mountain-sun',
  },
  orange: {
    bg: 'from-orange-500 to-yellow-500',
    light: 'bg-orange-500/10',
    icon: 'fa-solid fa-sliders',
  },
};

// كارت عرض التصنيف وعدد مقالاته
export default function CategoryCard({ category, index = 0 }) {
  const conf = colorMap[category.color] || colorMap.orange;

  return (
    <Link
      to={`/blog?category=${category.name.toLowerCase()}`}
      className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* تأثير التدرج عند التحويم */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${conf.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* محتوى البطاقة */}
      <div className="relative z-10">
        <div
          className={`w-12 h-12 ${conf.light} rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent`}
        >
          <i
            className={`${conf.icon} text-xl text-orange-500 group-hover:text-white transition-colors duration-300`}
          />
        </div>

        <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
          {category.name}
        </h3>

        <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
          {category.count} مقالة
        </p>

        {/* سهم التنقل */}
        <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
          <svg className="w-4 h-4 text-white rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
