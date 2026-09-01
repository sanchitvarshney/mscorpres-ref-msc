"use client";

import { Suspense, lazy } from "react";
import { Box } from "@mui/material";
import Carousel from "@/components/Carousel";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CertificationsSection from "@/components/sections/CertificationsSection";

const TestimonialsSection = lazy(
  () => import("@/components/sections/TestimonialsSection")
);
const TrustedCompaniesSection = lazy(
  () => import("@/components/sections/TrustedCompaniesSection")
);
import { cardsData } from "@/dummydata/dummyData";

const HomePage = () => {
  return (
    <Box sx={{ position: "relative", zIndex: 1, isolation: "isolate" }}>
      {/* page-level decorative accents — sit behind the translucent sections */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "14%",
            right: "-130px",
            width: 320,
            height: 320,
            borderRadius: "50%",
            border: "1.5px dashed rgba(4,176,168,0.18)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "44%",
            left: "-160px",
            width: 420,
            height: 420,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(2,82,78,0.10), transparent 70%)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "8%",
            right: "-90px",
            width: 260,
            height: 260,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(4,176,168,0.12), transparent 70%)",
          }}
        />
      </Box>

      <Carousel />

      <CertificationsSection />

      <ServicesSection services={cardsData} />

      <AboutSection />

      <Suspense fallback={<div style={{ minHeight: "200px" }} />}>
        <TestimonialsSection />
      </Suspense>

      <Suspense fallback={<div style={{ minHeight: "200px" }} />}>
        <TrustedCompaniesSection />
      </Suspense>
    </Box>
  );
};

export default HomePage;
