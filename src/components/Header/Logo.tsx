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
        

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 1,
          position: "relative",
        }}
      >
        <Image
          src="/logo/hrms_mscorpres_logo.png"
          alt="logo"
          width={300}
          height={300}
          style={{ objectFit: "cover" }}
          loading="eager"
          priority
        />
      </Box>
  
    </Box>
  );
};

export default Logo;
