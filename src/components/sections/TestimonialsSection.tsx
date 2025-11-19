"use client";

import React from "react";
import { Box, Typography, Avatar, Rating } from "@mui/material";
import { motion } from "framer-motion";
import { FormatQuote } from "@mui/icons-material";
import { cardVariants, containerVariants } from "@/utils/animationVarients/animation";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image?: string;
  rating: number;
  comment: string;
}

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Smith",
    position: "CEO",
    company: "Tech Solutions Inc.",
    rating: 5,
    comment:
      "Outstanding service and exceptional quality! The team delivered exactly what we needed on time and within budget. Highly recommended for anyone looking for reliable logistics solutions.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Operations Manager",
    company: "Global Trade Co.",
    rating: 5,
    comment:
      "Professional, efficient, and reliable. Their expertise in cargo handling and logistics has significantly improved our operations. The customer service is top-notch!",
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "Director",
    company: "International Shipping Ltd.",
    rating: 5,
    comment:
      "We've been working with them for over 3 years and they never disappoint. Their attention to detail and commitment to excellence is remarkable. Truly a trusted partner.",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    position: "Supply Chain Manager",
    company: "Manufacturing Corp.",
    rating: 5,
    comment:
      "Excellent communication throughout the entire process. They understand our needs and always go the extra mile. The quality of service is consistently outstanding.",
  },
  {
    id: 5,
    name: "David Williams",
    position: "VP Logistics",
    company: "Distribution Network",
    rating: 5,
    comment:
      "Best logistics partner we've ever worked with. Their innovative solutions and professional approach have helped us streamline our operations significantly.",
  },
  {
    id: 6,
    name: "Lisa Anderson",
    position: "Project Manager",
    company: "Enterprise Solutions",
    rating: 5,
    comment:
      "Reliable, professional, and results-driven. They consistently exceed our expectations and deliver exceptional value. Highly satisfied with their services!",
  },
];

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  title = "What Our Clients Say",
  subtitle = "TESTIMONIALS",
  testimonials = defaultTestimonials,
}) => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 4 },
        position: "relative",
        background: "#c9d4e5",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: "50%",
 
          zIndex: 0,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: -150,
          left: -150,
          width: 500,
          height: 500,
          borderRadius: "50%",
   
          zIndex: 0,
        },
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Header */}
        <motion.div
          variants={cardVariants}
          style={{
            textAlign: "center",
            marginBottom: "4rem",
            width: "100%",
          }}
        >
          <Typography
            variant="overline"
            sx={{
                 color: "text.primary",
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
              color: "white",
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
                background: "rgba(255, 255, 255, 0.8)",
                borderRadius: 2,
              },
            }}
          >
            {title}
          </Typography>
        </motion.div>

        {/* Testimonials Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            },
            gap: 4,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={testimonial.id} variants={cardVariants}>
              <Box
                sx={{
                  background: "rgba(255, 255, 255, 0.95)",
                  borderRadius: 3,
                  p: { xs: 3, md: 4 },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 15px 50px rgba(0,0,0,0.2)",
                  },
                }}
              >
                {/* Quote Icon */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    color: "primary.main",
                    opacity: 0.1,
                    "& svg": {
                      fontSize: 60,
                    },
                  }}
                >
                  <FormatQuote />
                </Box>

                {/* Rating */}
                <Box sx={{ mb: 2, mt: 1 }}>
                  <Rating
                    value={testimonial.rating}
                    readOnly
                    sx={{
                      "& .MuiRating-iconFilled": {
                        color: "#ffc107",
                      },
                    }}
                  />
                </Box>

                {/* Comment */}
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.8,
                    fontSize: "15px",
                    mb: 3,
                    flexGrow: 1,
                    fontStyle: "italic",
                  }}
                >
                  "{testimonial.comment}"
                </Typography>

                {/* Client Info */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    pt: 2,
                    borderTop: "1px solid rgba(0,0,0,0.1)",
                  }}
                >
                  <Avatar
                    sx={{
                      width: { xs: 50, md: 60 },
                      height: { xs: 50, md: 60 },
                      bgcolor: "primary.main",
                      fontSize: { xs: "20px", md: "24px" },
                      fontWeight: "bold",
                    }}
                  >
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </Avatar>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: "text.primary",
                        fontSize: { xs: "16px", md: "18px" },
                        mb: 0.5,
                      }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        fontSize: { xs: "13px", md: "14px" },
                      }}
                    >
                      {testimonial.position}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "primary.main",
                        fontSize: { xs: "12px", md: "13px" },
                        fontWeight: 500,
                      }}
                    >
                      {testimonial.company}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </motion.div>
    </Box>
  );
};

export default TestimonialsSection;

