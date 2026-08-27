"use client";

import React from "react";
import { customColor } from "@/utils/theme/customColor";

interface CurvedNavBackgroundProps {
  color?: string;
}

const CurvedNavBackground: React.FC<CurvedNavBackgroundProps> = ({
  color = customColor.primary,
}) => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
      }}
    >
      <path
        d="M0,100 L0,50 L360,50 C370,0 380,0 400,0 L1440,0 L1440,100 Z"
        fill={color}
      />
    </svg>
  );
};

export default CurvedNavBackground;
