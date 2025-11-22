"use client";

import React from "react";
import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/reuseable/HeroSection";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import { customColor } from "@/utils/theme/customColor";
import ManufacturerSection from "@/components/sections/ManufacturerSection";
import { skdCkdDesignFeatures } from "@/dummydata/servicesData";

export default function SKDAndCKDDesignPage() {
  return (
    <MainLayout>
      <div className="w-full min-h-screen">
        <HeroSection
          imageUrl={"/images/services.avif"}
          alt="SKD and CKD Design Hero"
          subtitle="OUR SERVICES"
          title="SKD and CKD Design"
          description="Semi-Knocked Down (SKD) and Completely Knocked Down (CKD) design solutions for efficient manufacturing and assembly processes."
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
          title="SKD and CKD Design Solutions"
          subtitle="MODULAR DESIGN EXCELLENCE"
          description="We provide professional SKD and CKD design services engineered for efficient manufacturing, optimized logistics, and flexible assembly. From modular component design to assembly-optimized packaging, our team ensures every product is designed with precision, efficiency, and industry-best practices to support cost-effective global manufacturing."
          imageUrl="/images/services.avif"
          features={skdCkdDesignFeatures}
          service={"SKD and CKD Design"}
          description1="We provide reliable, efficient SKD and CKD design services—covering Semi-Knocked Down and Completely Knocked Down solutions—tailored for diverse manufacturing and logistics requirements. With advanced design tools and an experienced engineering team, we ensure every product is designed for optimal assembly efficiency. Our capabilities support both regional and global manufacturing strategies, delivering cost-effective, logistics-optimized, and assembly-friendly designs for all your manufacturing needs."
          description2="Our advanced design infrastructure and rigorous optimization workflows make us a trusted partner for high-quality SKD and CKD solutions. With meticulous design validation, assembly optimization, and cost-effective packaging, we ensure every product meets industry-grade manufacturing standards. Partner with us for exceptional service, flexible manufacturing options, and cost-effective SKD/CKD design solutions tailored to your exact requirements."
        />
      </div>
    </MainLayout>
  );
}

