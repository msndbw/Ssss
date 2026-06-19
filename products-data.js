/* ====================================================
   بيانات المنتجات التجريبية — متجر خطوة
   لاحقاً: استبدل هذا المصدر بربط GitHub API أو بيانات
   حقيقية تُدخلها من لوحة التحكم. الهيكل (الحقول) يجب أن
   يبقى كما هو لأن باقي الصفحات (تفاصيل المنتج، السلة)
   تعتمد عليه بنفس الأسماء.
   ==================================================== */

const PRODUCTS = [
  {
    id: "p1",
    name: "حذاء رياضي أسود",
    category: "رياضي",
    icon: "sneaker",
    price: 45000,
    oldPrice: null,
    discount: 0,
    sizes: [40, 41, 42, 43, 44, 45],
    status: "available", // available | limited | out
    badge: "bestseller", // new | bestseller | offer | null
    description: "حذاء رياضي مريح بتصميم عصري، مناسب للاستخدام اليومي والرياضة الخفيفة. نعل مرن وتهوية ممتازة.",
    rating: 4.7
  },
  {
    id: "p2",
    name: "شحاط كاجوال بني",
    category: "شحاطات",
    icon: "sandal",
    price: 25000,
    oldPrice: null,
    discount: 0,
    sizes: [40, 41, 42, 43, 44],
    status: "limited",
    badge: null,
    description: "شحاط جلد طبيعي بلون بني، خفيف ومريح، مثالي للصيف والاستخدام المنزلي والخارجي.",
    rating: 4.4
  },
  {
    id: "p3",
    name: "حذاء كلاسيك جلد أسود",
    category: "كلاسيك",
    icon: "classic",
    price: 60000,
    oldPrice: 75000,
    discount: 20,
    sizes: [40, 41, 42, 43, 44, 45],
    status: "available",
    badge: "offer",
    description: "حذاء كلاسيك جلد طبيعي فاخر، مناسب للمناسبات الرسمية والعمل. خياطة متينة وتفصيل أنيق.",
    rating: 4.9
  },
  {
    id: "p4",
    name: "حذاء رياضي أبيض",
    category: "رياضي",
    icon: "sneaker",
    price: 50000,
    oldPrice: null,
    discount: 0,
    sizes: [39, 40, 41, 42, 43, 44],
    status: "available",
    badge: "new",
    description: "تصميم سنيكرز أبيض نظيف يناسب جميع الملابس، خامة قابلة للتنفس وراحة طوال اليوم.",
    rating: 4.6
  },
  {
    id: "p5",
    name: "شحاط رياضي",
    category: "شحاطات",
    icon: "sandal",
    price: 20000,
    oldPrice: null,
    discount: 0,
    sizes: [41, 42, 43, 44, 45],
    status: "out",
    badge: null,
    description: "شحاط رياضي بحزام قابل للتعديل، نعل مانع للانزلاق ومناسب للاستخدام الخارجي.",
    rating: 4.2
  },
  {
    id: "p6",
    name: "حذاء كاجوال سويدي",
    category: "كاجوال",
    icon: "classic",
    price: 40000,
    oldPrice: null,
    discount: 0,
    sizes: [40, 41, 42, 43, 44],
    status: "available",
    badge: null,
    description: "حذاء كاجوال من خامة السويد الناعمة، يجمع بين الراحة والمظهر العصري.",
    rating: 4.5
  },
  {
    id: "p7",
    name: "حذاء جري خفيف",
    category: "رياضة جري",
    icon: "running",
    price: 55000,
    oldPrice: null,
    discount: 0,
    sizes: [40, 41, 42, 43, 44, 45],
    status: "available",
    badge: "new",
    description: "حذاء جري خفيف الوزن بتقنية امتصاص الصدمات، مثالي للجري والتمارين الرياضية.",
    rating: 4.8
  },
  {
    id: "p8",
    name: "حذاء كلاسيك بني",
    category: "كلاسيك",
    icon: "classic",
    price: 58000,
    oldPrice: 68000,
    discount: 15,
    sizes: [41, 42, 43, 44],
    status: "available",
    badge: "offer",
    description: "حذاء كلاسيك بني أنيق مناسب للعمل والمناسبات، جلد عالي الجودة وتصميم يدوم.",
    rating: 4.6
  }
];

const CATEGORIES = ["الكل", "رياضي", "كلاسيك", "شحاطات", "كاجوال", "رياضة جري"];
