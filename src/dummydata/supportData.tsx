import { customColor } from "@/utils/theme/customColor";
import {
  Article,
  Balance,
  CheckCircle,
  ContentCopy,
  Cookie,
  Copyright,
  DataUsage,
  Edit,
  Forum,
  Gavel,
  Schedule,
  Security,
  Share,
  Shield,
  Update,
  Warning,
} from "@mui/icons-material";

export interface LegalSectionMeta {
  id: number;
  key: string;
  icon: React.ReactNode;
}

export const sectionData: LegalSectionMeta[] = [
  { id: 1, key: "collection", icon: <Security sx={{ color: customColor.primary }} /> },
  { id: 2, key: "usage", icon: <DataUsage sx={{ color: customColor.primary }} /> },
  { id: 3, key: "sharing", icon: <Share sx={{ color: customColor.primary }} /> },
  { id: 4, key: "retention", icon: <Schedule sx={{ color: customColor.primary }} /> },
  { id: 5, key: "rights", icon: <Gavel sx={{ color: customColor.primary }} /> },
  { id: 6, key: "cookies", icon: <Cookie sx={{ color: customColor.primary }} /> },
  { id: 7, key: "consequences", icon: <Warning sx={{ color: customColor.primary }} /> },
  { id: 8, key: "updates", icon: <Update sx={{ color: customColor.primary }} /> },
];

export const sectionTermData: LegalSectionMeta[] = [
  { id: 1, key: "content", icon: <Article sx={{ color: customColor.primary }} /> },
  { id: 2, key: "useOfContent", icon: <ContentCopy sx={{ color: customColor.primary }} /> },
  { id: 3, key: "accuracy", icon: <CheckCircle sx={{ color: customColor.primary }} /> },
  { id: 4, key: "blogs", icon: <Forum sx={{ color: customColor.primary }} /> },
  { id: 5, key: "ownership", icon: <Copyright sx={{ color: customColor.primary }} /> },
  { id: 6, key: "warranties", icon: <Warning sx={{ color: customColor.primary }} /> },
  { id: 7, key: "liability", icon: <Shield sx={{ color: customColor.primary }} /> },
  { id: 8, key: "indemnification", icon: <Gavel sx={{ color: customColor.primary }} /> },
  { id: 9, key: "modification", icon: <Edit sx={{ color: customColor.primary }} /> },
  { id: 10, key: "applicableLaws", icon: <Balance sx={{ color: customColor.primary }} /> },
];
