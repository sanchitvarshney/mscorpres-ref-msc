"use client";

import React, { type ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import {
  AccessTimeOutlined,
  CheckCircleOutline,
  TrackChangesOutlined,
  VerifiedOutlined,
} from "@mui/icons-material";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import { useInView } from "@/hooks/useInView";
import { customColor } from "@/utils/theme/customColor";

interface CertItem {
  id: number;
  title: string;
  desc: string;
  icon: ReactNode;
}

export const certificationItems: CertItem[] = [
  {
    id: 1,
    title: "ISO Certified",
    desc: "Processes audited and certified to international ISO quality standards.",
    icon: <WorkspacePremiumOutlinedIcon />,
  },
  {
    id: 2,
    title: "RoHS Compliant",
    desc: "Every build meets RoHS limits on hazardous substances and materials.",
    icon: <CheckCircleOutline />,
  },
  {
    id: 3,
    title: "Quality Assured",
    desc: "Multi-stage inspection and testing before anything leaves the floor.",
    icon: <VerifiedOutlined />,
  },
  {
    id: 4,
    title: "On-Time Delivery",
    desc: "Committed timelines backed by planned capacity and clear tracking.",
    icon: <AccessTimeOutlined />,
  },
  {
    id: 5,
    title: "100% Satisfaction",
    desc: "We stand behind our work with responsive, accountable support.",
    icon: <TrackChangesOutlined />,
  },
];

const CertificationsSection: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Box
      component="section"
      ref={ref}
      sx={{
        position: "relative",
        overflow: "hidden",
        px: { xs: 2, md: 4 },
        py: { xs: 6, md: 10 },
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(244,248,247,0.8) 100%)",
        "&::before": {
          content: '""',
          position: "absolute",
          top: -140,
          right: -120,
          width: 420,
          height: 420,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(4,176,168,0.12), transparent 70%)",
          pointerEvents: "none",
        },
        // reveal-on-scroll: `translate` handles the entrance so `transform`
        // stays free for hover lifts
        "& .reveal": {
          opacity: 0,
          translate: "0 26px",
          transition:
            "opacity .6s cubic-bezier(0.22,1,0.36,1), translate .6s cubic-bezier(0.22,1,0.36,1)",
        },
        "&.in-view .reveal": { opacity: 1, translate: "0 0" },
        "@media (prefers-reduced-motion: reduce)": {
          "& .reveal": { opacity: 1, translate: "0 0", transition: "none" },
        },
      }}
      className={inView ? "in-view" : undefined}
    >
      <Box className="max-w-7xl mx-auto" sx={{ position: "relative" }}>
        <Box
          className="reveal"
          sx={{ textAlign: "center", mb: { xs: 5, md: 7 }, maxWidth: 620, mx: "auto" }}
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
            Why Choose Us
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontWeight: 800,
              color: "text.primary",
              fontSize: { xs: "23px", sm: "30px", md: "38px" },
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              overflowWrap: "break-word",
              mb: 2,
            }}
          >
            Certifications &amp; Commitments
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
            The standards and promises that stand behind every board we design,
            build, and refurbish.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, minmax(0, 1fr))",
              sm: "repeat(3, minmax(0, 1fr))",
              lg: "repeat(5, minmax(0, 1fr))",
            },
            gap: { xs: 2, md: 3 },
          }}
        >
          {certificationItems.map((item, i) => (
            <Box
              key={item.id}
              className="reveal"
              style={
                { "--reveal-delay": `${0.06 + i * 0.08}s` } as React.CSSProperties
              }
              sx={{
                position: "relative",
                height: "100%",
                bgcolor: "#fff",
                borderRadius: 3,
                p: { xs: 2.5, md: 3.25 },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                border: "1px solid rgba(4,176,168,0.12)",
                boxShadow: "0 10px 30px -20px rgba(4,20,19,0.3)",
                transition:
                  "opacity .6s cubic-bezier(0.22,1,0.36,1) var(--reveal-delay,0s), translate .6s cubic-bezier(0.22,1,0.36,1) var(--reveal-delay,0s), transform .3s ease, box-shadow .3s ease, border-color .3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 26px 50px -24px rgba(4,176,168,0.5)",
                  borderColor: "rgba(4,176,168,0.4)",
                },
                "&:hover .cert-badge": {
                  bgcolor: customColor.primary,
                  color: "#fff",
                  transform: "scale(1.06)",
                },
              }}
            >
              <Box
                className="cert-badge"
                sx={{
                  width: { xs: 60, md: 68 },
                  height: { xs: 60, md: 68 },
                  mb: 2,
                  borderRadius: "18px",
                  display: "grid",
                  placeItems: "center",
                  bgcolor: customColor.light,
                  color: customColor.primary,
                  transition:
                    "background-color .3s ease, color .3s ease, transform .3s ease",
                  "& svg": { fontSize: { xs: 30, md: 34 } },
                }}
              >
                {item.icon}
              </Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "14px", md: "15px" },
                  color: "text.primary",
                  mb: 0.75,
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "12.5px",
                  lineHeight: 1.6,
                  color: "text.secondary",
                }}
              >
                {item.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CertificationsSection;
