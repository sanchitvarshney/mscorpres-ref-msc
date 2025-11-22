"use client";

import React from "react";
import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/reuseable/HeroSection";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import { customColor } from "@/utils/theme/customColor";
import ManufacturerSection from "@/components/sections/ManufacturerSection";
import { productLifeCycleFeatures } from "@/dummydata/servicesData";

export default function ProductLifeCyclePage() {
  return (
    <MainLayout>
      <div className="w-full min-h-screen">
        <HeroSection
          imageUrl={"/images/services.avif"}
          alt="Product Life Cycle Hero"
          subtitle="OUR SERVICES"
          title="Product Life Cycle"
          description="Comprehensive product life cycle management from concept and design through manufacturing, support, and end-of-life planning."
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
          title="Comprehensive Product Life Cycle Solutions"
          subtitle="LIFECYCLE EXCELLENCE"
          description="We provide professional product lifecycle management services engineered for strategic planning, optimization, and value maximization. From concept to end-of-life, our team ensures every product stage is managed with precision, efficiency, and industry-best practices to support optimal product performance throughout its lifecycle."
          imageUrl="/images/services.avif"
          features={productLifeCycleFeatures}
          service={"Product Life Cycle"}
          description1="We provide reliable, comprehensive product lifecycle management services—covering concept, design, manufacturing, support, and end-of-life planning—tailored for diverse product requirements. With advanced planning tools and an experienced management team, we ensure every product stage is optimized for maximum value. Our capabilities support both new product launches and existing product optimization, delivering efficient, strategic, and value-driven lifecycle management for all your product needs."
          description2="Our advanced lifecycle management infrastructure and rigorous optimization workflows make us a trusted partner for high-quality product lifecycle services. With meticulous stage planning, continuous optimization, and strategic guidance, we ensure every product maintains optimal performance throughout its lifecycle. Partner with us for exceptional service, extended product value, and cost-effective lifecycle management solutions tailored to your exact requirements."
        />
      </div>
    </MainLayout>
  );
}

