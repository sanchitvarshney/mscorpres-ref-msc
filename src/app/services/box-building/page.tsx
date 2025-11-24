"use client";

import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/reuseable/HeroSection";
import ManufacturerSection from "@/components/sections/ManufacturerSection";
import { boxBuildingFeatures } from "@/dummydata/servicesData";

export default function BoxBuildingPage() {
  return (
    <MainLayout>
      <div className="w-full min-h-screen">
        <HeroSection
          alt="Box Building Hero"
          subtitle="OUR SERVICES"
          title="Box Building"
          description="Complete box building solutions for electronic assemblies with quality craftsmanship and attention to detail."
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
          title="Professional Box Building Solutions"
          subtitle="ASSEMBLY EXCELLENCE"
          description="We provide comprehensive box building services engineered for quality, reliability, and seamless integration. From component assembly to final product integration, our team ensures every box build is completed with precision, efficiency, and industry-best practices to support high-quality electronic products."
          imageUrl="/images/BOX-BUILD.png"
          features={boxBuildingFeatures}
          service={"Box Building"}
          description1="We provide reliable, high-quality box building services—covering complete electronic assembly, component integration, and final product assembly—tailored for diverse electronic applications. With advanced equipment and an experienced assembly team, we ensure every box build meets the highest quality standards. Our capabilities support both custom and standard box building requirements, delivering efficient, accurate, and consistent results for all your electronic manufacturing needs."
          description2="Our advanced infrastructure and rigorous quality control workflows make us a trusted partner for high-quality box building. With meticulous inspections, precision assembly processes, and zero-defect standards, we ensure every box build meets industry-grade reliability. Partner with us for exceptional service, fast turnaround times, and cost-effective box building solutions tailored to your exact requirements."
        />
      </div>
    </MainLayout>
  );
}

