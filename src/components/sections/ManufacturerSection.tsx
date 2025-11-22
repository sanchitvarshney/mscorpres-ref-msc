"use client";

import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  PrecisionManufacturingOutlined,
  EngineeringOutlined,
  HighQualityOutlined,
  SpeedOutlined,
  VerifiedUserOutlined,
  BuildOutlined,
} from "@mui/icons-material";
import {
  containerVariants,
  itemVariants,
} from "@/utils/animationVarients/animation";
import FeatureCard from "@/components/reuseable/FeatureCard";
import { customColor } from "@/utils/theme/customColor";

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ManufacturerSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  features?: FeatureItem[];
  isReverse?: boolean;
  service: string;
  description2?: string;
  description1?: string;
}

const defaultFeatures: FeatureItem[] = [
  {
    icon: <PrecisionManufacturingOutlined sx={{ fontSize: 40 }} />,
    title: "Precision Manufacturing",
    description:
      "State-of-the-art facilities with advanced machinery for precise IoT device manufacturing.",
  },
  {
    icon: <EngineeringOutlined sx={{ fontSize: 40 }} />,
    title: "Custom Engineering",
    description:
      "Tailored IoT solutions designed to meet your specific connectivity and automation requirements.",
  },
  {
    icon: <HighQualityOutlined sx={{ fontSize: 40 }} />,
    title: "Quality Assurance",
    description:
      "Rigorous testing and quality control processes ensuring top-tier IoT products.",
  },
  {
    icon: <SpeedOutlined sx={{ fontSize: 40 }} />,
    title: "Fast Turnaround",
    description:
      "Efficient production processes delivering IoT solutions within agreed timelines.",
  },
  {
    icon: <VerifiedUserOutlined sx={{ fontSize: 40 }} />,
    title: "Certified Standards",
    description:
      "ISO certified manufacturing following international quality standards for IoT devices.",
  },
  {
    icon: <BuildOutlined sx={{ fontSize: 40 }} />,
    title: "Expert Team",
    description:
      "Skilled professionals with years of experience in IoT device manufacturing.",
  },
];

const ManufacturerSection: React.FC<ManufacturerSectionProps> = ({
  title = "IoT Manufacturing Excellence",
  subtitle = "MANUFACTURING EXCELLENCE",
  description = "We specialize in high-quality IoT device manufacturing with state-of-the-art facilities and expert craftsmanship. Our manufacturing services deliver durable, precision-engineered IoT solutions tailored to your specific connectivity and automation needs.",
  imageUrl = "/images/iot-details.avif",
  features = defaultFeatures,
  isReverse = false,
  service,
  description2,
  description1,
}) => {
  return (
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        background: "linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Header Section */}
          <motion.div
            variants={itemVariants}
            style={{ textAlign: "center", marginBottom: "4rem" }}
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
                mb: 2,
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
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                fontSize: "16px",
                maxWidth: "800px",
                mx: "auto",
                lineHeight: 1.8,
                
              }}
            >
              {description}
            </Typography>
          </motion.div>

          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: isReverse ? "row-reverse" : "row",
              },
              gap: 4,
              alignItems: "center",

              mb: 5,
            }}
          >
            <Box sx={{ flex: 1, width: { xs: "100%", md: "50%" } }}>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        "linear-gradient(135deg, rgba(25,118,210,0.1) 0%, rgba(13,71,161,0.1) 100%)",
                      zIndex: 1,
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: { xs: 300, md: 400 },
                    }}
                  >
                    <Image
                      src={imageUrl}
                      alt="Manufacturing"
                      fill
                      style={{ objectFit: "cover" }}
                      loading="lazy"
                      quality={85}
                    />
                  </Box>
                </Box>
              </motion.div>
            </Box>

            <Box sx={{ flex: 1, width: { xs: "100%", md: "50%" } }}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                    color: "text.primary",
                    fontSize: { xs: "22px", md: "28px" },
                  }}
                >
                  Why Choose Our {service} Services?
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    mb: 2,
                    lineHeight: 1.8,
                    fontSize: "15px",
                    textAlign:"justify",
                  }}
                >
                  {description1}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    mb: 1,
                    lineHeight: 1.8,
                    fontSize: "15px",
                       textAlign:"justify",
                  }}
                >
                  {description2}{" "}
                </Typography>
              </motion.div>
            </Box>
          </Box>

          <motion.div variants={containerVariants}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ManufacturerSection;
