"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { VisibilityOutlined, FlagOutlined } from "@mui/icons-material";
import {
  cardVariants,
  containerVariants,
} from "@/utils/animationVarients/animation";
import { customColor } from "@/utils/theme/customColor";

interface VisionMissionSectionProps {
  visionTitle?: string;
  visionDescription?: string;
  missionTitle?: string;
  missionDescription?: string;
}

const VisionMissionSection: React.FC<VisionMissionSectionProps> = ({
  visionTitle = "Our Vision",
  visionDescription = "To become a global leader in electronics and technology solutions by setting new benchmarks in excellence, innovation, and customer satisfaction. We envision a future where our IoT products, PCB design expertise, device refurbishment services, ERP/MES platforms, and software solutions empower businesses worldwide to operate with greater efficiency, reliability, and confidence.",
  missionTitle = "Our Mission",
  missionDescription = "To deliver world-class electronics and technology solutions through advanced innovation, expert engineering, and an unwavering commitment to quality. Our mission is to help businesses achieve their goals by providing reliable IoT systems, precision PCB design, professional refurbishment services, and intelligent ERP/MES and software solutions—building long-term partnerships founded on trust, performance, and mutual success.",
}) => {
  return (
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        background: "linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)",
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        {/* Section Title */}
        <motion.div
          variants={cardVariants}
          style={{ textAlign: "center", marginBottom: "2rem" }}
        >
          <Typography
            variant="overline"
            sx={{
              color: customColor.primary,
              fontWeight: 600,
              letterSpacing: 2,
              mb: 1,
              display: "block",
            }}
          >
            WHO WE ARE
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
                  `linear-gradient(90deg, transparent, ${customColor.primary}, transparent)`,
                borderRadius: 2,
              },
            }}
          >
            Vision & Mission
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Excellence drives our mission and vision forward.
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            justifyContent: "center",
          }}
        >
          <motion.div
            variants={cardVariants}
            style={{ flex: 1, maxWidth: "500px" }}
          >
            <Box
              sx={{
                background: `linear-gradient(135deg, ${customColor.primary} 0%, ${customColor.secondary} 100%)`,
                borderRadius: 3,
                p: { xs: 3, md: 4 },
                height: "100%",
                color: "white",
                position: "relative",
                overflow: "hidden",

                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: -50,
                  right: -50,
                  width: 200,
                  height: 200,
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.1)",
                  zIndex: 0,
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -30,
                  left: -30,
                  width: 150,
                  height: 150,
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.1)",
                  zIndex: 0,
                },
              }}
            >
              <Box sx={{ position: "relative", zIndex: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 3,
                  }}
                >
                  <Box
                    sx={{
                      background: "rgba(255, 255, 255, 0.2)",
                      borderRadius: "50%",
                      p: 1.5,
                      mr: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <VisibilityOutlined sx={{ fontSize: 32 }} />
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    {visionTitle}
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: "rgba(255, 255, 255, 0.95)",
                    lineHeight: 1.8,
                    fontSize: "16px",
                  }}
                >
                  {visionDescription}
                </Typography>
              </Box>
            </Box>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            variants={cardVariants}
            style={{ flex: 1, maxWidth: "500px" }}
          >
            <Box
              sx={{
                background: `linear-gradient(135deg, ${customColor?.secondary} 0%, ${customColor?.primary} 100%)`,
                borderRadius: 3,
                p: { xs: 3, md: 4 },
                height: "100%",
                color: "white",
                position: "relative",
                overflow: "hidden",

                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: -50,
                  right: -50,
                  width: 200,
                  height: 200,
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.1)",
                  zIndex: 0,
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -30,
                  left: -30,
                  width: 150,
                  height: 150,
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.1)",
                  zIndex: 0,
                },
              }}
            >
              <Box sx={{ position: "relative", zIndex: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 3,
                  }}
                >
                  <Box
                    sx={{
                      background: "rgba(255, 255, 255, 0.2)",
                      borderRadius: "50%",
                      p: 1.5,
                      mr: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FlagOutlined sx={{ fontSize: 32 }} />
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    {missionTitle}
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: "rgba(255, 255, 255, 0.95)",
                    lineHeight: 1.8,
                    fontSize: "16px",
                  }}
                >
                  {missionDescription}
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </Box>
      </motion.div>
    </Box>
  );
};

export default VisionMissionSection;
