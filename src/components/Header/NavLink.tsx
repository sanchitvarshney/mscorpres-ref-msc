"use client";

import React from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import { motion } from "framer-motion";
import { easeSmooth } from "@/utils/animationVarients/headerAnimation";

interface NavLinkProps {
  label: string;
  href?: string;
  active?: boolean;
  /** render a chevron and treat `open` as an active-ish state (Services menu) */
  hasDropdown?: boolean;
  open?: boolean;
  onClick?: () => void;
}


const pillVariants = {
  rest: { opacity: 0, scaleX: 0.82, scaleY: 0.7 },
  hover: { opacity: 1, scaleX: 1, scaleY: 1 },
  active: { opacity: 1, scaleX: 1, scaleY: 1 },
};

const labelVariants = {
  rest: { opacity: 0.82, y: 0 },
  hover: { opacity: 1, y: -1 },
  active: { opacity: 1, y: 0 },
};

const underlineVariants = {
  rest: { scaleX: 0, opacity: 0 },
  hover: { scaleX: 1, opacity: 1 },
  active: { scaleX: 1, opacity: 1 },
};

const NavLink: React.FC<NavLinkProps> = ({
  label,
  href,
  active = false,
  hasDropdown = false,
  open = false,
  onClick,
}) => {
  const state = active || open ? "active" : "rest";

  const body = (
    <Box
      component="span"
      sx={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        gap: 0.25,
        color: "#ffffff",
        fontSize: "0.8rem",
        fontWeight: 500,
        letterSpacing: "0.07em",
        textTransform: "uppercase",
        lineHeight: 1,
        px: 1.5,
        py: 1.1,
        borderRadius: 999,
        cursor: "pointer",
        whiteSpace: "nowrap",
      }}
    >
      {/* pill */}
      <Box
        component={motion.span}
        aria-hidden
        variants={pillVariants}
        transition={{ duration: 0.3, ease: easeSmooth }}
        sx={{
          position: "absolute",
          inset: 0,
          borderRadius: 999,
          bgcolor:
            state === "active" && !open
              ? "rgba(255,255,255,0.12)"
              : "rgba(255,255,255,0.17)",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.14)",
          transformOrigin: "center",
        }}
      />

      {/* label + underline share a relative box so the line tracks the text */}
      <Box component="span" sx={{ position: "relative", display: "inline-flex" }}>
        <Box
          component={motion.span}
          variants={labelVariants}
          transition={{ duration: 0.25, ease: easeSmooth }}
          sx={{ display: "inline-block" }}
        >
          {label}
        </Box>

        <Box
          component={motion.span}
          aria-hidden
          variants={underlineVariants}
          transition={{ duration: 0.34, ease: easeSmooth }}
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: -4,
            height: "2px",
            borderRadius: "2px",
            bgcolor: "#ffffff",
            transformOrigin: "left center",
          }}
        />
      </Box>

      {hasDropdown && (
        <Box
          component={motion.span}
          aria-hidden
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: easeSmooth }}
          sx={{ display: "inline-flex", position: "relative", ml: "1px" }}
        >
          <KeyboardArrowDown sx={{ fontSize: 17 }} />
        </Box>
      )}
    </Box>
  );

  return (
    <Box
      component={motion.span}
      initial={false}
      animate={state}
      whileHover="hover"
      whileFocus="hover"
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: easeSmooth }}
      sx={{ display: "inline-block", position: "relative" }}
    >
      {href ? (
        <Link
          href={href}
          className="no-underline"
          style={{ display: "inline-block" }}
        >
          {body}
        </Link>
      ) : (
        <Box
          component="span"
          role="button"
          tabIndex={0}
          onClick={onClick}
          onKeyDown={(e) => {
            if (onClick && (e.key === "Enter" || e.key === " ")) {
              e.preventDefault();
              onClick();
            }
          }}
          sx={{ display: "inline-block", outline: "none" }}
        >
          {body}
        </Box>
      )}
    </Box>
  );
};

export default NavLink;
