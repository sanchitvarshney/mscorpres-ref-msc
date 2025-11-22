export interface CarouselItem {
  id: number;
  title?: string;
  description?: string;
  image?: string;
}
export interface Testimonial {
  id: number;
  name: string;
  position: string;
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

export const defaultItems: CarouselItem[] = [
  {
    id: 1,
    title: "Welcome to MsCorpres",
    description:
      "Your trusted partner for electronics manufacturing and expert refurbishment",
    image: "/images/welcome.jpg",
  },
  {
    id: 2,
    title: "Quality Services",
    description:
      "Providing high-standard electronics manufacturing and refurbishing tailored to your business needs",
    image: "/images/pcb-assembly.jpg",
  },
  {
    id: 3,
    title: "Our Expert Team",
    description:
      "Skilled professionals dedicated to delivering reliable manufacturing and refurbishing solutions",
    image: "/images/team.jpg",
  },
];

export const cardsData = [
  {
    image: "/images/iot.jpg",
    title: "IoT Manufacturing",
    description:
      "Advanced IoT device manufacturing solutions with cutting-edge technology, ensuring smart connectivity and seamless integration for modern industrial applications.",
    action: true,
  },
  {
    image: "/images/pcb-design.jpg",
    title: "PCB Design",
    description:
      "Professional PCB design services delivering high-quality printed circuit boards with precision engineering, optimized layouts, and comprehensive testing for reliable electronic solutions.",
    action: true,
  },
  {
    image: "/images/pcb.jpg",
    title: "Device Refurbishment",
    description:
      "Expert device refurbishment services that restore electronic devices to like-new condition with comprehensive testing, quality assurance, and warranty coverage.",
    action: true,
  },
  {
    image: "/images/erp.png",
    title: "ERP and MES",
    description:
      "Comprehensive ERP and MES solutions that streamline manufacturing operations, optimize production processes, and provide real-time visibility into your business operations.",
    action: true,
  },
  {
    image: "/images/soft.jpg",
    title: "Software Solution for Electronics",
    description:
      "Custom software solutions tailored for electronics manufacturing, including embedded systems, firmware development, and automation software to enhance productivity and efficiency.",
    action: true,
  },
];

export const defaultCompanies: Company[] = [
  { id: 1, name: "Oakter", logo: "/logo/oakter-logo.png" },
  { id: 2, name: "VanS", logo: "/logo/vans-logo.avif" },
  { id: 3, name: "Paytm", logo: "/images/logo_new-paytm.svg" },
  { id: 4, name: "Spigen", logo: "/logo/SpigenImage.png" },
  { id: 5, name: "Yours Freshly", logo: "/images/img-client.webp" },
  { id: 6, name: "Bharartpr", logo: "/logo/bharatpe-logo.png" },
];

export const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "C-PRAV",
    image: "/images/ausclient.jpg",
    position: "CEO",
    company: "Australia",
    rating: 4,
    comment:
      "If you have reached out to MsCorpres you are in the right hands. Our requirements were well understood and very professionally handled from start to finish. Very honest, sincere and hardworking staff who go out of their way to deliver efficient services. Highly recommend MsCorpres and we wish them continuing deserving success in their endeavours.",
  },
  {
    id: 2,
    name: "Yogesh Soni",
    image: "/images/client-img.jpg",
    position: "SD",
    company: "MsCorpres PVT. LTD.",
    rating: 4.5,
    comment:
      " MsCorpres Automation Private Limited is an exceptional platform that fosters innovation and growth. As a software developer, I've flourished here, empowered by cutting-edge technologies and a collaborative environment. The company's commitment to excellence fuels my passion for crafting efficient solutions. It's a privilege to contribute to a team that champions creativity and values expertise. MsCorpres Automation sets the bar high for industry standards.",
  },
  {
    id: 3,
    name: "Shishir Gupta",
    image: "/images/oak-client.jpg",
    position: "CEO",
    company: "Oakter",
    rating: 4.5,
    comment:
      "We have been working with MsCorpres for more than 4 years. Its a delight working with the team. They very efficiently handle our finance, billing, Production, warehousing & logistics. Its a pleasure to work with MsCorpres with seamless coordination with our internal team. The whole team works poore dil se for mutual company's growth. Aur Shahrukh khan sir & Paulo Coelho sir ne bhi kaha hai......jis cheez ko dil se chahe to poori kaaynat lag jaati hai tumhe woh dilane ke liye.",
  },
  {
    id: 4,
    name: "Yours Freshly",
    image: "/images/img-client.webp",
    position: "",
    company: "Yours Freshly",
    rating: 4,
    comment:
      "It was not even a year since we launched our start up and we were in discussions to raise our seed round. As you can imagine juggling between building an year old start up and the massive documentation, compliances, proofing/modifying the SHA etc is not an easy feat. A friend connected us to MsCorpres Team. We were sceptical to work with a team who is based in another city than someone available in person.  It was a short but intense journey and they helped us through it till the end. Thanks Team MsCorpres for your guidance and assistance. Look forward to working with you again.",
  },
];





export const footerLinks = {
    company: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Our Services", href: "/services" },
      { label: "Contact", href: "/contact" },
    ],
    services: [
      { label: "IoT Manufacturing", href: "/services#iot-manufacturing" },
      { label: "PCB Design", href: "/services#pcb-design" },
      { label: "Device Refurbishment", href: "/services#device-refurbishment" },
      { label: "ERP and MES", href: "/services#erp-and-mes" },
      { label: "Software Solution for Electronics", href: "/services#software-solution-for-electronics" },
    ],
    support: [
      { label: "Help Center", href: "/help" },
      { label: "FAQs", href: "/faqs" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  };
