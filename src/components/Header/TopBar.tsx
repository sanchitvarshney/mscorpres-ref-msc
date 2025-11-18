import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Facebook, Twitter, YouTube } from "@mui/icons-material";

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
        }}
      >
        Reliable Manufacturing & Expert Refurbishing for the Cargo Industry
      </Typography>
      <Box sx={{ display: "flex", gap: 1 }}>
        <IconButton
          size="small"
          sx={{
            color: "#424242",
            bgcolor: "#e0e0e0",
            width: 32,
            height: 32,
            "&:hover": { bgcolor: "#bdbdbd" },
          }}
        >
          <Facebook sx={{ fontSize: 16 }} />
        </IconButton>
        <IconButton
          size="small"
          sx={{
            color: "#424242",
            bgcolor: "#e0e0e0",
            width: 32,
            height: 32,
            "&:hover": { bgcolor: "#bdbdbd" },
          }}
        >
          <Twitter sx={{ fontSize: 16 }} />
        </IconButton>
        <IconButton
          size="small"
          sx={{
            color: "#424242",
            bgcolor: "#e0e0e0",
            width: 32,
            height: 32,
            "&:hover": { bgcolor: "#bdbdbd" },
          }}
        >
          <Box
            component="span"
            sx={{
              fontSize: "0.75rem",
              fontWeight: 700,
            }}
          >
            W
          </Box>
        </IconButton>
        <IconButton
          size="small"
          sx={{
            color: "#424242",
            bgcolor: "#e0e0e0",
            width: 32,
            height: 32,
            "&:hover": { bgcolor: "#bdbdbd" },
          }}
        >
          <YouTube sx={{ fontSize: 16 }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopBar;
