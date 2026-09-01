"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { customColor } from "@/utils/theme/customColor";
import { ChipGlyph } from "./decor";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  /** position in a list — drives the reveal stagger delay */
  index?: number;
}

/**
 * Capability / feature tile in the shared card style: white surface, teal
 * hairline border, rounded-square teal icon badge, hover lift + teal shadow,
 * a faint chip glyph in the corner. Uses the `.reveal` convention owned by the
 * enclosing section (SectionShell).
 */
const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  index = 0,
}) => {
  return (
    <Box
      className="reveal"
      style={
        { "--reveal-delay": `${0.06 + index * 0.04}s` } as React.CSSProperties
      }
      sx={{
        position: "relative",
        overflow: "hidden",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        p: { xs: 3, md: 3.5 },
        borderRadius: 3,
        bgcolor: "#fff",
        border: "1px solid rgba(4,176,168,0.14)",
        boxShadow: "0 14px 36px -24px rgba(4,20,19,0.32)",
        transition:
          "opacity .4s cubic-bezier(0.22,1,0.36,1) var(--reveal-delay,0s), translate .4s cubic-bezier(0.22,1,0.36,1) var(--reveal-delay,0s), transform .3s ease, box-shadow .3s ease, border-color .3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 30px 54px -28px rgba(4,176,168,0.45)",
          borderColor: "rgba(4,176,168,0.4)",
        },
        "&:hover .fc-badge": {
          transform: "scale(1.06) rotate(-3deg)",
          boxShadow: "0 10px 22px -10px rgba(4,176,168,0.55)",
        },
      }}
    >
      <ChipGlyph
        size={72}
        opacity={0.06}
        sx={{ position: "absolute", right: -12, top: -12 }}
      />
      <Box
        className="fc-badge"
        sx={{
          width: 56,
          height: 56,
          mb: 2.25,
          borderRadius: "16px",
          display: "grid",
          placeItems: "center",
          bgcolor: customColor.light,
          color: customColor.primary,
          transition: "transform .3s ease, box-shadow .3s ease",
          "& svg": { fontSize: 30 },
        }}
      >
        {icon}
      </Box>
      <Typography
        sx={{
          fontWeight: 700,
          color: "text.primary",
          fontSize: { xs: "16px", md: "17px" },
          lineHeight: 1.35,
          mb: 1,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          color: "text.secondary",
          lineHeight: 1.7,
          fontSize: { xs: "13.5px", md: "14px" },
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default FeatureCard;
