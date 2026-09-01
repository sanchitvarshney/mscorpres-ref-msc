"use client";

import React, { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import { customColor } from "@/utils/theme/customColor";
import { ChipGlyph } from "./decor";

interface StatCardProps {
  icon?: React.ReactNode;
  /** the value exactly as authored, e.g. "15+", "500+", "100%" */
  number: string;
  label: string;
  description?: string;
  /** start the count-up when this flips true (parent's in-view state) */
  active?: boolean;
  align?: "row" | "center";
  delay?: number;
}

const parseTarget = (raw: string) => {
  const match = raw.match(/-?\d[\d,]*\.?\d*/);
  if (!match) return { prefix: raw, target: null as number | null, suffix: "" };
  const numStr = match[0];
  const target = parseFloat(numStr.replace(/,/g, ""));
  return {
    prefix: raw.slice(0, match.index),
    target,
    suffix: raw.slice((match.index ?? 0) + numStr.length),
  };
};

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

const StatCard: React.FC<StatCardProps> = ({
  icon,
  number,
  label,
  description,
  active = false,
  align = "row",
  delay = 0,
}) => {
  const { prefix, target, suffix } = parseTarget(number);
  const [display, setDisplay] = useState<string>(
    target === null ? number : `${prefix}0${suffix}`
  );
  const done = useRef(false);

  useEffect(() => {
    if (!active || done.current || target === null) return;
    done.current = true;

    if (prefersReducedMotion()) {
      setDisplay(number);
      return;
    }

    const duration = 1600;
    const decimals = (target.toString().split(".")[1] || "").length;
    let raf = 0;
    let start: number | null = null;

    const tick = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      const val = target * eased;
      setDisplay(
        `${prefix}${decimals ? val.toFixed(decimals) : Math.floor(val)}${suffix}`
      );
      if (p < 1) raf = requestAnimationFrame(tick);
      else setDisplay(number);
    };

    const timer = window.setTimeout(() => {
      raf = requestAnimationFrame(tick);
    }, delay * 1000);

    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [active, target, number, prefix, suffix, delay]);

  const centered = align === "center";

  return (
    <Box
      className="reveal"
      style={{ "--reveal-delay": `${0.06 + delay}s` } as React.CSSProperties}
      sx={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: centered ? "column" : "row",
        alignItems: "center",
        textAlign: centered ? "center" : "left",
        gap: centered ? 1 : 1.75,
        p: { xs: 2.25, md: 2.75 },
        borderRadius: 3,
        bgcolor: "#fff",
        border: "1px solid rgba(4,176,168,0.14)",
        boxShadow: "0 12px 30px -22px rgba(4,20,19,0.35)",
        transition:
          "opacity .4s cubic-bezier(0.22,1,0.36,1) var(--reveal-delay,0s), translate .4s cubic-bezier(0.22,1,0.36,1) var(--reveal-delay,0s), transform .3s ease, box-shadow .3s ease, border-color .3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 26px 46px -24px rgba(4,176,168,0.45)",
          borderColor: "rgba(4,176,168,0.4)",
        },
      }}
    >
      <ChipGlyph
        size={54}
        opacity={0.07}
        sx={{ position: "absolute", right: -8, bottom: -8 }}
      />
      {icon && (
        <Box
          sx={{
            flexShrink: 0,
            width: { xs: 46, md: 52 },
            height: { xs: 46, md: 52 },
            mx: centered ? "auto" : 0,
            mb: centered ? 0.5 : 0,
            borderRadius: "15px",
            display: "grid",
            placeItems: "center",
            bgcolor: customColor.light,
            color: customColor.primary,
            "& svg": { fontSize: { xs: 24, md: 27 } },
          }}
        >
          {icon}
        </Box>
      )}
      <Box sx={{ minWidth: 0, position: "relative", zIndex: 1 }}>
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: { xs: "21px", md: "25px" },
            lineHeight: 1.1,
            color: "text.primary",
            letterSpacing: "-0.01em",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {display}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "12px", md: "13px" },
            fontWeight: 600,
            color: "text.primary",
            lineHeight: 1.4,
            mt: 0.25,
          }}
        >
          {label}
        </Typography>
        {description && (
          <Typography
            sx={{
              fontSize: "11.5px",
              color: "text.secondary",
              lineHeight: 1.5,
              mt: 0.5,
            }}
          >
            {description}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default StatCard;
