"use client";

import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { gradientPaths } from "@/dummydata/pathData";
import { customColor } from "@/utils/theme/customColor";

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

const EASE = [0.22, 1, 0.36, 1] as const;

const HeroSection: React.FC<HeroSectionProps> = ({
  imageUrl = "/images/elec.mp4",
  alt = "Hero background",
  subtitle,
  title,
  description,
  gradientOverlay = {
    startColor: "rgba(4, 20, 19, 0.25)",
    endColor: "rgba(4, 20, 19, 0.85)",
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
  const pathname = usePathname() ?? "";
  const emphasized = gradientPaths.includes(pathname);

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        height,
        minHeight,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background video */}
      <Box
        component="video"
        src={imageUrl}
        aria-label={alt}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

      {/* Scrims — always readable, a touch deeper on emphasized routes */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(180deg, rgba(4,20,19,0.42) 0%, rgba(4,20,19,0.2) 42%, rgba(4,20,19,0.78) 100%)",
        }}
      />
      {emphasized && (
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            opacity: gradientOverlay.opacity ?? 1,
            background: `linear-gradient(0deg, ${gradientOverlay.startColor} 0%, ${gradientOverlay.endColor} 150%)`,
          }}
        />
      )}
      {/* Brand teal glow rising from the bottom */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "radial-gradient(1200px 460px at 50% 128%, rgba(4,176,168,0.32), transparent 70%)",
          mixBlendMode: "screen",
        }}
      />

      {/* Content */}
      <Container
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          color: "#fff",
          px: { xs: 3, md: 4 },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: EASE }}
        >
          {subtitle && (
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.25,
                px: 2,
                py: 0.75,
                mb: { xs: 2, md: 2.5 },
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.35)",
                backdropFilter: "blur(4px)",
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  bgcolor: customColor.primary,
                }}
              />
              <Typography
                sx={{
                  fontSize: { xs: 11, md: 12.5 },
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.92)",
                }}
              >
                {subtitle}
              </Typography>
            </Box>
          )}

          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "27px", sm: "40px", md: "54px" },
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
              maxWidth: 920,
              mx: "auto",
              textShadow: "0 6px 28px rgba(0,0,0,0.4)",
              mb: description ? { xs: 2, md: 2.5 } : 0,
            }}
          >
            {title}
          </Typography>

          {description && (
            <Typography
              sx={{
                fontSize: { xs: "15px", md: "18px" },
                fontWeight: 400,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.9)",
                maxWidth: 720,
                mx: "auto",
                textShadow: "0 2px 14px rgba(0,0,0,0.35)",
              }}
            >
              {description}
            </Typography>
          )}
        </motion.div>
      </Container>

      {/* Scroll cue (tall heroes only) */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          bottom: 22,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: { xs: "none", md: "flex" },
          "@keyframes heroScrollDot": {
            "0%, 100%": { transform: "translateY(0)", opacity: 0.9 },
            "50%": { transform: "translateY(9px)", opacity: 0.3 },
          },
        }}
      >
        <Box
          sx={{
            width: 22,
            height: 34,
            borderRadius: 999,
            border: "2px solid rgba(255,255,255,0.5)",
            display: "flex",
            justifyContent: "center",
            pt: "6px",
          }}
        >
          <Box
            sx={{
              width: 3,
              height: 7,
              borderRadius: 999,
              bgcolor: "rgba(255,255,255,0.85)",
              animation: "heroScrollDot 1.6s ease-in-out infinite",
              "@media (prefers-reduced-motion: reduce)": { animation: "none" },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
