"use client";

import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/reuseable/HeroSection";
import DetailedAboutSection from "@/components/sections/DetailedAboutSection";

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="w-full">
        <HeroSection
          alt="About Us Hero"
          subtitle="About Us"
          title="Leading Excellence in Electronics & Technology"
          description="With years of industry experience, we have established ourselves as a trusted partner in electronics and technology solutions. Our commitment to quality, innovation, and customer satisfaction drives everything we do."
          imageUrl="/images/pcb-video.mp4"
          height={{
            xs: "64vh",
            md: "calc(100vh - 132px)",
          }}
        />

        <DetailedAboutSection />
      </div>
    </MainLayout>
  );
}
