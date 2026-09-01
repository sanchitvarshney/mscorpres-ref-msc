"use client";

import React, { useState } from "react";
import { Box, Typography, TextField, Button, Alert, Snackbar } from "@mui/material";
import { Phone, Email, LocationOn, AccessTime, Send } from "@mui/icons-material";
import SectionShell from "@/components/reuseable/SectionShell";
import SectionHeading from "@/components/reuseable/SectionHeading";
import { CircuitTraces, GlowRing, ChipGlyph } from "@/components/reuseable/decor";
import { customColor } from "@/utils/theme/customColor";
import api from "@/api/axiosInstance";
import SuccessAlertCard from "@/components/SuccessAlertCard";

const contactInfo = [
  {
    icon: <Phone />,
    title: "Phone",
    value: "+91 7529949494 (For Recruitment)",
    description: "Call us anytime",
  },
  {
    icon: <Email />,
    title: "Email",
    value: "marketing@mscorpres.in",
    description: "Send us an email",
  },
  {
    icon: <LocationOn />,
    title: "Address",
    value: "B88, B Block, Sector 83, Noida, Uttar Pradesh - 201305",
    description: "Noida, Uttar Pradesh - 201305",
  },
  {
    icon: <LocationOn />,
    title: "Address (Mob: +971 44218356)",
    value:
      "Unit No - A 123, Dubai Silicon Oasis, DDP, Building A3, Dubai, United Arab Emirates",
    description: "Dubai, United Arab Emirates PO Box: 418425",
  },
  {
    icon: <AccessTime />,
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

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 2,
    "&.Mui-focused fieldset": { borderColor: customColor.primary },
  },
  "& .MuiInputLabel-root.Mui-focused": { color: customColor.primary },
} as const;

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
  }>({ open: false, message: "", severity: "success" });
  const [showSuccessAlert, setShowSuccessAlert] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");

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

        setSnackbar({ open: true, message, severity: "success" });

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

  const handleCloseSnackbar = () =>
    setSnackbar((prev) => ({ ...prev, open: false }));

  return (
    <SectionShell
      tone="light"
      maxWidth={1200}
      decor={
        <>
          <GlowRing size={420} sx={{ top: -150, left: -170 }} />
          <GlowRing
            size={360}
            sx={{ bottom: -140, right: -120 }}
            color="rgba(2,82,78,0.12)"
          />
          <CircuitTraces
            opacity={0.07}
            sx={{
              top: 0,
              right: 0,
              width: { xs: 300, md: 460 },
              height: { xs: 220, md: 320 },
            }}
          />
        </>
      }
    >
      <SectionHeading
        eyebrow="CONTACT US"
        title={title}
        intro={subtitle}
        sx={{ mb: { xs: 5, md: 7 }, maxWidth: 700 }}
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.6fr 1fr" },
          gap: { xs: 3, md: 4 },
          alignItems: "start",
        }}
      >
        {/* Form */}
        <Box
          className="reveal-l"
          sx={{
            position: "relative",
            overflow: "hidden",
            bgcolor: "#fff",
            borderRadius: 4,
            p: { xs: 3, md: 4 },
            border: "1px solid rgba(4,176,168,0.14)",
            boxShadow: "0 26px 60px -34px rgba(4,20,19,0.4)",
          }}
        >
          <ChipGlyph
            size={110}
            opacity={0.06}
            sx={{ position: "absolute", right: -18, top: -18 }}
          />
          <Typography
            component="h3"
            sx={{
              color: "text.primary",
              fontWeight: 800,
              fontSize: { xs: "19px", md: "22px" },
              letterSpacing: "-0.01em",
              mb: 3,
            }}
          >
            Send us a Message
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
          >
            <TextField
              fullWidth
              label="Your Name"
              variant="outlined"
              value={formData.name}
              onChange={handleChange("name")}
              error={!!errors.name}
              helperText={errors.name}
              sx={fieldSx}
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
              sx={fieldSx}
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
              sx={fieldSx}
            />
            <TextField
              fullWidth
              label="Subject"
              variant="outlined"
              value={formData.subject}
              onChange={handleChange("subject")}
              error={!!errors.subject}
              helperText={errors.subject}
              sx={fieldSx}
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
              sx={fieldSx}
            />
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                endIcon={<Send />}
                disabled={formLoading}
                disableElevation
                sx={{
                  fontWeight: 700,
                  py: 1.4,
                  px: 4,
                  borderRadius: 999,
                  color: "#fff",
                  background: `linear-gradient(135deg, ${customColor.primary}, ${customColor.secondary})`,
                  boxShadow: "0 16px 32px -14px rgba(4,176,168,0.6)",
                  transition:
                    "transform .25s cubic-bezier(0.22,1,0.36,1), box-shadow .25s ease, filter .25s ease",
                  "&:hover": {
                    filter: "brightness(1.06)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 22px 40px -14px rgba(4,176,168,0.7)",
                  },
                  "&:disabled": { filter: "grayscale(0.3)", opacity: 0.7, color: "#fff" },
                }}
              >
                {formLoading ? "Sending..." : "Send Message"}
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Contact details */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {contactInfo.map((info, index) => (
            <Box
              key={index}
              className="reveal-r"
              style={
                {
                  "--reveal-delay": `${0.08 + index * 0.04}s`,
                } as React.CSSProperties
              }
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 1.75,
                bgcolor: "#fff",
                borderRadius: 3,
                p: 2.5,
                border: "1px solid rgba(4,176,168,0.14)",
                boxShadow: "0 12px 30px -22px rgba(4,20,19,0.32)",
                transition:
                  "opacity .4s cubic-bezier(0.22,1,0.36,1) var(--reveal-delay,0s), translate .4s cubic-bezier(0.22,1,0.36,1) var(--reveal-delay,0s), transform .3s ease, box-shadow .3s ease, border-color .3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 24px 44px -24px rgba(4,176,168,0.4)",
                  borderColor: "rgba(4,176,168,0.4)",
                },
              }}
            >
              <Box
                sx={{
                  flexShrink: 0,
                  width: 44,
                  height: 44,
                  borderRadius: "13px",
                  display: "grid",
                  placeItems: "center",
                  bgcolor: customColor.light,
                  color: customColor.primary,
                  "& svg": { fontSize: 22 },
                }}
              >
                {info.icon}
              </Box>
              <Box sx={{ minWidth: 0 }}>
                <Typography
                  sx={{
                    color: "text.primary",
                    fontWeight: 700,
                    fontSize: "15px",
                    mb: 0.25,
                  }}
                >
                  {info.title}
                </Typography>
                <Typography
                  sx={{
                    color: "text.primary",
                    fontWeight: 500,
                    fontSize: "13.5px",
                    lineHeight: 1.5,
                    mb: 0.25,
                  }}
                >
                  {info.value}
                </Typography>
                <Typography sx={{ color: "text.secondary", fontSize: "12px" }}>
                  {info.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

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
        <SuccessAlertCard message={successMessage} setAlert={setShowSuccessAlert} />
      )}
    </SectionShell>
  );
};

export default ContactSection;
