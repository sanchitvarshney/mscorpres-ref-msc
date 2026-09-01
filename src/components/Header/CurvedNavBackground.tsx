"use client";

import React, { useId } from "react";
import { customColor } from "@/utils/theme/customColor";

interface CurvedNavBackgroundProps {
  color?: string;
}

const SHAPE = "M0,100 L0,50 L360,50 C370,0 380,0 400,0 L1440,0 L1440,100 Z";

const CurvedNavBackground: React.FC<CurvedNavBackgroundProps> = ({
  color = customColor.secondary,
}) => {
  const uid = useId().replace(/[:]/g, "");
  const gradId = `nav-grad-${uid}`;

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
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#01312e" />
          <stop offset="0.5" stopColor={color} />
          <stop offset="1" stopColor="#023f3b" />
        </linearGradient>
      </defs>

      <path d={SHAPE} fill={`url(#${gradId})`} />
    </svg>
  );
};

export default CurvedNavBackground;
