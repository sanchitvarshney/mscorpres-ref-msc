"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/reuseable/HeroSection";
import { CircuitTraces, DecorGrid, GlowRing } from "@/components/reuseable/decor";
import { useInView } from "@/hooks/useInView";
import { customColor } from "@/utils/theme/customColor";

interface LegalSection {
  id: number | string;
  title: string;
  content: React.ReactNode;
}

interface LegalDocProps {
  heroSubtitle: string;
  heroTitle: string;
  introParagraphs: string[];
  calloutText: string;
  sections: LegalSection[];
  /** optional trailing block (e.g. Privacy "Contact Us" card) */
  footerNote?: React.ReactNode;
}

const slug = (s: string) =>
  "sec-" + s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const LegalDoc: React.FC<LegalDocProps> = ({
  heroSubtitle,
  heroTitle,
  introParagraphs,
  calloutText,
  sections,
  footerNote,
}) => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <MainLayout>
      <div className="w-full">
        <HeroSection
          alt={`${heroTitle} hero`}
          subtitle={heroSubtitle}
          title={heroTitle}
          imageUrl="/images/pcb-video.mp4"
          height={{ xs: "44vh", md: "52vh" }}
          minHeight={{ xs: "320px", md: "380px" }}
        />

        <Box
          ref={ref}
          className={inView ? "in-view" : undefined}
          sx={{
            position: "relative",
            overflow: "hidden",
            px: { xs: 2, md: 4 },
            py: { xs: 6, md: 9 },
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(244,248,247,0.82) 100%)",
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
          <Box aria-hidden sx={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            <DecorGrid variant="dots" opacity={0.25} />
            <GlowRing size={420} sx={{ top: 120, right: -180 }} />
            <CircuitTraces
              opacity={0.06}
              sx={{ bottom: 0, left: 0, width: { xs: 300, md: 460 }, height: { xs: 220, md: 320 } }}
            />
          </Box>

          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              maxWidth: 1180,
              mx: "auto",
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "230px 1fr" },
              gap: { xs: 4, md: 6 },
              alignItems: "start",
            }}
          >
            {/* Sticky index (desktop) */}
            <Box
              component="nav"
              aria-label="Sections"
              className="reveal"
              sx={{
                display: { xs: "none", md: "block" },
                position: "sticky",
                top: 96,
              }}
            >
              <Typography
                sx={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: customColor.primary,
                  mb: 1.5,
                }}
              >
                On this page
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                {sections.map((s, i) => (
                  <Box
                    key={s.id}
                    component="a"
                    href={`#${slug(s.title)}`}
                    sx={{
                      display: "block",
                      py: 0.75,
                      pl: 1.5,
                      borderLeft: "2px solid rgba(4,176,168,0.2)",
                      color: "text.secondary",
                      fontSize: "13px",
                      lineHeight: 1.4,
                      textDecoration: "none",
                      transition: "color .2s ease, border-color .2s ease",
                      "&:hover": {
                        color: customColor.primary,
                        borderColor: customColor.primary,
                      },
                    }}
                  >
                    {i + 1}. {s.title}
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Body */}
            <Box sx={{ minWidth: 0 }}>
              <Box
                className="reveal"
                sx={{
                  bgcolor: "#fff",
                  borderRadius: 4,
                  p: { xs: 3, md: 4 },
                  mb: 3,
                  border: "1px solid rgba(4,176,168,0.14)",
                  boxShadow: "0 20px 48px -32px rgba(4,20,19,0.35)",
                }}
              >
                {introParagraphs.map((p, i) => (
                  <Typography
                    key={i}
                    sx={{
                      color: "text.secondary",
                      fontSize: { xs: "14.5px", md: "15.5px" },
                      lineHeight: 1.85,
                      textAlign: "justify",
                      mb: i === introParagraphs.length - 1 ? 0 : 2,
                    }}
                  >
                    {p}
                  </Typography>
                ))}
                <Box
                  sx={{
                    mt: 3,
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: customColor.light,
                    borderLeft: `4px solid ${customColor.primary}`,
                  }}
                >
                  <Typography sx={{ fontStyle: "italic", fontSize: "13.5px", color: "text.secondary" }}>
                    {calloutText}
                  </Typography>
                </Box>
              </Box>

              {sections.map((section, index) => (
                <Box
                  key={section.id}
                  id={slug(section.title)}
                  className="reveal"
                  style={{ "--reveal-delay": `${Math.min(index, 6) * 0.04}s` } as React.CSSProperties}
                  sx={{
                    scrollMarginTop: 96,
                    bgcolor: "#fff",
                    borderRadius: 4,
                    p: { xs: 3, md: 4 },
                    mb: 3,
                    border: "1px solid rgba(4,176,168,0.14)",
                    boxShadow: "0 16px 40px -28px rgba(4,20,19,0.3)",
                    transition: "border-color .3s ease, box-shadow .3s ease",
                    "&:hover": {
                      borderColor: "rgba(4,176,168,0.3)",
                      boxShadow: "0 24px 52px -30px rgba(4,176,168,0.35)",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2.5 }}>
                    <Box
                      sx={{
                        flexShrink: 0,
                        width: 44,
                        height: 44,
                        borderRadius: "13px",
                        display: "grid",
                        placeItems: "center",
                        fontWeight: 800,
                        fontSize: 15,
                        color: "#fff",
                        background: `linear-gradient(135deg, ${customColor.primary}, ${customColor.secondary})`,
                        boxShadow: "0 10px 22px -10px rgba(4,176,168,0.6)",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </Box>
                    <Typography
                      component="h2"
                      sx={{
                        fontWeight: 800,
                        color: "text.primary",
                        fontSize: { xs: "17px", md: "20px" },
                        letterSpacing: "-0.01em",
                        lineHeight: 1.25,
                      }}
                    >
                      {section.title}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      pt: 2.5,
                      borderTop: "1px solid rgba(0,0,0,0.06)",
                      "& p, & .MuiTypography-root": { fontSize: { xs: "14px", md: "15px" } },
                    }}
                  >
                    {section.content}
                  </Box>
                </Box>
              ))}

              {footerNote}
            </Box>
          </Box>
        </Box>
      </div>
    </MainLayout>
  );
};

export default LegalDoc;
