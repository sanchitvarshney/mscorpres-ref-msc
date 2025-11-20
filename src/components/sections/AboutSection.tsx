"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import {
  BusinessOutlined,
  GroupsOutlined,
  EmojiEventsOutlined,
  ShieldOutlined,
} from "@mui/icons-material";
import {
  containerVariants,
  itemVariants,
} from "@/utils/animationVarients/animation";
import { customColor } from "@/utils/theme/customColor";

interface StatItem {
  icon: React.ReactNode;
  number: string;
  label: string;
}

interface AboutSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  secondParagraph?: string;
  stats?: StatItem[];
  imageUrl?: string;
  imageAlt?: string;
}

const defaultStats: StatItem[] = [
  { icon: <BusinessOutlined />, number: "15+", label: "Years Experience" },
  { icon: <GroupsOutlined />, number: "500+", label: "Happy Clients" },
  {
    icon: <EmojiEventsOutlined />,
    number: "1000+",
    label: "Projects Completed",
  },
  { icon: <ShieldOutlined />, number: "100%", label: "Satisfaction Rate" },
];

const AboutSection: React.FC<AboutSectionProps> = ({
  title = "Leading Excellence in Electronics & Technology",
  subtitle = "ABOUT US",
  description = "With years of industry experience, we have established ourselves as a trusted partner in electronics and technology solutions. Our commitment to quality, innovation, and customer satisfaction drives everything we do.",
  secondParagraph = "We combine cutting-edge technology with expert craftsmanship to deliver solutions that exceed expectations and drive your business forward.",
  stats = defaultStats,
  imageUrl = "/images/services.avif",
  imageAlt = "About Us",
}) => {
  return (
    <Box
      sx={{
        background: customColor.light,
        p: { xs: 2, md: 4 },
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            alignItems: "center",
          }}
        >
          {/* Left Side - Content */}
          <Box sx={{ flex: 1, width: { xs: "100%", md: "50%" } }}>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6 },
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: customColor.primary,
                  fontWeight: 600,
                  letterSpacing: 2,
                  mb: 1,
                  display: "block",
                }}
              >
                {subtitle}
              </Typography>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                  color: "text.primary",
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  mb: 3,
                  lineHeight: 1.8,
                  fontSize: "16px",
                }}
              >
                {description}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  mb: 2,
                  lineHeight: 1.8,
                  fontSize: "16px",
                }}
              >
                {secondParagraph}
              </Typography>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-2 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Box sx={{ color: customColor.primary, mb: 1 }}>
                      {stat.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "bold",
                        color: customColor.primary,
                        mb: 0.5,
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "text.secondary", fontSize: "12px" }}
                    >
                      {stat.label}
                    </Typography>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </Box>

          {/* Right Side - Image/Visual */}
          <Box sx={{ flex: 1, width: { xs: "100%", md: "50%" } }}>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6, delay: 0.2 },
                },
              }}
              className="relative"
            >
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 3,
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={imageUrl}
                  alt={imageAlt}
                  sx={{
                    width: "100%",
                    height: { xs: 300, md: 500 },
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>
            </motion.div>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default AboutSection;
