import { customColor } from "@/utils/theme/customColor";
import {
  BuildOutlined,
  EngineeringOutlined,
  HighQualityOutlined,
  PrecisionManufacturingOutlined,
  SpeedOutlined,
  VerifiedUserOutlined,
  ConstructionOutlined,
  SecurityOutlined,
  SettingsOutlined,
  BusinessCenterOutlined,
  InventoryOutlined,
  FlashOnOutlined,
  DevicesOutlined,
  RefreshOutlined,
  AutoAwesomeOutlined,
  MemoryOutlined,
  AnalyticsOutlined,
  TimelineOutlined,
  CodeOutlined,
  DashboardOutlined,
  StorageOutlined,
  CloudOutlined,
  BookmarkAddOutlined,
} from "@mui/icons-material";

export const manufacAndRefruData = [
  {
    id: 1,
    label: "PCB Design",
    img: "/services-img/pcb.svg",
    path: "/services/pcb-design",
  },
  {
    id: 2,
    label: "Box Building",
    img: "/services-img/box.svg",
    path: "/services/box-building",
  },
  {
    id: 3,
    label: "TurnKey Solution",
    img: "/services-img/trunkey.svg",
    path: "/services/turnkey-solution",
  },
  {
    id: 4,
    label: "SKD and CKD Design",
    img: "/services-img/skdckd.svg",
    path: "/services/skd-and-ckd-design",
  },
  {
    id: 5,
    label: "Prototype Design",
    img: "/services-img/prototype.svg",
    path: "/services/prototype-design",
  },
  {
    id: 6,
    label: "IoT Manufacturing",
    img: "/services-img/iot.svg",
    path: "/services/iot-manufacturing",
  },
  {
    id: 7,
    label: "Device Refurbisher",
    img: "/services-img/device.svg",
    path: "/services/device-refurbishment",
  },
];
export const productData = [
  {
    id: 1,
    label: "Electronics",
    img: "/services-img/electro.svg",
    path: "/services/electronics",
  },
  {
    id: 2,
    label: "Rapid Prototyping",
    img: "/services-img/rapid.svg",
    path: "/services/rapid-prototyping",
  },
  {
    id: 3,
    label: "DFM Solution",
    img: "/services-img/dfm.svg",
    path: "/services/dfm-solution",
  },
  {
    id: 4,
    label: "Product Life Cycle",
    img: "/services-img/cycle.svg",
    path: "/services/product-life-cycle",
  },
];
export const softwareData = [
  {
    id: 1,
    label: "ERP and MES ",
    img: "/services-img/erp.png",
    path: "/services/erp-and-mes",
  },
  {
    id: 2,
    label: "Software Solution for Electronics",
    img: "/services-img/soft.svg",
    path: "/services/software-solution-for-electronics",
  },
];

