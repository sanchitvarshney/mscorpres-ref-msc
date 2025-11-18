export interface CarouselItem {
  id: number;
  title?: string;
  description?: string;
  image?: string;
  backgroundColor?: string;
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
    title: "Premium Cargo Manufacturing",
    description:
      "High-quality manufacturing solutions built for durability, precision, and performance.",
    action: true,
  },
  {
    image:
      "https://media.istockphoto.com/id/1209265562/photo/construction-workers-discuss-the-building-plans.jpg?s=2048x2048&w=is&k=20&c=OaRULrXxjLsyKZGo8XQwBanu8nzWMQoWVDXNGSxjPnk=",
    title: "Refurbishing Services",
    description:
      "Expert refurbishing that restores equipment to like-new condition with full quality assurance.",
    action: true,
  },
  {
    image:
      "https://media.istockphoto.com/id/1209265562/photo/construction-workers-discuss-the-building-plans.jpg?s=2048x2048&w=is&k=20&c=OaRULrXxjLsyKZGo8XQwBanu8nzWMQoWVDXNGSxjPnk=",
    title: "Custom Engineering",
    description:
      "Tailored engineering solutions designed to meet unique cargo and industrial needs.",
    action: false,
  },
  {
    image:
      "https://media.istockphoto.com/id/1209265562/photo/construction-workers-discuss-the-building-plans.jpg?s=2048x2048&w=is&k=20&c=OaRULrXxjLsyKZGo8XQwBanu8nzWMQoWVDXNGSxjPnk=",
    title: "Quality Inspection",
    description:
      "Comprehensive inspection services ensuring reliability, safety, and long-term performance.",
    action: true,
  },
  {
    image:
      "https://media.istockphoto.com/id/1209265562/photo/construction-workers-discuss-the-building-plans.jpg?s=2048x2048&w=is&k=20&c=OaRULrXxjLsyKZGo8XQwBanu8nzWMQoWVDXNGSxjPnk=",
    title: "Maintenance & Support",
    description:
      "Ongoing maintenance programs supporting maximum uptime and operational efficiency.",
    action: true,
  },
];
