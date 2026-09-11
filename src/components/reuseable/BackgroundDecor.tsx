"use client";

import React from "react";
import { Box } from "@mui/material";
import { CircuitTraces, DecorGrid, GlowRing } from "./decor";

/**
 * Site-wide ambient backdrop: a soft off-white base washed with brand-teal
 * glows, a faint PCB dot grid near the top, a couple of thin outline rings and
 * a low-opacity circuit motif. Fixed and non-interactive — it sits behind
 * everything and only whispers through the translucent section backgrounds.
 */
const BackgroundDecor: React.FC = () => {
  return (
    <Box
      aria-hidden
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
        overflow: "hidden",
        backgroundColor: "#f7fbfa",
        backgroundImage:
          "radial-gradient(1000px 620px at 100% -8%, rgba(4,176,168,0.13), transparent 60%)," +
          "radial-gradient(900px 620px at -6% 10%, rgba(2,82,78,0.10), transparent 55%)," +
          "radial-gradient(900px 760px at 55% 112%, rgba(4,176,168,0.09), transparent 60%)",
        backgroundRepeat: "no-repeat",
      }}
    >
      <DecorGrid
        variant="dots"
        opacity={0.32}
        mask="radial-gradient(ellipse 92% 55% at 50% -6%, #000, transparent 78%)"
      />

      <CircuitTraces
        opacity={0.05}
        sx={{ top: "8%", right: 0, width: 460, height: 320 }}
      />
      <CircuitTraces
        opacity={0.045}
        sx={{ bottom: "6%", left: 0, width: 420, height: 300 }}
      />

      <GlowRing
        size={380}
        variant="outline"
        color="rgba(4,176,168,0.16)"
        sx={{ top: "16%", left: -170 }}
      />
      <GlowRing
        size={470}
        variant="outline"
        color="rgba(2,82,78,0.13)"
        sx={{ bottom: "8%", right: -210 }}
      />
    </Box>
  );
};

export default BackgroundDecor;
