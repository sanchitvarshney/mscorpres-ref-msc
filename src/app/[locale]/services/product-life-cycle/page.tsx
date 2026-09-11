"use client";

import { useTranslations } from "next-intl";
import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/reuseable/HeroSection";
import ProductLifeCycle from "@/components/ProductLifeCycle";

export default function ProductLifeCyclePage() {
  const t = useTranslations("Services");
  const p = t.raw("pages.productLifeCycle") as Record<string, string>;
  const features = t.raw("features.productLifeCycle") as { title: string; description: string }[];

  return (
    <MainLayout>
      <div className="w-full min-h-screen">
        <HeroSection
          alt="Product Life Cycle Hero"
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

        <ProductLifeCycle
          title={p.sectionTitle}
          description={p.sectionDescription}
          imageUrl="/images/plc.png"
          features={features}
          service={p.serviceLabel}
        />
      </div>
    </MainLayout>
  );
}
