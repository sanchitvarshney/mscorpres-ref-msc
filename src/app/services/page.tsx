"use client";

import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/reuseable/HeroSection";
import ServiceDetailCard from "@/components/reuseable/ServiceDetailCard";
import ManufacturerSection from "@/components/sections/ManufacturerSection";
import RefurbisherSection from "@/components/sections/RefurbisherSection";
import { cardsData } from "@/dummydata/dummyData";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Helper function to convert service title to URL-friendly ID
const titleToId = (title: string): string => {
  return title.toLowerCase().replace(/\s+/g, "-");
};

export default function ServicesPage() {
  const [isPageReady, setIsPageReady] = useState(false);
  // Initialize as null to ensure server and client match on first render
  const [targetId, setTargetId] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const heroImage =
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

  const serviceExplanations = [
    "Our IoT Manufacturing service delivers cutting-edge Internet of Things devices designed for seamless connectivity and smart functionality. We leverage advanced manufacturing techniques, quality components, and rigorous testing protocols to ensure every IoT device meets the highest industry standards. Our expert engineering team works closely with clients to understand their specific connectivity requirements and deliver customized IoT solutions that enable real-time data collection, remote monitoring, and intelligent automation for modern industrial applications.",
    "Our PCB Design service provides professional printed circuit board design solutions with precision engineering and optimized layouts. We utilize state-of-the-art design software and follow industry best practices to create high-quality PCBs that meet your exact specifications. Our experienced design engineers ensure optimal signal integrity, thermal management, and manufacturability. From schematic design to layout optimization and comprehensive testing, we deliver reliable PCBs that form the foundation of robust electronic systems.",
    "Our Device Refurbishment service transforms used electronic devices into like-new condition through comprehensive inspection, cleaning, repair, and restoration processes. We use only genuine parts and follow strict quality protocols to ensure every refurbished device meets or exceeds original specifications. Our certified technicians perform thorough testing and quality assurance checks, providing warranty coverage on all refurbished products. This cost-effective solution extends the lifespan of your electronic equipment while maintaining peak performance and contributing to environmental sustainability.",
    "Our ERP and MES solutions provide comprehensive enterprise resource planning and manufacturing execution systems that streamline your entire manufacturing operations. We integrate advanced software platforms that offer real-time visibility into production processes, inventory management, quality control, and business analytics. Our solutions help optimize production workflows, reduce waste, improve efficiency, and enable data-driven decision-making. From implementation to training and ongoing support, we ensure seamless integration with your existing systems and processes.",
    "Our Software Solutions for Electronics service delivers custom software development tailored specifically for electronics manufacturing and embedded systems. We develop firmware, embedded software, automation solutions, and manufacturing software that enhance productivity and operational efficiency. Our expert software engineers work with cutting-edge technologies to create solutions that integrate seamlessly with your hardware, enable real-time monitoring, automate processes, and provide intuitive user interfaces. From concept to deployment and maintenance, we provide end-to-end software solutions that drive innovation in your electronics operations.",
  ];

  // Mark component as mounted (client-side only)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Only run on client-side after mount to prevent hydration mismatch
    if (!isMounted) return;

    // Check if there's a hash in the URL on mount
    const checkHash = () => {
      if (typeof window !== 'undefined') {
        const hash = window.location.hash;
        if (hash) {
          const id = hash.substring(1);
          setTargetId(id);
        }
      }
    };

    checkHash();

    const timer = setTimeout(() => {
      setIsPageReady(true);
      // Check hash again after page is ready
      checkHash();
    }, 100);

    return () => clearTimeout(timer);
  }, [isMounted]);

  useEffect(() => {
    // Only run on client-side after mount and page ready
    if (!isMounted || !isPageReady) return;

    const scrollToSection = () => {
      if (typeof window === 'undefined') return;
      
      const hash = window.location.hash;
      if (!hash) return;

      const id = hash.substring(1);

      const attemptScroll = (retries = 10) => {
        const element = document.getElementById(id);

        if (element) {
          // Wait a bit longer to ensure animations have started/completed
          requestAnimationFrame(() => {
            setTimeout(() => {
              const headerOffset = 140;
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition =
                elementPosition + window.pageYOffset - headerOffset;

              // Scroll to the exact position
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
              });
            }, 100);
          });
        } else if (retries > 0) {
          setTimeout(() => attemptScroll(retries - 1), 100);
        }
      };

      // Increased delay to allow animations to complete
      setTimeout(() => {
        attemptScroll();
      }, 600);
    };

    scrollToSection();

    const handleHashChange = () => {
      if (typeof window === 'undefined') return;
      
      const hash = window.location.hash;
      if (hash) {
        const id = hash.substring(1);
        setTargetId(id);
      }
      scrollToSection();
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener("hashchange", handleHashChange);
      }
    };
  }, [isMounted, isPageReady]);

  return (
    <MainLayout>
      <div className="w-full min-h-screen">
        {/* Hero Section */}
        <HeroSection
          imageUrl={heroImage}
          alt="Services Hero"
          subtitle="OUR SERVICES"
          title="Comprehensive Electronics & Technology Solutions"
          description="We provide high-quality, reliable services designed to support your electronics and technology needs with efficiency and excellence. From IoT manufacturing to software solutions, we've got you covered."
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
              initial={false}
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
                your electronics and technology needs. Each service is backed by
                years of expertise and commitment to excellence.
              </Typography>
            </motion.div>

            {/* Individual Service Cards */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {cardsData.map((service: any, index: number) => {
                const serviceId = titleToId(service.title);
                // Only skip animation after component has mounted to avoid hydration mismatch
                // This ensures server and client render the same initial HTML
                const isTarget = isMounted && targetId === serviceId;
                return (
                  <ServiceDetailCard
                    key={index}
                    service={service}
                    index={index}
                    detailedExplanation={serviceExplanations[index]}
                    features={[
                      "Professional Service",
                      "Quality Assured",
                      "Expert Team",
                    ]}
                    animationDelay={index * 0.1}
                    id={serviceId}
                    skipAnimation={isTarget}
                  />
                );
              })}
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
