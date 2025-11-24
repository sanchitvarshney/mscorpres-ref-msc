"use client";

import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/reuseable/HeroSection";
import ManufacturerSection from "@/components/sections/ManufacturerSection";
import { erpAndMesFeatures } from "@/dummydata/servicesData";

export default function ERPAndMESPage() {
  return (
    <MainLayout>
      <div className="w-full min-h-screen">
        <HeroSection
       
          alt="ERP and MES Hero"
          subtitle="OUR SERVICES"
          title="ERP and MES"
          description="Comprehensive enterprise resource planning and manufacturing execution systems that streamline your entire manufacturing operations."
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
          title="Comprehensive ERP and MES Solutions"
          subtitle="OPERATIONAL EXCELLENCE"
          description="We provide professional ERP and MES solutions engineered for operational efficiency, real-time visibility, and business optimization. From enterprise resource planning to manufacturing execution, our team ensures every system is implemented with precision, efficiency, and industry-best practices to support streamlined manufacturing operations."
          imageUrl="/images/erp.png"
          features={erpAndMesFeatures}
          service={"ERP and MES"}
          description1="We provide reliable, comprehensive ERP and MES solutions—covering enterprise resource planning, manufacturing execution, inventory management, and business analytics—tailored for diverse manufacturing requirements. With advanced software platforms and an experienced implementation team, we ensure every system is configured to the highest quality standards. Our capabilities support both small-scale and enterprise-level operations, delivering efficient, integrated, and analytics-driven solutions for all your manufacturing needs."
          description2="Our advanced ERP and MES infrastructure and rigorous implementation workflows make us a trusted partner for high-quality enterprise systems. With meticulous system integration, real-time visibility, and comprehensive analytics, we ensure every solution meets industry-grade operational standards. Partner with us for exceptional service, streamlined operations, and cost-effective ERP and MES solutions tailored to your exact requirements."
        />
      </div>
    </MainLayout>
  );
}

