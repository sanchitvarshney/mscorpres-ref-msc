"use client";

import React from "react";
import { Box, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { Facebook, LinkedIn, X, YouTube } from "@mui/icons-material";
import { customColor } from "@/utils/theme/customColor";
import { staggerRow, rowItem } from "@/utils/animationVarients/headerAnimation";

export const socialData = [
  {
    name: "Facebook",
    Icon: Facebook,
    link: "https://www.facebook.com/MsCorpres/",
  },
  {
    name: "LinkedIn",
    Icon: LinkedIn,
    link: "https://www.linkedin.com/company/mscorpres/",
  },
  {
    name: "YouTube",
    Icon: YouTube,
    link: "https://www.youtube.com/@mscorpres",
  },
  {
    name: "X",
    Icon: X,
    link: "https://x.com/mscorpres",
  },
];

interface SocialLinksProps {
  iconSize?: number;
  /** "light" for the white top bar, "dark" for the drawer's teal panel */
  tone?: "light" | "dark";
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  iconSize = 18,
  tone = "light",
}) => {
  const idle = tone === "dark" ? "rgba(255,255,255,0.75)" : "#63736f";
  const hover = tone === "dark" ? "#ffffff" : customColor.primary;
  const hoverBg =
    tone === "dark" ? "rgba(255,255,255,0.12)" : "rgba(4,176,168,0.12)";

  return (
    <Box
      component={motion.div}
      variants={staggerRow}
      initial="hidden"
      animate="visible"
      sx={{ display: "flex", alignItems: "center", gap: 0.25 }}
    >
      {socialData.map(({ name, Icon, link }) => (
        <Box key={name} component={motion.div} variants={rowItem}>
          <IconButton
            size="small"
            aria-label={name}
            onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
            sx={{
              color: idle,
              transition:
                "color .2s ease, background-color .2s ease, transform .2s ease",
              "&:hover": {
                color: hover,
                bgcolor: hoverBg,
                transform: "translateY(-1px)",
              },
              "&:focus-visible": {
                outline: `2px solid ${hover}`,
                outlineOffset: 2,
              },
            }}
          >
            <Icon sx={{ fontSize: iconSize }} />
          </IconButton>
        </Box>
      ))}
    </Box>
  );
};

export default SocialLinks;
