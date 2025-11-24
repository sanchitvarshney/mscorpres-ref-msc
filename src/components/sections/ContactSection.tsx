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
import { customColor } from "@/utils/theme/customColor";

const contactInfo = [
  {
    icon: <Phone sx={{ color: customColor.primary }} />,
    title: "Phone",
    value: "+91 75 29 939393",
    description: "Call us anytime",
  },
  {
    icon: <Email sx={{ color: customColor.primary }} />,
    title: "Email",
    value: "marketing@mscorpres.in",
    description: "Send us an email",
  },
  {
    icon: <LocationOn sx={{ color: customColor.primary }} />,
    title: "Address",
    value: "B88, B Block, Sector 83, Noida, Uttar Pradesh - 201305",
    description: "Noida, Uttar Pradesh - 201305",
  },
  {
    icon: <AccessTime sx={{ color: customColor.primary }} />,
    title: "Working Hours",
    value: "Mon - Sat: 9:00 am - 18:00 pm",
    description: "Saturday is being worked day",
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
        p: { xs: 2, md: 4 },
        position: "relative",
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
            CONTACT US
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: "bold",

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
              mt: 3,
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
                // boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
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
                <TextField
                  fullWidth
                  label="Your Name"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: customColor.primary,
                      },
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: customColor.primary,
                    },
                  }}
                />

                <TextField
                  fullWidth
                  label="Your Email"
                  type="email"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: customColor.primary,
                      },
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: customColor.primary,
                    },
                  }}
                />

                <TextField
                  fullWidth
                  label="Subject"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: customColor.primary,
                      },
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: customColor.primary,
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Message"
                  multiline
                  rows={5}
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: customColor.primary,
                      },
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: customColor.primary,
                    },
                  }}
                />
                <div className="flex justify-end">
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<Send />}
                    sx={{
                      fontWeight: 600,
                      py: 1.5,
                      backgroundColor: customColor.primary,
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
                        backgroundColor: customColor.light,
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
