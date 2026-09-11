"use client";

import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { customColor } from "@/utils/theme/customColor";
import { CircuitTraces, DecorGrid, GlowRing, ChipGlyph } from "@/components/reuseable/decor";

export default function NotFound() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f7fbfa",
        backgroundImage:
          "radial-gradient(900px 520px at 100% -10%, rgba(4,176,168,0.16), transparent 60%)," +
          "radial-gradient(800px 520px at -6% 12%, rgba(2,82,78,0.12), transparent 55%)",
        py: { xs: 8, md: 12 },
        px: 2,
      }}
    >
      <Box aria-hidden sx={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <DecorGrid variant="dots" opacity={0.3} />
        <GlowRing size={460} variant="dashed" color="rgba(4,176,168,0.2)" sx={{ top: -160, left: -160 }} />
        <CircuitTraces
          opacity={0.1}
          sx={{ bottom: 0, right: 0, width: { xs: 320, md: 520 }, height: { xs: 240, md: 360 } }}
        />
      </Box>

      <Container maxWidth="sm" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          sx={{
            position: "relative",
            textAlign: "center",
            bgcolor: "rgba(255,255,255,0.75)",
            backdropFilter: "blur(8px)",
            borderRadius: 5,
            px: { xs: 3, md: 6 },
            py: { xs: 5, md: 7 },
            border: "1px solid rgba(4,176,168,0.18)",
            boxShadow: "0 40px 90px -44px rgba(4,20,19,0.45)",
          }}
        >
          <ChipGlyph size={72} opacity={0.35} sx={{ position: "absolute", right: 18, top: 18 }} />

          <Typography
            component="div"
            sx={{
              fontSize: { xs: "104px", md: "160px" },
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              mb: 1,
              background: `linear-gradient(135deg, ${customColor.primary}, ${customColor.secondary})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            404
          </Typography>

          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "22px", md: "32px" },
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "text.primary",
              mb: 1.5,
            }}
          >
            Page Not Found
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "14.5px", md: "16px" },
              color: "text.secondary",
              lineHeight: 1.7,
              maxWidth: 460,
              mx: "auto",
              mb: 4,
            }}
          >
            Oops! The page you're looking for doesn't exist. It might have been
            moved, deleted, or the URL might be incorrect.
          </Typography>

          <Box sx={{ display: "flex", gap: 1.5, justifyContent: "center", flexWrap: "wrap" }}>
            <Button
              component={Link}
              href="/"
              variant="contained"
              size="large"
              startIcon={<HomeIcon />}
              disableElevation
              sx={{
                px: 3.5,
                py: 1.35,
                fontSize: { xs: "14px", md: "15px" },
                fontWeight: 700,
                borderRadius: 999,
                color: "#fff",
                background: `linear-gradient(135deg, ${customColor.primary}, ${customColor.secondary})`,
                boxShadow: "0 16px 32px -14px rgba(4,176,168,0.6)",
                transition: "transform .25s ease, box-shadow .25s ease, filter .25s ease",
                "&:hover": {
                  filter: "brightness(1.06)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 22px 40px -14px rgba(4,176,168,0.7)",
                },
              }}
            >
              Go to Homepage
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<ArrowBackIcon />}
              onClick={() => window.history.back()}
              sx={{
                px: 3.5,
                py: 1.35,
                fontSize: { xs: "14px", md: "15px" },
                fontWeight: 600,
                borderRadius: 999,
                borderColor: "rgba(4,176,168,0.5)",
                color: customColor.secondary,
                bgcolor: "#fff",
                transition: "transform .25s ease, border-color .25s ease, background-color .25s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  borderColor: customColor.primary,
                  bgcolor: customColor.light,
                },
              }}
            >
              Go Back
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
