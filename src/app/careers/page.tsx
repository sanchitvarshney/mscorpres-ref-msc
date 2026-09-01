"use client";

import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/reuseable/HeroSection";
import CareersSection from "@/components/sections/CareersSection";

export default function CareersPage() {
  return (
    <MainLayout>
      <div className="w-full min-h-screen">
        <HeroSection
          alt="Careers Hero"
          subtitle="JOIN OUR TEAM"
          title="Explore Career Opportunities"
          imageUrl="/images/elec.mp4"
          height={{ xs: "48vh", md: "58vh" }}
          minHeight={{ xs: "340px", md: "420px" }}
        />

        <CareersSection />
      </div>
    </MainLayout>
  );
}
