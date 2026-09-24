import posts from './posts.json';

// قائمة تصنيفات المدونة
export const categories = [
  { name: "إضاءة", count: 3, color: "emerald" },
  { name: "بورتريه", count: 3, color: "purple" },
  { name: "مناظر طبيعية", count: 2, color: "blue" },
  { name: "تقنيات", count: 5, color: "orange" },
  { name: "معدات", count: 3, color: "emerald" }
];

// معلومات الموقع وبيانات التواصل
export const siteInfo = {
  name: "عدسة",
  description: "مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.",
  email: "hello@adasah.com",
  social: {
    twitter: "https://twitter.com/adasah",
    github: "https://github.com/adasah",
    linkedin: "https://linkedin.com/company/adasah",
    youtube: "https://youtube.com/@adasah"
  }
};

export { posts };

export const siteData = {
  posts,
  categories,
  siteInfo
};

export default siteData;
