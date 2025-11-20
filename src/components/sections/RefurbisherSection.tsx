"use client";

import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  BuildCircleOutlined,
  VerifiedOutlined,
  Co2Outlined,
  SavingsOutlined,
  SpeedOutlined,
  SupportAgentOutlined,
} from "@mui/icons-material";
import {
  containerVariants,
  itemVariants,
} from "@/utils/animationVarients/animation";
import FeatureCard from "@/components/reuseable/FeatureCard";

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface RefurbisherSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  features?: FeatureItem[];
}

const defaultFeatures: FeatureItem[] = [
  {
    icon: <BuildCircleOutlined sx={{ fontSize: 40 }} />,
    title: "Expert Restoration",
    description:
      "Professional refurbishing services that restore equipment to like-new condition.",
  },
  {
    icon: <VerifiedOutlined sx={{ fontSize: 40 }} />,
    title: "Quality Guaranteed",
    description:
      "Comprehensive quality assurance with warranty on all refurbished products.",
  },
  {
    icon: <Co2Outlined sx={{ fontSize: 40 }} />,
    title: "Eco-Friendly",
    description:
      "Sustainable refurbishing practices that extend product lifecycles.",
  },
  {
    icon: <SavingsOutlined sx={{ fontSize: 40 }} />,
    title: "Cost-Effective",
    description:
      "Significant cost savings compared to purchasing new equipment.",
  },
  {
    icon: <SpeedOutlined sx={{ fontSize: 40 }} />,
    title: "Quick Service",
    description:
      "Fast turnaround times without compromising on quality standards.",
  },
  {
    icon: <SupportAgentOutlined sx={{ fontSize: 40 }} />,
    title: "Full Support",
    description: "Complete after-service support and maintenance assistance.",
  },
];

const RefurbisherSection: React.FC<RefurbisherSectionProps> = ({
  title = "Professional Device Refurbishment Services",
  subtitle = "REFURBISHING EXCELLENCE",
  description = "Transform your used electronic devices into like-new condition with our expert refurbishment services. We restore functionality, enhance performance, and extend the lifespan of your devices while maintaining the highest quality standards.",
  imageUrl = "/images/rebus.avif",
  features = defaultFeatures,
}) => {
  return (
    <Box
      sx={{
        py: { xs: 2, md: 6 },
        px: { xs: 2, md: 4 },
        background: "linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)",
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

          {/* Content Section with Image and Text */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column-reverse", md: "row" },
              gap: 4,
              alignItems: "center",
              mb: 6,
            }}
          >
            {/* Left Side - Content */}
            <Box sx={{ flex: 1, width: { xs: "100%", md: "50%" } }}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                    color: "text.primary",
                    fontSize: { xs: "22px", md: "28px" },
                  }}
                >
                  Why Choose Our Refurbishing Services?
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
                  Our refurbishment process involves comprehensive inspection,
                  cleaning, repair, and restoration of electronic devices. We use
                  only genuine parts and follow strict quality protocols to
                  ensure every refurbished device meets or exceeds original
                  specifications.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    mb: 4,
                    lineHeight: 1.8,
                    fontSize: "16px",
                  }}
                >
                  By choosing our device refurbishment services, you not only save costs
                  but also contribute to environmental sustainability by
                  extending the life of existing electronic devices rather than replacing
                  them.
                </Typography>
              </motion.div>
            </Box>

            {/* Right Side - Image */}
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
                      alt="Refurbishing"
                      fill
                      style={{ objectFit: "cover" }}
                      loading="lazy"
                      quality={85}
                    />
                  </Box>
                </Box>
              </motion.div>
            </Box>
          </Box>

          {/* Features Grid */}
          <motion.div variants={containerVariants}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

export default RefurbisherSection;
