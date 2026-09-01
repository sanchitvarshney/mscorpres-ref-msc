"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { Company, defaultCompanies } from "@/dummydata/dummyData";
import { useInView } from "@/hooks/useInView";
import { customColor } from "@/utils/theme/customColor";

interface TrustedCompaniesSectionProps {
  title?: string;
  subtitle?: string;
  companies?: Company[];
}

const TrustedCompaniesSection: React.FC<TrustedCompaniesSectionProps> = ({
  title = "Trusted by Leading Companies",
  subtitle = "Our Partners",
  companies = defaultCompanies,
}) => {
  const { ref, inView } = useInView<HTMLDivElement>();

  // duplicated for a seamless -50% loop
  const track = [...companies, ...companies];

  return (
    <Box
      component="section"
      ref={ref}
      className={inView ? "in-view" : undefined}
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 6, md: 9 },
        px: { xs: 2, md: 4 },
        background:
          "linear-gradient(180deg, rgba(248,249,250,0.78) 0%, rgba(255,255,255,0.9) 50%, rgba(248,249,250,0.78) 100%)",
        "& .reveal": {
          opacity: 0,
          translate: "0 24px",
          transition:
            "opacity .6s cubic-bezier(0.22,1,0.36,1), translate .6s cubic-bezier(0.22,1,0.36,1)",
        },
        "&.in-view .reveal": { opacity: 1, translate: "0 0" },
        "@media (prefers-reduced-motion: reduce)": {
          "& .reveal": { opacity: 1, translate: "0 0", transition: "none" },
          "& .marquee-track": { animation: "none !important" },
        },
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto", position: "relative" }}>
        {/* Header */}
        <Box
          className="reveal"
          sx={{ textAlign: "center", maxWidth: 620, mx: "auto", mb: { xs: 4, md: 6 } }}
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
            {subtitle}
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontWeight: 800,
              color: "text.primary",
              fontSize: { xs: "24px", sm: "30px", md: "36px" },
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
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
              fontSize: { xs: "13.5px", md: "14.5px" },
              lineHeight: 1.7,
            }}
          >
            We&apos;re proud to work with industry leaders and trusted partners
            worldwide.
          </Typography>
        </Box>

        {/* Marquee */}
        <Box
          className="reveal"
          sx={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
            py: 1,
            maskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          }}
        >
          <Box
            className="marquee-track"
            sx={{
              display: "flex",
              gap: { xs: 2, md: 3 },
              width: "fit-content",
              animation: "scroll-companies 32s linear infinite",
              "&:hover": { animationPlayState: "paused" },
            }}
          >
            {track.map((company, index) => (
              <Box
                key={`${company.id}-${index}`}
                sx={{
                  flexShrink: 0,
                  width: { xs: 150, md: 190 },
                  height: { xs: 78, md: 92 },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  px: { xs: 2, md: 3 },
                  transition: "transform .3s ease",
                  "& img": {
                    maxWidth: "100%",
                    maxHeight: "100%",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                  },
                  "&:hover": { transform: "translateY(-4px)" },
                }}
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  loading="lazy"
                  decoding="async"
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TrustedCompaniesSection;
