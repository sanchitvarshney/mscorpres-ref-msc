"use client";

import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/reuseable/HeroSection";
import ManufacturerSection from "@/components/sections/ManufacturerSection";
import { softwareSolutionForElectronicsFeatures } from "@/dummydata/servicesData";

export default function SoftwareSolutionForElectronicsPage() {
  return (
    <MainLayout>
      <div className="w-full min-h-screen">
        <HeroSection
          alt="Software Solution for Electronics Hero"
          subtitle="OUR SERVICES"
          title="Software Solution for Electronics"
          description="Custom software development tailored specifically for electronics manufacturing and embedded systems."
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
          title="Advanced Software Solutions for Electronics"
          subtitle="SOFTWARE EXCELLENCE"
          description="We provide professional software development services engineered for electronics manufacturing and embedded systems. From firmware to manufacturing software, our team ensures every software solution is developed with precision, efficiency, and industry-best practices to support high-quality electronic operations."
          imageUrl="/images/soft.jpg"
          features={softwareSolutionForElectronicsFeatures}
          service={"Software Solution for Electronics"}
          description1="We provide reliable, high-quality software solutions for electronics—covering firmware, embedded software, automation, and manufacturing software—tailored for diverse electronic applications. With advanced development tools and an experienced software engineering team, we ensure every software solution is built to the highest quality standards. Our capabilities support both embedded systems and manufacturing automation, delivering efficient, secure, and reliable software solutions for all your electronic needs."
          description2="Our advanced software development infrastructure and rigorous testing workflows make us a trusted partner for high-quality software solutions. With meticulous code review, comprehensive testing, and industry-standard practices, we ensure every software solution meets industry-grade reliability and security. Partner with us for exceptional service, scalable solutions, and cost-effective software development tailored to your exact requirements."
        />
      </div>
    </MainLayout>
  );
}
