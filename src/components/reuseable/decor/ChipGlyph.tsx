"use client";

import React from "react";
import { Box } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import { customColor } from "@/utils/theme/customColor";

interface ChipGlyphProps {
  size?: number;
  color?: string;
  opacity?: number;
  sx?: SxProps<Theme>;
}

/**
 * Stylised microchip / IC outline with pin legs and a corner-1 dot.
 * Decorative corner accent for panels, frames and heroes.
 */
const ChipGlyph: React.FC<ChipGlyphProps> = ({
  size = 88,
  color = customColor.primary,
  opacity = 0.5,
  sx,
}) => {
  return (
    <Box
      aria-hidden
      component="svg"
      viewBox="0 0 64 64"
      fill="none"
      sx={{
        width: size,
        height: size,
        pointerEvents: "none",
        color,
        opacity,
        ...sx,
      }}
    >
      <g stroke="currentColor" strokeWidth={2} strokeLinecap="round">
        {/* pin legs */}
        {[20, 32, 44].map((x) => (
          <React.Fragment key={x}>
            <line x1={x} y1={8} x2={x} y2={16} />
            <line x1={x} y1={48} x2={x} y2={56} />
          </React.Fragment>
        ))}
        {[20, 32, 44].map((y) => (
          <React.Fragment key={y}>
            <line x1={8} y1={y} x2={16} y2={y} />
            <line x1={48} y1={y} x2={56} y2={y} />
          </React.Fragment>
        ))}
        <rect x="16" y="16" width="32" height="32" rx="4" />
        <rect x="24" y="24" width="16" height="16" rx="2" opacity={0.6} />
      </g>
      <circle cx="22" cy="22" r="2.4" fill="currentColor" />
    </Box>
  );
};

export default ChipGlyph;
