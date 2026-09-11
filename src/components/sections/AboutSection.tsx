"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import {
  BusinessOutlined,
  GroupsOutlined,
  EmojiEventsOutlined,
  ShieldOutlined,
} from "@mui/icons-material";
import { useTranslations } from "next-intl";
import { useInView } from "@/hooks/useInView";
import { customColor } from "@/utils/theme/customColor";
import StatCard from "@/components/reuseable/StatCard";
import { ChipGlyph } from "@/components/reuseable/decor";

interface StatItem {
  icon: React.ReactNode;
  number: string;
  label: string;
}

interface AboutSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  secondParagraph?: string;
  stats?: StatItem[];
  imageUrl?: string;
  imageAlt?: string;
}

const defaultStatIcons = [
  <BusinessOutlined key="0" />,
  <GroupsOutlined key="1" />,
  <EmojiEventsOutlined key="2" />,
  <ShieldOutlined key="3" />,
];

const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  subtitle,
  description,
  secondParagraph = "",
  stats,
  imageUrl = "/images/about-combine.jpg",
  imageAlt = "About Us",
}) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const t = useTranslations("Home.about");
  const resolvedTitle = title ?? t("title");
  const resolvedSubtitle = subtitle ?? t("subtitle");
  const resolvedDescription = description ?? t("description");
  const resolvedStats: StatItem[] =
    stats ??
    (t.raw("stats") as { number: string; label: string }[]).map((s, i) => ({
      ...s,
      icon: defaultStatIcons[i],
    }));

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
          "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(240,249,248,0.8) 100%)",
        "&::before": {
          content: '""',
          position: "absolute",
          top: -120,
          right: -140,
          width: 420,
          height: 420,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(4,176,168,0.10), transparent 70%)",
          pointerEvents: "none",
        },
        "& .reveal, & .reveal-l, & .reveal-r": {
          opacity: 0,
          transition:
            "opacity .4s cubic-bezier(0.22,1,0.36,1) var(--reveal-delay,0s), translate .4s cubic-bezier(0.22,1,0.36,1) var(--reveal-delay,0s)",
        },
        "& .reveal": { translate: "0 16px" },
        "& .reveal-l": { translate: "-20px 0" },
        "& .reveal-r": { translate: "20px 0" },
        "&.in-view .reveal, &.in-view .reveal-l, &.in-view .reveal-r": {
          opacity: 1,
          translate: "0 0",
        },
        "@media (prefers-reduced-motion: reduce)": {
          "& .reveal, & .reveal-l, & .reveal-r": {
            opacity: 1,
            translate: "0 0",
            transition: "none",
          },
        },
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto", position: "relative" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" },
            gap: { xs: 4, md: 7 },
            alignItems: "center",
          }}
        >
          {/* Copy */}
          <Box className="reveal-l">
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.25,
                mb: 2,
              }}
            >
              <Box
                sx={{
                  width: 30,
                  height: 2,
                  borderRadius: 2,
                  bgcolor: customColor.primary,
                }}
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
                {resolvedSubtitle}
              </Typography>
            </Box>

            <Typography
              component="h2"
              sx={{
                fontWeight: 800,
                color: "text.primary",
                fontSize: { xs: "26px", sm: "32px", md: "36px" },
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                mb: 2.5,
              }}
            >
              {resolvedTitle}
            </Typography>

            <Typography
              sx={{
                color: "text.secondary",
                lineHeight: 1.85,
                fontSize: { xs: "14.5px", md: "15.5px" },
                mb: secondParagraph ? 2 : 0,
              }}
            >
              {resolvedDescription}
            </Typography>

            {secondParagraph && (
              <Typography
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.85,
                  fontSize: { xs: "14.5px", md: "15.5px" },
                }}
              >
                {secondParagraph}
              </Typography>
            )}
          </Box>

          {/* Visual */}
          <Box className="reveal-r" sx={{ position: "relative" }}>
            {/* accent frame */}
            <Box
              aria-hidden
              sx={{
                position: "absolute",
                right: { xs: -10, md: -18 },
                bottom: { xs: -10, md: -18 },
                width: "62%",
                height: "62%",
                border: "2px solid rgba(4,176,168,0.35)",
                borderRadius: 4,
                pointerEvents: "none",
              }}
            />
            <ChipGlyph
              size={92}
              opacity={0.4}
              sx={{ position: "absolute", left: -24, top: -24, zIndex: 2 }}
            />
            <Box
              sx={{
                position: "relative",
                borderRadius: 4,
                overflow: "hidden",
                bgcolor: "#fff",
                border: "1px solid rgba(4,176,168,0.15)",
                boxShadow: "0 34px 64px -32px rgba(4,20,19,0.4)",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 320, sm: 400, md: 470 },
                }}
              >
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 900px) 100vw, 45vw"
                  style={{ objectFit: "contain" }}
                  loading="lazy"
                  quality={85}
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Stats */}
        <Box
          sx={{
            mt: { xs: 5, md: 8 },
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, minmax(0, 1fr))",
              md: "repeat(4, minmax(0, 1fr))",
            },
            gap: { xs: 2, md: 3 },
          }}
        >
          {resolvedStats.map((stat, i) => (
            <StatCard
              key={stat.label}
              icon={stat.icon}
              number={stat.number}
              label={stat.label}
              active={inView}
              delay={0.1 + i * 0.08}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;
