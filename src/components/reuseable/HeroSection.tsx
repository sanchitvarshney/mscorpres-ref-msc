"use client";

import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import { useParams, usePathname } from "next/navigation";
import { gradientPaths } from "@/dummydata/pathData";

interface HeroSectionProps {
  imageUrl?: string;
  alt?: string;
  subtitle?: string;
  title?: string;
  description?: string;
  gradientOverlay?: {
    startColor?: string;
    endColor?: string;
    opacity?: number;
  };
  height?: {
    xs?: string;
    md?: string;
  };
  minHeight?: {
    xs?: string | number;
    md?: string | number;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({
  imageUrl = "/images/elec.mp4",
  alt = "Hero Image",
  subtitle,
  title,
  description,
  gradientOverlay = {
    startColor: "rgba(0, 0, 0, 0.2)",
    endColor: "rgba(0, 0, 0, 0.8)",

    opacity: 1,
  },
  height = {
    xs: "60vh",
    md: "calc(100vh - 168px)",
  },
  minHeight = {
    xs: "400px",
    md: "500px",
  },
}) => {
 
  const pathname:any = usePathname();
  const overlayGradient = `linear-gradient(0deg, ${gradientOverlay.startColor} 0%, ${gradientOverlay.endColor} 140%)`;

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: height,
        minHeight: minHeight,
        overflow: "hidden",
        display: "flex",
        "&::before": gradientPaths.includes(pathname) ? {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: overlayGradient,
          zIndex: 1,
        } : {},
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <video
          src={imageUrl}
          autoPlay
          loop
          muted
          playsInline
            preload="auto"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* Text Overlay */}
      <Container
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          color: "#ffffff",

          mt: 2,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {subtitle && (
            <Typography
              variant="overline"
              sx={{
                display: "block",
                fontSize: { xs: "12px", md: "14px" },
                letterSpacing: 4,
                fontWeight: 600,
                mb: 2,
                color: "rgba(255, 255, 255, 0.9)",
              }}
            >
              {subtitle}
            </Typography>
          )}
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontSize: { xs: "25px", sm: "40px", md: "50px" },
              fontWeight: "bold",
              mb: description ? 3 : 0,
              textShadow: "0 2px 10px rgba(0,0,0,0.3)",
              lineHeight: 1.2,
              color: "#ffffff",
            }}
          >
            {title}
          </Typography>
          {description && (
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "16px", md: "20px" },
                fontWeight: "bold",

                maxWidth: "800px",
                mx: "auto",
                color: "#ffffff",

                textShadow: "0 1px 5px rgba(0,0,0,0.2)",
                lineHeight: 1.6,
              }}
            >
              {description}
            </Typography>
          )}
        </motion.div>
      </Container>
    </Box>
  );
};

export default HeroSection;
