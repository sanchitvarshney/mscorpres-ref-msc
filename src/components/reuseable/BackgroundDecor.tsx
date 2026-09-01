"use client";

import React from "react";
import { Box } from "@mui/material";

/**
 * Site-wide ambient backdrop: a soft off-white base washed with brand-teal
 * glows and a faint dot grid near the top, plus a couple of thin outline
 * rings. Fixed and non-interactive — it sits behind everything and only
 * whispers through the translucent section backgrounds.
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
      {/* dot grid, fading out down the page */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(2,82,78,0.16) 1px, transparent 1.5px)",
          backgroundSize: "30px 30px",
          opacity: 0.34,
          maskImage:
            "radial-gradient(ellipse 92% 55% at 50% -6%, #000, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 92% 55% at 50% -6%, #000, transparent 78%)",
        }}
      />

      {/* thin outline rings */}
      <Box
        sx={{
          position: "absolute",
          top: "16%",
          left: "-170px",
          width: 380,
          height: 380,
          borderRadius: "50%",
          border: "1px solid rgba(4,176,168,0.16)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "8%",
          right: "-210px",
          width: 470,
          height: 470,
          borderRadius: "50%",
          border: "1px solid rgba(2,82,78,0.13)",
        }}
      />
    </Box>
  );
};

export default BackgroundDecor;
