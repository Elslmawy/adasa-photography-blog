import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

// الهيكل العام لصفحات الموقع (الهيدر + محتوى الصفحة + الفوتر)
export default function Layout() {
  const location = useLocation();

  // إعادة التمرير لأعلى الصفحة تلقائياً عند الانتقال لصفحة جديدة
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a]">
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
