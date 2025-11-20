"use client";

import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/reuseable/HeroSection";
import DetailedAboutSection from "@/components/sections/DetailedAboutSection";
import VisionMissionSection from "@/components/sections/VisionMissionSection";
import TeamSection from "@/components/sections/TeamSection";

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
            md: "calc(100vh - 168px)",
          }}
          minHeight={{
            xs: "400px",
            md: "500px",
          }}
        />

        <DetailedAboutSection />

        {/* Vision & Mission Section */}
        <VisionMissionSection />

        {/* Meet Our Team Section */}
        <TeamSection />
      </div>
    </MainLayout>
  );
}
