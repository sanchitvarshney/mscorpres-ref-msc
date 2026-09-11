"use client";

import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";
import {
  BusinessOutlined,
  GroupsOutlined,
  EmojiEventsOutlined,
  ShieldOutlined,
  EngineeringOutlined,
  LocalShippingOutlined,
  VerifiedUserOutlined,
  TrendingUpOutlined,
} from "@mui/icons-material";
import { useInView } from "@/hooks/useInView";
import { customColor } from "@/utils/theme/customColor";
import StatCard from "@/components/reuseable/StatCard";
import { ChipGlyph } from "@/components/reuseable/decor";
import VisionMissionSection from "./VisionMissionSection";

interface StatItem {
  icon: React.ReactNode;
  number: string;
  label: string;
  description?: string;
}

interface ValueItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface DetailedAboutSectionProps {
  title?: string;
  subtitle?: string;
  mainDescription?: string;
  secondParagraph?: string;
  thirdParagraph?: string;
  stats?: StatItem[];
  values?: ValueItem[];
  imageUrl?: string;
  imageAlt?: string;
}

const defaultStats: StatItem[] = [
  { icon: <BusinessOutlined />, number: "15+", label: "Years Experience", description: "Serving clients with excellence" },
  { icon: <GroupsOutlined />, number: "500+", label: "Happy Clients", description: "Trusted by businesses worldwide" },
  { icon: <EmojiEventsOutlined />, number: "1000+", label: "Projects Completed", description: "Successfully delivered solutions" },
  { icon: <ShieldOutlined />, number: "100%", label: "Satisfaction Rate", description: "Client satisfaction guaranteed" },
];

const defaultValues: ValueItem[] = [
  {
    icon: <EngineeringOutlined />,
    title: "Innovation",
    description:
      "We bring forward-thinking ideas and advanced technologies to every project that push your products ahead of the competition.",
  },
  {
    icon: <VerifiedUserOutlined />,
    title: "Quality",
    description:
      "We deliver products that meet strict performance standards, backed by thorough testing and reliable engineering practices.",
  },
  {
    icon: <LocalShippingOutlined />,
    title: "Reliability",
    description:
      "We provide dependable manufacturing and service delivery, ensuring your products arrive on time and perform as expected.",
  },
  {
    icon: <TrendingUpOutlined />,
    title: "Excellence",
    description:
      "We consistently raise the bar — offering refined processes, detailed craftsmanship, and results that elevate your business.",
  },
];

const Eyebrow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box
    sx={{
      display: "inline-flex",
      alignItems: "center",
      gap: 1.25,
      mb: 2,
    }}
  >
    <Box sx={{ width: 30, height: 2, borderRadius: 2, bgcolor: customColor.primary }} />
    <Typography
      sx={{
        color: customColor.primary,
        fontWeight: 700,
        letterSpacing: "0.18em",
        fontSize: "12px",
        textTransform: "uppercase",
      }}
    >
      {children}
    </Typography>
  </Box>
);

