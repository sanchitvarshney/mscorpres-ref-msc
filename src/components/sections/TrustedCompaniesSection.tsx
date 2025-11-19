"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/utils/animationVarients/animation";
import { Company, defaultCompanies } from "@/dummydata/dummyData";



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
        p: { xs: 2, md: 4 },
      
        position: "relative",
        background: "linear-gradient(180deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%)",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(25,118,210,0.3), transparent)",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(25,118,210,0.3), transparent)",
        },
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
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            textAlign: "center",
            marginBottom: "4rem",
            width: "100%",
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: "primary.main",
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
                  `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
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
            We're proud to work with industry leaders and trusted partners worldwide
          </Typography>
        </motion.div>

        {/* Horizontal Scrolling Companies */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
            py: 1,
            "&::before": {
              content: '""',
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "150px",
              background:
                "linear-gradient(to right, rgba(248,249,250,1), rgba(248,249,250,0))",
              zIndex: 3,
              pointerEvents: "none",
            },
            "&::after": {
              content: '""',
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: "150px",
              background:
                "linear-gradient(to left, rgba(248,249,250,1), rgba(248,249,250,0))",
              zIndex: 3,
              pointerEvents: "none",
            },
          }}
        >
          <Box
            className="scroll-container"
            sx={{
              display: "flex",
              gap: { xs: 3, md: 4 },
              width: "fit-content",
              animation: "scroll-companies 40s linear infinite",
              "&:hover": {
                animationPlayState: "paused",
              },
            }}
          >
            {duplicatedCompanies.map((company, index) => (
              <Box
                key={`${company.id}-${index}`}
                sx={{
                  background: "white",
                  borderRadius: 3,
                  p: { xs: 3, md: 4 },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: { xs: 160, md: 200 },
                  minHeight: { xs: 100, md: 120 },
                  boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  border: "1px solid rgba(0,0,0,0.06)",
                  flexShrink: 0,
                  position: "relative",
                  overflow: "hidden",
                  
                  "&:hover": {
                    transform: "translateY(-6px) scale(1.03)",
                    boxShadow: "0 12px 30px rgba(25,118,210,0.15)",
                    "&::before": {
                      opacity: 1,
                    },
                  },
                }}
              >
                <Typography
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
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default TrustedCompaniesSection;

