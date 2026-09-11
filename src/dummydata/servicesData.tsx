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
  { id: 1, key: "pcbDesign", img: "/services-img/pcb.svg", path: "/services/pcb-design" },
  { id: 2, key: "boxBuilding", img: "/services-img/box.svg", path: "/services/box-building" },
  { id: 3, key: "turnkeySolution", img: "/services-img/trunkey.svg", path: "/services/turnkey-solution" },
  { id: 4, key: "skdAndCkdDesign", img: "/services-img/skdckd.svg", path: "/services/skd-and-ckd-design" },
  { id: 5, key: "prototypeDesign", img: "/services-img/prototype.svg", path: "/services/prototype-design" },
  { id: 6, key: "iotManufacturing", img: "/services-img/iot.svg", path: "/services/iot-manufacturing" },
  { id: 7, key: "deviceRefurbishment", img: "/services-img/device.svg", path: "/services/device-refurbishment" },
];
export const productData = [
  { id: 8, key: "electronics", img: "/services-img/electro.svg", path: "/services/electronics" },
  { id: 9, key: "rapidPrototyping", img: "/services-img/rapid.svg", path: "/services/rapid-prototyping" },
  { id: 10, key: "dfmSolution", img: "/services-img/dfm.svg", path: "/services/dfm-solution" },
  { id: 11, key: "productLifeCycle", img: "/services-img/cycle.svg", path: "/services/product-life-cycle" },
];
export const softwareData = [
  { id: 12, key: "erpAndMes", img: "/services-img/erp.svg", path: "/services/erp-and-mes" },
  { id: 13, key: "softwareSolutionForElectronics", img: "/services-img/soft.svg", path: "/services/software-solution-for-electronics" },
  { id: 14, key: "firmwareEmbeddedSoftware", img: "/services-img/embeded.svg", path: "/services/firmware-embedded-software" },
];

const iconSx = { fontSize: 40, color: customColor.primary };

export const pcbFeatureIcons = [
  <PrecisionManufacturingOutlined key="0" sx={iconSx} />,
  <EngineeringOutlined key="1" sx={iconSx} />,
  <HighQualityOutlined key="2" sx={iconSx} />,
  <SpeedOutlined key="3" sx={iconSx} />,
  <VerifiedUserOutlined key="4" sx={iconSx} />,
  <BuildOutlined key="5" sx={iconSx} />,
];

export const boxBuildingFeatureIcons = [
  <ConstructionOutlined key="0" sx={iconSx} />,
  <EngineeringOutlined key="1" sx={iconSx} />,
  <HighQualityOutlined key="2" sx={iconSx} />,
  <SpeedOutlined key="3" sx={iconSx} />,
  <SecurityOutlined key="4" sx={iconSx} />,
  <SettingsOutlined key="5" sx={iconSx} />,
];

export const turnkeySolutionFeatureIcons = [
  <BusinessCenterOutlined key="0" sx={iconSx} />,
  <EngineeringOutlined key="1" sx={iconSx} />,
  <HighQualityOutlined key="2" sx={iconSx} />,
  <SpeedOutlined key="3" sx={iconSx} />,
  <VerifiedUserOutlined key="4" sx={iconSx} />,
  <BuildOutlined key="5" sx={iconSx} />,
];

export const skdCkdDesignFeatureIcons = [
  <InventoryOutlined key="0" sx={iconSx} />,
  <EngineeringOutlined key="1" sx={iconSx} />,
  <HighQualityOutlined key="2" sx={iconSx} />,
  <SpeedOutlined key="3" sx={iconSx} />,
  <VerifiedUserOutlined key="4" sx={iconSx} />,
  <SettingsOutlined key="5" sx={iconSx} />,
];

export const prototypeDesignFeatureIcons = [
  <FlashOnOutlined key="0" sx={iconSx} />,
  <EngineeringOutlined key="1" sx={iconSx} />,
  <HighQualityOutlined key="2" sx={iconSx} />,
  <SpeedOutlined key="3" sx={iconSx} />,
  <VerifiedUserOutlined key="4" sx={iconSx} />,
  <AutoAwesomeOutlined key="5" sx={iconSx} />,
];

