"use client";

import React from "react";
import { Box } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import { customColor } from "@/utils/theme/customColor";

interface CircuitTracesProps {
  /** stroke / node colour */
  color?: string;
  /** overall opacity of the motif */
  opacity?: number;
  /** animate the trace draw-in once on mount */
  animated?: boolean;
  sx?: SxProps<Theme>;
}

const TRACES = [
  "M-10 40 H70 L110 80 H210 L250 40 H420",
  "M-10 150 H90 L130 110 H260 L300 150 H420",
  "M-10 250 H120 L160 210 H300 L340 250 H420",
  "M70 40 V-10",
  "M210 40 V-10",
  "M130 110 V60 L160 30",
  "M300 150 V210",
  "M120 250 V310",
  "M340 250 V310",
];

/**
 * Decorative routed-PCB motif: a few orthogonal copper traces with vias and
 * pads. Purely presentational — sits behind content, never interactive.
 * Position it with the `sx` prop (absolute inset / width / height).
 */
const CircuitTraces: React.FC<CircuitTracesProps> = ({
  color = customColor.primary,
  opacity = 0.12,
  animated = false,
  sx,
}) => {
  return (
    <Box
      aria-hidden
      component="svg"
      viewBox="0 0 400 300"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      sx={{
        position: "absolute",
        pointerEvents: "none",
        color,
        opacity,
        ...(animated && {
          "@keyframes ctDraw": { to: { strokeDashoffset: 0 } },
          "& .ct-trace": {
            strokeDasharray: 1,
            strokeDashoffset: 1,
            animation: "ctDraw 2.2s cubic-bezier(0.22,1,0.36,1) forwards",
          },
          "@media (prefers-reduced-motion: reduce)": {
            "& .ct-trace": { animation: "none", strokeDashoffset: 0 },
          },
        }),
        ...sx,
      }}
    >
      <g
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {TRACES.map((d, i) => (
          <path
            key={i}
            className="ct-trace"
            d={d}
            pathLength={1}
            style={animated ? { animationDelay: `${i * 0.12}s` } : undefined}
          />
        ))}
      </g>
      <g fill="currentColor">
        {[
          [70, 40],
          [210, 40],
          [90, 150],
          [260, 150],
          [120, 250],
          [300, 250],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={4} />
        ))}
      </g>
      <g fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x="150" y="24" width="14" height="14" rx="2" />
        <rect x="292" y="142" width="14" height="14" rx="2" />
        <circle cx="130" cy="110" r="6" />
        <circle cx="160" cy="210" r="6" />
      </g>
    </Box>
  );
};

export default CircuitTraces;
