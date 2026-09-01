"use client";

import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/reuseable/HeroSection";
import CareersSection from "@/components/sections/CareersSection";

export default function CareersPage() {
  return (
    <MainLayout>
      <div className="w-full min-h-screen">

        <CareersSection />
      </div>
    </MainLayout>
  );
}
