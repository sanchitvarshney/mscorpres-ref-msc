"use client";

import { useTranslations } from "next-intl";
import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/reuseable/HeroSection";
import ManufacturerSection from "@/components/sections/ManufacturerSection";
import { firmwareEmbeddedSoftwareFeatureIcons } from "@/dummydata/servicesData";

export default function FirmwareEmbeddedSoftwarePage() {
  const t = useTranslations("Services");
  const p = t.raw("pages.firmwareEmbeddedSoftware") as Record<string, string>;
  const featureText = t.raw("features.firmwareEmbeddedSoftware") as { title: string; description: string }[];
  const features = featureText.map((f, i) => ({ ...f, icon: firmwareEmbeddedSoftwareFeatureIcons[i] }));

  return (
    <MainLayout>
      <div className="w-full min-h-screen">
        <HeroSection
          alt="Firmware & Embedded Software Hero"
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
          imageUrl="/images/embeded.webp"
          features={features}
          service={t("catalog.firmwareEmbeddedSoftware")}
          description1={p.description1}
          description2={p.description2}
        />
      </div>
    </MainLayout>
  );
}
