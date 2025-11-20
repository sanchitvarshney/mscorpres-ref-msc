"use client";

import React from "react";
import { Box, Typography, Avatar, Rating } from "@mui/material";
import { motion } from "framer-motion";
import { FormatQuote } from "@mui/icons-material";
import {
  cardVariants,
  containerVariants,
} from "@/utils/animationVarients/animation";
import { customColor } from "@/utils/theme/customColor";
import { defaultTestimonials, Testimonial } from "@/dummydata/dummyData";


interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
}



const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  title = "What Our Clients Say",
  subtitle = "TESTIMONIALS",
  testimonials = defaultTestimonials,
}) => {
  return (
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        position: "relative",
        background: customColor.light,
        overflow: "hidden",
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
            marginBottom: "2rem",
            width: "100%",
          }}
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
            {subtitle}
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: "bold",
              mb: 2,
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
                  `linear-gradient(90deg, transparent, ${customColor.primary}, transparent)`,
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
              lg: "repeat(2, 1fr)",
            },
            gap: 4,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={testimonial.id || index} variants={cardVariants}>
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
                    color: customColor.primary,
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
                    precision={0.5}
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
                    mb: 2,
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
                  src={testimonial?.image}
                    sx={{
                      width: { xs: 50, md: 60 },
                      height: { xs: 50, md: 60 },
                      bgcolor: customColor.primary,
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
                        color: "text.primary",
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
