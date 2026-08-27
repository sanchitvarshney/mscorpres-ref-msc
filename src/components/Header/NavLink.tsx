"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { easeSmooth } from "@/utils/animationVarients/headerAnimation";

interface NavLinkProps {
  label: string;
  href: string;
  active?: boolean;
}

/**
 * Desktop navigation link. An underline wipes in from the left on hover and
 * stays put while the route is active. Nothing louder than that.
 */
const NavLink: React.FC<NavLinkProps> = ({ label, href, active = false }) => {
  return (
    <motion.span
      initial={false}
      animate={active ? "active" : "rest"}
      whileHover="hover"
      whileFocus="hover"
      style={{ position: "relative", display: "inline-block" }}
    >
      <Link
        href={href}
        className="no-underline"
        style={{
          position: "relative",
          display: "inline-block",
          color: "#ffffff",
          fontSize: "0.82rem",
          fontWeight: 500,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          padding: "6px 2px",
          WebkitTapHighlightColor: "transparent",
        }}
      >
        <motion.span
          style={{ display: "inline-block" }}
          variants={{
            rest: { opacity: active ? 1 : 0.9 },
            hover: { opacity: 1 },
            active: { opacity: 1 },
          }}
          transition={{ duration: 0.2, ease: easeSmooth }}
        >
          {label}
        </motion.span>

        <motion.span
          aria-hidden
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 2,
            borderRadius: 2,
            background: "#ffffff",
            transformOrigin: "left center",
          }}
          variants={{
            rest: { scaleX: 0, opacity: 0.001 },
            hover: { scaleX: 1, opacity: 1 },
            active: { scaleX: 1, opacity: 1 },
          }}
          transition={{ duration: 0.3, ease: easeSmooth }}
        />
      </Link>
    </motion.span>
  );
};

export default NavLink;
