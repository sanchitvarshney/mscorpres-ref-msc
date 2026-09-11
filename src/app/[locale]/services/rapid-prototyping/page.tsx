"use client";

import { useTranslations } from "next-intl";
import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/reuseable/HeroSection";
import ManufacturerSection from "@/components/sections/ManufacturerSection";
import { rapidPrototypingFeatureIcons } from "@/dummydata/servicesData";

export default function RapidPrototypingPage() {
  const t = useTranslations("Services");
  const p = t.raw("pages.rapidPrototyping") as Record<string, string>;
  const featureText = t.raw("features.rapidPrototyping") as { title: string; description: string }[];
  const features = featureText.map((f, i) => ({ ...f, icon: rapidPrototypingFeatureIcons[i] }));

  return (
    <MainLayout>
      <div className="w-full min-h-screen">
        <HeroSection
          alt="Rapid Prototyping Hero"
          subtitle={t("heroEyebrow")}
          title={p.heroTitle}
          description={p.heroDescription}
          height={{
            xs: "60vh",
            md: "calc(100vh - 148px)",
          }}
          minHeight={{
            xs: "400px",
            md: "500px",
          }}
        />

        <ManufacturerSection
          title={p.manufacturerTitle}
          subtitle={p.manufacturerSubtitle}
          description={p.manufacturerDescription}
          imageUrl="/images/about-section.jpg"
          features={features}
          service={t("catalog.rapidPrototyping")}
          description1={p.description1}
          description2={p.description2}
        />
      </div>
    </MainLayout>
  );
}
