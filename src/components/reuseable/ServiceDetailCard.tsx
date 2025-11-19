"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

interface ServiceDetailCardProps {
  service: {
    image?: string;
    title?: string;
    description?: string;
  };
  index: number;
  detailedExplanation?: string;
  features?: string[];
  animationDelay?: number;
  id?: string;
  skipAnimation?: boolean;
}

const defaultFeatures = [
  "Professional Service",
  "Quality Assured",
  "Expert Team",
];

const ServiceDetailCard: React.FC<ServiceDetailCardProps> = ({
  service,
  index,
  detailedExplanation,
  features = defaultFeatures,
  animationDelay = index * 0.1,
  id,
  skipAnimation = false,
}) => {
  // Card content component to avoid duplication
  const CardContent = () => (
    <Box
      id={id}
      sx={{
        background: "white",
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        transition: "all 0.3s ease",
        scrollMarginTop: "100px",
        "&:hover": {
          boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
          transform: "translateY(-4px)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 0,
        }}
      >
        {/* Image Section */}
        <Box
          sx={{
            width: { xs: "100%", md: "40%" },
            position: "relative",
            minHeight: { xs: "250px", md: "300px" },
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={service.image}
            alt={service.title || "Service Image"}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
              p: 2,
              color: "white",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "20px", md: "24px" },
                textShadow: "0 2px 4px rgba(0,0,0,0.5)",
              }}
            >
              {service.title}
            </Typography>
          </Box>
        </Box>

        {/* Content Section */}
        <Box
          sx={{
            width: { xs: "100%", md: "60%" },
            p: { xs: 3, md: 4 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              mb: 2,
              color: "primary.main",
              fontSize: { xs: "18px", md: "20px" },
              display: { xs: "block", md: "none" },
            }}
          >
            {service.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              lineHeight: 1.8,
              fontSize: "16px",
              mb: 3,
            }}
          >
            {service.description}
          </Typography>

          {/* Detailed Explanation */}
          {detailedExplanation && (
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                lineHeight: 1.8,
                fontSize: "15px",
                mb: 2,
              }}
            >
              {detailedExplanation}
            </Typography>
          )}

          {/* Key Features */}
          {features && features.length > 0 && (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
                mt: 2,
              }}
            >
              {features.map((feature, idx) => (
                <Box
                  key={idx}
                  sx={{
                    background: "rgba(25, 118, 210, 0.1)",
                    color: "primary.main",
                    px: 2,
                    py: 0.5,
                    borderRadius: 2,
                    fontSize: "12px",
                    fontWeight: 600,
                  }}
                >
                  {feature}
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );

  
  if (skipAnimation) {
    return <CardContent />;
  }


  return (
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: animationDelay }}
    >
      <CardContent />
    </motion.div>
  );
};

export default ServiceDetailCard;

