"use client";

import React, { useEffect, useState, useRef } from "react";
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
  itemVariants,
} from "@/utils/animationVarients/animation";

interface StatItem {
  id: number;
  icon: React.ReactNode;
  number: number;
  suffix?: string;
  label: string;
  iconColor?: string;
}

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

// Custom hook for counter animation
const useCounter = (
  end: number,
  duration: number = 2000,
  startAnimation: boolean
) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(
        startValue + (end - startValue) * easeOutQuart
      );

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, startAnimation]);

  return count;
};

// Counter component
const CounterItem: React.FC<{
  stat: StatItem;
  index: number;
}> = ({ stat, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const count = useCounter(stat.number, 2000, isInView);

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          background: "white",
          borderRadius: 3,
          p: { xs: 3, md: 4 },
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          transition: "all 0.3s ease",
          border: "1px solid rgba(0,0,0,0.05)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
            borderColor: stat.iconColor || "primary.main",
          },
        }}
      >
        <Box
          sx={{
            color: stat.iconColor || "primary.main",
            mb: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "& svg": {
              fontSize: { xs: 40, md: 50 },
            },
          }}
        >
          {stat.icon}
        </Box>
        <Typography
          variant="h3"
          component="div"
          sx={{
            fontWeight: "bold",
            color: "text.primary",
            mb: 1,
            fontSize: { xs: "32px", md: "42px" },
            lineHeight: 1.2,
          }}
        >
          {count}
          {stat.suffix && (
            <Box component="span" sx={{ fontSize: { xs: "24px", md: "32px" } }}>
              {stat.suffix}
            </Box>
          )}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            fontWeight: 500,
            fontSize: { xs: "14px", md: "16px" },
          }}
        >
          {stat.label}
        </Typography>
      </Box>
    </motion.div>
  );
};

const PartnersSection: React.FC<PartnersSectionProps> = ({
  title = "Our Achievements",
  subtitle = "WHAT OUR CLIENTS SAY",
  stats = defaultStats,
}) => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 4 },
        position: "relative",
        background: "linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(25,118,210,0.3), transparent)",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(25,118,210,0.3), transparent)",
        },
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
          initial={{ opacity: 0, y: -30 }}
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
              color: "primary.main",
              fontWeight: 600,
              letterSpacing: 3,
              mb: 2,
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
              mb: 3,
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
                  `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
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
