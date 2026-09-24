import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { siteInfo } from '../data/siteData';
import logoImg from '../assets/logo.png';

// شريط التنقل العلوي للموقع (الهيدر)
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // حالة فتح/إغلاق قائمة الموبايل
  const [isScrolled, setIsScrolled] = useState(false); // حالة التمرير لتغيير خلفية الهيدر

  // مراقبة التمرير لتفعيل تأثير الخلفية عند النزول لأسفل
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // روابط صفحات الموقع الرئيسية
  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'المدونة', path: '/blog' },
    { name: 'من نحن', path: '/about' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#0a0a0a]/95 backdrop-blur-xl ${
        isScrolled ? 'border-b border-[#262626]' : 'border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* الشعار والاسم */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300">
              <img
                src={logoImg}
                alt="Photography Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                {siteInfo.name}
              </span>
              <span className="text-xs text-orange-400/80 hidden sm:block tracking-wide">
                عالم التصوير الفوتوغرافي
              </span>
            </div>
          </Link>

          {/* روابط التنقل للشاشات المتوسطة والكبيرة */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center bg-[#161616] rounded-full p-1.5 border border-[#262626]">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md shadow-orange-500/20'
                        : 'text-neutral-400 hover:text-white'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* أزرار البحث والقراءة */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/blog"
              className="p-3 text-neutral-500 hover:text-orange-500 hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]"
              title="بحث في المقالات"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </Link>
            <Link to="/blog" className="btn-primary text-sm">
              ابدأ القراءة
            </Link>
          </div>

          {/* زر قائمة الموبايل */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 text-neutral-400 hover:text-white hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]"
            aria-label="القائمة"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* قائمة الموبايل */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-80 pb-6' : 'max-h-0'
          }`}
        >
          <div className="bg-[#161616] backdrop-blur-xl rounded-2xl p-4 border border-[#262626]">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-orange-500/10 text-orange-500 border border-orange-500/30'
                        : 'text-neutral-400 hover:bg-[#1a1a1a] hover:text-white'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Link
                to="/blog"
                onClick={() => setIsMenuOpen(false)}
                className="btn-primary text-sm text-center mt-2"
              >
                ابدأ القراءة
              </Link>
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
}
