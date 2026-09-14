"use client";

import MainLayout from "@/components/MainLayout";
import CareersSection from "@/components/sections/CareersSection";

export default function CareersPage() {
  return (
    <MainLayout>
      <div className="w-full min-h-screen bg-transparent mt-20 sm:mt-10">

        <CareersSection />
      </div>
    </MainLayout>
  );
}