const DetailedAboutSection: React.FC<DetailedAboutSectionProps> = ({
  title = "Our Journey of Excellence",
  subtitle = "About Our Company",
  mainDescription = "Founded with a vision to revolutionize the electronics and technology industry, we have grown from a small startup to a trusted leader in IoT manufacturing, PCB design, device refurbishment, ERP/MES solutions, and software development for electronics. Our journey has been marked by continuous innovation, unwavering commitment to quality, and a deep understanding of our clients' needs.",
  secondParagraph = "Over the years, we have built a reputation for delivering exceptional results through our comprehensive range of services including IoT Manufacturing, PCB Design, Device Refurbishment, ERP and MES solutions, and Software Solutions for Electronics. Our state-of-the-art facilities, combined with our expert team of professionals, enable us to handle projects of any scale with precision and efficiency.",
  thirdParagraph = "What sets us apart is our client-centric approach. We don't just provide services; we build lasting partnerships. Every project is an opportunity to understand our clients' unique challenges and deliver tailored solutions that drive their success.",
  stats = defaultStats,
  values = defaultValues,
  imageUrl = "/images/mix-about.jpg",
  imageAlt = "Our Company",
}) => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Box
      component="section"
      ref={ref}
      className={inView ? "in-view" : undefined}
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 4 },
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(248,249,250,0.78) 50%, rgba(255,255,255,0.9) 100%)",
        "& .reveal": {
          opacity: 0,
          translate: "0 16px",
          transition:
            "opacity .4s cubic-bezier(0.22,1,0.36,1) var(--reveal-delay,0s), translate .4s cubic-bezier(0.22,1,0.36,1) var(--reveal-delay,0s)",
        },
        "& .reveal-l": {
          opacity: 0,
          translate: "-20px 0",
          transition:
            "opacity .4s cubic-bezier(0.22,1,0.36,1), translate .4s cubic-bezier(0.22,1,0.36,1)",
        },
        "&.in-view .reveal, &.in-view .reveal-l": { opacity: 1, translate: "0 0" },
        "@media (prefers-reduced-motion: reduce)": {
          "& .reveal, & .reveal-l": {
            opacity: 1,
            translate: "0 0",
            transition: "none",
          },
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        {/* Header */}
        <Box
          className="reveal"
          sx={{ textAlign: "center", maxWidth: 640, mx: "auto", mb: { xs: 5, md: 8 } }}
        >
          <Eyebrow>{subtitle}</Eyebrow>
          <Typography
            component="h2"
            sx={{
              fontWeight: 800,
              color: "text.primary",
              fontSize: { xs: "26px", sm: "32px", md: "40px" },
              lineHeight: 1.15,
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
              borderRadius: 2,
              background: `linear-gradient(90deg, ${customColor.primary}, ${customColor.secondary})`,
            }}
          />
        </Box>

        {/* Story: image + text */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" },
            gap: { xs: 4, md: 7 },
            alignItems: "center",
          }}
        >
          <Box className="reveal-l" sx={{ position: "relative" }}>
            <Box
              aria-hidden
              sx={{
                position: "absolute",
                left: { xs: -10, md: -20 },
                bottom: { xs: -10, md: -20 },
                width: "60%",
                height: "60%",
                border: "2px solid rgba(4,176,168,0.35)",
                borderRadius: 4,
                pointerEvents: "none",
              }}
            />
            <ChipGlyph
              size={92}
              opacity={0.4}
              sx={{ position: "absolute", right: -24, top: -24, zIndex: 2 }}
            />
            <Box
              sx={{
                position: "relative",
                borderRadius: 4,
                overflow: "hidden",
                border: "1px solid rgba(4,176,168,0.15)",
                boxShadow: "0 40px 70px -34px rgba(4,20,19,0.45)",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 300, sm: 400, md: 520 },
                }}
              >
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 900px) 100vw, 45vw"
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                  quality={85}
                />
              </Box>
            </Box>
          </Box>

          <Box className="reveal">
            <Typography
              sx={{
                fontWeight: 800,
                color: "text.primary",
                fontSize: { xs: "20px", md: "26px" },
                letterSpacing: "-0.01em",
                mb: 2.5,
              }}
            >
              Our Story
            </Typography>
            {[mainDescription, secondParagraph, thirdParagraph]
              .filter(Boolean)
              .map((para, i) => (
                <Typography
                  key={i}
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.85,
                    fontSize: { xs: "14.5px", md: "15.5px" },
                    mb: 2,
                  }}
                >
                  {para}
                </Typography>
              ))}
          </Box>
        </Box>

        {/* Stats band */}
        <Box
          sx={{
            mt: { xs: 6, md: 9 },
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, minmax(0, 1fr))",
              md: "repeat(4, minmax(0, 1fr))",
            },
            gap: { xs: 2, md: 3 },
          }}
        >
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              icon={stat.icon}
              number={stat.number}
              label={stat.label}
              description={stat.description}
              align="center"
              active={inView}
              delay={0.06 + i * 0.07}
            />
          ))}
        </Box>

        {/* Vision & Mission (unchanged) */}
        <Box sx={{ mt: { xs: 6, md: 9 } }}>
          <VisionMissionSection />
        </Box>

        {/* Core Values */}
        <Box sx={{ mt: { xs: 6, md: 9 } }}>
          <Box
            className="reveal"
            sx={{ textAlign: "center", maxWidth: 600, mx: "auto", mb: { xs: 4, md: 6 } }}
          >
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
              Our Core Values
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
            <Typography
              sx={{ color: "text.secondary", fontSize: { xs: "14px", md: "15px" } }}
            >
              The principles that guide everything we do.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
              gap: { xs: 2.5, md: 3 },
            }}
          >
            {values.map((value, i) => (
              <Box
                key={value.title}
                className="reveal"
                style={{ "--reveal-delay": `${0.06 + i * 0.07}s` } as React.CSSProperties}
                sx={{
                  p: { xs: 3, md: 3.5 },
                  borderRadius: 3,
                  bgcolor: "#fff",
                  border: "1px solid rgba(4,176,168,0.12)",
                  boxShadow: "0 14px 36px -24px rgba(4,20,19,0.32)",
                  transition:
                    "opacity .4s cubic-bezier(0.22,1,0.36,1) var(--reveal-delay,0s), translate .4s cubic-bezier(0.22,1,0.36,1) var(--reveal-delay,0s), transform .3s ease, box-shadow .3s ease, border-color .3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 30px 54px -28px rgba(4,176,168,0.45)",
                    borderColor: "rgba(4,176,168,0.4)",
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1.5 }}>
                  <Box
                    sx={{
                      flexShrink: 0,
                      width: 52,
                      height: 52,
                      borderRadius: "16px",
                      display: "grid",
                      placeItems: "center",
                      bgcolor: customColor.light,
                      color: customColor.primary,
                      "& svg": { fontSize: 28 },
                    }}
                  >
                    {value.icon}
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: "text.primary",
                      fontSize: { xs: "17px", md: "19px" },
                    }}
                  >
                    {value.title}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.7,
                    fontSize: { xs: "14px", md: "14.5px" },
                  }}
                >
                  {value.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default DetailedAboutSection;
