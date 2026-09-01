"use client";

import React, { useMemo, useRef, useState } from "react";
import Slider, { Settings } from "react-slick";
import { Box, Button, Typography } from "@mui/material";
import {
  ArrowForwardRounded,
} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselItem, defaultItems } from "@/dummydata/dummyData";
import { settings as baseSettings } from "@/utils/carouselSetting";
import { customColor } from "@/utils/theme/customColor";

interface CarouselProps {
  items?: CarouselItem[];
}

const AUTOPLAY_MS = 6000;
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

const kickers = [
  "Your Trusted Partner",
  "Precision & Quality",
  "Complete Solutions",
];

const ctas = [
  { label: "Get a Quote", href: "/contact" },
  { label: "Discover More", href: "/about" },
];

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const data = items && items.length ? items : defaultItems;
  const sliderRef = useRef<Slider>(null);
  const [current, setCurrent] = useState(0);

  const settings: Settings = useMemo(
    () => ({
      ...baseSettings,
      arrows: false,
      dots: false,
      autoplay: true,
      autoplaySpeed: AUTOPLAY_MS,
      speed: 900,
      cssEase: EASE,
      // autoplay runs uninterrupted — hovering the hero does nothing
      pauseOnHover: false,
      pauseOnFocus: false,
      pauseOnDotsHover: false,
      waitForAnimate: false,
      beforeChange: (_: number, next: number) => setCurrent(next),
    }),
    []
  );

  const goTo = (i: number) => sliderRef.current?.slickGoTo(i);

  const active = data[current] ?? data[0];

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        bgcolor: "#05201e",
        height: {
          xs: "clamp(460px, 82svh, 640px)",
          md: "calc(100vh - 130px)",
        },
        "& .slick-slider, & .slick-list, & .slick-track": { height: "100%" },
        "& .slick-slide > div": { height: "100%" },
        // Ken Burns — the active image drifts in slowly
        "& .kb-frame": {
          transform: "scale(1.001)",
          transition: `transform ${AUTOPLAY_MS + 1400}ms linear`,
        },
        "& .slick-current .kb-frame": { transform: "scale(1.12)" },
        "@media (prefers-reduced-motion: reduce)": {
          "& .kb-frame, & .slick-current .kb-frame": {
            transform: "none",
            transition: "none",
          },
        },
      }}
    >
      <Slider ref={sliderRef} {...settings}>
        {data.map((item) => (
          <Box key={item.id} sx={{ position: "relative", height: "100%" }}>
            <Box
              className="kb-frame"
              sx={{ position: "absolute", inset: 0, willChange: "transform" }}
            >
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.title || "MsCorpres"}
                  fill
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                  quality={85}
                  priority={item.id === data[0]?.id}
                  loading={item.id === data[0]?.id ? "eager" : "lazy"}
                />
              )}
            </Box>

            {/* scrim: darker on the left where the copy sits */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "linear-gradient(90deg, rgba(4,20,19,0.9) 0%, rgba(4,20,19,0.62) 40%, rgba(4,20,19,0.2) 74%, rgba(4,20,19,0.03) 100%), linear-gradient(0deg, rgba(4,20,19,0.66) 0%, rgba(4,20,19,0) 46%)",
              }}
            />
          </Box>
        ))}
      </Slider>

      {/* Copy layer */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          pointerEvents: "none",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 1240,
            mx: "auto",
            px: { xs: 3, sm: 5, md: 8, lg: 10 },
          }}
        >
          <Box
            key={current}
            sx={{
              maxWidth: 640,
              color: "#fff",
              pointerEvents: "auto",
              "@keyframes heroRise": {
                from: { opacity: 0, transform: "translateY(26px)" },
                to: { opacity: 1, transform: "translateY(0)" },
              },
              "& > *": {
                animation: `heroRise 0.62s ${EASE} both`,
              },
              "& > *:nth-of-type(1)": { animationDelay: "0.05s" },
              "& > *:nth-of-type(2)": { animationDelay: "0.14s" },
              "& > *:nth-of-type(3)": { animationDelay: "0.23s" },
              "& > *:nth-of-type(4)": { animationDelay: "0.32s" },
              "@media (prefers-reduced-motion: reduce)": {
                "& > *": { animation: "none" },
              },
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.25,
                mb: { xs: 1.5, md: 2 },
              }}
            >
              <Box
                sx={{
                  width: 34,
                  height: 2,
                  borderRadius: 2,
                  bgcolor: customColor.primary,
                }}
              />
              <Typography
                sx={{
                  fontSize: { xs: 11, md: 12.5 },
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                {kickers[current % kickers.length]}
              </Typography>
            </Box>

            <Typography
              component="h1"
              sx={{
                fontSize: { xs: "2.15rem", sm: "2.8rem", md: "3.7rem" },
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                mb: { xs: 1.5, md: 2.5 },
                textWrap: "balance",
              }}
            >
              {active?.title}
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "0.95rem", md: "1.2rem" },
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.82)",
                maxWidth: { xs: "100%", md: 520 },
                mb: { xs: 3, md: 4 },
              }}
            >
              {active?.description}
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
              <Button
                component={Link}
                href={ctas[0].href}
                endIcon={<ArrowForwardRounded />}
                disableElevation
                sx={{
                  px: 3,
                  py: 1.25,
                  borderRadius: 999,
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: "#04201e",
                  bgcolor: customColor.primary,
                  transition: `transform .25s ${EASE}, box-shadow .25s ${EASE}, background-color .25s ${EASE}`,
                  boxShadow: "0 14px 34px -12px rgba(4,176,168,0.6)",
                  "&:hover": {
                    bgcolor: "#05c3ba",
                    transform: "translateY(-2px)",
                    boxShadow: "0 18px 40px -12px rgba(4,176,168,0.7)",
                  },
                }}
              >
                {ctas[0].label}
              </Button>
              <Button
                component={Link}
                href={ctas[1].href}
                disableElevation
                sx={{
                  px: 3,
                  py: 1.25,
                  borderRadius: 999,
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.4)",
                  backdropFilter: "blur(4px)",
                  transition: `transform .25s ${EASE}, background-color .25s ${EASE}, border-color .25s ${EASE}`,
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.12)",
                    borderColor: "rgba(255,255,255,0.7)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {ctas[1].label}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Controls */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 3,
          pointerEvents: "none",
        }}
      >
        <Box
          sx={{
            maxWidth: 1240,
            mx: "auto",
            px: { xs: 3, sm: 5, md: 8, lg: 10 },
            pb: { xs: 2.5, md: 3.5 },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              pointerEvents: "auto",
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontVariantNumeric: "tabular-nums",
                fontSize: { xs: 13, md: 14 },
                fontWeight: 600,
                letterSpacing: "0.05em",
                whiteSpace: "nowrap",
              }}
            >
              <Box component="span">{String(current + 1).padStart(2, "0")}</Box>
              <Box component="span" sx={{ mx: 1, color: "rgba(255,255,255,0.45)" }}>
                /
              </Box>
              <Box component="span" sx={{ color: "rgba(255,255,255,0.55)" }}>
                {String(data.length).padStart(2, "0")}
              </Box>
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {data.map((item, i) => (
                <Box
                  key={item.id}
                  component="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  sx={{
                    p: 0,
                    border: "none",
                    cursor: "pointer",
                    height: 4,
                    width: i === current ? 30 : 14,
                    borderRadius: 999,
                    bgcolor:
                      i === current
                        ? customColor.primary
                        : "rgba(255,255,255,0.4)",
                    transition: `width .35s ${EASE}, background-color .35s ${EASE}`,
                    "&:hover": {
                      bgcolor:
                        i === current
                          ? customColor.primary
                          : "rgba(255,255,255,0.7)",
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>

        {/* autoplay progress */}
        <Box sx={{ height: 3, bgcolor: "rgba(255,255,255,0.16)" }}>
          <Box
            key={current}
            sx={{
              height: "100%",
              width: "100%",
              transformOrigin: "left center",
              bgcolor: customColor.primary,
              "@keyframes heroProgress": {
                from: { transform: "scaleX(0)" },
                to: { transform: "scaleX(1)" },
              },
              animation: `heroProgress ${AUTOPLAY_MS}ms linear`,
              "@media (prefers-reduced-motion: reduce)": { animation: "none" },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Carousel;
