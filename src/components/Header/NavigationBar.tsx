"use client";

import React, { useState, useEffect } from "react";
import { Box, Link, IconButton } from "@mui/material";
import { Menu, Close } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";

const NavigationBar: React.FC = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About Us", path: "/about" },
    { label: "Contact Us", path: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <Box
      sx={{
        bgcolor: "#263238",
        px: 3,
        py: { xs: 2, md: 3 },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        clipPath:
          "polygon(0% 45%, 32% 45%, 35% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100%, 0% 100%, 0% 100%, 0% 100%);",
      }}
    >
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          gap: { md: 2, lg: 3 },
        }}
      >
        {navLinks.map((link) => (
          <Box key={link.path}>
            <Link
              href={link.path}
              sx={{
                color: "white",
                textDecoration: "none",
                fontSize: "0.9375rem",
                borderBottom: isActive(link.path)
                  ? "2px solid #d32f2f"
                  : "2px solid transparent",
                pb: 0.5,
                "&:hover": { color: "#ffcdd2" },
              }}
            >
              {link.label}
            </Link>
          </Box>
        ))}
      </Box>

      <IconButton
        onClick={handleMenuToggle}
        size="small"
        sx={{
          display: { xs: "flex", md: "none" },
          position: "absolute",
          right: 16,
          color: "white",
          "&:hover": {
            bgcolor: "rgba(255, 255, 255, 0.1)",
          },
        }}
      >
        <Menu fontSize="small" />
      </IconButton>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {menuOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={handleMenuClose}
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 9999,
                    pointerEvents: menuOpen ? "auto" : "none",
                  }}
                />

                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  style={{
                    position: "fixed",
                    top: 0,
                    right: 0,
                    width: "280px",
                    height: "calc(100vh - 0px)",
                    backgroundColor: "#263238",
                    zIndex: 10000,
                    boxShadow: "-4px 0 20px rgba(0, 0, 0, 0.3)",
                    overflowY: "auto",
                    pointerEvents: menuOpen ? "auto" : "none",
                  }}
                >
                  <Box
                    sx={{
                      p: 3,
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    {/* Close Button */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        mb: 3,
                      }}
                    >
                      <IconButton
                        onClick={handleMenuClose}
                        sx={{
                          color: "white",
                          "&:hover": {
                            bgcolor: "rgba(255, 255, 255, 0.1)",
                          },
                        }}
                      >
                        <Close />
                      </IconButton>
                    </Box>

                    {/* Menu Links */}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                      }}
                    >
                      {navLinks.map((link, index) => (
                        <motion.div
                          key={link.path}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: index * 0.1,
                            duration: 0.3,
                          }}
                        >
                          <Link
                            href={link.path}
                            onClick={handleMenuClose}
                            sx={{
                              color: "white",
                              textDecoration: "none",
                              fontSize: "1.1rem",
                              fontWeight: isActive(link.path) ? 600 : 400,
                              display: "block",
                              py: 1.5,
                              px: 2,
                              borderRadius: 2,
                              borderLeft: isActive(link.path)
                                ? "4px solid #d32f2f"
                                : "4px solid transparent",
                              bgcolor: isActive(link.path)
                                ? "rgba(211, 47, 47, 0.1)"
                                : "transparent",
                              transition: "all 0.3s ease",
                              "&:hover": {
                                bgcolor: "rgba(255, 255, 255, 0.1)",
                                color: "#ffcdd2",
                                transform: "translateX(5px)",
                              },
                            }}
                          >
                            {link.label}
                          </Link>
                        </motion.div>
                      ))}
                    </Box>
                  </Box>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </Box>
  );
};

export default NavigationBar;
