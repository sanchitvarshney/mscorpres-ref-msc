"use client";

import { useTranslations } from "next-intl";
import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/reuseable/HeroSection";
import DetailedAboutSection from "@/components/sections/DetailedAboutSection";

export default function AboutPage() {
  const t = useTranslations("About.hero");

  return (
    <MainLayout>
      <div className="w-full">
        <HeroSection
          alt="About Us Hero"
          subtitle={t("subtitle")}
          title={t("title")}
          description={t("description")}
          imageUrl="/images/pcb-video.mp4"
          height={{
        xs: "clamp(460px, 82svh, 640px)",
            md: "calc(100vh - 35px)",
          }}
        />

        <DetailedAboutSection />
      </div>
    </MainLayout>
  );
}
