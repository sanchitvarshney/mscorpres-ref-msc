"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import {
  PrecisionManufacturingOutlined,
  EngineeringOutlined,
  HighQualityOutlined,
  SpeedOutlined,
  VerifiedUserOutlined,
  BuildOutlined,
} from "@mui/icons-material";
import SectionShell from "@/components/reuseable/SectionShell";
import SectionHeading from "@/components/reuseable/SectionHeading";
import FeatureCard from "@/components/reuseable/FeatureCard";
import { CircuitTraces, GlowRing, ChipGlyph } from "@/components/reuseable/decor";
import { customColor } from "@/utils/theme/customColor";

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ManufacturerSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  features?: FeatureItem[];
  isReverse?: boolean;
  service: string;
  description2?: string;
  description1?: string;
}

const defaultFeatures: FeatureItem[] = [
  {
    icon: <PrecisionManufacturingOutlined sx={{ fontSize: 40 }} />,
    title: "Precision Manufacturing",
    description:
      "State-of-the-art facilities with advanced machinery for precise IoT device manufacturing.",
  },
  {
    icon: <EngineeringOutlined sx={{ fontSize: 40 }} />,
    title: "Custom Engineering",
    description:
      "Tailored IoT solutions designed to meet your specific connectivity and automation requirements.",
  },
  {
    icon: <HighQualityOutlined sx={{ fontSize: 40 }} />,
    title: "Quality Assurance",
    description:
      "Rigorous testing and quality control processes ensuring top-tier IoT products.",
  },
  {
    icon: <SpeedOutlined sx={{ fontSize: 40 }} />,
    title: "Fast Turnaround",
    description:
      "Efficient production processes delivering IoT solutions within agreed timelines.",
  },
  {
    icon: <VerifiedUserOutlined sx={{ fontSize: 40 }} />,
    title: "Certified Standards",
    description:
      "ISO certified manufacturing following international quality standards for IoT devices.",
  },
  {
    icon: <BuildOutlined sx={{ fontSize: 40 }} />,
    title: "Expert Team",
    description:
      "Skilled professionals with years of experience in IoT device manufacturing.",
  },
];

const ManufacturerSection: React.FC<ManufacturerSectionProps> = ({
  title = "IoT Manufacturing Excellence",
  subtitle = "MANUFACTURING EXCELLENCE",
  description = "We specialize in high-quality IoT device manufacturing with state-of-the-art facilities and expert craftsmanship. Our manufacturing services deliver durable, precision-engineered IoT solutions tailored to your specific connectivity and automation needs.",
  imageUrl = "/images/iot-details.avif",
  features = defaultFeatures,
  isReverse = false,
  service,
  description2,
  description1,
}) => {
  return (
    <SectionShell
      tone="tint"
      maxWidth={1200}
      decor={
        <>
          <GlowRing
            size={460}
            sx={{ top: -160, right: -180, opacity: 0.9 }}
            color="rgba(4,176,168,0.14)"
          />
          <CircuitTraces
            opacity={0.09}
            sx={{
              bottom: 0,
              left: 0,
              width: { xs: 340, md: 520 },
              height: { xs: 260, md: 380 },
            }}
          />
        </>
      }
    >
      <SectionHeading
        eyebrow={subtitle}
        title={title}
        intro={description}
        sx={{ mb: { xs: 5, md: 8 }, maxWidth: 760 }}
      />

      {/* Asymmetric split: framed visual + the two supporting paragraphs */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "0.95fr 1.05fr" },
          gap: { xs: 4, md: 7 },
          alignItems: "center",
          mb: { xs: 6, md: 9 },
        }}
      >
        <Box
          className={isReverse ? "reveal-r" : "reveal-l"}
          sx={{
            position: "relative",
            order: { xs: 0, md: isReverse ? 1 : 0 },
          }}
        >
          <Box
            aria-hidden
            sx={{
              position: "absolute",
              right: { xs: -10, md: -18 },
              bottom: { xs: -10, md: -18 },
              width: "58%",
              height: "58%",
              border: "2px solid rgba(4,176,168,0.35)",
              borderRadius: 4,
              pointerEvents: "none",
            }}
          />
          <ChipGlyph
            size={96}
            sx={{ position: "absolute", left: -26, top: -26, zIndex: 2 }}
            opacity={0.4}
          />
          <Box
            sx={{
              position: "relative",
              borderRadius: 4,
              overflow: "hidden",
              bgcolor: "#fff",
              border: "1px solid rgba(4,176,168,0.16)",
              boxShadow: "0 36px 66px -34px rgba(4,20,19,0.42)",
              "& img": { transition: "transform .5s cubic-bezier(0.22,1,0.36,1)" },
              "&:hover img": { transform: "scale(1.04)" },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: 280, sm: 380, md: 440 },
              }}
            >
              <Image
                src={imageUrl}
                alt={`${service} — MsCorpres`}
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                style={{ objectFit: "cover" }}
                loading="lazy"
                quality={85}
              />
            </Box>
          </Box>
        </Box>

        <Box className={isReverse ? "reveal-l" : "reveal-r"}>
          <Typography
            component="h3"
            sx={{
              fontWeight: 800,
              color: "text.primary",
              fontSize: { xs: "20px", md: "26px" },
              letterSpacing: "-0.01em",
              lineHeight: 1.25,
              mb: 2,
            }}
          >
            Why Choose Our {service} Services?
          </Typography>

          <Box
            sx={{
              pl: { xs: 2, md: 2.5 },
              borderLeft: `3px solid ${customColor.primary}`,
              display: "flex",
              flexDirection: "column",
              gap: 1.75,
            }}
          >
            {description1 && (
              <Typography
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.85,
                  fontSize: { xs: "14px", md: "15px" },
                }}
              >
                {description1}
              </Typography>
            )}
            {description2 && (
              <Typography
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.85,
                  fontSize: { xs: "14px", md: "15px" },
                }}
              >
                {description2}
              </Typography>
            )}
          </Box>

          <Box
            sx={{
              mt: 2.5,
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 1.75,
              py: 0.75,
              borderRadius: 999,
              bgcolor: customColor.light,
              border: "1px solid rgba(4,176,168,0.25)",
            }}
          >
            <Box
              sx={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                bgcolor: customColor.primary,
              }}
            />
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: customColor.secondary,
              }}
            >
              {service}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Capability grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, minmax(0, 1fr))",
            lg: "repeat(3, minmax(0, 1fr))",
          },
          gap: { xs: 2.5, md: 3 },
        }}
      >
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            index={index}
          />
        ))}
      </Box>
    </SectionShell>
  );
};

export default ManufacturerSection;
