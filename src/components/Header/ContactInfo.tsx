"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Phone, AccessTime, Email } from "@mui/icons-material";
import { customColor } from "@/utils/theme/customColor";
import { staggerRow, rowItem } from "@/utils/animationVarients/headerAnimation";

interface ContactItemData {
  icon: React.ReactNode;
  text: string;
  href?: string;
  /** breakpoint from which this item becomes visible */
  from: "md" | "lg";
}

const contactData: ContactItemData[] = [
  {
    icon: <Phone sx={{ fontSize: 16 }} />,
    text: "+91 7529949494 (For Recruitment)",
    href: "tel:+917529949494",
    from: "md",
  },
  {
    icon: <Email sx={{ fontSize: 16 }} />,
    text: "marketing@mscorpres.in",
    href: "mailto:marketing@mscorpres.in",
    from: "lg",
  },
  {
    icon: <AccessTime sx={{ fontSize: 16 }} />,
    text: "09:00 am - 18:00 pm",
    from: "lg",
  },
];

interface ContactInfoProps {
  tone?: "light" | "dark";
}

const ContactInfo: React.FC<ContactInfoProps> = ({ tone = "light" }) => {
  const textColor = tone === "dark" ? "rgba(255,255,255,0.82)" : "#4a5754";
  const iconColor = tone === "dark" ? "#ffffff" : customColor.primary;
  const dividerColor =
    tone === "dark" ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.12)";

  return (
    <Box
      component={motion.div}
      variants={staggerRow}
      initial="hidden"
      animate="visible"
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 1, md: 0 },
      }}
    >
      {contactData.map((item, index) => {
        const content = (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.75,
              whiteSpace: "nowrap",
            }}
          >
            <Box sx={{ color: iconColor, display: "flex" }}>{item.icon}</Box>
            <Typography
              sx={{
                color: textColor,
                fontSize: "0.8rem",
                fontWeight: 500,
                letterSpacing: "0.01em",
              }}
            >
              {item.text}
            </Typography>
          </Box>
        );

        return (
          <Box
            key={item.text}
            component={motion.div}
            variants={rowItem}
            sx={{
              display:
                item.from === "lg"
                  ? { xs: "flex", md: "none", lg: "flex" }
                  : { xs: "flex", md: "flex" },
              alignItems: "center",
            }}
          >
            {index > 0 && (
              <Box
                aria-hidden
                sx={{
                  display: { xs: "none", md: "block" },
                  width: "1px",
                  height: 14,
                  mx: { md: 1.5, lg: 2 },
                  bgcolor: dividerColor,
                }}
              />
            )}
            {item.href ? (
              <Box
                component="a"
                href={item.href}
                sx={{
                  textDecoration: "none",
                  transition: "opacity .2s ease",
                  "&:hover": { opacity: 0.7 },
                }}
              >
                {content}
              </Box>
            ) : (
              content
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default ContactInfo;
