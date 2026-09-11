"use client";

import React from "react";
import { Typography, Box } from "@mui/material";
import CustomCard from "@/components/reuseable/CustomCard";
import { useInView } from "@/hooks/useInView";
import { customColor } from "@/utils/theme/customColor";

interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
  services?: any[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  title = "Our Services",
  subtitle = "We provide high-quality, reliable services designed to support your business with efficiency and excellence.",
  services = [],
}) => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Box
      component="section"
      ref={ref}
      className={inView ? "in-view" : undefined}
      sx={{
        position: "relative",
        overflow: "hidden",
        px: { xs: 2, md: 4 },
        py: { xs: 4, md: 7 },
        background:
          "linear-gradient(180deg, rgba(244,248,247,0.8) 0%, rgba(255,255,255,0.92) 100%)",
        "&::before": {
          content: '""',
          position: "absolute",
          bottom: -160,
          left: -140,
          width: 440,
          height: 440,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(4,176,168,0.10), transparent 70%)",
          pointerEvents: "none",
        },
        "& .reveal": {
          opacity: 0,
          translate: "0 16px",
          transition:
            "opacity .4s cubic-bezier(0.22,1,0.36,1) var(--reveal-delay,0s), translate .4s cubic-bezier(0.22,1,0.36,1) var(--reveal-delay,0s)",
        },
        "&.in-view .reveal": { opacity: 1, translate: "0 0" },
        "@media (prefers-reduced-motion: reduce)": {
          "& .reveal": { opacity: 1, translate: "0 0", transition: "none" },
        },
      }}
    >
      <Box
        sx={{ maxWidth: 1200, mx: "auto", position: "relative" }}
        className="w-full"
      >
        {/* Header */}
        <Box
          className="reveal"
          sx={{ textAlign: "center", maxWidth: 640, mx: "auto", mb: { xs: 5, md: 7 } }}
        >
          <Typography
            sx={{
              color: customColor.primary,
              fontWeight: 700,
              letterSpacing: "0.18em",
              mb: 1.5,
              fontSize: "12px",
              textTransform: "uppercase",
            }}
          >
            What We Offer
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontWeight: 800,
              color: "text.primary",
              fontSize: { xs: "26px", sm: "32px", md: "38px" },
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              overflowWrap: "break-word",
              mb: 2,
            }}
          >
            {title}
          </Typography>
          <Box
            sx={{
              width: 56,
              height: 4,
              mx: "auto",
              mb: 2.5,
              borderRadius: 2,
              background: `linear-gradient(90deg, ${customColor.primary}, ${customColor.secondary})`,
            }}
          />
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: { xs: "14px", md: "15px" },
              lineHeight: 1.7,
            }}
          >
            {subtitle}
          </Typography>
        </Box>

        {/* Services grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "minmax(0, 1fr)",
              sm: "repeat(2, minmax(0, 1fr))",
              lg: "repeat(3, minmax(0, 1fr))",
            },
            gap: { xs: 3, md: 4 },
            justifyItems: "center",
          }}
        >
          {services.map((item: any, index: number) => (
            <Box
              key={item.id || index}
              className="reveal"
              style={
                {
                  "--reveal-delay": `${0.06 + index * 0.04}s`,
                } as React.CSSProperties
              }
              sx={{
                width: "100%",
                maxWidth: 360,
                height: "100%",
                display: "flex",
                justifyContent: "center",
                borderRadius: 3,
                transition:
                  "opacity .4s cubic-bezier(0.22,1,0.36,1) var(--reveal-delay,0s), translate .4s cubic-bezier(0.22,1,0.36,1) var(--reveal-delay,0s), transform .3s cubic-bezier(0.22,1,0.36,1), filter .3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  filter: "drop-shadow(0 24px 40px rgba(4,176,168,0.22))",
                },
              }}
            >
              <CustomCard item={item} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ServicesSection;
