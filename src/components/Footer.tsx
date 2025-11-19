"use client";

import React from "react";
import { Box, Typography, Grid, Link, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  Email,
  Phone,
  LocationOn,
} from "@mui/icons-material";

const Footer: React.FC = () => {
  const footerLinks = {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Services", href: "/services" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/careers" },
    ],
    services: [
      { label: "MsC Manufacturing", href: "/services/manufacturing" },
      { label: "Refurbishing", href: "/services/refurbishing" },
      { label: "Custom Engineering", href: "/services/engineering" },
      { label: "Quality Inspection", href: "/services/inspection" },
    ],
    support: [
      { label: "Help Center", href: "/help" },
      { label: "FAQs", href: "/faqs" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  };

  const socialLinks = [
    { icon: <Facebook />, href: "#", label: "Facebook" },
    { icon: <Twitter />, href: "#", label: "Twitter" },
    { icon: <LinkedIn />, href: "#", label: "LinkedIn" },
    { icon: <Instagram />, href: "#", label: "Instagram" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%)",
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
          {/* @ts-ignore */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                MsCorpres Manufacturer and Refurbishe
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                Leading excellence in msc manufacturing and logistics solutions.
                We deliver quality, innovation, and customer satisfaction.
              </Typography>
              <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
                {socialLinks.map((social, index) => (
                  <IconButton
                    key={index}
                    component="a"
                    href={social.href}
                    aria-label={social.label}
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

          {/* @ts-ignore */}
          <Grid item xs={12} sm={6} md={2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
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
                    sx={{
                      color: "rgba(255, 255, 255, 0.7)",
                      textDecoration: "none",
                      fontSize: "14px",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "white",
                        transform: "translateX(5px)",
                      },
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* @ts-ignore */}
          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
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
                    sx={{
                      color: "rgba(255, 255, 255, 0.7)",
                      textDecoration: "none",
                      fontSize: "14px",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "white",
                        transform: "translateX(5px)",
                      },
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* @ts-ignore */}
          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
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
                    sx={{
                      color: "rgba(255, 255, 255, 0.7)",
                      textDecoration: "none",
                      fontSize: "14px",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "white",
                        transform: "translateX(5px)",
                      },
                    }}
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
            initial={{ opacity: 0 }}
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
              © {currentYear} CargoPress. All rights reserved. | Designed with
              excellence for msc and logistics solutions.
            </Typography>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
