"use client";

import React, { useState, useEffect } from "react";
import { Box, IconButton, styled, Tooltip, tooltipClasses, TooltipProps, Typography } from "@mui/material";
import { Menu, Close, KeyboardArrowDown } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import Link from "next/link";
import { customColor } from "@/utils/theme/customColor";
import { Facebook, LinkedIn, X, YouTube } from "@mui/icons-material";
import RenderListMenu from "../RenderListMenu";

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({

  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[8],
    fontSize: 11,
    maxWidth: 'calc(100vw - 0px)',
    width: '100vw',
    padding: 0,
   margin: 0,
    overflow: 'hidden',
    borderRadius: 0,  
    marginLeft: -10,
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white,
  },
}));

const socialData = [
  {
    name: "Facebook",
    icon: <Facebook sx={{ fontSize: { xs: 16, md: 25 } }} />,
    link: "https://www.facebook.com/MsCorpres/",
  },
  {
    name: "LinkedIn",
    icon: <LinkedIn sx={{ fontSize: { xs: 16, md: 25 } }} />,
    link: "https://www.linkedin.com/company/mscorpres/",
  },
  {
    name: "Youtube",
    icon: <YouTube sx={{ fontSize: { xs: 16, md: 25 } }} />,
    link: "https://www.youtube.com/@mscorpres",
  },
  {
    name: "X",
    icon: <X sx={{ fontSize: { xs: 16, md: 25 } }} />,
    link: "https://x.com/mscorpres",
  },
];

const NavigationBar: React.FC = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/services", isDropdown: true },
    { label: "Contact Us", path: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
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

  // Prevent horizontal scroll when dropdown is open
  useEffect(() => {
    if (dropdownOpen) {
      document.body.style.overflow = "hidden";
     
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [dropdownOpen]);

  return (
    <Box
      sx={{
        bgcolor: customColor.primary,
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
          gap: { md: 4, lg: 3 },
        }}
      >
        {navLinks.map((link) => (
          <motion.div
            key={link.path}
            style={{ position: "relative", display: "inline-block" }}
            initial={false}
            whileHover={{ "--underline-scale": 1 }}
            animate={{ "--underline-scale": isActive(link.path) ? 1 : 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            {link.isDropdown ? (
              <>
                <LightTooltip
                  onOpen={() => setDropdownOpen(true)}
                  onClose={() => setDropdownOpen(false)}
                  title={<RenderListMenu />}
                  enterDelay={200}
                  leaveDelay={300}
                  disableFocusListener

               
                >
                  <div
                    className={`relative inline-block  no-underline text-[0.9375rem] pb-0.5 cursor-pointer hover: ${
                      dropdownOpen ? "text-[#000]" : "text-[#fff]"
                    }`}
                  >
                    {link.label}

                    <KeyboardArrowDown
                      sx={{
                        transform: dropdownOpen
                          ? "rotate(0deg)"
                          : "rotate(-180deg)",
                        transition: "transform 0.3s ease-in-out",
                      }}
                    />
                  </div>
                </LightTooltip>
              </>
            ) : (
              <Link
                href={link.path}
                className="relative inline-block text-[#fff] no-underline text-[0.9375rem] pb-0.5"
              >
                <span className="inline-block transition-transform duration-200 hover:scale-110">
                  {link.label}
                </span>

                <motion.div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "1px",
                    backgroundColor: "#fff",
                    transformOrigin: "center",
                    scaleX: "var(--underline-scale)",
                  }}
                />
              </Link>
            )}
          </motion.div>
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          position: "absolute",
          right: { xs: 50, md: 16 },
          color: "white",
          gap: 1,
        }}
      >
        {socialData.map((item, index) => (
          <IconButton
            key={index}
            size="small"
            sx={{
              color: "#ffffff",
              "&:hover": { bgcolor: "transparent", transform: "scale(1.1)" },
            }}
            onClick={() => window.open(item.link, "_blank")}
          >
            {item.icon}
          </IconButton>
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
                    backgroundColor: customColor.secondary,
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
                          {link.isDropdown ? (
                            <div>
                              <div
                                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                className={`
                                  text-white no-underline text-[1.1rem]
                                  block py-1.5 px-2 rounded-md
                                  transition-all duration-300 ease-in-out
                                  hover:bg-[rgba(255,255,255,0.1)] hover:text-[#fff] hover:translate-x-[5px]
                                  cursor-pointer flex items-center justify-between
                                  ${
                                    isActive(link.path)
                                      ? "font-semibold border-l-4 border-[#04b0a8] "
                                      : "font-normal border-l-4 border-transparent"
                                  }
                                `}
                              >
                                <span>{link.label}</span>
                                <KeyboardArrowDown
                                  sx={{
                                    transform: mobileServicesOpen
                                      ? "rotate(180deg)"
                                      : "rotate(0deg)",
                                    transition: "transform 0.3s ease-in-out",
                                  }}
                                />
                              </div>
                              <AnimatePresence>
                                {mobileServicesOpen && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    style={{ overflow: "hidden" }}
                                  >
                                    <Box
                                      sx={{
                                        mt: 2,
                                        mb: 2,
                                        px: 2,
                                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                                        borderRadius: 1,
                                      }}
                                    >
                                      <RenderListMenu />
                                    </Box>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          ) : (
                            <Link
                              href={link.path}
                              onClick={handleMenuClose}
                              className={`
                                text-white no-underline text-[1.1rem]
                                block py-1.5 px-2 rounded-md
                                transition-all duration-300 ease-in-out
                                hover:bg-[rgba(255,255,255,0.1)] hover:text-[#fff] hover:translate-x-[5px]
                                ${
                                  isActive(link.path)
                                    ? "font-semibold border-l-4 border-[#04b0a8] "
                                    : "font-normal border-l-4 border-transparent"
                                }
                              `}
                            >
                              {link.label}
                            </Link>
                          )}
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
