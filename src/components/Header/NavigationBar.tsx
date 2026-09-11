"use client";

import React, { useState } from "react";
import { Box } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { customColor } from "@/utils/theme/customColor";
import {
  staggerRow,
  rowItem,
  easeSmooth,
} from "@/utils/animationVarients/headerAnimation";
import RenderListMenu from "../RenderListMenu";
import NavLink from "./NavLink";
import MenuToggleButton from "./MenuToggleButton";
import MobileDrawer, { NavItem } from "./MobileDrawer";
import CurvedNavBackground from "./CurvedNavBackground";

const NavigationBar: React.FC<{ scrolled: boolean }> = ({ scrolled }) => {
  const pathname = usePathname();
  const t = useTranslations("Navigation");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navLinks: NavItem[] = [
    { label: t("home"), path: "/" },
    { label: t("about"), path: "/about" },
    { label: t("services"), path: "/services", isDropdown: true },
    { label: t("careers"), path: "/careers" },
    { label: t("contact"), path: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  const openDropdown = () => setDropdownOpen(true);
  const closeDropdown = () => setDropdownOpen(false);

  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: { xs: customColor.secondary, md: "transparent" },
    
      }}
    >
      {/* Curved teal background (desktop only) */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          display: { xs: "none", md: "block" },
          pointerEvents: "none",
          overflow: "hidden",
          borderBottomLeftRadius: scrolled ? 50 : 0,
          borderBottomRightRadius: scrolled ? 50 : 0,
        }}
      >
        <CurvedNavBackground />
      </Box>

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "flex-end", md: "center" },
          minHeight: { xs: 40, md: 50 },
          px: { xs: 1, md: 3 },
          pl: { md: 10, lg: 6 },
        }}
      >
        {/* Desktop links */}
        <Box
          component={motion.nav}
          variants={staggerRow}
          initial="hidden"
          animate="visible"
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: { md: 0.5, lg: 1.25 },
          }}
        >
          {navLinks.map((link) =>
            link.isDropdown ? (
              <Box
                component={motion.div}
                key={link.path}
                variants={rowItem}
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
                sx={{ display: "inline-flex" }}
              >
                <NavLink
                  label={link.label}
                  hasDropdown
                  open={dropdownOpen}
                  active={isActive(link.path)}
                />
              </Box>
            ) : (
              <Box component={motion.div} key={link.path} variants={rowItem}>
                <NavLink
                  label={link.label}
                  href={link.path}
                  active={isActive(link.path)}
                />
              </Box>
            )
          )}
        </Box>

        {/* Mobile trigger */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <MenuToggleButton
            open={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          />
        </Box>
      </Box>

      {/* Services mega-menu (desktop) */}
      <AnimatePresence>
        {dropdownOpen && (
          <Box
            component={motion.div}
            key="services-mega-menu"
            initial={{ opacity: 0, y: -14, scaleY: 0.96 }}
            animate={{ opacity: 1, y: -6, scaleY: 1 }}
            exit={{ opacity: 0, y: -14, scaleY: 0.96 }}
            transition={{ duration: 0.3, ease: easeSmooth }}
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
            style={{ transformOrigin: "top center" }}
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              zIndex: 1200,
              overflow: "hidden",
              backgroundColor: "rgba(244,250,249,0.9)",
              backdropFilter: "blur(16px) saturate(160%)",
              WebkitBackdropFilter: "blur(16px) saturate(160%)",
              boxShadow: "0 30px 70px -22px rgba(2,40,38,0.4)",
            }}
          >
            <RenderListMenu />
          </Box>
        )}
      </AnimatePresence>

      <MobileDrawer
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        navLinks={navLinks}
        isActive={isActive}
      />
    </Box>
  );
};

export default NavigationBar;
