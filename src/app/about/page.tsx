"use client";

import React, { Suspense, lazy } from "react";
import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/reuseable/HeroSection";
import DetailedAboutSection from "@/components/sections/DetailedAboutSection";

// Lazy load heavy components
const OurTeamSection = lazy(() => import("@/components/sections/OurTeamSection"));

export default function AboutPage() {

  return (
    <MainLayout>
      <div className="w-full min-h-screen">
        {/* Hero Section */}
        <HeroSection
          imageUrl={"/images/about.avif"}
          alt="About Us Hero"
          subtitle="ABOUT US"
          title="Leading Excellence in Electronics & Technology"
          description="With years of industry experience, we have established ourselves as a trusted partner in electronics and technology solutions. Our commitment to quality, innovation, and customer satisfaction drives everything we do."
          height={{
            xs: "60vh",
            md: "calc(100vh - 190px)",
          }}
          minHeight={{
            xs: "400px",
            md: "500px",
          }}
        />

        <DetailedAboutSection />

        <Suspense fallback={<div style={{ minHeight: "200px" }} />}>
          <OurTeamSection />
        </Suspense>


      </div>
    </MainLayout>
  );
}
