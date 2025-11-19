"use client";

import React, { useState } from "react";
import { Box, Link } from "@mui/material";

import { usePathname } from "next/navigation";

const NavigationBar: React.FC = () => {
  const pathname = usePathname();
  const [servicesAnchor, setServicesAnchor] = useState<null | HTMLElement>(
    null
  );

  const handleServicesOpen = (event: React.MouseEvent<HTMLElement>) => {
    setServicesAnchor(event.currentTarget);
  };

  const handleServicesClose = () => {
    setServicesAnchor(null);
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About Us", path: "/about" },
    { label: "Contact Us", path: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <Box
      sx={{
        bgcolor: "#263238",
        px: 3,
        py: 1.5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

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
    </Box>
  );
};

export default NavigationBar;
