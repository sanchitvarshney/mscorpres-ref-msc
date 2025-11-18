"use client";

import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselItem, defaultItems } from "@/dummydata/dummyData";
import { settings } from "@/utils/carouselSetting";

interface CarouselProps {
  items?: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        "& .slick-slider": {
          width: "100%",
        },
        "& .slick-dots": {
          bottom: 20,
          "& li button:before": {
            color: "#fff",
            fontSize: "12px",
          },
          "& li.slick-active button:before": {
            color: "#d32f2f",
          },
        },
        "& .slick-arrow": {
          zIndex: 1,
          "&:before": {
            color: "#fff",
            fontSize: "30px",
          },
          "&.slick-prev": {
            left: 20,
          },
          "&.slick-next": {
            right: 20,
          },
        },
      }}
    >
      <Slider {...settings}>
        {defaultItems.map((item: CarouselItem) => (
          <Box
            key={item.id}
            sx={{
              height: { xs: "300px", md: "500px" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: item.backgroundColor || "#263238",
              backgroundImage: item.image ? `url(${item.image})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
              "&::before": item.image
                ? {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                  }
                : {},
            }}
          >
            <Box
              sx={{
                textAlign: "center",
                color: "#fff",
                zIndex: 1,
                px: 3,
                maxWidth: "800px",
              }}
            >
              {item.title && (
                <Typography
                  variant="h2"
                  component="h1"
                  sx={{
                    fontSize: { xs: "2rem", md: "3.5rem" },
                    fontWeight: 700,
                    mb: 2,
                    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  }}
                >
                  {item.title}
                </Typography>
              )}
              {item.description && (
                <Typography
                  variant="h5"
                  component="p"
                  sx={{
                    fontSize: { xs: "1rem", md: "1.5rem" },
                    fontWeight: 400,
                    textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                  }}
                >
                  {item.description}
                </Typography>
              )}
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
