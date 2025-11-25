"use client";

import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/reuseable/HeroSection";
import ManufacturerSection from "@/components/sections/ManufacturerSection";
import { dfmSolutionFeatures } from "@/dummydata/servicesData";

export default function DFMSolutionPage() {
  return (
    <MainLayout>
      <div className="w-full min-h-screen">
        <HeroSection
       
          alt="DFM Solution Hero"
          subtitle="OUR SERVICES"
          title="DFM Solution"
          description="Design for Manufacturing solutions that optimize your products for efficient, cost-effective production processes."
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
          title="Advanced DFM Solution Services"
          subtitle="MANUFACTURING OPTIMIZATION"
          description="We provide professional Design for Manufacturing solutions engineered for efficiency, cost-effectiveness, and quality. From design analysis to manufacturability optimization, our team ensures every product is designed with precision, efficiency, and industry-best practices to support cost-effective production."
          imageUrl="/images/dfm.avif"
          features={dfmSolutionFeatures}
          service={"DFM Solution"}
          description1="We provide reliable, comprehensive DFM solution services—covering design analysis, manufacturability optimization, and cost reduction—tailored for diverse manufacturing requirements. With advanced analysis tools and an experienced engineering team, we ensure every design is optimized for efficient production. Our capabilities support both new product development and existing product optimization, delivering cost-effective, manufacturable, and quality-enhanced designs for all your manufacturing needs."
          description2="Our advanced DFM infrastructure and rigorous analysis workflows make us a trusted partner for high-quality design optimization. With meticulous design review, manufacturability assessment, and cost optimization, we ensure every product meets industry-grade manufacturing standards. Partner with us for exceptional service, faster production cycles, and cost-effective DFM solutions tailored to your exact requirements."
        />
      </div>
    </MainLayout>
  );
}

