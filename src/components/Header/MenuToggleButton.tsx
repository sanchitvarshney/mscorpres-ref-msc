"use client";

import React from "react";
import { IconButton } from "@mui/material";
import { Menu, Close } from "@mui/icons-material";
import { AnimatePresence, motion } from "framer-motion";
import { easeSmooth } from "@/utils/animationVarients/headerAnimation";

interface MenuToggleButtonProps {
  open: boolean;
  onClick: () => void;
  color?: string;
}

/**
 * Menu / close toggle. The two icons swap with a small rotate + fade —
 * enough to register, not enough to show off.
 */
const MenuToggleButton: React.FC<MenuToggleButtonProps> = ({
  open,
  onClick,
  color = "#ffffff",
}) => {
  return (
    <IconButton
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      sx={{
        color,
        "&:hover": { bgcolor: "rgba(255,255,255,0.12)" },
      }}
    >
      <span
        style={{
          position: "relative",
          width: 24,
          height: 24,
          display: "inline-flex",
        }}
      >
        <AnimatePresence initial={false} mode="wait">
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18, ease: easeSmooth }}
              style={{ position: "absolute", inset: 0, display: "flex" }}
            >
              <Close />
            </motion.span>
          ) : (
            <motion.span
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.18, ease: easeSmooth }}
              style={{ position: "absolute", inset: 0, display: "flex" }}
            >
              <Menu />
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </IconButton>
  );
};

export default MenuToggleButton;
