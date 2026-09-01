"use client";

import React, { useState } from "react";
import { Box, Typography, IconButton, TextField, Button, Snackbar, Alert } from "@mui/material";
import {
  LinkedIn,
  Email,
  Phone,
  LocationOn,
  YouTube,
  X,
  Facebook,
  Send,
} from "@mui/icons-material";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";
import { customColor } from "@/utils/theme/customColor";
import { CircuitTraces } from "@/components/reuseable/decor";
import { footerLinks } from "@/dummydata/dummyData";
import api from "@/api/axiosInstance";

const socialLinks = [
  { name: "Facebook", icon: <Facebook />, link: "https://www.facebook.com/MsCorpres/" },
  { name: "LinkedIn", icon: <LinkedIn />, link: "https://www.linkedin.com/company/mscorpres/" },
  { name: "Youtube", icon: <YouTube />, link: "https://www.youtube.com/@mscorpres" },
  { name: "X", icon: <X />, link: "https://x.com/mscorpres" },
];

const contactItems = [
  { icon: <Phone sx={{ fontSize: 16 }} />, text: "+91 7529949494 (For Recruitment)" },
  { icon: <Email sx={{ fontSize: 16 }} />, text: "marketing@mscorpres.in" },
  {
    icon: <LocationOn sx={{ fontSize: 16 }} />,
    text: "B88, B Block, Sector 83, Noida, Uttar Pradesh - 201305",
  },
  {
    icon: <LocationOn sx={{ fontSize: 16 }} />,
    text: "Unit No - A 123, Dubai Silicon Oasis, DDP, Building A3, Dubai, UAE — PO Box: 418425 · Mob: +971 44218356",
  },
];

const muted = "rgba(255,255,255,0.66)";

const FooterHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Typography
    component="h3"
    sx={{
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "#fff",
      mb: 2.25,
    }}
  >
    {children}
  </Typography>
);

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <Box
    component={Link}
    href={href}
    sx={{
      display: "inline-block",
      width: "fit-content",
      fontSize: 14,
      lineHeight: 1.5,
      color: muted,
      textDecoration: "none",
      transition: "color .25s ease, transform .25s ease",
      "&:hover": { color: "#fff", transform: "translateX(4px)" },
    }}
  >
    {children}
  </Box>
);

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({ open: false, message: "", severity: "success" });

  const { ref, inView } = useInView<HTMLDivElement>();
  const currentYear = new Date().getFullYear();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setIsSubmitting(true);
    try {
      const response = await api.post("/subscribe", {
        email: email.trim(),
        type: "MSCMR",
      });

      if (response.data.success) {
        setSnackbar({
          open: true,
          message:
            response.data.message || "Your message has been sent successfully!",
          severity: "success",
        });
        setEmail("");
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
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () =>
    setSnackbar((prev) => ({ ...prev, open: false }));

  return (
    <Box
      component="footer"
      ref={ref}
      className={inView ? "in-view" : undefined}
      sx={{
        color: "#fff",
        pt: { xs: 6, md: 9 },
        pb: { xs: 3, md: 4 },
        px: { xs: 3, md: 6 },
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#03211f",
        backgroundImage:
          "radial-gradient(900px 380px at 12% -10%, rgba(4,176,168,0.30), transparent 60%)," +
          "radial-gradient(760px 340px at 100% 110%, rgba(4,176,168,0.16), transparent 65%)," +
          `linear-gradient(180deg, ${customColor.secondary} 0%, #04211f 55%, #021412 100%)`,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: `linear-gradient(90deg, ${customColor.primary}, ${customColor.secondary}, ${customColor.primary})`,
        },
        "& .reveal": {
          opacity: 0,
          translate: "0 14px",
          transition:
            "opacity .4s cubic-bezier(0.22,1,0.36,1) var(--reveal-delay,0s), translate .4s cubic-bezier(0.22,1,0.36,1) var(--reveal-delay,0s)",
        },
        "&.in-view .reveal": { opacity: 1, translate: "0 0" },
        "@media (prefers-reduced-motion: reduce)": {
          "& .reveal": { opacity: 1, translate: "0 0", transition: "none" },
        },
      }}
    >
      <CircuitTraces
        color="#8fe9e3"
        opacity={0.05}
        sx={{ right: 0, top: 0, width: { xs: 320, md: 520 }, height: { xs: 260, md: 360 } }}
      />

      <Box sx={{ maxWidth: "90%", mx: "auto", position: "relative", zIndex: 1 }}>
        {/* Top: brand + link columns + newsletter */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1.7fr 1fr 1fr 1.5fr",
            },
            columnGap: { xs: 4, md: 5 },
            rowGap: { xs: 4.5, md: 5 },
          }}
        >
          {/* Brand */}
          <Box
            className="reveal"
            style={{ "--reveal-delay": "0s" } as React.CSSProperties}
            sx={{ gridColumn: { xs: "1 / -1", sm: "1 / -1", md: "auto" } }}
          >
            <Typography
              sx={{
                fontSize: { xs: 17, md: 18 },
                fontWeight: 700,
                lineHeight: 1.35,
                color: "#fff",
                maxWidth: 340,
                mb: 2.25,
              }}
            >
              MsCorpres Manufacturer and Refurbisher Pvt. Ltd.
            </Typography>

            <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.name}
                  aria-label={social.name}
                  onClick={() =>
                    window.open(social.link, "_blank", "noopener,noreferrer")
                  }
                  sx={{
                    width: 38,
                    height: 38,
                    color: muted,
                    border: "1px solid rgba(255,255,255,0.18)",
                    transition: "all .25s ease",
                    "& svg": { fontSize: 18 },
                    "&:hover": {
                      color: "#fff",
                      background: "rgba(255,255,255,0.1)",
                      borderColor: "rgba(255,255,255,0.4)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>

            <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
              <Box>
                <Typography sx={{ fontSize: 11, letterSpacing: "0.06em", color: "rgba(255,255,255,0.45)", textTransform: "uppercase", mb: 0.25 }}>
                  GSTIN / UIN
                </Typography>
                <Typography sx={{ fontSize: 13, color: muted }}>
                  09AATCM1744R1ZH
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: 11, letterSpacing: "0.06em", color: "rgba(255,255,255,0.45)", textTransform: "uppercase", mb: 0.25 }}>
                  CIN
                </Typography>
                <Typography sx={{ fontSize: 13, color: muted }}>
                  U95210UP2025PTC220228
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Services */}
          <Box
            className="reveal"
            style={{ "--reveal-delay": "0.08s" } as React.CSSProperties}
          >
            <FooterHeading>Services</FooterHeading>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.25 }}>
              {footerLinks.services.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </Box>
          </Box>

          {/* Support */}
          <Box
            className="reveal"
            style={{ "--reveal-delay": "0.14s" } as React.CSSProperties}
          >
            <FooterHeading>Support</FooterHeading>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.25 }}>
              {footerLinks.support.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </Box>
          </Box>

          {/* Newsletter */}
          <Box
            className="reveal"
            style={{ "--reveal-delay": "0.2s" } as React.CSSProperties}
          >
            <FooterHeading>Subscribe</FooterHeading>
            <Typography sx={{ color: muted, fontSize: 14, lineHeight: 1.6, mb: 2 }}>
              Stay updated with our latest news and updates.
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubscribe}
              sx={{ display: "flex", flexDirection: "column", gap: 1.5, maxWidth: 340 }}
            >
              <TextField
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: "#fff",
                    borderRadius: 2,
                    backgroundColor: "rgba(255,255,255,0.05)",
                    "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
                    "&:hover fieldset": { borderColor: "rgba(255,255,255,0.35)" },
                    "&.Mui-focused fieldset": { borderColor: "rgba(255,255,255,0.6)" },
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "rgba(255,255,255,0.5)",
                    opacity: 1,
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                endIcon={<Send />}
                disableElevation
                sx={{
                  py: 1.1,
                  borderRadius: 2,
                  textTransform: "none",
                  fontWeight: 600,
                  color: "#fff",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  transition: "all .25s ease",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.2)",
                    borderColor: "rgba(255,255,255,0.4)",
                    transform: "translateY(-2px)",
                  },
                  "&:disabled": {
                    backgroundColor: "rgba(255,255,255,0.05)",
                    color: "rgba(255,255,255,0.5)",
                  },
                }}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Contact strip */}
        <Box
          className="reveal"
          style={{ "--reveal-delay": "0.24s" } as React.CSSProperties}
          sx={{
            mt: { xs: 5, md: 6 },
            pt: { xs: 3, md: 4 },
            borderTop: "1px solid rgba(255,255,255,0.1)",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            columnGap: 4,
            rowGap: 1.5,
          }}
        >
          {contactItems.map((item, i) => (
            <Box key={i} sx={{ display: "flex", alignItems: "flex-start", gap: 1.25 }}>
              <Box sx={{ color: "rgba(255,255,255,0.55)", mt: "1px", flexShrink: 0 }}>
                {item.icon}
              </Box>
              <Typography sx={{ fontSize: 13, color: muted, lineHeight: 1.6 }}>
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Bottom bar */}
        <Box
          className="reveal"
          style={{ "--reveal-delay": "0.28s" } as React.CSSProperties}
          sx={{
            mt: { xs: 4, md: 5 },
            pt: 3,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: 1.5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              columnGap: 2,
              rowGap: 0.5,
            }}
          >
            {footerLinks.support
              .filter((l) => ["/privacy-policy", "/terms"].includes(l.href))
              .map((link, i) => (
              <React.Fragment key={link.href}>
                {i > 0 && (
                  <Box
                    component="span"
                    aria-hidden
                    sx={{ color: "rgba(255,255,255,0.25)", fontSize: 12 }}
                  >
                    ·
                  </Box>
                )}
                <Box
                  component={Link}
                  href={link.href}
                  sx={{
                    fontSize: 12.5,
                    color: "rgba(255,255,255,0.55)",
                    textDecoration: "none",
                    transition: "color .25s ease",
                    "&:hover": { color: "#fff" },
                  }}
                >
                  {link.label}
                </Box>
              </React.Fragment>
            ))}
          </Box>

          <Typography sx={{ fontSize: 12.5, color: "rgba(255,255,255,0.5)" }}>
            © {currentYear} MsCorpres. All Rights Reserved.
          </Typography>
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
    </Box>
  );
};

export default Footer;
