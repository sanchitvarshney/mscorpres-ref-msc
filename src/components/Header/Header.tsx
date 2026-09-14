"use client";

import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";
import Logo from "./Logo";
import ContactInfo from "./ContactInfo";
import SocialLinks from "./SocialLinks";
import LanguageSwitcher from "./LanguageSwitcher";
import NavigationBar from "./NavigationBar";
import { useScrolled } from "@/hooks/useScrolled";
import {
  fadeSlideDown,
  easeSmooth,
} from "@/utils/animationVarients/headerAnimation";

const Header: React.FC = () => {
  const scrolled = useScrolled(8);
  const reduceMotion = useReducedMotion();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const shrink = !reduceMotion && !isMobile && scrolled;

  return (
    <Box
      component={motion.header}
      variants={fadeSlideDown}
      initial={reduceMotion ? false : "hidden"}
      animate="visible"
      sx={{ position: "fixed", top: 0, zIndex: 999, backgroundColor: "transparent", width: "100%" }}
    >
      <Box
        component={motion.div}
        animate={{ scale: shrink ? 0.82 : 1 }}
        transition={{ duration: 0.35, ease: easeSmooth }}
        style={{ transformOrigin: "left center right" }}
        sx={{
          backgroundColor: scrolled
            ? "rgba(255,255,255,0.9)"
            : "rgba(255,255,255,0.68)",
          backdropFilter: "blur(14px) saturate(150%)",
          WebkitBackdropFilter: "blur(14px) saturate(150%)",
          transition:
            "box-shadow .35s ease, border-color .35s ease, background-color .35s ease",
          borderBottom: "1px solid",
          borderColor: scrolled ? "rgba(0,0,0,0.06)" : "transparent",
          boxShadow: scrolled ? "0 10px 28px -20px rgba(0,0,0,0.35)" : "none",
          borderRadius: shrink ? 4 : 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            gap: 2,
            px: { xs: 2, md: 3, lg: 4 },
            py: scrolled ? 0 : { xs: 0.15, md: 0.25 },
            transition: "padding .35s ease",
            minHeight: { xs: 56, md: 50 },
          }}
        >
          <Box
            component={motion.div}
            animate={{ scale: shrink ? 0.98 : 1 }}
            transition={{ duration: 0.35, ease: easeSmooth }}
            style={{ transformOrigin: "left center " }}
             sx={{
              display: "flex",
              alignSelf: "center",
              position: "absolute",
              top: { xs: 8, md: 10 },
              left: { xs: 15, md: 30 },
              "& img": {
                height: { xs: 40, md: 56 },
                mt: 0,
                width: "auto",
              },
            }}
          >
            <Logo />
          </Box>
          <div />

          {/* Desktop: contact info + social + language */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: { md: 2, lg: 3 },
            }}
          >
            <ContactInfo />
            <Box
              aria-hidden
              sx={{
                width: "1px",
                height: 20,
                bgcolor: "rgba(0,0,0,0.12)",
              }}
            />
            <SocialLinks />
            <Box
              aria-hidden
              sx={{
                width: "1px",
                height: 20,
                bgcolor: "rgba(0,0,0,0.12)",
              }}
            />
            <LanguageSwitcher />
          </Box>

          {/* Mobile: compact social row */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <SocialLinks iconSize={16} />
          </Box>
        </Box>

        <NavigationBar scrolled={scrolled} />
      </Box>
    </Box>
  );
};

export default Header;
