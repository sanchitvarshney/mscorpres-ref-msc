"use client";

import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { customColor } from "@/utils/theme/customColor";

export default function NotFound() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: "center",
            color: customColor.primary,
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "120px", md: "180px" },
                fontWeight: "bold",
                color: customColor.primary,
                lineHeight: 1,
                mb: 2,
                textShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              404
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "24px", md: "36px" },
                fontWeight: 600,
                mb: 2,
                color: customColor.primary,
              }}
            >
              Page Not Found
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                color: "text.secondary",
                mb: 4,
                maxWidth: "600px",
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              Oops! The page you're looking for doesn't exist. It might have
              been moved, deleted, or the URL might be incorrect.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Button
                component={Link}
                href="/"
                variant="contained"
                size="large"
                startIcon={<HomeIcon />}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: { xs: "14px", md: "16px" },
                  textTransform: "none",
                  borderRadius: 2,
                  backgroundColor: customColor.primary,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  "&:hover": {
                    boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Go to Homepage
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<ArrowBackIcon />}
                onClick={() => window.history.back()}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: { xs: "14px", md: "16px" },
                  textTransform: "none",
                  borderRadius: 2,
                  borderColor: customColor.primary,
                  color: customColor.primary,
                  "&:hover": {
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Go Back
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
