"use client";
import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }} >
 
       <Link href="/">
         <Image
          src="/logo/hrms_mscorpres_logo.png"
          alt="logo"
          width={200}
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
