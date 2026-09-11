"use client";

import React from "react";
import { Box } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";

interface GlowRingProps {
  size?: number | string;
  variant?: "glow" | "outline" | "dashed";
  color?: string;
  sx?: SxProps<Theme>;
}

/**
 * Soft circular accent — a radial teal glow, a thin outline ring, or a dashed
 * ring. Decorative; position with `sx` (absolute + offsets).
 */
const GlowRing: React.FC<GlowRingProps> = ({
  size = 360,
  variant = "glow",
  color = "rgba(4,176,168,0.12)",
  sx,
}) => {
  const style: SxProps<Theme> =
    variant === "glow"
      ? { background: `radial-gradient(circle, ${color}, transparent 70%)` }
      : variant === "dashed"
      ? { border: `1.5px dashed ${color}` }
      : { border: `1px solid ${color}` };

  return (
    <Box
      aria-hidden
      sx={{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "50%",
        pointerEvents: "none",
        ...style,
        ...sx,
      }}
    />
  );
};

export default GlowRing;
