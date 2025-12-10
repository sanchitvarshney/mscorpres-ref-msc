"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Alert,
  Snackbar,
} from "@mui/material";
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
import { validateEmail, validatePhone } from "@/utils/validations/validation";
import api from "@/api/axiosInstance";
import SuccessAlertCard from "@/components/SuccessAlertCard";

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
    icon: <LocationOn sx={{ color: customColor.primary }} />,
    title: "Address (Mob: +971 44218356)",
    value: "Unit No - A 123, Dubai Silicon Oasis, DDP, Building A3, Dubai, United Arab Emirates",
    description: "Dubai, United Arab Emirates PO Box: 418425",
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

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  title = "Get In Touch",
  subtitle = "Have questions or need assistance? We're here to help you with all your electronics and technology needs.",
}) => {
  const [formLoading, setFormLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({
    open: false,
    message: "",
    severity: "success",
  });
  const [showSuccessAlert, setShowSuccessAlert] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");

  // Handle input change
  const handleChange =
    (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      let value = e.target.value;

      if (field === "phone") {
        value = value.replace(/[^\d+\s]/g, "");
        if (value.includes("+") && value.indexOf("+") !== 0) {
          value = value.replace(/\+/g, "");
          value = "+" + value;
        }
        if (value.replace(/\s/g, "").length > 16) {
          return;
        }
      }

      setFormData((prev) => ({ ...prev, [field]: value }));

      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  // Validate form

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setFormLoading(true);

    try {
      const response = await api.post("/submit", {
        fullName: formData.name.trim(),
        email: formData.email.trim(),
        phoneNo: formData.phone.replace(/\s/g, ""),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        type: "MSCMR",
      });

      if (response.data.success) {
        const message =
          response.data.message || "Your message has been sent successfully!";
        setSuccessMessage(message);
        setShowSuccessAlert(true);

        setSnackbar({
          open: true,
          message: message,
          severity: "success",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setErrors({});
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
      setFormLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

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
                onSubmit={handleSubmit}
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
                  value={formData.name}
                  onChange={handleChange("name")}
                  error={!!errors.name}
                  helperText={errors.name}
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
                  value={formData.email}
                  onChange={handleChange("email")}
                  error={!!errors.email}
                  helperText={errors.email}
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
                  label="Phone Number"
                  type="tel"
                  variant="outlined"
                  value={formData.phone}
                  onChange={handleChange("phone")}
                  error={!!errors.phone}
                  helperText={errors.phone}
                  placeholder="+91 1234567890"
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
                  value={formData.subject}
                  onChange={handleChange("subject")}
                  error={!!errors.subject}
                  helperText={errors.subject}
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
                  value={formData.message}
                  onChange={handleChange("message")}
                  error={!!errors.message}
                  helperText={errors.message}
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
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={<Send />}
                    disabled={formLoading}
                    sx={{
                      fontWeight: 600,
                      py: 1.5,
                      backgroundColor: customColor.primary,
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                      },
                      "&:disabled": {
                        backgroundColor: customColor.primary,
                        opacity: 0.6,
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    {formLoading ? "Sending..." : "Send Message"}
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
      {showSuccessAlert && (
        <SuccessAlertCard
          message={successMessage}
          setAlert={setShowSuccessAlert}
        />
      )}
    </Box>
  );
};

export default ContactSection;
