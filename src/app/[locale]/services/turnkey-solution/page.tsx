"use client";

import { useTranslations } from "next-intl";
import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/reuseable/HeroSection";
import ManufacturerSection from "@/components/sections/ManufacturerSection";
import { turnkeySolutionFeatureIcons } from "@/dummydata/servicesData";

export default function TurnkeySolutionPage() {
  const t = useTranslations("Services");
  const p = t.raw("pages.turnkeySolution") as Record<string, string>;
  const featureText = t.raw("features.turnkeySolution") as { title: string; description: string }[];
  const features = featureText.map((f, i) => ({ ...f, icon: turnkeySolutionFeatureIcons[i] }));

  return (
    <MainLayout>
      <div className="w-full min-h-screen">
        <HeroSection
          alt="Turnkey Solution Hero"
          subtitle={t("heroEyebrow")}
          title={p.heroTitle}
          description={p.heroDescription}
          height={{
            xs: "30vh",
            md: "calc(100vh - 132px)",
          }}
          imageUrl="/images/manufac.mp4"
        />

        <ManufacturerSection
          title={p.manufacturerTitle}
          subtitle={p.manufacturerSubtitle}
          description={p.manufacturerDescription}
          imageUrl="/images/trunKey2.png"
          features={features}
          service={t("catalog.turnkeySolution")}
          description1={p.description1}
          description2={p.description2}
        />
      </div>
    </MainLayout>
  );
}
