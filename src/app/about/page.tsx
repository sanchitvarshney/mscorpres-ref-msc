"use client";

import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/reuseable/HeroSection";
import DetailedAboutSection from "@/components/sections/DetailedAboutSection";
import VisionMissionSection from "@/components/sections/VisionMissionSection";
import TeamSection from "@/components/sections/TeamSection";

export default function AboutPage() {
  const heroImage =
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80";

  return (
    <MainLayout>
      <div className="w-full min-h-screen">
        {/* Hero Section */}
        <HeroSection
          imageUrl={heroImage}
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
