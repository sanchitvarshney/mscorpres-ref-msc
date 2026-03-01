"use client";

import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  BusinessOutlined,
  GroupsOutlined,
  EmojiEventsOutlined,
  ShieldOutlined,
  EngineeringOutlined,
  LocalShippingOutlined,
  VerifiedUserOutlined,
  TrendingUpOutlined,
} from "@mui/icons-material";
import {
  containerVariants,
  itemVariants,
} from "@/utils/animationVarients/animation";
import { customColor } from "@/utils/theme/customColor";
import VisionMissionSection from "./VisionMissionSection";

interface StatItem {
  icon: React.ReactNode;
  number: string;
  label: string;
  description?: string;
}

interface ValueItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface DetailedAboutSectionProps {
  title?: string;
  subtitle?: string;
  mainDescription?: string;
  secondParagraph?: string;
  thirdParagraph?: string;
  stats?: StatItem[];
  values?: ValueItem[];
  imageUrl?: string;
  imageAlt?: string;
}

const defaultStats: StatItem[] = [
  {
    icon: <BusinessOutlined sx={{ fontSize: 40 }} />,
    number: "15+",
    label: "Years Experience",
    description: "Serving clients with excellence",
  },
  {
    icon: <GroupsOutlined sx={{ fontSize: 40 }} />,
    number: "500+",
    label: "Happy Clients",
    description: "Trusted by businesses worldwide",
  },
  {
    icon: <EmojiEventsOutlined sx={{ fontSize: 40 }} />,
    number: "1000+",
    label: "Projects Completed",
    description: "Successfully delivered solutions",
  },
  {
    icon: <ShieldOutlined sx={{ fontSize: 40 }} />,
    number: "100%",
    label: "Satisfaction Rate",
    description: "Client satisfaction guaranteed",
  },
];

const defaultValues: ValueItem[] = [
  {
    icon: <EngineeringOutlined sx={{ fontSize: 36 }} />,
    title: "Innovation",
    description:
      "We bring forward-thinking ideas and advanced technologies to every project that push your products ahead of the competition.",
  },
  {
    icon: <VerifiedUserOutlined sx={{ fontSize: 36 }} />,
    title: "Quality",
    description:
      "We deliver products that meet strict performance standards, backed by thorough testing and reliable engineering practices.",
  },
  {
    icon: <LocalShippingOutlined sx={{ fontSize: 36 }} />,
    title: "Reliability",
    description:
      "We provide dependable manufacturing and service delivery, ensuring your products arrive on time and perform as expected.",
  },
  {
    icon: <TrendingUpOutlined sx={{ fontSize: 36 }} />,
    title: "Excellence",
    description:
      "We consistently raise the bar—offering refined processes, detailed craftsmanship, and results that elevate your business.",
  },
];


