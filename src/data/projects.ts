export interface Project {
  id: string;
  title: string;
  location: string;
  status: "Tamamlandı" | "Devam Ediyor";
  image: string;
  area: string;
  completionDate: string;
  description: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: "tilaver-residence",
    title: "Tilaver Residence",
    location: "İstanbul, Kadıköy",
    status: "Tamamlandı",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    area: "45.000 m²",
    completionDate: "2024",
    description: "İstanbul'un kalbinde, modern mimari ve sürdürülebilir tasarım anlayışıyla inşa edilen Tilaver Residence, 120 dairesiyle şehrin en prestijli konut projelerinden biri olarak öne çıkmaktadır. Enerji verimli sistemler ve akıllı ev teknolojileriyle donatılmıştır.",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    ],
  },
  {
    id: "golden-tower",
    title: "Golden Tower Business Center",
    location: "Ankara, Çankaya",
    status: "Tamamlandı",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    area: "32.000 m²",
    completionDate: "2023",
    description: "Ankara'nın iş dünyasının merkezinde yükselen Golden Tower, A+ ofis standartlarında tasarlanmış 25 katlı iş merkezidir. LEED sertifikalı yeşil bina standartlarına uygun olarak inşa edilmiştir.",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      "https://images.unsplash.com/photo-1554435493-93422e8220c8?w=800&q=80",
    ],
  },
  {
    id: "park-villa",
    title: "Park Villa Konutları",
    location: "İzmir, Bornova",
    status: "Devam Ediyor",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    area: "28.000 m²",
    completionDate: "2025",
    description: "Doğayla iç içe, villa konseptinde tasarlanan Park Villa Konutları projesi, 48 bağımsız villadan oluşmaktadır. Geniş bahçeler, yüzme havuzları ve sosyal tesisleriyle ayrıcalıklı bir yaşam sunmaktadır.",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    ],
  },
  {
    id: "maritime-plaza",
    title: "Maritime Plaza AVM",
    location: "Antalya, Konyaaltı",
    status: "Tamamlandı",
    image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&q=80",
    area: "65.000 m²",
    completionDate: "2022",
    description: "Akdeniz kıyısında, deniz temalı mimarisiyle dikkat çeken Maritime Plaza, 200'den fazla mağaza, sinema kompleksi ve restoranlarıyla bölgenin en büyük alışveriş ve yaşam merkezidir.",
    gallery: [
      "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&q=80",
      "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=800&q=80",
    ],
  },
  {
    id: "green-campus",
    title: "Green Campus Ofis Parkı",
    location: "İstanbul, Maslak",
    status: "Devam Ediyor",
    image: "https://images.unsplash.com/photo-1554435493-93422e8220c8?w=800&q=80",
    area: "52.000 m²",
    completionDate: "2026",
    description: "Sürdürülebilir iş dünyasının geleceğini temsil eden Green Campus, tamamen yenilenebilir enerji kaynaklarıyla çalışan, karbon nötr bir ofis parkı olarak tasarlanmıştır.",
    gallery: [
      "https://images.unsplash.com/photo-1554435493-93422e8220c8?w=800&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    ],
  },
  {
    id: "harbor-residence",
    title: "Harbor Residence",
    location: "İstanbul, Zeytinburnu",
    status: "Tamamlandı",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    area: "38.000 m²",
    completionDate: "2023",
    description: "Marmara Denizi manzaralı konumuyla öne çıkan Harbor Residence, 180 daire ve ticari alanlardan oluşan karma kullanımlı bir projedir. Denize sıfır yaşam ayrıcalığı sunmaktadır.",
    gallery: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    ],
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
