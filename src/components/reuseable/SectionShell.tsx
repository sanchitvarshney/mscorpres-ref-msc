"use client";

import React from "react";
import { Box } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import { useInView } from "@/hooks/useInView";

type Tone = "light" | "tint" | "wash";

const TONE_BG: Record<Tone, string> = {
  light:
    "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(244,248,247,0.8) 100%)",
  tint: "linear-gradient(180deg, rgba(244,248,247,0.8) 0%, rgba(255,255,255,0.92) 100%)",
  wash: "linear-gradient(180deg, rgba(248,249,250,0.78) 0%, rgba(255,255,255,0.9) 50%, rgba(248,249,250,0.78) 100%)",
};

interface SectionShellProps {
  children: React.ReactNode;
  tone?: Tone;
  /** decorative layer rendered behind the content (absolute, aria-hidden) */
  decor?: React.ReactNode;
  /** inner container max width */
  maxWidth?: number;
  /** vertical padding override (defaults to the standard section rhythm) */
  py?: number | { xs?: number; sm?: number; md?: number; lg?: number };
  id?: string;
  sx?: SxProps<Theme>;
  innerSx?: SxProps<Theme>;
}

/**
 * The shared section wrapper: alternating teal-tinted gradient background,
 * `overflow:hidden`, the standard horizontal/vertical rhythm, an optional
 * decorative backdrop, and the scroll-reveal CSS + `useInView` wiring so any
 * `.reveal` / `.reveal-l` / `.reveal-r` descendant animates in once.
 */
const SectionShell: React.FC<SectionShellProps> = ({
  children,
  tone = "light",
  decor,
  maxWidth = 1200,
  py,
  id,
  sx,
  innerSx,
}) => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Box
      component="section"
      id={id}
      ref={ref}
      className={inView ? "in-view" : undefined}
      sx={{
        position: "relative",
        overflow: "hidden",
        px: { xs: 2, md: 4 },
        py: py ?? { xs: 6, md: 10 },
        background: TONE_BG[tone],
        "& .reveal, & .reveal-l, & .reveal-r": {
          opacity: 0,
          transition:
            "opacity .4s cubic-bezier(0.22,1,0.36,1) var(--reveal-delay,0s), translate .4s cubic-bezier(0.22,1,0.36,1) var(--reveal-delay,0s)",
        },
        "& .reveal": { translate: "0 16px" },
        "& .reveal-l": { translate: "-20px 0" },
        "& .reveal-r": { translate: "20px 0" },
        "&.in-view .reveal, &.in-view .reveal-l, &.in-view .reveal-r": {
          opacity: 1,
          translate: "0 0",
        },
        "@media (prefers-reduced-motion: reduce)": {
          "& .reveal, & .reveal-l, & .reveal-r": {
            opacity: 1,
            translate: "0 0",
            transition: "none",
          },
        },
        ...sx,
      }}
    >
      {decor && (
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          {decor}
        </Box>
      )}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth,
          mx: "auto",
          ...innerSx,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default SectionShell;
