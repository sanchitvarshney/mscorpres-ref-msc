"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  IconButton,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
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
  Send,
} from "@mui/icons-material";
import Link from "next/link";
import { customColor } from "@/utils/theme/customColor";
import { footerLinks } from "@/dummydata/dummyData";
import api from "@/api/axiosInstance";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({
    open: false,
    message: "",
    severity: "success",
  });

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
      icon: <YouTube />,
      link: "https://www.youtube.com/@mscorpres",
    },
    {
      name: "X",
      icon: <X />,
      link: "https://x.com/mscorpres",
    },
  ];

  const currentYear = new Date().getFullYear();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await api.post("/subscribe", {
        email: email.trim(),

        type: "MSCMR",
      });

      if (response.data.success) {
        setSnackbar({
          open: true,
          message:
            response.data.message || "Your message has been sent successfully!",
          severity: "success",
        });
        setEmail("");
      }

      if (!response.data.success) {
        setSnackbar({
          open: true,
          message:
            response.data.message || "Something went wrong. Please try again.",
          severity: "error",
        });
      }
    } catch (error: any) {
      setSnackbar({
        open: true,
        message: error
          ? error?.response.data.message
          : "Failed to send message. Please try again later.",
        severity: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

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
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255, 255, 255, 0.7)",
                      fontWeight: 600,
                      fontSize: 13,
                    }}
                  >
                    GSTIN/UIN:
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                  >
                    09AATCM1744R1ZH
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255, 255, 255, 0.7)",
                      fontWeight: 600,
                      fontSize: 13,
                    }}
                  >
                    CIN:
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                  >
                    U95210UP2025PTC220228
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Phone
                    sx={{ fontSize: 16, color: "rgba(255, 255, 255, 0.7)" }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                  >
                    +91 75 29 939393
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
                    marketing@mscorpres.in
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
                    B88, B Block, Sector 83, Noida, Uttar Pradesh - 201305
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
                    Our Presence at: - Unit No - A 123, Dubai Silicon Oasis,
                    DDP, Building A3, Dubai, United Arab Emirates PO Box: 418425
                    Mob: +971 44218356
                  </Typography>
                </Box>
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

          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
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

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <motion.div
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: "white",
                }}
              >
                Subscribe
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  mb: 2,
                  fontSize: "14px",
                }}
              >
                Stay updated with our latest news and updates.
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubscribe}
                sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}
              >
                <TextField
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      color: "white",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      "& fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.2)",
                      },
                      "&:hover fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.3)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.5)",
                      },
                    },
                    "& .MuiInputBase-input::placeholder": {
                      color: "rgba(255, 255, 255, 0.5)",
                      opacity: 1,
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                  endIcon={<Send />}
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    color: "white",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      borderColor: "rgba(255, 255, 255, 0.4)",
                      transform: "translateY(-2px)",
                    },
                    "&:disabled": {
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      color: "rgba(255, 255, 255, 0.5)",
                    },
                    transition: "all 0.3s ease",
                    textTransform: "none",
                    fontWeight: 600,
                  }}
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>
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
              © {currentYear} Copyright MsCorpres | All Rights Reserved
            </Typography>
          </motion.div>
        </Box>
      </Box>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Footer;
