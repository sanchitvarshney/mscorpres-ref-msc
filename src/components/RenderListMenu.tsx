import { Box, Typography, Divider } from "@mui/material";
import Link from "next/link";

import { customColor } from "@/utils/theme/customColor";
import {
  manufacAndRefruData,
  productData,
  softwareData,
} from "@/dummydata/servicesData";
import { useState } from "react";

const RenderListMenu = () => {
  const [isItemHovered, setIsItemHovered] = useState<any>(null);

  return (
    <Box
      sx={{
        py: { xs: 1, md: 0 },
        backgroundColor: "#fff",
        margin: 0,
        marginTop: { xs: 0, md: 3 },
        overflow: "hidden",
      }}
    >
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 md:gap-8">
        <div className="flex-1 p-2">
          <Typography
            variant="subtitle2"
            textAlign={"center"}
            sx={{ fontWeight: 600 }}
          >
            Manufacturing And Refurbisment
          </Typography>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1  sm:gap-3 md:gap-4 my-4">
            {manufacAndRefruData.map((service, index) => (
              <Link
                key={index}
                href={service?.path || "#"}
                className="flex flex-col items-center p-2 no-underline"
                onMouseEnter={() => setIsItemHovered(service?.id)}
                onMouseLeave={() => setIsItemHovered(null)}
                style={{
                  color:
                    isItemHovered && isItemHovered === service?.id
                      ? customColor?.primary
                      : "#666",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                }}
              >
                <img
                  src={service?.img}
                  alt={service?.label}
                  className="w-8 h-8"
                />
                <Typography
                  variant="subtitle2"
                  sx={{ fontSize: 12, mt: 0.4, fontWeight: 600 }}
                >
                  {service?.label}
                </Typography>
              </Link>
            ))}
          </div>
        </div>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            display: { xs: "none", sm: "block" },
            height: "auto",
            alignSelf: "stretch",
          }}
        />
        <div className="flex-1 p-2">
          <Typography
            variant="subtitle2"
            textAlign={"center"}
            sx={{ fontWeight: 600 }}
          >
            Product Engineering
          </Typography>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1  sm:gap-3 md:gap-4 my-4">
            {productData.map((service, index) => (
              <Link
                key={index}
                href={service?.path || "#"}
                className="flex flex-col items-center p-2 no-underline"
                onMouseEnter={() => setIsItemHovered(service?.id)}
                onMouseLeave={() => setIsItemHovered(null)}
                style={{
                  color:
                    isItemHovered && isItemHovered === service?.id
                      ? customColor?.primary
                      : "#666",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                }}
              >
                <img
                  src={service?.img}
                  alt={service?.label}
                  className="w-8 h-8"
                />
                <Typography
                  variant="subtitle2"
                  sx={{ fontSize: 12, mt: 0.4, fontWeight: 600 }}
                >
                  {service?.label}
                </Typography>
              </Link>
            ))}
          </div>
        </div>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            display: { xs: "none", sm: "block" },
            height: "auto",
            alignSelf: "stretch",
          }}
        />
        <div className="flex-1 p-2">
          <Typography
            variant="subtitle2"
            textAlign={"center"}
            sx={{ fontWeight: 600 }}
          >
            Software Services
          </Typography>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1  sm:gap-3 md:gap-4 my-4">
            {softwareData.map((service, index) => (
              <Link
                key={index}
                href={service?.path || "#"}
                className="flex flex-col items-center p-2 no-underline"
                onMouseEnter={() => setIsItemHovered(service?.id)}
                onMouseLeave={() => setIsItemHovered(null)}
                style={{
                  color:
                    isItemHovered && isItemHovered === service?.id
                      ? customColor?.primary
                      : "#666",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                }}
              >
                <img
                  src={service?.img}
                  alt={service?.label}
                  className="w-8 h-8"
                />
                <Typography
                  variant="subtitle2"
                  sx={{ fontSize: 12, mt: 0.4, fontWeight: 600 }}
                >
                  {service?.label}
                </Typography>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default RenderListMenu;
