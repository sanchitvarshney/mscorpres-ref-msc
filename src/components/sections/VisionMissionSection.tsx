"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { VisibilityOutlined, FlagOutlined } from "@mui/icons-material";
import { useInView } from "@/hooks/useInView";
import { customColor } from "@/utils/theme/customColor";

interface VisionMissionSectionProps {
  visionTitle?: string;
  visionDescription?: string;
  missionTitle?: string;
  missionDescription?: string;
}

interface CardData {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  delay: number;
}

const VisionMissionSection: React.FC<VisionMissionSectionProps> = ({
  visionTitle = "Our Vision",
  visionDescription = "To become a global leader in electronics and technology solutions by setting new benchmarks in excellence, innovation, and customer satisfaction. We envision a future where our IoT products, PCB design expertise, device refurbishment services, ERP/MES platforms, and software solutions empower businesses worldwide to operate with greater efficiency, reliability, and confidence.",
  missionTitle = "Our Mission",
  missionDescription = "To deliver world-class electronics and technology solutions through advanced innovation, expert engineering, and an unwavering commitment to quality. Our mission is to help businesses achieve their goals by providing reliable IoT systems, precision PCB design, professional refurbishment services, and intelligent ERP/MES and software solutions — building long-term partnerships founded on trust, performance, and mutual success.",
}) => {
  const { ref, inView } = useInView<HTMLDivElement>();

  const cards: CardData[] = [
    {
      icon: <VisibilityOutlined sx={{ fontSize: 30 }} />,
      title: visionTitle,
      description: visionDescription,
      gradient: `linear-gradient(135deg, ${customColor.primary} 0%, ${customColor.secondary} 100%)`,
      delay: 0.08,
    },
    {
      icon: <FlagOutlined sx={{ fontSize: 30 }} />,
      title: missionTitle,
      description: missionDescription,
      gradient: `linear-gradient(135deg, ${customColor.secondary} 0%, ${customColor.primary} 100%)`,
      delay: 0.16,
    },
  ];

  return (
    <Box
      ref={ref}
      className={inView ? "in-view" : undefined}
      sx={{
        "& .reveal": {
          opacity: 0,
          translate: "0 26px",
          transition:
            "opacity .65s cubic-bezier(0.22,1,0.36,1) var(--reveal-delay,0s), translate .65s cubic-bezier(0.22,1,0.36,1) var(--reveal-delay,0s)",
        },
        "&.in-view .reveal": { opacity: 1, translate: "0 0" },
        "@media (prefers-reduced-motion: reduce)": {
          "& .reveal": { opacity: 1, translate: "0 0", transition: "none" },
        },
      }}
    >
      {/* Header */}
      <Box
        className="reveal"
        sx={{ textAlign: "center", maxWidth: 600, mx: "auto", mb: { xs: 4, md: 6 } }}
      >
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1.25,
            mb: 2,
          }}
        >
          <Box
            sx={{ width: 30, height: 2, borderRadius: 2, bgcolor: customColor.primary }}
          />
          <Typography
            sx={{
              color: customColor.primary,
              fontWeight: 700,
              letterSpacing: "0.18em",
              fontSize: "12px",
              textTransform: "uppercase",
            }}
          >
            Who We Are
          </Typography>
        </Box>
        <Typography
          component="h3"
          sx={{
            fontWeight: 800,
            color: "text.primary",
            fontSize: { xs: "22px", md: "30px" },
            letterSpacing: "-0.02em",
            mb: 1.5,
          }}
        >
          Vision &amp; Mission
        </Typography>
        <Box
          sx={{
            width: 48,
            height: 4,
            mx: "auto",
            mb: 2,
            borderRadius: 2,
            background: `linear-gradient(90deg, ${customColor.primary}, ${customColor.secondary})`,
          }}
        />
        <Typography sx={{ color: "text.secondary", fontSize: { xs: "14px", md: "15px" } }}>
          Excellence drives our mission and vision forward.
        </Typography>
      </Box>

      {/* Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
          gap: { xs: 3, md: 4 },
          maxWidth: 1040,
          mx: "auto",
        }}
      >
        {cards.map((card) => (
          <Box
            key={card.title}
            className="reveal"
            style={{ "--reveal-delay": `${card.delay}s` } as React.CSSProperties}
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 4,
              p: { xs: 3, md: 4 },
              color: "#fff",
              background: card.gradient,
              boxShadow: "0 30px 60px -34px rgba(2,82,78,0.55)",
              transition:
                "opacity .65s cubic-bezier(0.22,1,0.36,1) var(--reveal-delay,0s), translate .65s cubic-bezier(0.22,1,0.36,1) var(--reveal-delay,0s), transform .3s ease, box-shadow .3s ease",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 40px 76px -34px rgba(2,82,78,0.7)",
              },
              "&::before": {
                content: '""',
                position: "absolute",
                top: -70,
                right: -70,
                width: 220,
                height: 220,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.12)",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -50,
                left: -50,
                width: 170,
                height: 170,
                borderRadius: "50%",
                background: "rgba(0,0,0,0.08)",
              },
            }}
          >
            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2.5 }}>
                <Box
                  sx={{
                    flexShrink: 0,
                    width: 52,
                    height: 52,
                    borderRadius: "16px",
                    display: "grid",
                    placeItems: "center",
                    bgcolor: "rgba(255,255,255,0.18)",
                    border: "1px solid rgba(255,255,255,0.28)",
                  }}
                >
                  {card.icon}
                </Box>
                <Typography sx={{ fontWeight: 800, fontSize: { xs: "19px", md: "22px" } }}>
                  {card.title}
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.92)",
                  lineHeight: 1.8,
                  fontSize: { xs: "14px", md: "14.5px" },
                }}
              >
                {card.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default VisionMissionSection;
