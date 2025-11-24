"use client";

import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/reuseable/HeroSection";

import ProductLifeCycle from "@/components/ProductLifeCycle";
import { productFeatures } from "@/dummydata/dummyData";

export default function ProductLifeCyclePage() {
  return (
    <MainLayout>
      <div className="w-full min-h-screen">
        <HeroSection
          alt="Product Life Cycle Hero"
          subtitle="OUR SERVICES"
          title="Product Life Cycle"
          description="Comprehensive product life cycle management from concept and design through manufacturing, support, and end-of-life planning."
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
          title="Product Life Cycle"
          description="The Product Life Cycle (PLC) describes the stages a product goes through from its introduction to the market until its withdrawal. It helps businesses plan marketing, pricing, production, and investment strategies."
          imageUrl="/images/plc.png"
          features={productFeatures}
          service={"Managing Products from Concept to Completion"}
           />
      </div>
    </MainLayout>
  );
}
