"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";
import { customColor } from "@/utils/theme/customColor";
import {
  manufacAndRefruData,
  productData,
  softwareData,
} from "@/dummydata/servicesData";
import {
  megaColumn,
  megaGrid,
  megaItem,
  easeSmooth,
} from "@/utils/animationVarients/headerAnimation";

interface Service {
  id: number;
  label: string;
  img: string;
  path?: string;
}

const columns: { title: string; items: Service[] }[] = [
  { title: "Manufacturing & Refurbishment", items: manufacAndRefruData },
  { title: "Product Engineering", items: productData },
  { title: "Software Services", items: softwareData },
];

const cssEase = `cubic-bezier(${easeSmooth.join(",")})`;

const ColumnHeading: React.FC<{ title: string }> = ({ title }) => (
  <Box
    component={motion.div}
    variants={megaItem}
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      mb: 2,
    }}
  >
    <Typography
      sx={{
        width: "100%",
        fontSize: 12.5,
        fontWeight: 700,
        letterSpacing: "0.09em",
        textTransform: "uppercase",
        color: "text.primary",
        textAlign: "center",
      }}
    >
      {title}
    </Typography>
    <Box
      sx={{
        mt: 0.75,
        width: 26,
        height: 3,
        borderRadius: 2,
        bgcolor: customColor.primary,
      }}
    />
  </Box>
);

const ServiceTile: React.FC<{ service: Service }> = ({ service }) => (
  <Box component={motion.div} variants={megaItem}>
    <Link
      href={service.path || "#"}
      style={{ textDecoration: "none", display: "block", height: "100%" }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 1,
          px: 1,
          py: 1.5,
          borderRadius: 2.5,
          border: "1px solid transparent",
          transition: `transform .25s ${cssEase}, box-shadow .25s ${cssEase}, border-color .25s ${cssEase}, background-color .25s ${cssEase}`,
          "&:hover": {
            transform: "translateY(-3px)",
            bgcolor: customColor.light,
            borderColor: "rgba(4,176,168,0.25)",
            boxShadow: "0 12px 28px -14px rgba(4,176,168,0.45)",
          },
          "&:hover .svc-icon": {
            bgcolor: "#ffffff",
            transform: "scale(1.06)",
          },
          "&:hover .svc-label": { color: customColor.primary },
        }}
      >
        <Box
          className="svc-icon"
          sx={{
            width: 48,
            height: 48,
            borderRadius: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: customColor.light,
            transition: `transform .25s ${cssEase}, background-color .25s ${cssEase}`,
          }}
        >
          <Box
            component="img"
            src={service.img}
            alt={service.label}
            loading="lazy"
            sx={{ width: 26, height: 26, objectFit: "contain" }}
          />
        </Box>
        <Typography
          className="svc-label"
          sx={{
            fontSize: 12,
            fontWeight: 600,
            lineHeight: 1.3,
            color: "#5b6b6a",
            transition: `color .25s ${cssEase}`,
          }}
        >
          {service.label}
        </Typography>
      </Box>
    </Link>
  </Box>
);

const RenderListMenu: React.FC = () => {
  return (
    <Box sx={{ bgcolor: "#fff", width: "100%", overflow: "hidden" }}>
      <Box
        sx={{
          maxWidth: 1180,
          mx: "auto",
          px: { xs: 2, md: 4 },
          py: { xs: 2, md: 3 },
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "stretch",
          gap: { xs: 3, md: 5 },
        }}
      >
        {columns.map((column, index) => (
          <React.Fragment key={column.title}>
            {index > 0 && (
              <Box
                aria-hidden
                sx={{
                  display: { xs: "none", sm: "block" },
                  width: "1px",
                  alignSelf: "stretch",
                  background:
                    "linear-gradient(to bottom, transparent, rgba(0,0,0,0.10) 20%, rgba(0,0,0,0.10) 80%, transparent)",
                }}
              />
            )}

            <Box
              component={motion.div}
              variants={megaColumn}
              initial="hidden"
              animate="visible"
              transition={{ delayChildren: index * 0.06 }}
              sx={{ flex: 1, minWidth: 0 }}
            >
              <ColumnHeading title={column.title} />

              <Box
                component={motion.div}
                variants={megaGrid}
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "repeat(2, 1fr)",
                    md: "repeat(3, 1fr)",
                  },
                  gap: { xs: 1, md: 1.5 },
                }}
              >
                {column.items.map((service) => (
                  <ServiceTile key={service.id} service={service} />
                ))}
              </Box>
            </Box>
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default RenderListMenu;
