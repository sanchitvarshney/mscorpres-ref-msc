export interface CarouselItem {
  id: number;
  title?: string;
  description?: string;
  image?: string;
}
export interface Testimonial {
  id: number;
  name: string;
  company: string;
  image?: string;
  rating: number;
  comment: string;
}

export interface Company {
  id: number;
  name: string;
  logo?: string | any;
}

export const defaultItems: Omit<CarouselItem, "title" | "description">[] = [
  { id: 1, image: "/images/about-section2.png" },
  { id: 2, image: "/images/pcb-design.jpg" },
  { id: 3, image: "/images/solu.jpg" },
];

export const cardsData = [
  {
    key: "iotManufacturing",
    image: "/images/iot-manu.png",
    action: true,
    path: "/services/iot-manufacturing",
  },
  {
    key: "pcbDesign",
    image: "/images/pcb-assembly.jpg",
    action: true,
    path: "/services/pcb-design",
  },
  {
    key: "deviceRefurbishment",
    image: "/images/device.jpg",
    action: true,
    path: "/services/device-refurbishment",
  },
  {
    key: "erpAndMes",
    image: [{title:"dashboard", src:"/dashboards/spigen.png"},{title:"dashboard", src:"/dashboards/oakter.png"},{title:"dashboard", src:"/dashboards/alwar.png"},{title:"dashboard", src:"/dashboards/dummyDash.png"},{title:"dashboard", src:"/dashboards/dummyDash2.png"},],
    action: true,
    path: "/services/erp-and-mes",
  },
  {
    key: "softwareSolutionForElectronics",
    image: "/images/soft.jpg",
    action: true,
    path: "/services/software-solution-for-electronics",
  },
];

export const defaultCompanies: Company[] = [
  { id: 1, name: "Oakter", logo: "/logo/oakter-logo.png" },
  { id: 2, name: "VanS", logo: "/logo/vans-logo.avif" },
  { id: 3, name: "Paytm", logo: "/images/logo_new-paytm.svg" },
  { id: 4, name: "Spigen", logo: "/logo/SpigenImage.png" },
  { id: 5, name: "Yours Freshly", logo: "/images/img-client.webp" },
  { id: 6, name: "Bharartpr", logo: "/logo/bharatpe-logo.png" },
  { id: 7, name: "HGD", logo: "/logo/HGD-logo.png" },
  { id: 8, name: "Carretx", logo: "/logo/carretxlogo.webp" },
];

export const defaultTestimonials: Omit<Testimonial, "comment">[] = [
  {
    id: 1,
    name: "Praven Kumar",
    image: "/images/ausclient.jpg",
    company: "C-PRAV (Australia)",
    rating: 4,
  },
  {
    id: 2,
    name: "Yogesh Soni",
    image: "/images/client-img.jpg",
    company: "SD Lecturer (IIT Delhi)",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Shishir Gupta",
    image: "/images/oak-client.jpg",
    company: "CEO Oakter (India)",
    rating: 4.5,
  },
  {
    id: 4,
    name: "Sarthak Anand",
    image: "/images/img-client.webp",
    company: "Yours Freshly",
    rating: 4,
  },
];

export const footerLinks = {

  services: [
    { label: "IoT Manufacturing", href: "/services/iot-manufacturing" },
    { label: "PCB Design", href: "/services/pcb-design" },
    { label: "Device Refurbishment", href: "/services/device-refurbishment" },
    { label: "ERP and MES", href: "/services/erp-and-mes" },
    {
      label: "Software Solution for Electronics",
      href: "/services/software-solution-for-electronics",
    },
  ],
  support: [
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
