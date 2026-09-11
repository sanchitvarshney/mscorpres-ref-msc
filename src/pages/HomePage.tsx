"use client";

import { Suspense, lazy } from "react";
import { Box } from "@mui/material";
import Carousel from "@/components/Carousel";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import { CircuitTraces, GlowRing } from "@/components/reuseable/decor";

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
        <GlowRing
          size={320}
          variant="dashed"
          color="rgba(4,176,168,0.18)"
          sx={{ top: "14%", right: -130 }}
        />
        <GlowRing size={420} sx={{ top: "44%", left: -160 }} color="rgba(2,82,78,0.1)" />
        <GlowRing size={260} sx={{ bottom: "8%", right: -90 }} />
        <CircuitTraces
          opacity={0.06}
          sx={{ top: "26%", left: 0, width: 420, height: 300 }}
        />
        <CircuitTraces
          opacity={0.06}
          sx={{ bottom: "18%", right: 0, width: 460, height: 320 }}
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
