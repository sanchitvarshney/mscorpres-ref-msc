"use client";

import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  Email,
  Phone,
  LocationOn,
  YouTube,
  X,
} from "@mui/icons-material";
import Link from "next/link";
import { customColor } from "@/utils/theme/customColor";

const Footer: React.FC = () => {
  const footerLinks = {
    company: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Our Services", href: "/services" },
      { label: "Contact", href: "/contact" },
    ],
    services: [
      { label: "IoT Manufacturing", href: "/services#iot-manufacturing" },
      { label: "PCB Design", href: "/services#pcb-design" },
      { label: "Device Refurbishment", href: "/services#device-refurbishment" },
      { label: "ERP and MES", href: "/services#erp-and-mes" },
      { label: "Software Solution for Electronics", href: "/services#software-solution-for-electronics" },
    ],
    support: [
      { label: "Help Center", href: "/help" },
      { label: "FAQs", href: "/faqs" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  };

  const socialLinks = [
  {
      name: "Facebook",
      icon: <Facebook />,
      link: "https://www.facebook.com/MsCorpres/",
    },
    {
      name: "LinkedIn",
      icon: <LinkedIn />,
      link: "https://www.linkedin.com/company/mscorpres/",
    },
    {
      name: "Youtube",
      icon: <YouTube  />,
      link: "https://www.youtube.com/@mscorpres",
    },
    {
      name: "X",
      icon: <X />,
      link: "https://x.com/mscorpres",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
      backgroundColor: customColor.dark,
        color: "white",
        pt: { xs: 6, md: 8 },
        pb: { xs: 4, md: 6 },
        px: { xs: 2, md: 4 },
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
        },
      }}
    >
      <Box className="max-w-7xl mx-auto">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <motion.div
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                 backgroundColor: "#ffffff",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                MsCorpres Manufacturer and Refurbisher Pvt. Ltd.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                Excellence-driven solutions for electronics, automation, and logistics needs
              </Typography>
              <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
                {socialLinks.map((social, index) => (
                  <IconButton
                    key={index}
                    
                      onClick={() => window.open(social.link, "_blank")}
                    sx={{
                      color: "rgba(255, 255, 255, 0.7)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      "&:hover": {
                        color: "white",
                        background: "rgba(255, 255, 255, 0.1)",
                        borderColor: "rgba(255, 255, 255, 0.4)",
                        transform: "translateY(-2px)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Phone
                    sx={{ fontSize: 16, color: "rgba(255, 255, 255, 0.7)" }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                  >
                    +1 (888) 123-4567
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Email
                    sx={{ fontSize: 16, color: "rgba(255, 255, 255, 0.7)" }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                  >
                    info@msc.io
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <LocationOn
                    sx={{ fontSize: 16, color: "rgba(255, 255, 255, 0.7)" }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                  >
                    123 msc Street, New York, NY 10001
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <motion.div
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: "white",
                }}
              >
                Company
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {footerLinks.company.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-[rgba(255,255,255,0.7)] no-underline text-[14px] transition-all duration-300 ease-in-out hover:text-white hover:translate-x-[5px]"
                  >
                    {link.label}
                  </Link>
                ))}
              </Box>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <motion.div
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: "white",
                }}
              >
                Services
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {footerLinks.services.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-[rgba(255,255,255,0.7)] no-underline text-[14px] transition-all duration-300 ease-in-out hover:text-white hover:translate-x-[5px]"
                  >
                    {link.label}
                  </Link>
                ))}
              </Box>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <motion.div
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: "white",
                }}
              >
                Support
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {footerLinks.support.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-[rgba(255,255,255,0.7)] no-underline text-[14px] transition-all duration-300 ease-in-out hover:text-white hover:translate-x-[5px]"
                  >
                    {link.label}
                  </Link>
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box
          sx={{
            mt: { xs: 4, md: 6 },
            pt: 4,
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            textAlign: "center",
          }}
        >
          <motion.div
            initial={false}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "rgba(255, 255, 255, 0.6)",
              }}
            >
              © {currentYear} MsCorpres. All rights reserved. | Engineered with excellence for MsC and advanced logistics solutions.
            </Typography>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
