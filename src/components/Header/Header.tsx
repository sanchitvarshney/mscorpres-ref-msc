import React from "react";
import { Box } from "@mui/material";
import TopBar from "./TopBar";
import Logo from "./Logo";
import ContactInfo from "./ContactInfo";
import NavigationBar from "./NavigationBar";

const Header: React.FC = () => {
  return (
    <Box sx={{ position: "sticky", top: { xs: "-75px", md: "-50px" }, zIndex: 999 }}>
      <TopBar />
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
            py: 1,
          }}
        >
          <Logo />
          <ContactInfo />
        </Box>
        <NavigationBar />
      </Box>
    </Box>
  );
};

export default Header;
