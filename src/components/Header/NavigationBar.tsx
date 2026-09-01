"use client";

import React, { useState } from "react";
import {
  Box,
  styled,
  Tooltip,
  tooltipClasses,
  TooltipProps,
  Zoom,
} from "@mui/material";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { customColor } from "@/utils/theme/customColor";
import { staggerRow, rowItem } from "@/utils/animationVarients/headerAnimation";
import RenderListMenu from "../RenderListMenu";
import NavLink from "./NavLink";
import MenuToggleButton from "./MenuToggleButton";
import MobileDrawer, { NavItem } from "./MobileDrawer";
import CurvedNavBackground from "./CurvedNavBackground";

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f4faf9",
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: "0 30px 70px -22px rgba(2,40,38,0.4)",
    fontSize: 11,
    maxWidth: "calc(100vw - 0px)",
    width: "100vw",
    padding: 0,
    margin: 0,
    overflow: "hidden",
    borderRadius: 0,
    marginLeft: -10,
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "#04b0a8",
  },
}));

const navLinks: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services", isDropdown: true },
  { label: "Careers", path: "/careers" },
  { label: "Contact Us", path: "/contact" },
];

const NavigationBar: React.FC = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

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
              <Box component={motion.div} key={link.path} variants={rowItem}>
                <LightTooltip
                  onOpen={() => setDropdownOpen(true)}
                  onClose={() => setDropdownOpen(false)}
                  title={<RenderListMenu />}
                  enterDelay={120}
                  leaveDelay={220}
                  disableFocusListener
                  slots={{ transition: Zoom }}
                  slotProps={{ transition: { timeout: 320 } }}
                >
                  <Box component="span" sx={{ display: "inline-flex" }}>
                    <NavLink
                      label={link.label}
                      hasDropdown
                      open={dropdownOpen}
                      active={isActive(link.path)}
                    />
                  </Box>
                </LightTooltip>
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
