"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
} from "@/utils/animationVarients/animation";
import { Company, defaultCompanies } from "@/dummydata/dummyData";
import { customColor } from "@/utils/theme/customColor";

interface TrustedCompaniesSectionProps {
  title?: string;
  companies?: Company[];
}

const TrustedCompaniesSection: React.FC<TrustedCompaniesSectionProps> = ({
  title = "Trusted by Leading Companies",
  companies = defaultCompanies,
}) => {
  // Duplicate companies for seamless loop
  const duplicatedCompanies = [...companies, ...companies, ...companies];

  return (
    <Box
      sx={{
        py: { xs: 2, md: 4 },

        px: { xs: 8, md: 40 },
        position: "relative",
        background:
          "linear-gradient(180deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%)",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{
            textAlign: "center",
            marginBottom: "1rem",
            width: "100%",
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: customColor.primary,
              fontWeight: 600,
              letterSpacing: 3,
              mb: 1,
              display: "block",
              fontSize: "12px",
            }}
          >
            OUR PARTNERS
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: "bold",
              mb: 1,
              color: "text.primary",
              fontSize: { xs: "28px", md: "36px" },
              position: "relative",
              display: "inline-block",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -10,
                left: "50%",
                transform: "translateX(-50%)",
                width: 60,
                height: 3,
                background: (theme) =>
                  `linear-gradient(90deg, transparent, ${customColor.primary}, transparent)`,
                borderRadius: 2,
              },
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontSize: "14px",
              maxWidth: "600px",
              mx: "auto",
              mt: 2,
            }}
          >
            We're proud to work with industry leaders and trusted partners
            worldwide
          </Typography>
        </motion.div>

        {/* Horizontal Scrolling Companies */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
            py: 2,
          }}
        >
          <Box
            className="scroll-container"
            sx={{
              display: "flex",
              gap: { xs: 3, md: 4 },
              width: "fit-content",
              animation: "scroll-companies 10s linear infinite",
              "&:hover": {
                animationPlayState: "paused",
              },
            }}
          >
            {duplicatedCompanies.map((company, index) => (
              <Box
                key={`${company.id}-${index}`}
                sx={{
                  // background: "white",
                  borderRadius: 3,
                  p: { xs: 1, md: 2 },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  maxWidth: { xs: 160, md: 200 },
                  flexShrink: 0,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
                {/* <Typography
                  variant="body1"
                  sx={{
                    color: "text.primary",
                    fontWeight: 700,
                    fontSize: { xs: "16px", md: "18px" },
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    letterSpacing: 0.5,
                    background: (theme) =>
                      `linear-gradient(135deg, ${theme.palette.text.primary}, ${theme.palette.text.secondary})`,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {company.name}
                </Typography> */}
              </Box>
            ))}
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default TrustedCompaniesSection;
