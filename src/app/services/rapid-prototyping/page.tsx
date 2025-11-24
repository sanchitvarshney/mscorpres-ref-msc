"use client";

import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/reuseable/HeroSection";
import ManufacturerSection from "@/components/sections/ManufacturerSection";
import { rapidPrototypingFeatures } from "@/dummydata/servicesData";

export default function RapidPrototypingPage() {
  return (
    <MainLayout>
      <div className="w-full min-h-screen">
        <HeroSection
       
          alt="Rapid Prototyping Hero"
          subtitle="OUR SERVICES"
          title="Rapid Prototyping"
          description="Fast-track your product development with our rapid prototyping services that bring your concepts to life quickly and efficiently."
          height={{
            xs: "60vh",
            md: "calc(100vh - 200px)",
          }}
          minHeight={{
            xs: "400px",
            md: "500px",
          }}
        />

        <ManufacturerSection
          title="Advanced Rapid Prototyping Solutions"
          subtitle="FAST-TRACK INNOVATION"
          description="We provide professional rapid prototyping services engineered for speed, functionality, and validation. From concept to functional prototype, our team ensures every prototype is built with precision, efficiency, and industry-best practices to support accelerated product development."
          imageUrl="/images/services.avif"
          features={rapidPrototypingFeatures}
          service={"Rapid Prototyping"}
          description1="We provide reliable, fast rapid prototyping services—covering concept development, functional prototyping, and design validation—tailored for diverse product applications. With advanced prototyping technologies and an experienced engineering team, we ensure every prototype is built to the highest quality standards. Our capabilities support both early-stage validation and pre-production testing, delivering efficient, accurate, and functional prototypes for all your product development needs."
          description2="Our advanced rapid prototyping infrastructure and rigorous testing workflows make us a trusted partner for high-quality prototype development. With meticulous design validation, functional testing, and rapid iteration capabilities, we ensure every prototype meets industry-grade standards. Partner with us for exceptional service, fast turnaround times, and cost-effective rapid prototyping solutions tailored to your exact requirements."
        />
      </div>
    </MainLayout>
  );
}

