import React from "react";
import { Box, Typography } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";

const Logo: React.FC = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
      <Box
        sx={{
          width: 50,
          height: 50,
          bgcolor: "#d32f2f",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 1,
          position: "relative",
        }}
      >
        <Typography>Logo</Typography>
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
          <Box component="span" sx={{ color: "#424242" }}>
            MsCorpres
          </Box>
          {/* <Box component="span" sx={{ color: '#9e9e9e', fontWeight: 400 }}>
            Manufacturer
          </Box> */}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: "#9e9e9e",
            fontSize: "0.75rem",
            display: "block",
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
