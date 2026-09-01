"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { ArrowForward, Phone } from "@mui/icons-material";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";
import { customColor } from "@/utils/theme/customColor";

interface CTABannerProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

const CTABanner: React.FC<CTABannerProps> = ({
  eyebrow = "Let's Work Together",
  title = "Ready to Transform Your Business?",
  description = "Let's discuss how we can help you with IoT manufacturing, refurbishment, or consultation services.",
  primaryButtonText = "Get Started Today",
  primaryButtonHref = "/contact",
  secondaryButtonText = "Call Us Now",
  secondaryButtonHref = "/contact",
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
        width: "100%",
        px: { xs: 3, sm: 5, md: 8 },
        py: { xs: 6, md: 8 },
        borderTop: `4px solid ${customColor.primary}`,
        background:
          "linear-gradient(135deg, rgba(244,249,248,0.82) 0%, rgba(234,244,242,0.82) 100%)",
        "&::after": {
          content: '""',
          position: "absolute",
          top: -140,
          right: -100,
          width: 360,
          height: 360,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(4,176,168,0.15), transparent 70%)",
          pointerEvents: "none",
        },
        "& .reveal": {
          opacity: 0,
          translate: "0 24px",
          transition:
            "opacity .7s cubic-bezier(0.22,1,0.36,1) var(--reveal-delay,0s), translate .7s cubic-bezier(0.22,1,0.36,1) var(--reveal-delay,0s)",
        },
        "&.in-view .reveal": { opacity: 1, translate: "0 0" },
        "@media (prefers-reduced-motion: reduce)": {
          "& .reveal": { opacity: 1, translate: "0 0", transition: "none" },
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          maxWidth: 1200,
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: "space-between",
          gap: { xs: 3.5, md: 6 },
        }}
      >
        {/* Copy */}
        <Box sx={{ maxWidth: 660 }}>
          <Typography
            className="reveal"
            style={{ "--reveal-delay": "0.05s" } as React.CSSProperties}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: customColor.primary,
              mb: 2,
            }}
          >
            <Box
              component="span"
              sx={{
                width: 22,
                height: 2,
                borderRadius: 2,
                bgcolor: customColor.primary,
              }}
            />
            {eyebrow}
          </Typography>

          <Typography
            className="reveal"
            style={{ "--reveal-delay": "0.12s" } as React.CSSProperties}
            component="h2"
            sx={{
              fontWeight: 800,
              color: "text.primary",
              fontSize: { xs: "25px", sm: "30px", md: "36px" },
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              mb: 1.5,
            }}
          >
            {title}
          </Typography>

          <Typography
            className="reveal"
            style={{ "--reveal-delay": "0.18s" } as React.CSSProperties}
            sx={{
              fontSize: { xs: "14.5px", md: "15.5px" },
              lineHeight: 1.75,
              color: "text.secondary",
            }}
          >
            {description}
          </Typography>
        </Box>

        {/* Actions */}
        <Box
          className="reveal"
          style={{ "--reveal-delay": "0.24s" } as React.CSSProperties}
          sx={{
            flexShrink: 0,
            display: "flex",
            flexDirection: { xs: "column", sm: "row", md: "column" },
            gap: 1.5,
            width: { xs: "100%", sm: "auto" },
          }}
        >
          <Button
            component={Link}
            href={primaryButtonHref}
            endIcon={<ArrowForward />}
            disableElevation
            sx={{
              px: { xs: 3, md: 4 },
              py: 1.4,
              fontSize: { xs: "14px", md: "15px" },
              fontWeight: 700,
              borderRadius: 999,
              textTransform: "none",
              color: "#ffffff",
              whiteSpace: "nowrap",
              background: `linear-gradient(135deg, ${customColor.primary}, ${customColor.secondary})`,
              boxShadow: "0 16px 32px -14px rgba(4,176,168,0.6)",
              transition:
                "transform .25s cubic-bezier(0.22,1,0.36,1), box-shadow .25s ease, filter .25s ease",
              "&:hover": {
                filter: "brightness(1.06)",
                transform: "translateY(-2px)",
                boxShadow: "0 22px 40px -14px rgba(4,176,168,0.7)",
              },
            }}
          >
            {primaryButtonText}
          </Button>

          {secondaryButtonText && (
            <Button
              component={Link}
              href={secondaryButtonHref}
              startIcon={<Phone />}
              disableElevation
              sx={{
                px: { xs: 3, md: 4 },
                py: 1.4,
                fontSize: { xs: "14px", md: "15px" },
                fontWeight: 600,
                borderRadius: 999,
                textTransform: "none",
                whiteSpace: "nowrap",
                color: customColor.secondary,
                bgcolor: "#ffffff",
                border: "1px solid rgba(4,176,168,0.4)",
                transition:
                  "transform .25s cubic-bezier(0.22,1,0.36,1), background-color .25s ease, border-color .25s ease",
                "&:hover": {
                  bgcolor: customColor.light,
                  borderColor: customColor.primary,
                  transform: "translateY(-2px)",
                },
              }}
            >
              {secondaryButtonText}
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default CTABanner;
