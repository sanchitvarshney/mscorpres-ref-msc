"use client";
import React from "react";
import { Box, Typography, IconButton, Tooltip } from "@mui/material";
import {
  Facebook,
  LinkedIn,
  QuestionAnswer,
  Twitter,
  X,
  YouTube,
} from "@mui/icons-material";

import SvgIcon from "@mui/material/SvgIcon";
import { customColor } from "@/utils/theme/customColor";

function QuoraIcon() {
  return (
    <SvgIcon viewBox="0 0 24 24">
      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10c1.605 0 3.106-.377 4.445-1.043l-1.51-2.242c-.88.43-1.863.677-2.935.677-4.066 0-7.37-3.304-7.37-7.37s3.304-7.37 7.37-7.37 7.37 3.304 7.37 7.37c0 1.33-.355 2.574-.973 3.65l1.977 2.934C21.31 16.475 22 14.318 22 12c0-5.514-4.486-10-10-10z" />
      <circle cx="12" cy="12" r="4" />
    </SvgIcon>
  );
}

 const socialData = [
  {
    name: "Facebook",
    icon: <Facebook sx={{ fontSize: 20, color: "#1877F2" }} />,
    link: "https://www.facebook.com/MsCorpres/",
  },
  {
    name: "LinkedIn",
    icon: <LinkedIn sx={{ fontSize: 20, color: "#0077B5" }} />,
    link: "https://www.linkedin.com/company/mscorpres/",
  },
  {
    name: "Youtube",
    icon: <YouTube sx={{ fontSize: 20, color: "#FF0000" }} />,
    link: "https://www.youtube.com/@mscorpres",
  },
  {
    name: "X",
    icon: <X sx={{ fontSize: 20, color: "#000" }} />,
    link: "https://x.com/mscorpres",
  },
];

const TopBar: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: "#f5f5f5",
        py: 1,
        px: { xs: 2, md: 3 },
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: { xs: "wrap", md: "nowrap" },
        gap: { xs: 1, md: 0 },
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: "#9e9e9e",
          fontSize: { xs: "0.75rem", md: "0.875rem" },
          userSelect: "none",
        }}
      >
        Precision Electronics Manufacturing & Trusted Refurbishing for Modern Businesses
      </Typography>
      <Box sx={{ display: "flex", gap: 1 }}>
        {socialData.map((item, index) => (
          <Tooltip title={item.name} key={index}>
            <IconButton
              size="small"
              sx={{
                color: "#000",

                "&:hover": { bgcolor: "transparent", transform: "scale(1.1)" },
              }}
              onClick={() => window.open(item.link, "_blank")}
            >
              {item.icon}
            </IconButton>
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
};

export default TopBar;
