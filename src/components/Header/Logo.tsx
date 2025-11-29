"use client";
import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  const smallDevice = useMediaQuery("(max-width: 600px)");
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }} >
 
       <Link href="/">
         <Image
          src="/logo/hrms_mscorpres_logo.png"
          alt="logo"
          width={ smallDevice ? 130 :230}
          height={100}
          style={{ objectFit: "cover" }}
          loading="eager"
          priority
        />
 
       </Link>
  
    </Box>
  );
};

export default Logo;
