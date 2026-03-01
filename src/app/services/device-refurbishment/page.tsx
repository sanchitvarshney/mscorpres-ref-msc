"use client";

import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/reuseable/HeroSection";
import ManufacturerSection from "@/components/sections/ManufacturerSection";
import { deviceRefurbishmentFeatures } from "@/dummydata/servicesData";

export default function DeviceRefurbishmentPage() {
  return (
    <MainLayout>
      <div className="w-full min-h-screen">
        <HeroSection
          
          alt="Device Refurbishment Hero"
          subtitle="OUR SERVICES"
          title="Device Refurbishment"
          description="Transform used electronic devices into like-new condition through comprehensive inspection, cleaning, repair, and restoration processes."
          height={{
            xs: "30vh",
            md: "calc(100vh - 132px)",
          }}
         imageUrl="/images/manufac.mp4"
        />

        <ManufacturerSection
          title="Professional Device Refurbishment Solutions"
          subtitle="RESTORATION EXCELLENCE"
          description="We provide professional device refurbishment services engineered for quality restoration, reliability, and sustainability. From comprehensive inspection to complete restoration, our team ensures every device is refurbished with precision, efficiency, and industry-best practices to restore devices to like-new condition."
          imageUrl="/images/device.jpg"
          features={deviceRefurbishmentFeatures}
          service={"Device Refurbishment"}
          description1="We provide reliable, high-quality device refurbishment services—covering comprehensive inspection, cleaning, repair, and restoration—tailored for diverse electronic devices. With advanced testing equipment and an experienced technician team, we ensure every device is refurbished to the highest quality standards. Our capabilities support both consumer and commercial devices, delivering efficient, accurate, and sustainable refurbishment solutions for all your device restoration needs."
          description2="Our advanced refurbishment infrastructure and rigorous quality control workflows make us a trusted partner for high-quality device restoration. With meticulous inspections, genuine parts replacement, and comprehensive testing, we ensure every refurbished device meets or exceeds original specifications. Partner with us for exceptional service, secure data handling, and cost-effective refurbishment solutions tailored to your exact requirements."
        />
      </div>
    </MainLayout>
  );
}

