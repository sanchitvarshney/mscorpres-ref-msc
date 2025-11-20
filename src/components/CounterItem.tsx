
import { useCounter } from "@/hooks/useCounter";
import { StatItem } from "@/types/type";
import { itemVariants } from "@/utils/animationVarients/animation";
import { Box, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import React, {useRef } from "react";
const CounterItem: React.FC<{
  stat: StatItem;
  index: number;
}> = ({ stat, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const count = useCounter(stat.number, 2000, isInView);

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          background: "white",
          borderRadius: 3,
          p: { xs: 3, md: 4 },
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          transition: "all 0.3s ease",
          border: "1px solid rgba(0,0,0,0.05)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
            borderColor: stat.iconColor || "primary.main",
          },
        }}
      >
        <Box
          sx={{
            color: stat.iconColor || "primary.main",
            mb: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "& svg": {
              fontSize: { xs: 40, md: 50 },
            },
          }}
        >
          {stat.icon}
        </Box>
        <Typography
          variant="h3"
          component="div"
          sx={{
            fontWeight: "bold",
            color: "text.primary",
            mb: 1,
            fontSize: { xs: "32px", md: "42px" },
            lineHeight: 1.2,
          }}
        >
          {count}
          {stat.suffix && (
            <Box component="span" sx={{ fontSize: { xs: "24px", md: "32px" } }}>
              {stat.suffix}
            </Box>
          )}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            fontWeight: 500,
            fontSize: { xs: "14px", md: "16px" },
          }}
        >
          {stat.label}
        </Typography>
      </Box>
    </motion.div>
  );
};

export default CounterItem;