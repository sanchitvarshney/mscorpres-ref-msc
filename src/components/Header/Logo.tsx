import React from "react";
import { Box, Typography } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";
import Image from "next/image";
import { customColor } from "@/utils/theme/customColor";

const Logo: React.FC = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
 
        <Image
          src="/logo/hrms_mscorpres_logo.png"
          alt="logo"
          width={200}
          height={100}
          style={{ objectFit: "cover" }}
          loading="eager"
          priority
        />
 
  
    </Box>
  );
};

export default Logo;
