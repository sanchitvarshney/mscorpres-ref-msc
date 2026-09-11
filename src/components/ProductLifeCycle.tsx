"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import SectionShell from "@/components/reuseable/SectionShell";
import SectionHeading from "@/components/reuseable/SectionHeading";
import { CircuitTraces, GlowRing, ChipGlyph } from "@/components/reuseable/decor";
import { customColor } from "@/utils/theme/customColor";

interface ProductLifeCycleProps {
  title?: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  features?: any[];
  service: string;
}

const ProductLifeCycle: React.FC<ProductLifeCycleProps> = ({
  title = "IoT Manufacturing Excellence",
  description = "We specialize in high-quality IoT device manufacturing with state-of-the-art facilities and expert craftsmanship. Our manufacturing services deliver durable, precision-engineered IoT solutions tailored to your specific connectivity and automation needs.",
  imageUrl = "/images/iot-details.avif",
  features = [],
  service,
}) => {
  return (
    <SectionShell
      tone="tint"
      decor={
        <>
          <GlowRing size={440} sx={{ top: -150, left: -190 }} />
          <CircuitTraces
            opacity={0.09}
            sx={{
              bottom: 0,
              right: 0,
              width: { xs: 320, md: 480 },
              height: { xs: 240, md: 340 },
            }}
          />
        </>
      }
    >
      <SectionHeading
        title={title}
        intro={description}
        sx={{ mb: { xs: 5, md: 8 }, maxWidth: 760 }}
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: 4, md: 7 },
          alignItems: "center",
        }}
      >
        {/* Timeline */}
        <Box className="reveal-l">
          <Typography
            component="h3"
            sx={{
              fontWeight: 800,
              color: "text.primary",
              fontSize: { xs: "20px", md: "26px" },
              letterSpacing: "-0.01em",
              lineHeight: 1.25,
              mb: 3,
            }}
          >
            {service}
          </Typography>

          <Box sx={{ position: "relative" }}>
            {/* connector line */}
            <Box
              aria-hidden
              sx={{
                position: "absolute",
                left: 17,
                top: 8,
                bottom: 8,
                width: 2,
                background:
                  "linear-gradient(180deg, rgba(4,176,168,0.6), rgba(4,176,168,0.12))",
              }}
            />
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {features.map((item, index) => (
                <Box
                  key={item.id || index}
                  className="reveal"
                  style={
                    {
                      "--reveal-delay": `${0.1 + index * 0.09}s`,
                    } as React.CSSProperties
                  }
                  sx={{ display: "flex", gap: 2.5, position: "relative" }}
                >
                  <Box
                    sx={{
                      flexShrink: 0,
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      display: "grid",
                      placeItems: "center",
                      bgcolor: "#fff",
                      color: customColor.primary,
                      fontWeight: 800,
                      fontSize: 14,
                      border: `2px solid ${customColor.primary}`,
                      boxShadow: "0 8px 20px -10px rgba(4,176,168,0.6)",
                      zIndex: 1,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Box>
                  <Box sx={{ pt: 0.25 }}>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: "15px", md: "16px" },
                        color: "text.primary",
                        mb: 0.5,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        lineHeight: 1.8,
                        color: "text.secondary",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Visual */}
        <Box className="reveal-r" sx={{ position: "relative" }}>
          <Box
            aria-hidden
            sx={{
              position: "absolute",
              left: { xs: -10, md: -18 },
              top: { xs: -10, md: -18 },
              width: "56%",
              height: "56%",
              border: "2px solid rgba(4,176,168,0.35)",
              borderRadius: 4,
              pointerEvents: "none",
            }}
          />
          <ChipGlyph
            size={96}
            sx={{ position: "absolute", right: -24, bottom: -24, zIndex: 2 }}
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
              p: 2,
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: 280, sm: 360, md: 420 },
              }}
            >
              <Image
                src={imageUrl}
                alt="Product life cycle"
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
    </SectionShell>
  );
};

export default ProductLifeCycle;
