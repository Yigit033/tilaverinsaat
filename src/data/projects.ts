export interface Project {
  id: string;
  title: string;
  location: string;
  status: "Tamamlandı" | "Devam Ediyor";
  category: "Konut" | "Ticari" | "Karma Kullanım" | "Eğitim";
  image: string;
  area: string;
  completionDate: string;
  description: string;
  gallery: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "tilaver-residence",
    title: "Tilaver Residence",
    location: "İstanbul, Kadıköy",
    status: "Tamamlandı",
    category: "Konut",
    image: "/assets/projects/tilaver-residence/gallery/1.webp",
    area: "45.000 m²",
    completionDate: "2024",
    description: "İstanbul'un kalbinde, modern mimari ve sürdürülebilir tasarım anlayışıyla inşa edilen Tilaver Residence, 120 dairesiyle şehrin en prestijli konut projelerinden biri olarak öne çıkmaktadır. Enerji verimli sistemler ve akıllı ev teknolojileriyle donatılmıştır.",
    gallery: [
      "/assets/projects/tilaver-residence/gallery/1.webp",
      "/assets/projects/tilaver-residence/gallery/2.webp",
      "/assets/projects/tilaver-residence/gallery/3.webp",
      "/assets/projects/tilaver-residence/gallery/4.webp",
      "/assets/projects/tilaver-residence/gallery/5.webp",
      "/assets/projects/tilaver-residence/gallery/6.webp",
    ],
    featured: true,
  },
  {
    id: "golden-tower",
    title: "Golden Tower Business Center",
    location: "Ankara, Çankaya",
    status: "Tamamlandı",
    category: "Ticari",
    image: "/assets/projects/golden-tower/gallery/1.webp",
    area: "32.000 m²",
    completionDate: "2023",
    description: "Ankara'nın iş dünyasının merkezinde yükselen Golden Tower, A+ ofis standartlarında tasarlanmış 25 katlı iş merkezidir. LEED sertifikalı yeşil bina standartlarına uygun olarak inşa edilmiştir.",
    gallery: [
      "/assets/projects/golden-tower/gallery/1.webp",
      "/assets/projects/golden-tower/gallery/2.webp",
      "/assets/projects/golden-tower/gallery/3.webp",
    ],
    featured: true,
  },
  {
    id: "park-villa",
    title: "Park Villa Konutları",
    location: "İzmir, Bornova",
    status: "Devam Ediyor",
    category: "Konut",
    image: "/assets/projects/park-villa/gallery/1.webp",
    area: "28.000 m²",
    completionDate: "2025",
    description: "Doğayla iç içe, villa konseptinde tasarlanan Park Villa Konutları projesi, 48 bağımsız villadan oluşmaktadır. Geniş bahçeler, yüzme havuzları ve sosyal tesisleriyle ayrıcalıklı bir yaşam sunmaktadır.",
    gallery: [
      "/assets/projects/park-villa/gallery/1.webp",
      "/assets/projects/park-villa/gallery/2.webp",
      "/assets/projects/park-villa/gallery/3.webp",
      "/assets/projects/park-villa/gallery/4.webp",
    ],
  },
  {
    id: "maritime-plaza",
    title: "Maritime Plaza AVM",
    location: "Antalya, Konyaaltı",
    status: "Tamamlandı",
    category: "Ticari",
    image: "/assets/projects/maritime-plaza/gallery/1.webp",
    area: "65.000 m²",
    completionDate: "2022",
    description: "Akdeniz kıyısında, deniz temalı mimarisiyle dikkat çeken Maritime Plaza, 200'den fazla mağaza, sinema kompleksi ve restoranlarıyla bölgenin en büyük alışveriş ve yaşam merkezidir.",
    gallery: [
      "/assets/projects/maritime-plaza/gallery/1.webp",
      "/assets/projects/maritime-plaza/gallery/2.webp",
      "/assets/projects/maritime-plaza/gallery/3.webp",
      "/assets/projects/maritime-plaza/gallery/4.webp",
    ],
  },
  {
    id: "green-campus",
    title: "Green Campus Ofis Parkı",
    location: "İstanbul, Maslak",
    status: "Devam Ediyor",
    category: "Ticari",
    image: "/assets/projects/green-campus/gallery/1.webp",
    area: "52.000 m²",
    completionDate: "2026",
    description: "Sürdürülebilir iş dünyasının geleceğini temsil eden Green Campus, tamamen yenilenebilir enerji kaynaklarıyla çalışan, karbon nötr bir ofis parkı olarak tasarlanmıştır.",
    gallery: [
      "/assets/projects/green-campus/gallery/1.webp",
      "/assets/projects/green-campus/gallery/2.webp",
    ],
  },
  {
    id: "harbor-residence",
    title: "Harbor Residence",
    location: "İstanbul, Zeytinburnu",
    status: "Tamamlandı",
    category: "Karma Kullanım",
    image: "/assets/projects/harbor-residence/gallery/1.webp",
    area: "38.000 m²",
    completionDate: "2023",
    description: "Marmara Denizi manzaralı konumuyla öne çıkan Harbor Residence, 180 daire ve ticari alanlardan oluşan karma kullanımlı bir projedir. Denize sıfır yaşam ayrıcalığı sunmaktadır.",
    gallery: [
      "/assets/projects/harbor-residence/gallery/1.webp",
      "/assets/projects/harbor-residence/gallery/2.webp",
    ],
    featured: true,
  },
];

export const testimonials = [
  {
    quote: "Tilaver İnşaat ile çalışmak, kalite ve güvenilirliğin ne demek olduğunu bize gösterdi. Projemiz zamanında ve beklentilerimizin üzerinde teslim edildi.",
    name: "Ahmet Yılmaz",
    company: "Yılmaz Holding",
  },
  {
    quote: "Şeffaf iletişim ve profesyonel yaklaşımlarıyla sektörde fark yaratan bir firma. Kesinlikle tekrar çalışmak isteriz.",
    name: "Elif Kaya",
    company: "Kaya Gayrimenkul",
  },
  {
    quote: "Mühendislik kalitesi ve detaylara verdikleri önem gerçekten takdire şayan. Projemizin her aşamasında yanımızda oldular.",
    name: "Mehmet Demir",
    company: "Demir Grup",
  },
];

export const partners = [
  "Vinci Construction",
  "Bosch",
  "Siemens",
  "Schneider Electric",
  "Saint-Gobain",
  "Hilti",
];
