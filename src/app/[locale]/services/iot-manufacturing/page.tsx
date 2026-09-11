"use client";

import { useTranslations } from "next-intl";
import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/reuseable/HeroSection";
import ManufacturerSection from "@/components/sections/ManufacturerSection";
import { iotManufacturingFeatureIcons } from "@/dummydata/servicesData";

export default function IoTManufacturingPage() {
  const t = useTranslations("Services");
  const p = t.raw("pages.iotManufacturing") as Record<string, string>;
  const featureText = t.raw("features.iotManufacturing") as { title: string; description: string }[];
  const features = featureText.map((f, i) => ({ ...f, icon: iotManufacturingFeatureIcons[i] }));

  return (
    <MainLayout>
      <div className="w-full min-h-screen">
        <HeroSection
          alt="IoT Manufacturing Hero"
          subtitle={t("heroEyebrow")}
          title={p.heroTitle}
          description={p.heroDescription}
          height={{
            xs: "30vh",
            md: "calc(100vh - 148px)",
          }}
          imageUrl="/images/manufac.mp4"
        />

        <ManufacturerSection
          title={p.manufacturerTitle}
          subtitle={p.manufacturerSubtitle}
          description={p.manufacturerDescription}
          imageUrl="/images/iot-manu.png"
          features={features}
          service={t("catalog.iotManufacturing")}
          description1={p.description1}
          description2={p.description2}
        />
      </div>
    </MainLayout>
  );
}
