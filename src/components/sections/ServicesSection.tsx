"use client";

import React from "react";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import CustomCard from "@/components/reuseable/CustomCard";
import {
  serviceCardVariants,
  servicesContainerVariants,
} from "@/utils/animationVarients/animation";
import { customColor } from "@/utils/theme/customColor";

interface ServiceItem {
  id?: number;
  image?: string;
  title?: string;
  description?: string;
  action?: boolean;
}

interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
  services?: ServiceItem[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  title = "Our Services",
  subtitle = "We provide high-quality, reliable services designed to support your business with efficiency and excellence.",
  services = [],
}) => {
  return (
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        position: "relative",

        overflow: "hidden",
      }}
    >
      <motion.div
        className="w-full flex flex-col justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            textAlign: "center",
            marginBottom: "2rem",
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
            WHAT WE OFFER
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: "bold",
              mb: 2,
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
            variant="body1"
            sx={{
              color: "text.secondary",
              fontSize: "16px",
              maxWidth: "700px",
              mx: "auto",
              lineHeight: 1.8,
            }}
          >
            {subtitle}
          </Typography>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6"
          variants={servicesContainerVariants}
          style={{ width: "100%" }}
        >
          {services.map((item: any, index: number) => (
            <motion.div
              key={item.id || index}
              variants={serviceCardVariants}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <CustomCard item={item}  />
              </Box>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default ServicesSection;
