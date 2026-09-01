"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";
import { customColor } from "@/utils/theme/customColor";
import { CircuitTraces, DecorGrid } from "@/components/reuseable/decor";
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

interface RenderListMenuProps {
  /** stacked, narrow-width layout for the mobile / tablet drawer */
  compact?: boolean;
  /** called when a service link is chosen (e.g. close the drawer) */
  onNavigate?: () => void;
}

const columns: { title: string; items: Service[] }[] = [
  { title: "Manufacturing & Refurbishment", items: manufacAndRefruData },
  { title: "Product Engineering", items: productData },
  { title: "Software Services", items: softwareData },
];

const cssEase = `cubic-bezier(${easeSmooth.join(",")})`;

const ColumnHeading: React.FC<{ title: string; compact?: boolean }> = ({
  title,
  compact,
}) => (
  <Box
    component={motion.div}
    variants={megaItem}
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: compact ? "flex-start" : "center",
      width: "100%",
      mb: compact ? 1.25 : 2,
    }}
  >
    <Typography
      sx={{
        width: "100%",
        fontSize: compact ? 11.5 : 12.5,
        fontWeight: 800,
        letterSpacing: "0.09em",
        textTransform: "uppercase",
        color: customColor.secondary,
        textAlign: compact ? "left" : "center",
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
        background: `linear-gradient(90deg, ${customColor.primary}, ${customColor.secondary})`,
      }}
    />
  </Box>
);

const ServiceTile: React.FC<{ service: Service; compact?: boolean; onNavigate?: () => void }> = ({
  service,
  compact,
  onNavigate,
}) => (
  <Box component={motion.div} variants={megaItem}>
    <Link
      href={service.path || "#"}
      onClick={onNavigate}
      style={{ textDecoration: "none", display: "block", height: "100%" }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: compact ? "row" : "column",
          alignItems: "center",
          textAlign: compact ? "left" : "center",
          gap: compact ? 1.5 : 1,
          px: compact ? 1.25 : 1,
          py: compact ? 1 : 1.5,
          borderRadius: 2.5,
          border: "1px solid transparent",
          transition: `transform .25s ${cssEase}, box-shadow .25s ${cssEase}, border-color .25s ${cssEase}, background-color .25s ${cssEase}`,
          "&:hover, &:active": {
            transform: compact ? "none" : "translateY(-3px)",
            bgcolor: "#ffffff",
            borderColor: "rgba(4,176,168,0.28)",
            boxShadow: "0 14px 30px -14px rgba(4,176,168,0.5)",
          },
          "&:hover .svc-icon, &:active .svc-icon": {
            borderColor: "rgba(4,176,168,0.45)",
            transform: compact ? "none" : "scale(1.06)",
          },
          "&:hover .svc-label, &:active .svc-label": { color: customColor.primary },
        }}
      >
        <Box
          className="svc-icon"
          sx={{
            flexShrink: 0,
            width: compact ? 40 : 48,
            height: compact ? 40 : 48,
            borderRadius: compact ? "12px" : "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "#ffffff",
            border: "1px solid rgba(4,176,168,0.18)",
            boxShadow: "0 6px 16px -10px rgba(4,20,19,0.35)",
            transition: `transform .25s ${cssEase}, border-color .25s ${cssEase}`,
          }}
        >
          <Box
            component="img"
            src={service.img}
            alt={service.label}
            loading="lazy"
            sx={{ width: compact ? 22 : 26, height: compact ? 22 : 26, objectFit: "contain" }}
          />
        </Box>
        <Typography
          className="svc-label"
          sx={{
            fontSize: 12,
            fontWeight: 600,
            lineHeight: 1.3,
            color: "#4a5b5a",
            transition: `color .25s ${cssEase}`,
          }}
        >
          {service.label}
        </Typography>
      </Box>
    </Link>
  </Box>
);

const RenderListMenu: React.FC<RenderListMenuProps> = ({ compact = false, onNavigate }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#f4faf9",
        backgroundImage:
          "radial-gradient(600px 200px at 8% 0%, rgba(4,176,168,0.14), transparent 65%)," +
          "radial-gradient(560px 220px at 100% 100%, rgba(2,82,78,0.1), transparent 70%)," +
          "linear-gradient(180deg, #ffffff 0%, #eef7f6 100%)",
        borderTop: `3px solid ${customColor.primary}`,
        boxShadow: "inset 0 18px 40px -34px rgba(4,20,19,0.4)",
      }}
    >
      {/* decorative layer */}
      <Box aria-hidden sx={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <DecorGrid
          variant="dots"
          color="rgba(2,82,78,0.13)"
          cell={compact ? 22 : 26}
          opacity={compact ? 0.3 : 0.4}
          mask="linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)"
        />
        {!compact && (
          <CircuitTraces
            opacity={0.06}
            sx={{ right: 0, top: 0, width: 420, height: "100%" }}
          />
        )}
      </Box>

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1180,
          mx: "auto",
          px: compact ? 1.5 : { xs: 3, md: 4 },
          py: compact ? 2 : { xs: 3, md: 3.5 },
          display: "flex",
          flexDirection: compact ? "column" : "row",
          alignItems: "stretch",
          gap: compact ? 2 : { xs: 3, md: 5 },
        }}
      >
        {columns.map((column, index) => (
          <React.Fragment key={column.title}>
            {index > 0 && (
              <Box
                aria-hidden
                sx={
                  compact
                    ? {
                        height: "1px",
                        width: "100%",
                        background:
                          "linear-gradient(to right, transparent, rgba(4,176,168,0.28) 15%, rgba(4,176,168,0.28) 85%, transparent)",
                      }
                    : {
                        width: "1px",
                        alignSelf: "stretch",
                        background:
                          "linear-gradient(to bottom, transparent, rgba(4,176,168,0.28) 20%, rgba(4,176,168,0.28) 80%, transparent)",
                      }
                }
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
              <ColumnHeading title={column.title} compact={compact} />

              <Box
                component={motion.div}
                variants={megaGrid}
                sx={{
                  display: "grid",
                  gridTemplateColumns: compact ? "1fr" : "repeat(3, 1fr)",
                  gap: compact ? 0.5 : 1.5,
                }}
              >
                {column.items.map((service) => (
                  <ServiceTile
                    key={service.id}
                    service={service}
                    compact={compact}
                    onNavigate={onNavigate}
                  />
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
