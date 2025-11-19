"use client";

import Carousel from "@/components/Carousel";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import VisionMissionSection from "@/components/sections/VisionMissionSection";
import PartnersSection from "@/components/sections/PartnersSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TrustedCompaniesSection from "@/components/sections/TrustedCompaniesSection";
import { cardsData } from "@/dummydata/dummyData";
import { containerVariants, itemVariants } from "@/utils/animationVarients/animation";
import {
  AccessTimeOutlined,
  ShieldOutlined,
  TrackChangesOutlined,
} from "@mui/icons-material";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

export const certificationItems: any[] = [
  {
    id: 1,
    title: "ISO Certified",
    icon: (
      <ShieldOutlined color="primary" sx={{ fontSize: { xs: 30, md: 60 } }} />
    ),
  },
  {
    id: 2,
    title: "Quality Assured",
    icon: (
      <WorkspacePremiumOutlinedIcon
        color="primary"
        sx={{ fontSize: { xs: 30, md: 60 } }}
      />
    ),
  },
  {
    id: 3,
    title: "On-Time Delivery",
    icon: (
      <AccessTimeOutlined
        color="primary"
        sx={{ fontSize: { xs: 30, md: 60 } }}
      />
    ),
  },
  {
    id: 4,
    title: "100% Satisfaction",
    icon: (
      <TrackChangesOutlined
        color="primary"
        sx={{ fontSize: { xs: 30, md: 60 } }}
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
          py: { xs: 4, md: 6 },
          px: { xs: 2, md: 4 },
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
                color: "primary.main",
                fontWeight: 600,
                letterSpacing: 3,
                mb: 2,
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
              Our Certifications
            </Typography>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {certificationItems.map((item: any) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.2 } }}
              >
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
      
      <VisionMissionSection />
      
      <ServicesSection services={cardsData} />
      
      <AboutSection />
      
      <PartnersSection />
      
      <TestimonialsSection />
      
      <TrustedCompaniesSection />
      
  
    </div>
  );
};

export default HomePage;
