export interface CarouselItem {
  id: number;
  title?: string;
  description?: string;
  image?: string;
  backgroundColor?: string;
}

export interface Company {
  id: number;
  name: string;
}

export const defaultItems: CarouselItem[] = [
  {
    id: 1,
    title: "Welcome to Our Platform",
    description: "Discover amazing features and services",
    backgroundColor: "#263238",
  },
  {
    id: 2,
    title: "Quality Services",
    description: "We provide top-notch solutions for your needs",
    backgroundColor: "#37474f",
  },
  {
    id: 3,
    title: "Expert Team",
    description: "Our professionals are here to help you succeed",
    backgroundColor: "#455a64",
  },
];

export const cardsData = [
  {
    image:
      "https://media.istockphoto.com/id/1209265562/photo/construction-workers-discuss-the-building-plans.jpg?s=2048x2048&w=is&k=20&c=OaRULrXxjLsyKZGo8XQwBanu8nzWMQoWVDXNGSxjPnk=",
    title: "IoT Manufacturing",
    description:
      "Advanced IoT device manufacturing solutions with cutting-edge technology, ensuring smart connectivity and seamless integration for modern industrial applications.",
    action: true,
  },
  {
    image:
      "https://media.istockphoto.com/id/1209265562/photo/construction-workers-discuss-the-building-plans.jpg?s=2048x2048&w=is&k=20&c=OaRULrXxjLsyKZGo8XQwBanu8nzWMQoWVDXNGSxjPnk=",
    title: "PCB Design",
    description:
      "Professional PCB design services delivering high-quality printed circuit boards with precision engineering, optimized layouts, and comprehensive testing for reliable electronic solutions.",
    action: true,
  },
  {
    image:
      "https://media.istockphoto.com/id/1209265562/photo/construction-workers-discuss-the-building-plans.jpg?s=2048x2048&w=is&k=20&c=OaRULrXxjLsyKZGo8XQwBanu8nzWMQoWVDXNGSxjPnk=",
    title: "Device Refurbishment",
    description:
      "Expert device refurbishment services that restore electronic devices to like-new condition with comprehensive testing, quality assurance, and warranty coverage.",
    action: true,
  },
  {
    image:
      "https://media.istockphoto.com/id/1209265562/photo/construction-workers-discuss-the-building-plans.jpg?s=2048x2048&w=is&k=20&c=OaRULrXxjLsyKZGo8XQwBanu8nzWMQoWVDXNGSxjPnk=",
    title: "ERP and MES",
    description:
      "Comprehensive ERP and MES solutions that streamline manufacturing operations, optimize production processes, and provide real-time visibility into your business operations.",
    action: true,
  },
  {
    image:
      "https://media.istockphoto.com/id/1209265562/photo/construction-workers-discuss-the-building-plans.jpg?s=2048x2048&w=is&k=20&c=OaRULrXxjLsyKZGo8XQwBanu8nzWMQoWVDXNGSxjPnk=",
    title: "Software Solution for Electronics",
    description:
      "Custom software solutions tailored for electronics manufacturing, including embedded systems, firmware development, and automation software to enhance productivity and efficiency.",
    action: true,
  },
];



export const defaultCompanies: Company[] = [
  { id: 1, name: "Honda" },
  { id: 2, name: "Oakter" },
  { id: 3, name: "Paytm" },
  { id: 4, name: "Samsung" },
  { id: 5, name: "Maruti Suzuki" },
  { id: 6, name: "Mahindra" },
  { id: 7, name: "Tata" },
  { id: 8, name: "Reliance" },
];
