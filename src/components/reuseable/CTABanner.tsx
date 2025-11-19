"use client";

import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowForward, Phone } from "@mui/icons-material";
import Link from "next/link";

interface CTABannerProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

const CTABanner: React.FC<CTABannerProps> = ({
  title = "Ready to Transform Your Business?",
  description = "Let's discuss how we can help you with IoT manufacturing, refurbishment, or consultation services.",
  primaryButtonText = "Get Started Today",
  primaryButtonHref = "/contact",
  secondaryButtonText = "Call Us Now",
  secondaryButtonHref = "/contact",
}) => {
  return (
    <Box
      component="section"
      sx={{
        background: "#263238",
        p: { xs: 2, md: 4 },
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
      <Container maxWidth="lg">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "32px", sm: "40px", md: "48px" },
             
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "rgba(255, 255, 255, 0.7)",
              fontSize: { xs: "16px", md: "20px" },
              fontWeight: 400,
              maxWidth: "800px",
              mb: 1,
              lineHeight: 1.8,
            }}
          >
            {description}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              maxWidth: "600px",
            }}
          >
            <Button
              component={Link}
              href={primaryButtonHref}
              variant="contained"
              endIcon={<ArrowForward />}
              sx={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                px: { xs: 4, md: 6 },
                py: 1.5,
                fontSize: { xs: "14px", md: "16px" },
                fontWeight: 600,
                borderRadius: 2,
                textTransform: "none",
                boxShadow: "0 4px 20px rgba(102, 126, 234, 0.3)",
                "&:hover": {
                  background: "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 25px rgba(102, 126, 234, 0.4)",
                },
                transition: "all 0.3s ease",
              }}
            >
              {primaryButtonText}
            </Button>

            <Button
              component={Link}
              href={secondaryButtonHref}
              variant="outlined"
              startIcon={<Phone />}
              sx={{
                borderColor: "rgba(255, 255, 255, 0.2)",
                color: "rgba(255, 255, 255, 0.7)",
                borderWidth: 2,
                px: { xs: 4, md: 6 },
                py: 1.5,
                fontSize: { xs: "14px", md: "16px" },
                fontWeight: 600,
                borderRadius: 2,
                textTransform: "none",
                bgcolor: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                "&:hover": {
                  borderColor: "rgba(255, 255, 255, 0.4)",
                  color: "white",
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                },
                transition: "all 0.3s ease",
              }}
            >
              {secondaryButtonText}
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CTABanner;

