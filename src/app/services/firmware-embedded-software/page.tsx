"use client";

import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/reuseable/HeroSection";
import ManufacturerSection from "@/components/sections/ManufacturerSection";
import { firmwareEmbeddedSoftwareFeatures } from "@/dummydata/servicesData";

export default function FirmwareEmbeddedSoftwarePage() {
  return (
    <MainLayout>
      <div className="w-full min-h-screen">
        <HeroSection
          alt="Firmware & Embedded Software Hero"
          subtitle="OUR SERVICES"
          title="Firmware & Embedded Software"
          description="Professional firmware and embedded software development services for microcontrollers, IoT devices, and embedded systems with optimized performance and reliability."
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
          title="Advanced Firmware & Embedded Software Solutions"
          subtitle="EMBEDDED EXCELLENCE"
          description="We provide professional firmware and embedded software development services engineered for performance, reliability, and seamless hardware integration. From microcontroller firmware to real-time embedded systems, our team ensures every software solution is developed with precision, efficiency, and industry-best practices to support high-quality electronic products."
          imageUrl="/images/embeded.webp"
          features={firmwareEmbeddedSoftwareFeatures}
          service={"Firmware & Embedded Software"}
          description1="We provide reliable, high-quality firmware and embedded software solutions—covering microcontroller firmware, real-time systems, IoT device software, and embedded automation—tailored for diverse electronic applications. With advanced development tools and an experienced embedded engineering team, we ensure every firmware and embedded software solution is built to the highest quality standards. Our capabilities support various microcontrollers and embedded platforms, delivering efficient, secure, and reliable software solutions for all your embedded system needs."
          description2="Our advanced firmware development infrastructure and rigorous testing workflows make us a trusted partner for high-quality embedded software solutions. With meticulous code review, comprehensive hardware-in-the-loop testing, and industry-standard practices, we ensure every firmware and embedded software solution meets industry-grade reliability and performance. Partner with us for exceptional service, scalable solutions, and cost-effective firmware development tailored to your exact hardware and application requirements."
        />
      </div>
    </MainLayout>
  );
}