export const pcbFeatures: any[] = [
  {
    icon: (
      <PrecisionManufacturingOutlined
        sx={{ fontSize: 40, color: customColor.primary }}
      />
    ),
    title: "High-Precision Layouts",
    description:
      "Accurate PCB layouts designed with advanced tools to ensure signal integrity and optimal performance.",
  },
  {
    icon: (
      <EngineeringOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Custom PCB Engineering",
    description:
      "Tailored PCB design solutions optimized for your device's power, size, and functionality requirements.",
  },
  {
    icon: (
      <HighQualityOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Design Quality Assurance",
    description:
      "Comprehensive design validation, DFM/DFT checks, and error-free schematic-to-layout workflows.",
  },
  {
    icon: <SpeedOutlined sx={{ fontSize: 40, color: customColor.primary }} />,
    title: "Fast Prototype Delivery",
    description:
      "Accelerated PCB design and prototype turnaround to help you move quickly from concept to testing.",
  },
  {
    icon: (
      <VerifiedUserOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Industry Standards Compliance",
    description:
      "PCB designs aligned with IPC standards, ensuring reliability, safety, and global compatibility.",
  },
  {
    icon: <BuildOutlined sx={{ fontSize: 40, color: customColor.primary }} />,
    title: "Experienced PCB Engineers",
    description:
      "A skilled team with expertise in multilayer PCBs, high-speed circuits, and complex routing.",
  },
];

export const boxBuildingFeatures: any[] = [
  {
    icon: (
      <ConstructionOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Complete Assembly Solutions",
    description:
      "End-to-end box building services from component integration to final product assembly with precision and care.",
  },
  {
    icon: (
      <EngineeringOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Custom Enclosure Design",
    description:
      "Tailored box building solutions designed to meet your specific product requirements, size constraints, and functionality needs.",
  },
  {
    icon: (
      <HighQualityOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Quality Craftsmanship",
    description:
      "Meticulous attention to detail ensuring every box build meets the highest standards of quality and durability.",
  },
  {
    icon: <SpeedOutlined sx={{ fontSize: 40, color: customColor.primary }} />,
    title: "Efficient Production",
    description:
      "Streamlined box building processes that deliver completed assemblies within agreed timelines without compromising quality.",
  },
  {
    icon: (
      <SecurityOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Protected & Secure",
    description:
      "Robust box building ensuring your electronic products are properly housed, protected, and ready for deployment.",
  },
  {
    icon: (
      <SettingsOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Expert Assembly Team",
    description:
      "Skilled professionals with extensive experience in electronic box building and product assembly.",
  },
];

export const turnkeySolutionFeatures: any[] = [
  {
    icon: (
      <BusinessCenterOutlined
        sx={{ fontSize: 40, color: customColor.primary }}
      />
    ),
    title: "End-to-End Solutions",
    description:
      "Complete project management from concept to delivery, handling every aspect of your product development lifecycle.",
  },
  {
    icon: (
      <EngineeringOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Integrated Engineering",
    description:
      "Seamless integration of design, manufacturing, assembly, and testing processes for optimal efficiency and quality.",
  },
  {
    icon: (
      <HighQualityOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Quality Assurance",
    description:
      "Comprehensive quality control at every stage ensuring your product meets the highest industry standards.",
  },
  {
    icon: <SpeedOutlined sx={{ fontSize: 40, color: customColor.primary }} />,
    title: "Faster Time-to-Market",
    description:
      "Streamlined processes and coordinated workflows that accelerate your product launch timeline.",
  },
  {
    icon: (
      <VerifiedUserOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Single Point of Contact",
    description:
      "One dedicated team managing your entire project, simplifying communication and ensuring accountability.",
  },
  {
    icon: <BuildOutlined sx={{ fontSize: 40, color: customColor.primary }} />,
    title: "Expert Project Management",
    description:
      "Experienced professionals coordinating all aspects of your turnkey solution with precision and expertise.",
  },
];

export const skdCkdDesignFeatures: any[] = [
  {
    icon: (
      <InventoryOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Modular Design Solutions",
    description:
      "Semi-Knocked Down (SKD) and Completely Knocked Down (CKD) designs optimized for efficient assembly and logistics.",
  },
  {
    icon: (
      <EngineeringOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Assembly-Optimized Engineering",
    description:
      "Products designed for easy assembly in different locations, reducing shipping costs and optimizing manufacturing flexibility.",
  },
  {
    icon: (
      <HighQualityOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Quality Component Integration",
    description:
      "Carefully designed SKD/CKD solutions ensuring components are properly packaged and protected during transit.",
  },
  {
    icon: <SpeedOutlined sx={{ fontSize: 40, color: customColor.primary }} />,
    title: "Efficient Logistics",
    description:
      "Optimized designs that reduce shipping volumes and costs while maintaining product quality and assembly simplicity.",
  },
  {
    icon: (
      <VerifiedUserOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Global Manufacturing Support",
    description:
      "SKD/CKD designs that enable cost-effective manufacturing across multiple locations and markets.",
  },
  {
    icon: (
      <SettingsOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Assembly Documentation",
    description:
      "Comprehensive assembly guides and documentation ensuring smooth assembly processes at any location.",
  },
];

export const prototypeDesignFeatures: any[] = [
  {
    icon: <FlashOnOutlined sx={{ fontSize: 40, color: customColor.primary }} />,
    title: "Rapid Prototyping",
    description:
      "Fast turnaround from concept to functional prototype, enabling quick validation and iteration of your ideas.",
  },
  {
    icon: (
      <EngineeringOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Concept to Reality",
    description:
      "Transform your innovative ideas into tangible prototypes with precision engineering and attention to detail.",
  },
  {
    icon: (
      <HighQualityOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Functional Testing",
    description:
      "Prototypes designed for comprehensive testing, allowing you to validate functionality before full-scale production.",
  },
  {
    icon: <SpeedOutlined sx={{ fontSize: 40, color: customColor.primary }} />,
    title: "Quick Iteration Cycles",
    description:
      "Accelerated design refinement process enabling multiple iterations to perfect your product concept.",
  },
  {
    icon: (
      <VerifiedUserOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Design Validation",
    description:
      "Prototypes that help validate design concepts, user experience, and technical feasibility early in development.",
  },
  {
    icon: (
      <AutoAwesomeOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Innovation Support",
    description:
      "Expert support in bringing innovative concepts to life with cutting-edge prototyping techniques and materials.",
  },
];

export const iotManufacturingFeatures: any[] = [
  {
    icon: <DevicesOutlined sx={{ fontSize: 40, color: customColor.primary }} />,
    title: "Smart Device Manufacturing",
    description:
      "Cutting-edge IoT devices manufactured with advanced connectivity features and smart functionality.",
  },
  {
    icon: (
      <EngineeringOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Connectivity Solutions",
    description:
      "IoT devices engineered for seamless wireless connectivity, sensor integration, and cloud communication.",
  },
  {
    icon: (
      <HighQualityOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Rigorous Testing",
    description:
      "Comprehensive testing protocols ensuring every IoT device meets reliability, security, and performance standards.",
  },
  {
    icon: <SpeedOutlined sx={{ fontSize: 40, color: customColor.primary }} />,
    title: "Scalable Production",
    description:
      "Manufacturing capabilities that scale from prototype to mass production, supporting your IoT deployment needs.",
  },
  {
    icon: (
      <VerifiedUserOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Industry Standards",
    description:
      "IoT devices manufactured in compliance with international standards for safety, security, and interoperability.",
  },
  {
    icon: <MemoryOutlined sx={{ fontSize: 40, color: customColor.primary }} />,
    title: "Advanced Components",
    description:
      "Integration of high-quality sensors, processors, and communication modules for reliable IoT performance.",
  },
];

export const deviceRefurbishmentFeatures: any[] = [
  {
    icon: <RefreshOutlined sx={{ fontSize: 40, color: customColor.primary }} />,
    title: "Complete Restoration",
    description:
      "Comprehensive refurbishment process that transforms used devices into like-new condition with genuine parts.",
  },
  {
    icon: (
      <EngineeringOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Expert Repair Services",
    description:
      "Skilled technicians performing thorough inspection, diagnosis, and repair of all device components.",
  },
  {
    icon: (
      <HighQualityOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Quality Assurance",
    description:
      "Rigorous testing and quality checks ensuring every refurbished device meets or exceeds original specifications.",
  },
  {
    icon: <SpeedOutlined sx={{ fontSize: 40, color: customColor.primary }} />,
    title: "Efficient Processing",
    description:
      "Streamlined refurbishment workflows that deliver restored devices quickly without compromising quality.",
  },
  {
    icon: (
      <VerifiedUserOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Genuine Parts Only",
    description:
      "Exclusive use of authentic components and parts, ensuring reliability and maintaining device integrity.",
  },
  {
    icon: (
      <SecurityOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Data Security",
    description:
      "Secure data wiping and restoration processes protecting your information during the refurbishment process.",
  },
];

export const electronicsFeatures: any[] = [
  {
    icon: (
      <BookmarkAddOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Comprehensive Electronics Solutions",
    description:
      "End-to-end electronics services covering design, development, and manufacturing of electronic products and systems.",
  },
  {
    icon: (
      <EngineeringOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Custom Electronic Design",
    description:
      "Tailored electronic solutions designed to meet your specific requirements, functionality, and performance needs.",
  },
  {
    icon: (
      <HighQualityOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Quality Manufacturing",
    description:
      "High-quality electronic manufacturing with rigorous quality control ensuring reliable and durable products.",
  },
  {
    icon: <SpeedOutlined sx={{ fontSize: 40, color: customColor.primary }} />,
    title: "Efficient Development",
    description:
      "Streamlined development processes that deliver electronic solutions within agreed timelines without compromising quality.",
  },
  {
    icon: (
      <VerifiedUserOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Industry Standards",
    description:
      "Electronics solutions designed and manufactured in compliance with international standards for safety and reliability.",
  },
  {
    icon: <BuildOutlined sx={{ fontSize: 40, color: customColor.primary }} />,
    title: "Expert Electronics Team",
    description:
      "Skilled professionals with extensive experience in electronic design, development, and manufacturing.",
  },
];

export const dfmSolutionFeatures: any[] = [
  {
    icon: (
      <AnalyticsOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Design Optimization",
    description:
      "Comprehensive Design for Manufacturing analysis that optimizes your products for efficient, cost-effective production.",
  },
  {
    icon: (
      <EngineeringOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Manufacturability Analysis",
    description:
      "Detailed analysis and refinement of designs to ensure manufacturability, reduce costs, and improve quality.",
  },
  {
    icon: (
      <HighQualityOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Quality Enhancement",
    description:
      "DFM solutions that enhance product quality while reducing manufacturing complexity and production costs.",
  },
  {
    icon: <SpeedOutlined sx={{ fontSize: 40, color: customColor.primary }} />,
    title: "Faster Production",
    description:
      "Optimized designs that accelerate production timelines and reduce manufacturing bottlenecks.",
  },
  {
    icon: (
      <VerifiedUserOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Cost Optimization",
    description:
      "DFM solutions that identify cost-saving opportunities without compromising product quality or functionality.",
  },
  {
    icon: (
      <SettingsOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Expert DFM Engineers",
    description:
      "Experienced team with deep knowledge of manufacturing processes and design optimization techniques.",
  },
];

export const rapidPrototypingFeatures: any[] = [
  {
    icon: <FlashOnOutlined sx={{ fontSize: 40, color: customColor.primary }} />,
    title: "Fast-Track Development",
    description:
      "Rapid prototyping services that fast-track your product development by bringing concepts to life quickly and efficiently.",
  },
  {
    icon: (
      <EngineeringOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Advanced Prototyping Technologies",
    description:
      "Utilization of cutting-edge prototyping technologies to help validate designs and test functionality.",
  },
  {
    icon: (
      <HighQualityOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Functional Validation",
    description:
      "Prototypes designed for comprehensive testing, allowing you to validate concepts before full-scale production.",
  },
  {
    icon: <SpeedOutlined sx={{ fontSize: 40, color: customColor.primary }} />,
    title: "Accelerated Time-to-Market",
    description:
      "Rapid prototyping that accelerates your time-to-market by enabling quick design validation and iteration.",
  },
  {
    icon: (
      <VerifiedUserOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Concept Validation",
    description:
      "Prototypes that help validate design concepts, functionality, and user experience early in development.",
  },
  {
    icon: (
      <AutoAwesomeOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Innovation Support",
    description:
      "Expert support in rapid prototyping with advanced techniques and materials for innovative product development.",
  },
];

export const productLifeCycleFeatures: any[] = [
  {
    icon: (
      <TimelineOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Complete Lifecycle Management",
    description:
      "Comprehensive product lifecycle management from concept and design through manufacturing, support, and end-of-life planning.",
  },
  {
    icon: (
      <EngineeringOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Stage-by-Stage Guidance",
    description:
      "Expert guidance through every product lifecycle stage, ensuring optimal performance and value throughout.",
  },
  {
    icon: (
      <HighQualityOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Continuous Optimization",
    description:
      "Ongoing optimization and support ensuring your products maintain quality and performance throughout their lifecycle.",
  },
  {
    icon: <SpeedOutlined sx={{ fontSize: 40, color: customColor.primary }} />,
    title: "Efficient Transitions",
    description:
      "Smooth transitions between lifecycle stages with coordinated planning and execution for maximum efficiency.",
  },
  {
    icon: (
      <VerifiedUserOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Strategic Planning",
    description:
      "Strategic lifecycle planning that optimizes product value, reduces costs, and extends product longevity.",
  },
  {
    icon: (
      <SettingsOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "End-to-End Support",
    description:
      "Comprehensive support services covering all aspects of product lifecycle from inception to retirement.",
  },
];

export const softwareSolutionForElectronicsFeatures: any[] = [
  {
    icon: <CodeOutlined sx={{ fontSize: 40, color: customColor.primary }} />,
    title: "Custom Software Development",
    description:
      "Custom software development tailored specifically for electronics manufacturing and embedded systems.",
  },
  {
    icon: (
      <EngineeringOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Firmware & Embedded Software",
    description:
      "Development of firmware, embedded software, and automation solutions that enhance productivity and efficiency.",
  },
  {
    icon: (
      <HighQualityOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Manufacturing Software",
    description:
      "Specialized manufacturing software solutions that streamline operations and improve operational efficiency.",
  },
  {
    icon: <SpeedOutlined sx={{ fontSize: 40, color: customColor.primary }} />,
    title: "Rapid Development",
    description:
      "Fast software development cycles that deliver custom solutions within agreed timelines without compromising quality.",
  },
  {
    icon: (
      <VerifiedUserOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Industry Best Practices",
    description:
      "Software solutions developed following industry best practices for security, reliability, and maintainability.",
  },
  {
    icon: <StorageOutlined sx={{ fontSize: 40, color: customColor.primary }} />,
    title: "Expert Software Team",
    description:
      "Skilled software engineers with extensive experience in electronics manufacturing and embedded systems.",
  },
];

export const erpAndMesFeatures: any[] = [
  {
    icon: (
      <DashboardOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Comprehensive ERP & MES",
    description:
      "Complete enterprise resource planning and manufacturing execution systems that streamline your entire manufacturing operations.",
  },
  {
    icon: (
      <EngineeringOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Real-Time Visibility",
    description:
      "Advanced software platforms offering real-time visibility into production processes, inventory, and quality control.",
  },
  {
    icon: (
      <HighQualityOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Integrated Solutions",
    description:
      "Seamlessly integrated ERP and MES systems that optimize manufacturing operations and business analytics.",
  },
  {
    icon: <SpeedOutlined sx={{ fontSize: 40, color: customColor.primary }} />,
    title: "Operational Efficiency",
    description:
      "Streamlined operations through automated processes, reducing manual work and improving overall efficiency.",
  },
  {
    icon: (
      <VerifiedUserOutlined sx={{ fontSize: 40, color: customColor.primary }} />
    ),
    title: "Business Analytics",
    description:
      "Comprehensive business analytics and reporting tools that provide insights for data-driven decision making.",
  },
  {
    icon: <CloudOutlined sx={{ fontSize: 40, color: customColor.primary }} />,
    title: "Expert Implementation Team",
    description:
      "Experienced professionals with deep expertise in ERP and MES system implementation and optimization.",
  },
];
