"use client";

import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/reuseable/HeroSection";
import ServiceDetailCard from "@/components/reuseable/ServiceDetailCard";
import ManufacturerSection from "@/components/sections/ManufacturerSection";
import RefurbisherSection from "@/components/sections/RefurbisherSection";
import { cardsData } from "@/dummydata/dummyData";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const heroImage =
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

  // Detailed explanations for each service
  const serviceExplanations = [
    "Our premium cargo manufacturing service delivers state-of-the-art solutions designed for maximum durability and performance. We utilize advanced manufacturing techniques and quality materials to ensure every product meets the highest industry standards. Our team of expert engineers works closely with clients to understand their specific requirements and deliver customized solutions that exceed expectations.",
    "Our refurbishing services transform used cargo equipment into like-new condition through comprehensive inspection, cleaning, repair, and restoration processes. We use only genuine parts and follow strict quality protocols to ensure every refurbished item meets or exceeds original specifications. This cost-effective solution extends the lifespan of your equipment while maintaining peak performance.",
    "Our custom engineering service provides tailored solutions designed to meet unique MSC and industrial needs. We combine innovative design with practical engineering principles to create solutions that perfectly fit your operational requirements. From initial concept to final implementation, our expert team ensures every project is completed with precision and attention to detail.",
    "Our comprehensive quality inspection services ensure reliability, safety, and long-term performance of all cargo equipment. We conduct thorough inspections using advanced testing equipment and methodologies to identify potential issues before they become problems. Our certified inspectors follow international standards to provide you with detailed reports and recommendations.",
    "Our maintenance and support programs are designed to ensure maximum uptime and operational efficiency for your cargo equipment. We offer scheduled maintenance, emergency repair services, and ongoing technical support to keep your operations running smoothly. Our proactive approach helps prevent costly downtime and extends the life of your equipment.",
  ];

  return (
    <MainLayout>
      <div className="w-full min-h-screen">
        {/* Hero Section */}
        <HeroSection
          imageUrl={heroImage}
          alt="Services Hero"
          subtitle="OUR SERVICES"
          title="Comprehensive MSC & Logistics Solutions"
          description="We provide high-quality, reliable services designed to support your business with efficiency and excellence. From manufacturing to maintenance, we've got you covered."
          height={{
            xs: "60vh",
            md: "calc(100vh - 168px)",
          }}
          minHeight={{
            xs: "400px",
            md: "500px",
          }}
        />

        {/* Services Section */}
        <Box
          sx={{
            py: { xs: 2, md: 6 },
            px: { xs: 2, md: 4 },
            position: "relative",
            background:
              "linear-gradient(180deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)",
            overflow: "hidden",
          }}
        >
          <Container maxWidth="lg">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ textAlign: "center", marginBottom: "4rem" }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: "primary.main",
                  fontWeight: 600,
                  letterSpacing: 3,
                  mb: 2,
                  display: "block",
                  fontSize: "12px",
                }}
              >
                WHAT WE OFFER
              </Typography>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: "bold",
                  mb: 3,
                  color: "text.primary",
                  fontSize: { xs: "28px", md: "36px" },
                  position: "relative",
                  display: "inline-block",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -10,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 60,
                    height: 3,
                    background: (theme) =>
                      `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
                    borderRadius: 2,
                  },
                }}
              >
                Our Services
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  fontSize: "16px",
                  maxWidth: "700px",
                  mx: "auto",
                  lineHeight: 1.8,
                  mt: 4,
                }}
              >
                Explore our comprehensive range of services designed to meet all
                your MSC and logistics needs. Each service is backed by years of
                expertise and commitment to excellence.
              </Typography>
            </motion.div>

            {/* Individual Service Cards */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {cardsData.map((service: any, index: number) => (
                <ServiceDetailCard
                  key={index}
                  service={service}
                  index={index}
                  detailedExplanation={serviceExplanations[index]}
                  features={["Professional Service", "Quality Assured", "Expert Team"]}
                  animationDelay={index * 0.1}
                />
              ))}
            </Box>
          </Container>
        </Box>

        {/* Manufacturer Section */}
        <ManufacturerSection />

        {/* Refurbisher Section */}
        <RefurbisherSection />
      </div>
    </MainLayout>
  );
}
