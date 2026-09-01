"use client";

import React from "react";
import { Box, Typography, Avatar, Rating } from "@mui/material";
import { FormatQuote } from "@mui/icons-material";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import { customColor } from "@/utils/theme/customColor";
import { defaultTestimonials, Testimonial } from "@/dummydata/dummyData";

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
}

const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  title = "What Our Clients Say",
  subtitle = "Testimonials",
  testimonials = defaultTestimonials,
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
        py: { xs: 6, md: 10 },
        background:
          "linear-gradient(180deg, rgba(240,249,248,0.8) 0%, rgba(255,255,255,0.92) 100%)",
        "&::before": {
          content: '""',
          position: "absolute",
          top: -120,
          left: -130,
          width: 420,
          height: 420,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(4,176,168,0.10), transparent 70%)",
          pointerEvents: "none",
        },
        "& .reveal": {
          opacity: 0,
          translate: "0 26px",
          transition:
            "opacity .6s cubic-bezier(0.22,1,0.36,1) var(--reveal-delay,0s), translate .6s cubic-bezier(0.22,1,0.36,1) var(--reveal-delay,0s)",
        },
        "&.in-view .reveal": { opacity: 1, translate: "0 0" },
        "@media (prefers-reduced-motion: reduce)": {
          "& .reveal": { opacity: 1, translate: "0 0", transition: "none" },
        },
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto", position: "relative" }}>
        {/* Header */}
        <Box
          className="reveal"
          sx={{ textAlign: "center", maxWidth: 620, mx: "auto", mb: { xs: 5, md: 7 } }}
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
              fontSize: { xs: "26px", sm: "32px", md: "38px" },
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
              borderRadius: 2,
              background: `linear-gradient(90deg, ${customColor.primary}, ${customColor.secondary})`,
            }}
          />
        </Box>

        {/* Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "minmax(0, 1fr)",
              md: "repeat(2, minmax(0, 1fr))",
            },
            gap: { xs: 3, md: 4 },
          }}
        >
          {testimonials.map((t, i) => (
            <Box
              key={t.id || i}
              className="reveal"
              style={
                { "--reveal-delay": `${0.08 + i * 0.08}s` } as React.CSSProperties
              }
              sx={{
                position: "relative",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                bgcolor: "#fff",
                borderRadius: 3,
                p: { xs: 3, md: 4 },
                border: "1px solid rgba(4,176,168,0.12)",
                boxShadow: "0 14px 40px -24px rgba(4,20,19,0.35)",
                transition:
                  "opacity .6s cubic-bezier(0.22,1,0.36,1) var(--reveal-delay,0s), translate .6s cubic-bezier(0.22,1,0.36,1) var(--reveal-delay,0s), transform .3s ease, box-shadow .3s ease, border-color .3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 30px 56px -28px rgba(4,176,168,0.45)",
                  borderColor: "rgba(4,176,168,0.35)",
                },
              }}
            >
              <Box
                aria-hidden
                sx={{
                  position: "absolute",
                  top: 18,
                  right: 20,
                  color: customColor.primary,
                  opacity: 0.12,
                  "& svg": { fontSize: 64 },
                }}
              >
                <FormatQuote />
              </Box>

              <Rating
                value={t.rating}
                readOnly
                precision={0.5}
                sx={{
                  mb: 2,
                  "& .MuiRating-iconFilled": { color: "#f5b301" },
                }}
              />

              <Typography
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.85,
                  fontSize: { xs: "14.5px", md: "15px" },
                  fontStyle: "italic",
                  flexGrow: 1,
                  mb: 3,
                }}
              >
                &ldquo;{t.comment}&rdquo;
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  pt: 2.5,
                  borderTop: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                {t.image ? (
                  <Box
                    sx={{
                      width: { xs: 48, md: 56 },
                      height: { xs: 48, md: 56 },
                      borderRadius: "50%",
                      overflow: "hidden",
                      position: "relative",
                      flexShrink: 0,
                      border: "2px solid rgba(4,176,168,0.25)",
                    }}
                  >
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      sizes="56px"
                      style={{ objectFit: "cover" }}
                      loading="lazy"
                      quality={75}
                    />
                  </Box>
                ) : (
                  <Avatar
                    sx={{
                      width: { xs: 48, md: 56 },
                      height: { xs: 48, md: 56 },
                      bgcolor: customColor.primary,
                      fontSize: { xs: "17px", md: "20px" },
                      fontWeight: 700,
                    }}
                  >
                    {initials(t.name)}
                  </Avatar>
                )}
                <Box sx={{ minWidth: 0 }}>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: "14.5px", md: "15px" },
                      color: "text.primary",
                      lineHeight: 1.3,
                    }}
                  >
                    {t.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12.5px",
                      color: customColor.primary,
                      fontWeight: 600,
                    }}
                  >
                    {t.company}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TestimonialsSection;
