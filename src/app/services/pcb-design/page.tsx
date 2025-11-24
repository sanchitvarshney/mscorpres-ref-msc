"use client";


import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/reuseable/HeroSection";
import ManufacturerSection from "@/components/sections/ManufacturerSection";
import { pcbFeatures } from "@/dummydata/servicesData";
import ProductLifeCycle from "@/components/ProductLifeCycle";

export default function PCBDesignPage() {
  return (
    <MainLayout>
      <div className="w-full min-h-screen">
        <HeroSection
          
          alt="PCB Design Hero"
          subtitle="OUR SERVICES"
          title="PCB Design"
          description="Professional printed circuit board design solutions with precision engineering and optimized layouts for your electronic systems."
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
          title="Advanced PCB Design Solutions"
          subtitle="ENGINEERING PRECISION"
          description="We provide professional PCB design services engineered for performance, reliability, and seamless integration. From schematic creation to multilayer layout optimization, our team ensures every PCB is designed with precision, efficiency, and industry-best practices to support high-quality electronic products."
          imageUrl="/images/pcb-services.jpg"
          features={pcbFeatures}
          service={"PCB"}
          description1="We provide reliable, high-precision PCB assembly services—covering SMT, through-hole, and mixed-technology assemblies—tailored for diverse electronic applications. With advanced equipment and an experienced engineering team, we ensure every board is assembled to the highest quality standards. Our capabilities support both HMLV (High-Mix Low-Volume) and LMHV (Low-Mix High-Volume) production, delivering efficient, accurate, and consistent results for all your electronic manufacturing needs."
          description2="Our advanced infrastructure and rigorous testing workflows make us a trusted partner for high-quality PCB assembly. With meticulous inspections, precision machinery, and zero-defect standards, we ensure every board meets industry-grade reliability. Partner with us for exceptional service, fast turnaround times, and cost-effective PCB assembly solutions tailored to your exact requirements."
        />
        <ProductLifeCycle service={""}  />
      </div>
    </MainLayout>
  );
}