const DetailedAboutSection: React.FC<DetailedAboutSectionProps> = ({
  title = "Our Journey of Excellence",
  subtitle = "ABOUT OUR COMPANY",
  mainDescription = "Founded with a vision to revolutionize the electronics and technology industry, we have grown from a small startup to a trusted leader in IoT manufacturing, PCB design, device refurbishment, ERP/MES solutions, and software development for electronics. Our journey has been marked by continuous innovation, unwavering commitment to quality, and a deep understanding of our clients' needs.",
  secondParagraph = "Over the years, we have built a reputation for delivering exceptional results through our comprehensive range of services including IoT Manufacturing, PCB Design, Device Refurbishment, ERP and MES solutions, and Software Solutions for Electronics. Our state-of-the-art facilities, combined with our expert team of professionals, enable us to handle projects of any scale with precision and efficiency.",
  thirdParagraph = "What sets us apart is our client-centric approach. We don't just provide services; we build lasting partnerships. Every project is an opportunity to understand our clients' unique challenges and deliver tailored solutions that drive their success. Our commitment to sustainability and environmental responsibility also ensures that our operations contribute positively to the industry and the planet.",
  stats = defaultStats,
  values = defaultValues,
  imageUrl = "/images/mix-about.jpg",
  imageAlt = "Our Company",
}) => {
  return (
    <Box
      sx={{
        py: { xs: 2, md: 6 },
        px: { xs: 2, md: 4 },
        background:
          "linear-gradient(180deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Header Section */}
          <motion.div
            variants={itemVariants}
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
            <Typography
              variant="overline"
              sx={{
                color: customColor.primary,
                fontWeight: 600,
                letterSpacing: 3,
                mb: 2,
                display: "block",
                fontSize: "12px",
              }}
            >
              {subtitle}
            </Typography>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: "bold",

                color: "text.primary",
                fontSize: { xs: "28px", md: "40px" },
                position: "relative",
                display: "inline-block",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -10,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 80,
                  height: 4,
                  background: (theme) =>
                    `linear-gradient(90deg, transparent, ${customColor.primary}, transparent)`,
                  borderRadius: 2,
                },
              }}
            >
              {title}
            </Typography>
          </motion.div>

          {/* Main Content with Image */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 6,
              alignItems: "center",
              mb: 3,
            }}
          >
            {/* Left Side - Image */}
            <Box sx={{ flex: 1, width: { xs: "100%", md: "45%" } }}>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Box
                  sx={{
                    position: "relative",
              
                    overflow: "hidden",
                    boxShadow: "0 15px 50px rgba(0,0,0,0.15)",
                  
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: { xs: 350, md: 600 },
                    }}
                  >
                    <Image
                      src={imageUrl}
                      alt={imageAlt}
                      fill
                      style={{ objectFit: "cover" }}
                      loading="lazy"
                      quality={85}
                    />
                  </Box>
                </Box>
              </motion.div>
            </Box>

            {/* Right Side - Content */}
            <Box sx={{ flex: 1, width: { xs: "100%", md: "55%" } }}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                    color: "text.primary",
                    fontSize: { xs: "22px", md: "28px" },
                  }}
                >
                  Our Story
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    mb: 3,
                    lineHeight: 1.9,
                    fontSize: "17px",
                         textAlign:"justify"
                  }}
                >
                  {mainDescription}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    mb: 3,
                    lineHeight: 1.9,
                    fontSize: "17px",
                         textAlign:"justify"
                  }}
                >
                  {secondParagraph}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    mb: 4,
                    lineHeight: 1.9,
                    fontSize: "17px",
                         textAlign:"justify"
                  }}
                >
                  {thirdParagraph}
                </Typography>
              </motion.div>
            </Box>
          </Box>

       

          {/* Vision & Mission Section */}
          <VisionMissionSection />
          <motion.div variants={containerVariants}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                my: 3,
                textAlign: "center",
                color: "text.primary",
                fontSize: { xs: "22px", md: "28px" },
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -10,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 80,
                  height: 4,
                  background: (theme) =>
                    `linear-gradient(90deg, transparent, ${customColor.primary}, transparent)`,
                  borderRadius: 2,
                },
              }}
            >
              Our Core Values
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                textAlign: "center",
                mb: 5,
                fontSize: "16px",
                maxWidth: "600px",
                mx: "auto",
              }}
            >
              The principles that guide everything we do
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div variants={itemVariants} key={index}>
                  <Box
                    sx={{
                      background:
                        "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                      borderRadius: 3,
                      p: 4,
                      height: "100%",
                      border: "2px solid transparent",
                      transition: "all 0.3s ease",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                        borderColor: customColor.primary,
                        background: "white",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",

                        mb: 2,
                      }}
                    >
                      <Box
                        sx={{
                          color: customColor.primary,
                          mr: 2,
                          p: 1.5,
                          borderRadius: 2,
                          backgroundColor: customColor.light,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {value.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: "text.primary",
                          fontSize: { xs: "18px", md: "20px" },
                          flex: 1,
                        }}
                      >
                        {value.title}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.7,
                        fontSize: "15px",
                             textAlign:"justify"
                      }}
                    >
                      {value.description}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default DetailedAboutSection;
