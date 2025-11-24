"use client";

import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/reuseable/HeroSection";
import ManufacturerSection from "@/components/sections/ManufacturerSection";
import { electronicsFeatures } from "@/dummydata/servicesData";

export default function ElectronicsPage() {
  return (
    <MainLayout>
      <div className="w-full min-h-screen">
        <HeroSection
     
          alt="Electronics Hero"
          subtitle="OUR SERVICES"
          title="Electronics"
          description="Comprehensive electronics solutions covering design, development, and manufacturing of electronic products and systems."
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
          title="Comprehensive Electronics Solutions"
          subtitle="ELECTRONIC EXCELLENCE"
          description="We provide comprehensive electronics solutions engineered for performance, reliability, and innovation. From design and development to manufacturing, our team ensures every electronic product is created with precision, efficiency, and industry-best practices to support high-quality electronic systems."
          imageUrl="/images/services.avif"
          features={electronicsFeatures}
          service={"Electronics"}
          description1="We provide reliable, high-quality electronics services—covering design, development, and manufacturing—tailored for diverse electronic applications. With advanced facilities and an experienced engineering team, we ensure every electronic product is built to the highest quality standards. Our capabilities support both prototype development and mass production, delivering efficient, accurate, and reliable electronic solutions for all your product needs."
          description2="Our advanced electronics infrastructure and rigorous quality control workflows make us a trusted partner for high-quality electronic products. With meticulous design validation, comprehensive testing, and industry-standard manufacturing, we ensure every product meets industry-grade reliability. Partner with us for exceptional service, scalable production, and cost-effective electronics solutions tailored to your exact requirements."
        />
      </div>
    </MainLayout>
  );
}

