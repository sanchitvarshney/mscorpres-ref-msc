"use client";

import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/reuseable/HeroSection";
import DetailedAboutSection from "@/components/sections/DetailedAboutSection";

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="w-full min-h-screen">
        {/* Hero Section */}
        <HeroSection
          alt="About Us Hero"
          subtitle="ABOUT US"
          title="Leading Excellence in Electronics & Technology"
          description="With years of industry experience, we have established ourselves as a trusted partner in electronics and technology solutions. Our commitment to quality, innovation, and customer satisfaction drives everything we do."
          height={{
            xs: "30vh",
            md: "calc(100vh - 132px)",
          }}
         
          imageUrl="/images/pcb-video.mp4"
        />

        <DetailedAboutSection />
      </div>
    </MainLayout>
  );
}
