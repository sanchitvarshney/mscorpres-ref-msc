"use client";

import React from "react";
import { Box } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";
import Logo from "./Logo";
import ContactInfo from "./ContactInfo";
import SocialLinks from "./SocialLinks";
import NavigationBar from "./NavigationBar";
import { useScrolled } from "@/hooks/useScrolled";
import {
  fadeSlideDown,
  easeSmooth,
} from "@/utils/animationVarients/headerAnimation";

const Header: React.FC = () => {
  const scrolled = useScrolled(8);
  const reduceMotion = useReducedMotion();

  return (
    <Box
      component={motion.header}
      variants={fadeSlideDown}
      initial={reduceMotion ? false : "hidden"}
      animate="visible"
      sx={{ position: "sticky", top: 0, zIndex: 999 }}
    >
      <Box
        component={motion.div}
        animate={{ scale: reduceMotion ? 1 : scrolled ? 0.997 : 1 }}
        transition={{ duration: 0.35, ease: easeSmooth }}
        style={{ transformOrigin: "left center" }}
        sx={{
          bgcolor: "#ffffff",
          transition: "box-shadow .35s ease, border-color .35s ease",
          borderBottom: "1px solid",
          borderColor: scrolled ? "rgba(0,0,0,0.06)" : "transparent",
          boxShadow: scrolled ? "0 10px 28px -20px rgba(0,0,0,0.35)" : "none",
        }}
      >
        {/* Top bar: logo + contact + social */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            px: { xs: 2, md: 3, lg: 4 },
            py: scrolled ? 0 : { xs: 0.15, md: 0.25 },
            transition: "padding .35s ease",
            maxHeight: { xs: 40, md: 50 },
            minHeight: { xs: 40, md: 50 },
          }}
        >
          <Box
            component={motion.div}
            animate={{ scale: reduceMotion ? 1 : scrolled ? 0.98 : 1 }}
            transition={{ duration: 0.35, ease: easeSmooth }}
            style={{ transformOrigin: "left center" }}
            sx={{
              display: "flex",
              alignSelf: "center",
              position: "absolute",
              top: { xs: 0, md: 8 },
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
          </Box>
        </Box>

        <NavigationBar />
      </Box>
    </Box>
  );
};

export default Header;
