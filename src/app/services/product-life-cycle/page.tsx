"use client";

import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/reuseable/HeroSection";

import ProductLifeCycle from "@/components/ProductLifeCycle";
const productFeatures = [
  {
    id: 1,
    title: "Lifecycle Planning",
    description:
      "We help you plan and optimize your product’s entire lifecycle—from initial concept to end-of-life—ensuring efficient management, cost control, and smooth operations at every stage.",
  },
  {
    id: 2,
    title: "Data & Documentation Management",
    description:
      "Our PLM services cover complete data handling, documentation, and revision control, maintaining accuracy, traceability, and the integrity of your product information throughout its lifecycle.",
  },
  {
    id: 3,
    title: "Change Management",
    description:
      "We enable seamless implementation of design updates, engineering changes, and product improvements while minimizing disruptions and ensuring consistent performance across all phases.",
  },
];

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
            md: "calc(100vh - 200px)",
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
