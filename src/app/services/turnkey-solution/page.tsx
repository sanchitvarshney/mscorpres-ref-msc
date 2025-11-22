"use client";

import React from "react";
import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/reuseable/HeroSection";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import { customColor } from "@/utils/theme/customColor";
import ManufacturerSection from "@/components/sections/ManufacturerSection";
import { turnkeySolutionFeatures } from "@/dummydata/servicesData";

export default function TurnkeySolutionPage() {
  return (
    <MainLayout>
      <div className="w-full min-h-screen">
        <HeroSection
          imageUrl={"/images/services.avif"}
          alt="Turnkey Solution Hero"
          subtitle="OUR SERVICES"
          title="Turnkey Solution"
          description="Complete end-to-end solutions from concept to delivery, handling every aspect of your project with expertise and precision."
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
          title="Complete Turnkey Solutions"
          subtitle="END-TO-END EXCELLENCE"
          description="We provide comprehensive turnkey solutions engineered for seamless project execution, from initial concept to final delivery. Our integrated approach handles design, manufacturing, assembly, testing, and quality assurance, ensuring every project is completed with precision, efficiency, and industry-best practices."
          imageUrl="/images/services.avif"
          features={turnkeySolutionFeatures}
          service={"Turnkey Solution"}
          description1="We provide reliable, comprehensive turnkey solutions—covering complete project management, design, manufacturing, assembly, and testing—tailored for diverse electronic applications. With advanced facilities and an experienced project management team, we ensure every project is executed to the highest quality standards. Our capabilities support both small-scale and large-scale production, delivering efficient, coordinated, and consistent results for all your electronic manufacturing needs."
          description2="Our integrated infrastructure and rigorous quality control workflows make us a trusted partner for complete turnkey solutions. With meticulous project management, precision manufacturing, and zero-defect standards, we ensure every project meets industry-grade reliability. Partner with us for exceptional service, streamlined communication, and cost-effective turnkey solutions tailored to your exact requirements."
        />
      </div>
    </MainLayout>
  );
}

