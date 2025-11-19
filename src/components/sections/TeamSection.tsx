"use client";

import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
} from "@/utils/animationVarients/animation";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  introduction: string;
}

interface TeamSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  teamMembers?: TeamMember[];
}

const defaultTeamMembers: TeamMember[] = [
  {
    id: 1,
    name: "John Anderson",
    position: "Chief Executive Officer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    introduction:
      "With over 20 years of experience in logistics and manufacturing, John leads our company with a vision for innovation and excellence.",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    position: "Operations Director",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    introduction:
      "Sarah brings extensive expertise in supply chain management and has been instrumental in streamlining our operations for maximum efficiency.",
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "Head of Engineering",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    introduction:
      "Michael is a seasoned engineer with a passion for innovation, leading our technical team to develop cutting-edge solutions.",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    position: "Quality Assurance Manager",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    introduction:
      "Emily ensures that every product meets our rigorous quality standards, maintaining our reputation for excellence and reliability.",
  },
  {
    id: 5,
    name: "David Thompson",
    position: "Sales & Business Development",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    introduction:
      "David excels at building strong client relationships and identifying new opportunities to grow our business partnerships.",
  },
  {
    id: 6,
    name: "Lisa Park",
    position: "Customer Success Manager",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    introduction:
      "Lisa is dedicated to ensuring our clients receive exceptional service and support throughout their journey with us.",
  },
];

const TeamSection: React.FC<TeamSectionProps> = ({
  title = "Meet Our Team",
  subtitle = "OUR TEAM",
  description = "Our diverse team of experts brings together years of experience, passion, and dedication to deliver exceptional results for our clients.",
  teamMembers = defaultTeamMembers,
}) => {
  return (
    <Box
      sx={{
        py: { xs: 2, md: 6 },
        px: { xs: 2, md: 4 },
        background: "linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)",
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
              {subtitle}
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
              {title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                fontSize: "16px",
                maxWidth: "700px",
                mx: "auto",
                lineHeight: 1.8,
              }}
            >
              {description}
            </Typography>
          </motion.div>

          {/* Team Members Grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: 4,
              justifyContent: "center",
            }}
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    background: "white",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    height: "100%",
                    width: "100%",
                    maxWidth: "400px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Image Section */}
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: { xs: 280, md: 320 },
                      overflow: "hidden",
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    }}
                  >
                    <Box
                      component="img"
                      src={member.image}
                      alt={member.name}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.1)",
                        },
                      }}
                    />
                    {/* Overlay Gradient */}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "40%",
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)",
                      }}
                    />
                  </Box>

                  {/* Content Section */}
                  <Box
                    sx={{
                      p: 3,
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 0.5,
                        color: "text.primary",
                        fontSize: { xs: "18px", md: "20px" },
                      }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "primary.main",
                        mb: 2,
                        fontWeight: 500,
                        fontSize: "14px",
                      }}
                    >
                      {member.position}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.7,
                        fontSize: "14px",
                        flexGrow: 1,
                      }}
                    >
                      {member.introduction}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default TeamSection;
