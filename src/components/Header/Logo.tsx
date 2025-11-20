import React from "react";
import { Box, Typography } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";
import Image from "next/image";
import { customColor } from "@/utils/theme/customColor";

const Logo: React.FC = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
      <Box
        sx={{
          width: 50,
          height: 50,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 1,
          position: "relative",
        }}
      >
        <Image
          src="/favicon.ico"
          alt="logo"
          width={50}
          height={50}
          style={{ objectFit: "contain" }}
          loading="eager"
          priority
        />
      </Box>
      <Box>
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: 700,
            lineHeight: 1.2,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Box component="span" sx={{ color: customColor.primary }}>
            MsCorpres
          </Box>
          
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: "#000000",
            fontSize: "0.75rem",
            display: "block",
            fontWeight: 600,
            mt: 0.5,
          }}
        >
          Manufacturer and Refurbisher
        </Typography>
      </Box>
    </Box>
  );
};

export default Logo;
