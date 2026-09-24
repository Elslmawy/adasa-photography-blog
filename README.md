# 📸 عدسة — Adasah | مدونة فن التصوير الفوتوغرافي

<div align="center">

  <img src="public/favicon.svg" alt="عدسة Logo" width="90" height="90" style="border-radius: 20px;" />

  <h3>مدونة عربية متخصصة في فن وتقنيات التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.</h3>

  <p align="center">
    <a href="https://elslmawy.github.io/adasa-photography-blog/">
      <img src="https://img.shields.io/badge/🌐_الموقع_اللايف-عرض_النسخة_الحية-f97316?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Live Demo" height="40" />
    </a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 19" />
    <img src="https://img.shields.io/badge/Vite-8.3-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS v4" />
    <img src="https://img.shields.io/badge/React_Router-v7.1-CA4245?style=flat-square&logo=react-router&logoColor=white" alt="React Router 7" />
    <img src="https://img.shields.io/badge/License-MIT-green.svg?style=flat-square" alt="License" />
  </p>

</div>

---

## 🌟 نظرة عامة (Overview)

**عدسة (Adasah)** هي منصة تدوين عصرية وتفاعلية مخصصة لهواة ومحترفي التصوير الفوتوغرافي. تم بناؤها باستخدام أحدث تقنيات الويب مع التركيز على التصميم الداكن الفاخر (Dark Aesthetic)، وتجربة المستخدم السلسة، ودعم كامل للغة العربية (RTL).

---

## 🚀 المعاينة الحية (Live Demo)

يمكنك تجربة الموقع مباشرة عبر GitHub Pages من خلال الرابط التالي:

👉 **[https://elslmawy.github.io/adasa-photography-blog/](https://elslmawy.github.io/adasa-photography-blog/)**

---

## ✨ المميزات الرئيسية (Key Features)

- 🎨 **تصميم داكن فاخر (Dark Glassmorphism)**: تدرجات لونية برتقالية دافئة متناسقة، خلفيات شبكية مضيئة، ومؤثرات حركية ناعمة.
- 🔍 **بحث وفلترة فورية**: إمكانية البحث الفوري في عناوين ونصوص المقالات، وفلترة المقالات حسب التصنيفات (إضاءة، بورتريه، مناظر طبيعية، تقنيات، معدات).
- 🔀 **تبديل نمط العرض**: إمكانية عرض المقالات بنمط الشبكة (Grid View) أو القائمة الأفقية (List View).
- 📑 **صفحة تفاصيل المقال التفاعلية**:
  - غلاف سينمائي عريض مع بيانات الكاتب والتاريخ.
  - فهرس محتويات جانبي ذكي (Sticky Table of Contents) للتنقل السريع بين أقسام المقال.
  - أزرار مشاركة سريعة على وسائل التواصل الاجتماعي (X / Twitter, LinkedIn, WhatsApp) ونسخ الرابط.
  - قسم "مقالات قد تعجبك" ذات صلة بنفس التصنيف.
- 🔢 **نظام ترقيم صفحات مرن (Pagination)**: تقسيم المقالات بمعدل 6 مقالات لكل صفحة مع أزرار تنقل تفاعلية.
- 📱 **متجاوب 100% (Responsive Design)**: تجربة متكاملة على شاشات الهواتف، الأجهزة اللوحية، وشاشات الحواسب مع قائمة تنقل منسدلة للشاشات الصغيرة.
- ⚡ **أداء فائق السرعة**: استخدام Vite 8 و React 19 لتحميل فوري وانتقال سلس بين الصفحات (SPA).

---

## 🛠️ التقنيات المستخدمة (Tech Stack)

| التقنية / المكتبة | الوصف |
| :--- | :--- |
| **[React 19](https://react.dev/)** | مكتبة بناء واجهات المستخدم التفاعلية |
| **[Vite 8](https://vitejs.dev/)** | أداة البناء والتطوير فائقة السرعة |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | إطار العمل الأحدث لتنسيق وتصميم العناصر |
| **[React Router 7](https://reactrouter.com/)** | إدارة المسارات والتنقل بين الصفحات (`HashRouter`) |
| **[Tajawal Font](https://fonts.google.com/specimen/Tajawal)** | خط تجوال العربي الأنيق لجميع النصوص |
| **[Font Awesome 6](https://fontawesome.com/)** | حزمة الأيقونات المتنوعة |
| **[gh-pages](https://github.com/tschaub/gh-pages)** | أتمتة الرفع والنشر على GitHub Pages |

---

## 📂 هيكل المشروع (Project Structure)

```bash
week-1-react/
├── public/                  # الأصول العامة (الأيقونات والشعار)
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/              # الصور والشعارات المحلية
│   ├── components/          # المكونات القابلة لإعادة الاستخدام
│   │   ├── BlogCard.jsx     # كارت المقال (شبكي، مميز، وقائمة)
│   │   ├── CategoryCard.jsx # كارت تصنيف المقالات
│   │   ├── Footer.jsx       # تذييل الصفحة
│   │   ├── Layout.jsx       # الهيكل العام والتمرير للأعلى
│   │   └── Navbar.jsx       # شريط التنقل العلوي
│   ├── data/                # البيانات الثابتة للمدونة
│   │   ├── posts.json       # قاعدة بيانات الـ 28 مقالة
│   │   └── siteData.js      # إعدادات الموقع والتصنيفات
│   ├── pages/               # صفحات التطبيق
│   │   ├── HomePage.jsx     # الصفحة الرئيسية
│   │   ├── BlogPage.jsx     # صفحة تصفح وفلترة المقالات
│   │   ├── BlogDetailsPage.jsx # صفحة قراءة المقال
│   │   ├── AboutPage.jsx    # صفحة من نحن
│   │   ├── PrivacyPage.jsx  # صفحة سياسة الخصوصية
│   │   ├── TermsPage.jsx    # صفحة شروط الخدمة
│   │   └── NotFoundPage.jsx # صفحة الخطأ 404
│   ├── App.jsx              # الراوتر الرئيسي للتطبيق
│   ├── index.css            # التنسيقات العامة وكلاسات Tailwind
│   └── main.jsx             # نقطة الدخول للتطبيق
├── vite.config.js           # إعدادات Vite ومسار النشر
└── package.json             # الاعتماديات وأوامر التشغيل
```

---

## 💻 التشغيل محلياً (Run Locally)

اتبع هذه الخطوات لتشغيل المشروع على جهازك:

### 1. استنساخ المستودع (Clone the Repository)
```bash
git clone https://github.com/Elslmawy/adasa-photography-blog.git
cd adasa-photography-blog
```

### 2. تثبيت الحزم (Install Dependencies)
```bash
npm install
```

### 3. تشغيل خادم التطوير (Run Development Server)
```bash
npm run dev
```
افتح المتصفح على: `http://localhost:5173/`

### 4. بناء المشروع للإنتاج (Build for Production)
```bash
npm run build
```

### 5. النشر على GitHub Pages (Deploy)
```bash
npm run deploy
```

---

## 👨‍💻 المطور (Author)

- **Muhamed Elslmawy**
- **GitHub:** [@Elslmawy](https://github.com/Elslmawy)

---

## 📄 الترخيص (License)

هذا المشروع مفتوح المصدر تحت ترخيص **MIT License**.
