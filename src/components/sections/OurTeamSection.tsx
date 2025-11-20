"use client";

import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { motion } from "framer-motion";
import { GroupsOutlined, RocketLaunchOutlined } from "@mui/icons-material";
import Image from "next/image";
import {
  containerVariants,
  itemVariants,
} from "@/utils/animationVarients/animation";
import { customColor } from "@/utils/theme/customColor";

const OurTeamSection: React.FC = () => {
  return (
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        background: "linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)",
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
                mb: 1,
                display: "block",
                fontSize: "12px",
              }}
            >
              OUR TEAM
            </Typography>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: "bold",
                mb: 1,
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
              Our Team: The Architects of Your Success
            </Typography>
          </motion.div>

          {/* Content Section */}
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
                    borderRadius: 4,
                    overflow: "hidden",
                    boxShadow: "0 15px 50px rgba(0,0,0,0.15)",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        "linear-gradient(135deg, rgba(4,176,168,0.15) 0%, rgba(2,82,78,0.15) 100%)",
                      zIndex: 1,
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: { xs: 350, md: 500 },
                    }}
                  >
                    <Image
                      src="/images/team.jpg"
                      alt="Our Team"
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
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 3,
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
                    <GroupsOutlined sx={{ fontSize: 36 }} />
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      color: "text.primary",
                      fontSize: { xs: "22px", md: "28px" },
                    }}
                  >
                    Building Success Together
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    mb: 3,
                    lineHeight: 1.9,
                    fontSize: "17px",
                  }}
                >
                  Our team at MsCorpres is made up of tech savvies, quick
                  thinkers and hard workers who are here to help your business
                  scale up. We have a mix of different skills, but we all share
                  one goal: to make your business grow fast.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    mb: 4,
                    lineHeight: 1.9,
                    fontSize: "17px",
                  }}
                >
                  We're ready to tackle any challenge quickly and help you
                  achieve success. Ready for your business to move faster? Reach
                  out to us now, and let's work together to speed up your path
                  to success.
                </Typography>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default OurTeamSection;