export const iotManufacturingFeatureIcons = [
  <DevicesOutlined key="0" sx={iconSx} />,
  <EngineeringOutlined key="1" sx={iconSx} />,
  <HighQualityOutlined key="2" sx={iconSx} />,
  <SpeedOutlined key="3" sx={iconSx} />,
  <VerifiedUserOutlined key="4" sx={iconSx} />,
  <MemoryOutlined key="5" sx={iconSx} />,
];

export const deviceRefurbishmentFeatureIcons = [
  <RefreshOutlined key="0" sx={iconSx} />,
  <EngineeringOutlined key="1" sx={iconSx} />,
  <HighQualityOutlined key="2" sx={iconSx} />,
  <SpeedOutlined key="3" sx={iconSx} />,
  <VerifiedUserOutlined key="4" sx={iconSx} />,
  <SecurityOutlined key="5" sx={iconSx} />,
];

export const electronicsFeatureIcons = [
  <BookmarkAddOutlined key="0" sx={iconSx} />,
  <EngineeringOutlined key="1" sx={iconSx} />,
  <HighQualityOutlined key="2" sx={iconSx} />,
  <SpeedOutlined key="3" sx={iconSx} />,
  <VerifiedUserOutlined key="4" sx={iconSx} />,
  <BuildOutlined key="5" sx={iconSx} />,
];

export const dfmSolutionFeatureIcons = [
  <AnalyticsOutlined key="0" sx={iconSx} />,
  <EngineeringOutlined key="1" sx={iconSx} />,
  <HighQualityOutlined key="2" sx={iconSx} />,
  <SpeedOutlined key="3" sx={iconSx} />,
  <VerifiedUserOutlined key="4" sx={iconSx} />,
  <SettingsOutlined key="5" sx={iconSx} />,
];

export const rapidPrototypingFeatureIcons = [
  <FlashOnOutlined key="0" sx={iconSx} />,
  <EngineeringOutlined key="1" sx={iconSx} />,
  <HighQualityOutlined key="2" sx={iconSx} />,
  <SpeedOutlined key="3" sx={iconSx} />,
  <VerifiedUserOutlined key="4" sx={iconSx} />,
  <AutoAwesomeOutlined key="5" sx={iconSx} />,
];

export const productLifeCycleFeatureIcons = [
  <TimelineOutlined key="0" sx={iconSx} />,
  <EngineeringOutlined key="1" sx={iconSx} />,
  <HighQualityOutlined key="2" sx={iconSx} />,
  <SpeedOutlined key="3" sx={iconSx} />,
  <VerifiedUserOutlined key="4" sx={iconSx} />,
  <SettingsOutlined key="5" sx={iconSx} />,
];

export const softwareSolutionForElectronicsFeatureIcons = [
  <CodeOutlined key="0" sx={iconSx} />,
  <EngineeringOutlined key="1" sx={iconSx} />,
  <HighQualityOutlined key="2" sx={iconSx} />,
  <SpeedOutlined key="3" sx={iconSx} />,
  <VerifiedUserOutlined key="4" sx={iconSx} />,
  <StorageOutlined key="5" sx={iconSx} />,
];

export const firmwareEmbeddedSoftwareFeatureIcons = [
  <CodeOutlined key="0" sx={iconSx} />,
  <EngineeringOutlined key="1" sx={iconSx} />,
  <MemoryOutlined key="2" sx={iconSx} />,
  <SpeedOutlined key="3" sx={iconSx} />,
  <VerifiedUserOutlined key="4" sx={iconSx} />,
  <SettingsOutlined key="5" sx={iconSx} />,
];

export const erpAndMesFeatureIcons = [
  <DashboardOutlined key="0" sx={iconSx} />,
  <EngineeringOutlined key="1" sx={iconSx} />,
  <HighQualityOutlined key="2" sx={iconSx} />,
  <SpeedOutlined key="3" sx={iconSx} />,
  <VerifiedUserOutlined key="4" sx={iconSx} />,
  <CloudOutlined key="5" sx={iconSx} />,
];
