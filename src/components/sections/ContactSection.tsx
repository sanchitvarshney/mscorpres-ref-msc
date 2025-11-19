"use client";

import React from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import {
  Phone,
  Email,
  LocationOn,
  AccessTime,
  Send,
} from "@mui/icons-material";
import {
  cardVariants,
  containerVariants,
} from "@/utils/animationVarients/animation";

const contactInfo = [
  {
    icon: <Phone />,
    title: "Phone",
    value: "+1 (888) 123-4567",
    description: "Call us anytime",
    iconColor: "primary.main",
  },
  {
    icon: <Email />,
    title: "Email",
    value: "info@cargopress.io",
    description: "Send us an email",
    iconColor: "warning.main",
  },
  {
    icon: <LocationOn />,
    title: "Address",
    value: "123 Cargo Street",
    description: "New York, NY 10001",
    iconColor: "error.main",
  },
  {
    icon: <AccessTime />,
    title: "Working Hours",
    value: "Mon - Fri: 8:00 - 18:00",
    description: "Saturday: 9:00 - 15:00",
    iconColor: "success.main",
  },
];

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  title = "Get In Touch",
  subtitle = "Have questions or need assistance? We're here to help you with all your electronics and technology needs.",
}) => {
  return (
    <Box
      sx={{
        py: { xs: 2, md: 6 },
        px: { xs: 2, md: 4 },
        position: "relative",
        background:
          "linear-gradient(180deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%)",
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
        className="max-w-7xl mx-auto"
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
              mb: 2,
              display: "block",
              fontSize: "12px",
            }}
          >
            CONTACT US
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: "bold",
              mb: 3,
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
            variant="body1"
            sx={{
              color: "text.secondary",
              fontSize: "16px",
              maxWidth: "700px",
              mx: "auto",
              lineHeight: 1.8,
              mt: 4,
            }}
          >
            {subtitle}
          </Typography>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 lg:gap-8">
          <motion.div variants={cardVariants}>
            <Box
              sx={{
                background: "white",
                borderRadius: 3,
                p: { xs: 3, md: 4 },
                boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "text.primary",
                  fontWeight: 600,
                  mb: 3,
                }}
              >
                Send us a Message
              </Typography>
              <Box
                component="form"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                }}
              >
                <TextField fullWidth label="Your Name" variant="outlined" />

                <TextField
                  fullWidth
                  label="Your Email"
                  type="email"
                  variant="outlined"
                />

                <TextField fullWidth label="Subject" variant="outlined" />
                <TextField
                  fullWidth
                  label="Message"
                  multiline
                  rows={5}
                  variant="outlined"
                />
                <div className="flex justify-end">
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<Send />}
                    sx={{
                      fontWeight: 600,
                      py: 1.5,
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Send Message
                  </Button>
                </div>
              </Box>
            </Box>
          </motion.div>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            {contactInfo.map((info, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Box
                  sx={{
                    background: "white",
                    borderRadius: 2,
                    p: 3,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor:"primary.main",
                        borderRadius: "50%",
                        p: 1.5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        minWidth: 48,
                        height: 48,
                      }}
                    >
                      {info.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "text.primary",
                          fontWeight: 600,
                          mb: 0.5,
                          fontSize: "16px",
                        }}
                      >
                        {info.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.primary",
                          fontWeight: 500,
                          mb: 0.5,
                        }}
                      >
                        {info.value}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "text.secondary",
                          fontSize: "12px",
                        }}
                      >
                        {info.description}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </div>
      </motion.div>
    </Box>
  );
};

export default ContactSection;
