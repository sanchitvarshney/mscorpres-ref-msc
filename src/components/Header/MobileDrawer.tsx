"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Box, IconButton } from "@mui/material";
import { Close, KeyboardArrowDown } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import { customColor } from "@/utils/theme/customColor";
import {
  drawerBackdrop,
  drawerPanel,
  drawerList,
  drawerItem,
  easeSmooth,
} from "@/utils/animationVarients/headerAnimation";
import RenderListMenu from "../RenderListMenu";
import SocialLinks from "./SocialLinks";
import ContactInfo from "./ContactInfo";
import Logo from "./Logo";

export interface NavItem {
  label: string;
  path: string;
  isDropdown?: boolean;
}

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  navLinks: NavItem[];
  isActive: (path: string) => boolean;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({
  open,
  onClose,
  navLinks,
  isActive,
}) => {
  const [mounted, setMounted] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) {
      setServicesOpen(false);
      return;
    }
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <Box
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          sx={{ position: "fixed", inset: 0, zIndex: 10000 }}
        >
          <motion.div
            variants={drawerBackdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(3, 22, 21, 0.5)",
              backdropFilter: "blur(2px)",
              WebkitBackdropFilter: "blur(2px)",
            }}
          />

          <motion.div
            variants={drawerPanel}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              height: "100%",
              width: "min(86vw, 320px)",
              backgroundColor: customColor.secondary,
              boxShadow: "-24px 0 60px -20px rgba(0,0,0,0.55)",
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 2,
                py: 1,
                borderBottom: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <Box
                onClick={onClose}
                sx={{ "& img": { height: 40, width: "auto" } }}
              >
                <Logo />
              </Box>
              <IconButton
                onClick={onClose}
                aria-label="Close menu"
                sx={{
                  color: "#fff",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.12)" },
                }}
              >
                <Close />
              </IconButton>
            </Box>

            <Box
              component={motion.nav}
              variants={drawerList}
              initial="hidden"
              animate="visible"
              sx={{
                px: 2,
                py: 2.5,
                display: "flex",
                flexDirection: "column",
                gap: 0.5,
                flex: 1,
              }}
            >
              {navLinks.map((link) => {
                const active = isActive(link.path);

                if (link.isDropdown) {
                  return (
                    <Box
                      component={motion.div}
                      key={link.path}
                      variants={drawerItem}
                    >
                      <Box
                        onClick={() => setServicesOpen((v) => !v)}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          color: "#fff",
                          fontSize: "1rem",
                          py: 1.25,
                          px: 1.5,
                          borderRadius: 1.5,
                          cursor: "pointer",
                          borderLeft: "3px solid",
                          borderColor: active
                            ? customColor.primary
                            : "transparent",
                          transition: "background-color .2s ease",
                          "&:hover": { bgcolor: "rgba(255,255,255,0.08)" },
                        }}
                      >
                        <span>{link.label}</span>
                        <motion.span
                          animate={{ rotate: servicesOpen ? 180 : 0 }}
                          transition={{ duration: 0.28, ease: easeSmooth }}
                          style={{ display: "inline-flex" }}
                        >
                          <KeyboardArrowDown />
                        </motion.span>
                      </Box>

                      <AnimatePresence initial={false}>
                        {servicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: easeSmooth }}
                            style={{ overflow: "hidden" }}
                          >
                            <Box
                              onClick={onClose}
                              sx={{
                                my: 1.5,
                                px: 1,
                                py: 0.5,
                                backgroundColor: "rgba(255,255,255,0.05)",
                                borderRadius: 1.5,
                              }}
                            >
                              <RenderListMenu />
                            </Box>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Box>
                  );
                }

                return (
                  <Box
                    component={motion.div}
                    key={link.path}
                    variants={drawerItem}
                  >
                    <Link
                      href={link.path}
                      onClick={onClose}
                      className="no-underline"
                    >
                      <Box
                        sx={{
                          color: "#fff",
                          fontSize: "1rem",
                          fontWeight: active ? 600 : 400,
                          py: 1.25,
                          px: 1.5,
                          borderRadius: 1.5,
                          borderLeft: "3px solid",
                          borderColor: active
                            ? customColor.primary
                            : "transparent",
                          transition:
                            "background-color .2s ease, transform .2s ease",
                          "&:hover": {
                            bgcolor: "rgba(255,255,255,0.08)",
                            transform: "translateX(4px)",
                          },
                        }}
                      >
                        {link.label}
                      </Box>
                    </Link>
                  </Box>
                );
              })}

              <Box
                component={motion.div}
                variants={drawerItem}
                sx={{
                  mt: "auto",
                  pt: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.5,
                  borderTop: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <ContactInfo tone="dark" />
                <SocialLinks tone="dark" iconSize={20} />
              </Box>
            </Box>
          </motion.div>
        </Box>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default MobileDrawer;
