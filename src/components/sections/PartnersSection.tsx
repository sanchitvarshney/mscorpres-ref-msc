"use client";

import { Box, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import {
  BusinessOutlined,
  GroupsOutlined,
  EmojiEventsOutlined,
  LocalShippingOutlined,
  VerifiedUserOutlined,
  TrendingUpOutlined,
} from "@mui/icons-material";
import {
  containerVariants,
} from "@/utils/animationVarients/animation";
import { StatItem } from "@/types/type";
import CounterItem from "../CounterItem";
import { customColor } from "@/utils/theme/customColor";


interface PartnersSectionProps {
  title?: string;
  subtitle?: string;
  stats?: StatItem[];
}

const defaultStats: StatItem[] = [
  {
    id: 1,
    icon: <BusinessOutlined />,
    number: 500,
    suffix: "+",
    label: "Happy Clients",
    iconColor: "primary.main",
  },
  {
    id: 2,
    icon: <EmojiEventsOutlined />,
    number: 200,
    suffix: "+",
    label: "Projects",
    iconColor: "warning.main",
  },
  {
    id: 3,
    icon: <LocalShippingOutlined />,
    number: 2500,
    suffix: "+",
    label: "Deliveries Made",
    iconColor: "success.main",
  },
  {
    id: 4,
    icon: <GroupsOutlined />,
    number: 150,
    suffix: "+",
    label: "Team Members",
    iconColor: "error.main",
  },
  {
    id: 5,
    icon: <VerifiedUserOutlined />,
    number: 15,
    suffix: "+",
    label: "Years Experience",
    iconColor: "info.main",
  },
  {
    id: 6,
    icon: <TrendingUpOutlined />,
    number: 98,
    suffix: "%",
    label: "Satisfaction Rate",
    iconColor: "secondary.main",
  },
];



const PartnersSection: React.FC<PartnersSectionProps> = ({
  title = "Our Achievements",
  subtitle = "WHAT OUR CLIENTS SAY",
  stats = defaultStats,
}) => {
  return (
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        position: "relative",
        background: "linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)",
        overflow: "hidden",
       
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            textAlign: "center",
            marginBottom: "4rem",
            width: "100%",
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: customColor.primary,
              fontWeight: 600,
              letterSpacing: 3,
              mb: 1,
              display: "block",
              fontSize: "12px",
            }}
          >
            {subtitle}
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: "bold",
              color: "text.primary",
              fontSize: { xs: "28px", md: "36px" },
              position: "relative",
              display: "inline-block",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -10,
                left: "50%",
                transform: "translateX(-50%)",
                width: 60,
                height: 3,
                background: (theme) =>
                  `linear-gradient(90deg, transparent, ${customColor.primary}, transparent)`,
                borderRadius: 2,
              },
            }}
          >
            {title}
          </Typography>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
          variants={containerVariants}
          style={{ width: "100%" }}
        >
          {stats.map((stat, index) => (
            <CounterItem key={stat.id} stat={stat} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default PartnersSection;
