import heroPhoto from '../assets/hero.png'

export const brand = {
  name: 'Muh. Rezky Saputra Ismail',
  href: '#home',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Layanan', href: '#services' },
  { label: 'Kontak', href: '#contact' },
]

export const socials = [
  { type: 'github', href: 'https://github.com/', label: 'GitHub' },
  { type: 'linkedin', href: 'https://linkedin.com/', label: 'LinkedIn' },
  { type: 'instagram', href: 'https://instagram.com/', label: 'Instagram' },
]

export const hero = {
  name: 'Muh. Rezky Saputra Ismail',
  title: 'Frontend Developer & UI Designer',
  value: 'Saya bikin website cepat, rapi, dan bikin bisnis naik.',
  photo: {
    src: heroPhoto,
    alt: 'Muh. Rezky Saputra Ismail',
    label: 'Foto profil',
  },
  primaryCta: { label: 'Lihat Portofolio', href: '#projects' },
  secondaryCta: { label: 'Hubungi Saya', href: '#contact' },
}

export const about = {
  paragraphs: [
    'Saya Frontend Developer dari Makassar dengan pengalaman membangun website untuk UMKM dan startup. Fokus saya: tampilan rapi, performa cepat, dan pengalaman user yang enak dipakai.',
    'Sehari-hari saya kerja dengan React, Tailwind CSS, dan Figma — dari wireframe sampai deploy. Saya terbiasa kolaborasi dengan founder yang butuh hasil jelas dalam waktu singkat.',
    'Saya percaya website bagus bukan cuma indah, tapi juga membantu bisnis dapat pelanggan. Itu yang saya kejar di setiap project.',
  ],
  skills: ['React', 'Tailwind', 'Figma'],
  personality: 'Saya suka bikin animasi micro-interaction yang halus — detail kecil yang bikin produk terasa premium.',
  cvHref: '#', // ganti ke file CV asli, mis. '/cv-ali-akbar.pdf'
}

export const skillGroups = [
  {
    name: 'Frontend',
    items: [
      { name: 'HTML', icon: 'file-code-2' },
      { name: 'CSS', icon: 'code-2' },
      { name: 'JavaScript', icon: 'braces' },
      { name: 'React', icon: 'atom' },
      { name: 'Tailwind', icon: 'wind' },
    ],
  },
  {
    name: 'Backend',
    items: [{ name: 'Next.js', icon: 'server' }],
  },
  {
    name: 'Tools',
    items: [
      { name: 'Git', icon: 'git-branch' },
      { name: 'Podman', icon: 'box' },
      { name: 'Figma', icon: 'layout' },
    ],
  },
  {
    name: 'AI Tools',
    items: [
      { name: 'Cursor', icon: 'sparkles' },
      { name: 'ChatGPT', icon: 'wrench' },
    ],
  },
]

export const projects = [
  {
    title: 'Toko UMKM Digital',
    year: '2025',
    problem: 'Toko offline susah jangkau pelanggan online dan website lama lambat.',
    solution: 'Bikin web toko modern; load ~2× lebih cepat dan checkout lebih sederhana.',
    tech: ['React', 'Tailwind', 'Stripe'],
    image: { label: 'Thumbnail project: Toko UMKM (16:9)' },
    demoHref: '#',
    githubHref: 'https://github.com/',
  },
  {
    title: 'Dashboard Analytics',
    year: '2025',
    problem: 'Tim susah baca data penjualan karena laporan masih di spreadsheet.',
    solution: 'Dashboard interaktif dengan filter & chart yang mudah dipahami non-teknis.',
    tech: ['React', 'Recharts', 'Tailwind'],
    image: { label: 'Thumbnail project: Dashboard (16:9)' },
    demoHref: '#',
    githubHref: 'https://github.com/',
  },
  {
    title: 'Landing Page Klinik',
    year: '2024',
    problem: 'Klinik butuh kepercayaan online tapi belum punya website profesional.',
    solution: 'Landing page mobile-first + form booking; inquiry naik dalam 2 minggu.',
    tech: ['Next.js', 'Tailwind', 'DaisyUI'],
    image: { label: 'Thumbnail project: Klinik (16:9)' },
    demoHref: '#',
    githubHref: 'https://github.com/',
  },
  {
    title: 'Portfolio Kit',
    year: '2026',
    problem: 'Freelancer butuh template portofolio yang reusable dan cepat di-custom.',
    solution: 'Komponen SPA siap props: ganti data, layout tetap konsisten.',
    tech: ['React', 'Motion', 'DaisyUI'],
    image: { label: 'Thumbnail project: Portfolio Kit (16:9)' },
    demoHref: '#',
    githubHref: 'https://github.com/',
  },
]

export const services = [
  {
    title: 'Web Development',
    description: 'Website / web app cepat, responsif, dan siap deploy.',
    price: 'Rp 2jt',
    icon: 'code-2',
  },
  {
    title: 'UI/UX Design',
    description: 'Desain antarmuka yang jelas, rapi, dan nyaman dipakai.',
    price: 'Rp 1,5jt',
    icon: 'palette',
  },
  {
    title: 'Deploy & Maintenance',
    description: 'Setup hosting, update fitur kecil, dan pantau performa.',
    price: 'Rp 500rb/bln',
    icon: 'rocket',
  },
]

export const testimonials = [
  {
    quote: 'Rezky kerjanya cepat dan komunikasinya enak. Website toko kami jadi lebih profesional.',
    name: 'Pak Andi',
    role: 'Owner Toko ABC',
    photo: { label: 'Foto' },
  },
  {
    quote: 'Detail animasinya halus. Dashboard yang dibuat mudah dipakai tim non-teknis.',
    name: 'Sari Dewi',
    role: 'Product Manager',
    photo: { label: 'Foto' },
  },
]

export const contact = {
  whatsapp: 'https://wa.me/6281234567890',
  whatsappLabel: '+62 812-3456-7890',
  email: 'rezkysaputra@example.com',
  location: 'Makassar, Indonesia',
}

/**
 * Bentuk data ini sama dengan respons API yang diharapkan.
 * React component tidak disimpan di data; ikon memakai nama string agar JSON-compatible.
 */
const portfolioData = {
  brand,
  navLinks,
  socials,
  hero,
  about,
  skillGroups,
  projects,
  services,
  testimonials,
  contact,
}

export default portfolioData