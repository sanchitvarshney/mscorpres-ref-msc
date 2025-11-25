"use client";

import  { Suspense, lazy } from "react";
import Carousel from "@/components/Carousel";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import VerifiedIcon from '@mui/icons-material/Verified';

const TestimonialsSection = lazy(
  () => import("@/components/sections/TestimonialsSection")
);
const TrustedCompaniesSection = lazy(
  () => import("@/components/sections/TrustedCompaniesSection")
);
import { cardsData } from "@/dummydata/dummyData";
import {
  containerVariants,
  itemVariants,
} from "@/utils/animationVarients/animation";

import {
  AccessTimeOutlined,
  CheckCircleOutline,
  CircleOutlined,
  ShieldOutlined,
  TrackChangesOutlined,
} from "@mui/icons-material";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import { customColor } from "@/utils/theme/customColor";

export const certificationItems: any[] = [
  {
    id: 1,
    title: "ISO Certified",
    icon: (
      <WorkspacePremiumOutlinedIcon
        sx={{ fontSize: { xs: 30, md: 60 }, color: customColor.primary }}
      />
    ),
  },
  {
    id: 2,
    title: "RoHS Compliant",
    icon: (
      <CheckCircleOutline 
        sx={{ fontSize: { xs: 30, md: 60 }, color: customColor.primary }}
      />
    ),
  },
  {
    id: 3,
    title: "Quality Assured",
    icon: (
      <VerifiedIcon
        sx={{ fontSize: { xs: 30, md: 60 }, color: customColor.primary }}
      />
    ),
  },
  {
    id: 4,
    title: "On-Time Delivery",
    icon: (
      <AccessTimeOutlined
        sx={{ fontSize: { xs: 30, md: 60 }, color: customColor.primary }}
      />
    ),
  },
  {
    id: 5,
    title: "100% Satisfaction",
    icon: (
      <TrackChangesOutlined
        sx={{ fontSize: { xs: 30, md: 60 }, color: customColor.primary }}
      />
    ),
  },
];

const HomePage = () => {
  return (
    <div className="w-full h-full">
      <Carousel />
      <Box
        sx={{
          p: { xs: 2, md: 4 },
          background: "linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)",
        }}
      >
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={itemVariants}
            style={{ textAlign: "center", marginBottom: "3rem" }}
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
              WHY CHOOSE US
            </Typography>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: "bold",
                mb: 1,
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
              Our Certifications
            </Typography>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {certificationItems.map((item: any) => (
              <motion.div key={item.id} variants={itemVariants}>
                <Box
                  sx={{
                    background: "white",
                    px: 4,
                    py: 6,
                    borderRadius: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                    },
                  }}
                >
                  <Box sx={{ mb: 2 }}>{item.icon}</Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      textAlign: "center",
                      color: "text.primary",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Box>

      <ServicesSection services={cardsData} />

      <AboutSection />

      <Suspense fallback={<div style={{ minHeight: "200px" }} />}>
        <TestimonialsSection />
      </Suspense>

      <Suspense fallback={<div style={{ minHeight: "200px" }} />}>
        <TrustedCompaniesSection />
      </Suspense>
    </div>
  );
};

export default HomePage;
