import React from "react";
import { Box } from "@mui/material";
import Logo from "./Logo";
import ContactInfo from "./ContactInfo";
import NavigationBar from "./NavigationBar";

const Header: React.FC = () => {
  return (
    <Box sx={{ position: "sticky", top: "0px", zIndex: 999 }}>

      <Box
        sx={{
          bgcolor: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            flexWrap: { xs: "wrap", md: "nowrap" },
            gap: { xs: 2, md: 0 },
            px: { xs: 2, md: 3 },
            py: 0.5,
          }}
        >
          <Box  sx={{display: {xs: "none", md: "block"}}}/>
          <Box sx={{display: {xs: "block", md: "none"}}}><Logo /></Box>
          <Box sx={{position:"absolute", top: {xs: "0px", md: "6px"}}}><Logo /></Box>
          <ContactInfo />
        </Box>
        <NavigationBar />
      </Box>
    </Box>
  );
};

export default Header;
