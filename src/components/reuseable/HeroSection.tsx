"use client";

import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

interface HeroSectionProps {
  imageUrl: string;
  alt?: string;
  subtitle?: string;
  title: string;
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
  imageUrl,
  alt = "Hero Image",
  subtitle,
  title,
  description,
  gradientOverlay = {
    startColor: "rgba(0, 0, 0, 0.15)",
    endColor: "rgba(0, 0, 0, 0.20)",
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
  const overlayGradient = `linear-gradient(135deg, ${gradientOverlay.startColor} 0%, ${gradientOverlay.endColor} 100%)`;

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: height,
        minHeight: minHeight,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: overlayGradient,
          zIndex: 1,
        },
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
        <Image
          src={imageUrl}
          alt={alt}
          fill
          style={{ objectFit: "cover" }}
          loading="lazy"
          quality={85}
        />
      </Box>

      {/* Text Overlay */}
      <Container
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          color: "white",
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
              fontSize: { xs: "36px", sm: "48px", md: "64px" },
              fontWeight: "bold",
              mb: description ? 3 : 0,
              textShadow: "0 2px 10px rgba(0,0,0,0.3)",
              lineHeight: 1.2,
            }}
          >
            {title}
          </Typography>
          {description && (
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "16px", md: "20px" },
                fontWeight: 400,
                maxWidth: "800px",
                mx: "auto",
                color: "rgba(255, 255, 255, 0.95)",
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

