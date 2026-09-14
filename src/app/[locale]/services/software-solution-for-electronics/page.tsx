"use client";

import { useTranslations } from "next-intl";
import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/reuseable/HeroSection";
import ManufacturerSection from "@/components/sections/ManufacturerSection";
import { softwareSolutionForElectronicsFeatureIcons } from "@/dummydata/servicesData";

export default function SoftwareSolutionForElectronicsPage() {
  const t = useTranslations("Services");
  const p = t.raw("pages.softwareSolutionForElectronics") as Record<string, string>;
  const featureText = t.raw("features.softwareSolutionForElectronics") as { title: string; description: string }[];
  const features = featureText.map((f, i) => ({ ...f, icon: softwareSolutionForElectronicsFeatureIcons[i] }));

  return (
    <MainLayout>
      <div className="w-full min-h-screen">
        <HeroSection
          alt="Software Solution for Electronics Hero"
          subtitle={t("heroEyebrow")}
          title={p.heroTitle}
          description={p.heroDescription}
          height={{
       xs: "clamp(460px, 82svh, 640px)",
            md: "calc(100vh - 34px)",
          }}
          imageUrl="/images/software.mp4"
        />

        <ManufacturerSection
          title={p.manufacturerTitle}
          subtitle={p.manufacturerSubtitle}
          description={p.manufacturerDescription}
          imageUrl="/images/soft.jpg"
          features={features}
          service={t("catalog.softwareSolutionForElectronics")}
          description1={p.description1}
          description2={p.description2}
        />
      </div>
    </MainLayout>
  );
}
