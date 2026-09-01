"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import { customColor } from "@/utils/theme/customColor";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "center" | "left";
  /** heading element + MUI level */
  component?: "h2" | "h3";
  /** apply the `.reveal` entrance class (parent must own the CSS + in-view) */
  reveal?: boolean;
  maxWidth?: number;
  sx?: SxProps<Theme>;
}

/**
 * The shared section header used across the site: a teal eyebrow with a short
 * dash, a bold tight heading, a gradient underline bar, and an optional intro
 * paragraph. Matches the pattern established on the homepage sections.
 */
const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  intro,
  align = "center",
  component = "h2",
  reveal = true,
  maxWidth = 640,
  sx,
}) => {
  const centered = align === "center";
  return (
    <Box
      className={reveal ? "reveal" : undefined}
      sx={{
        textAlign: align,
        maxWidth: centered ? maxWidth : "none",
        mx: centered ? "auto" : 0,
        ...sx,
      }}
    >
      {eyebrow && (
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
            component="span"
            sx={{
              color: customColor.primary,
              fontWeight: 700,
              letterSpacing: "0.18em",
              fontSize: "12px",
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </Typography>
        </Box>
      )}

      <Typography
        component={component}
        sx={{
          fontWeight: 800,
          color: "text.primary",
          fontSize:
            component === "h2"
              ? { xs: "26px", sm: "32px", md: "38px" }
              : { xs: "22px", md: "30px" },
          lineHeight: 1.18,
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
          mx: centered ? "auto" : 0,
          mb: intro ? 2.5 : 0,
          borderRadius: 2,
          background: `linear-gradient(90deg, ${customColor.primary}, ${customColor.secondary})`,
        }}
      />

      {intro && (
        <Typography
          sx={{
            color: "text.secondary",
            fontSize: { xs: "14px", md: "15px" },
            lineHeight: 1.7,
          }}
        >
          {intro}
        </Typography>
      )}
    </Box>
  );
};

export default SectionHeading;
