"use client";

import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/reuseable/HeroSection";
import ManufacturerSection from "@/components/sections/ManufacturerSection";
import { iotManufacturingFeatures } from "@/dummydata/servicesData";

export default function IoTManufacturingPage() {
  return (
    <MainLayout>
      <div className="w-full min-h-screen">
        <HeroSection
     
          alt="IoT Manufacturing Hero"
          subtitle="OUR SERVICES"
          title="IoT Manufacturing"
          description="Cutting-edge Internet of Things devices designed for seamless connectivity and smart functionality."
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
          title="Advanced IoT Manufacturing Solutions"
          subtitle="SMART CONNECTIVITY"
          description="We provide professional IoT manufacturing services engineered for connectivity, reliability, and smart functionality. From sensor integration to cloud connectivity, our team ensures every IoT device is manufactured with precision, efficiency, and industry-best practices to support high-quality smart products."
          imageUrl="/images/iot-manu.png"
          features={iotManufacturingFeatures}
          service={"IoT Manufacturing"}
          description1="We provide reliable, high-quality IoT manufacturing services—covering smart device assembly, sensor integration, and connectivity solutions—tailored for diverse IoT applications. With advanced manufacturing equipment and an experienced engineering team, we ensure every IoT device is built to the highest quality standards. Our capabilities support both prototype development and mass production, delivering efficient, connected, and reliable IoT solutions for all your smart product needs."
          description2="Our advanced IoT manufacturing infrastructure and rigorous testing workflows make us a trusted partner for high-quality smart devices. With meticulous quality control, connectivity testing, and security validation, we ensure every IoT device meets industry-grade reliability and security standards. Partner with us for exceptional service, scalable production, and cost-effective IoT manufacturing solutions tailored to your exact requirements."
        />
      </div>
    </MainLayout>
  );
}

