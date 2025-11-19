"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { itemVariants } from "@/utils/animationVarients/animation";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div variants={itemVariants}>
      <Box
        sx={{
          maxWidth: 400,
          background: "white",
          borderRadius: 3,
          p: 3,
          height: "100%",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          transition: "all 0.3s ease",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
          },
        }}
      >
        <Box
          sx={{
            color: "primary.main",
            mb: 2,
            p: 2,
            borderRadius: "50%",
            background: "rgba(25, 118, 210, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </Box>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mb: 1.5,
            color: "text.primary",
            fontSize: { xs: "18px", md: "20px" },
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            lineHeight: 1.6,
            fontSize: "14px",
          }}
        >
          {description}
        </Typography>
      </Box>
    </motion.div>
  );
};

export default FeatureCard;

