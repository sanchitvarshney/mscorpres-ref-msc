"use client";

import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/reuseable/HeroSection";
import ManufacturerSection from "@/components/sections/ManufacturerSection";
import { prototypeDesignFeatures } from "@/dummydata/servicesData";

export default function PrototypeDesignPage() {
  return (
    <MainLayout>
      <div className="w-full min-h-screen">
        <HeroSection
     
          alt="Prototype Design Hero"
          subtitle="OUR SERVICES"
          title="Prototype Design"
          description="Rapid prototyping services to transform your ideas into functional prototypes with speed and precision."
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
          title="Professional Prototype Design Solutions"
          subtitle="RAPID INNOVATION"
          description="We provide professional prototype design services engineered for speed, functionality, and validation. From concept development to functional prototypes, our team ensures every prototype is designed with precision, efficiency, and industry-best practices to support rapid product development and innovation."
          imageUrl="/images/prototyping.png"
          features={prototypeDesignFeatures}
          service={"Prototype Design"}
          description1="We provide reliable, rapid prototype design services—covering concept development, functional prototyping, and design validation—tailored for diverse electronic applications. With advanced prototyping tools and an experienced engineering team, we ensure every prototype is built to the highest quality standards. Our capabilities support both early-stage validation and pre-production testing, delivering efficient, accurate, and functional prototypes for all your product development needs."
          description2="Our advanced prototyping infrastructure and rigorous testing workflows make us a trusted partner for high-quality prototype development. With meticulous design validation, functional testing, and rapid iteration capabilities, we ensure every prototype meets industry-grade standards. Partner with us for exceptional service, fast turnaround times, and cost-effective prototype design solutions tailored to your exact requirements."
        />
      </div>
    </MainLayout>
  );
}

