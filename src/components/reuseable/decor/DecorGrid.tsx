"use client";

import React from "react";
import { Box } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";

interface DecorGridProps {
  variant?: "dots" | "lines";
  /** rgba/hex colour for the pattern ink */
  color?: string;
  cell?: number;
  opacity?: number;
  /** CSS mask so the grid fades out; pass `false` for a full-bleed grid */
  mask?: string | false;
  sx?: SxProps<Theme>;
}

/**
 * Masked technical grid (dot matrix or fine ruled lines). Decorative backdrop
 * layer — position with `sx` (usually absolute inset 0).
 */
const DecorGrid: React.FC<DecorGridProps> = ({
  variant = "dots",
  color = "rgba(2,82,78,0.16)",
  cell = 30,
  opacity = 0.34,
  mask = "radial-gradient(ellipse 92% 60% at 50% 0%, #000, transparent 78%)",
  sx,
}) => {
  const backgroundImage =
    variant === "dots"
      ? `radial-gradient(${color} 1px, transparent 1.5px)`
      : `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`;

  return (
    <Box
      aria-hidden
      sx={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        opacity,
        backgroundImage,
        backgroundSize: `${cell}px ${cell}px`,
        ...(mask
          ? { maskImage: mask, WebkitMaskImage: mask }
          : {}),
        ...sx,
      }}
    />
  );
};

export default DecorGrid;
