export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  demoUrl: string;
  githubUrl: string;
}

export interface Skill {
  name: string;
  level: string;
  percentage: number;
}

export interface SkillGroup {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verificationUrl: string;
  imageUrl?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  stars: number;
  quote: string;
}

// 1. Data Projects
const projects: Project[] = [
  {
    id: 1,
    title: "Frezz-Laundry",
    category: "Web Dev",
    description: "Aplikasi web untuk manajemen laundry, memungkinkan pengguna untuk memesan layanan laundry secara online, melacak status pesanan, dan mengelola pembayaran.",
    tech: ["Next.js", "React", "Tailwind CSS", "Express.js", "MySQL"],
    demoUrl: "https://frezz-laundry.vercel.app",
    githubUrl: "https://github.com/mreppang/Frezz-laundry",
  },
];

// 2. Data Skills
const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    icon: "💻",
    skills: [
      { name: "HTML5 / CSS3", level: "Advanced", percentage: 30 },
      { name: "JavaScript (ES6+)", level: "Advanced", percentage: 80 },
      { name: "React.js", level: "Intermediate", percentage: 50 },
      { name: "Next.js (App Router)", level: "Intermediate", percentage: 40 },
      { name: "Tailwind CSS", level: "Advanced", percentage: 20 },
    ],
  },
  {
    title: "Backend & Database",
    icon: "🗄️",
    skills: [
      { name: "Node.js", level: "Intermediate", percentage: 90 },
      { name: "Express.js", level: "Intermediate", percentage: 95 },
      { name: "MySQL", level: "Intermediate", percentage: 90 },
      { name: "RESTful API Development", level: "Intermediate", percentage: 95 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub", level: "Advanced", percentage: 85 },
      { name: "Figma (UI/UX)", level: "Intermediate", percentage: 70 },
      { name: "Postman", level: "Advanced", percentage: 90 },
      { name: "VS Code", level: "Advanced", percentage: 95 },
    ],
  },
];

// 3. Data Sertifikat
const certificates: Certificate[] = [
  {
    id: 1,
    title: "JavaScript Essentials 2",
    issuer: "Cisco Networking Academy - Js Insitute Open Education & development Group",
    date: "Maret 2025",
    credentialId: "Cert ID: 9a293123-9c78-4f55-8c93-5c546c58436c",
    verificationUrl: "https://www.credly.com/badges/04e5a2b2-3a76-42b2-bd1b-2362435c1802/public_url",
    imageUrl: "/sertifikat_saya/ciscosertifikat.png",
  },
  {
    id: 2,
    title: "Ai Class ASEAN",
    issuer: "ASEAN FOUNDATION",
    date: "May 30 , 2026",
    credentialId: "",
    verificationUrl: "https://www.AiClassASEAN.org",
    imageUrl: "/sertifikat_saya/Aseancerti.png"
  },
];

// 4. Data Testimoni
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Muh.SAAD",
    role: "Kepala Sekolah SMK TELKOM MAKASSAR",
    company: "SMK Telkom Makassar",
    avatar: "👨‍🏫",
    stars: 5,
    quote:
      "Revan menunjukkan performa luar biasa dalam setiap tugas dan proyek sekolah. Dia selalu menjadi leader dalam team project karena inisiatifnya yang tinggi.",
  },
  {
    id: 2,
    name: "FARID IRWANDI",
    role: "Kepala prodi rpl smk telkom makassar",
    company: "SMK Telkom Makassar",
    avatar: "🧑",
    stars: 5,
    quote:
      "Revan adalah siswa yang sangat berdedikasi dan memiliki pemahaman mendalam tentang pengembangan web. Dia selalu berusaha untuk meningkatkan keterampilannya dan memberikan kontribusi yang signifikan dalam proyek-proyek sekolah.",
  },
  {
    id: 3,
    name: "Oktavianto",
    role: "Guru Produktif Frontend & mpp",
    company: "SMK Telkom Makassar",
    avatar: "👩‍🏫",
    stars: 5,
    quote:
      "Revan adalah siswa yang sangat berbakat dan berdedikasi. Dia memiliki kemampuan teknis yang kuat dan selalu berusaha untuk belajar hal-hal baru. Saya yakin dia akan menjadi seorang profesional yang sukses di bidang pengembangan web.",
  },
  {
    id: 4,
    name: "Ali Akbar",
    role: "Guru Produktif Backend",
    company: "SMK Telkom Makassar",
    avatar: "👩‍🏫",
    stars: 5,
    quote:
      "Revan adalah siswa yang sangat berbakat dan berdedikasi. Dia memiliki kemampuan teknis yang kuat dan selalu berusaha untuk belajar hal-hal baru. Saya yakin dia akan menjadi seorang profesional yang sukses di bidang pengembangan web.",
  },
  {
    id: 5,
    name: "Alif anhar",
    role: "Guru Produktif Backend",
    company: "SMK Telkom Makassar",
    avatar: "👩‍🏫",
    stars: 5,
    quote:
      "Revan adalah siswa yang sangat berbakat dan berdedikasi. Dia memiliki kemampuan teknis yang kuat dan selalu berusaha untuk belajar hal-hal baru. Saya yakin dia akan menjadi seorang profesional yang sukses di bidang pengembangan web.",
  },
];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getProjects(): Promise<Project[]> {
  await delay(1200);
  return projects;
}

export async function getSkills(): Promise<SkillGroup[]> {
  await delay(1000);
  return skillGroups;
}

export async function getCertificates(): Promise<Certificate[]> {
  await delay(1200);
  return certificates;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  await delay(800);
  return testimonials;
}