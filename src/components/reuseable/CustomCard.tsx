"use client";
import React, { memo, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ArrowForwardRounded } from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";
import { customColor } from "@/utils/theme/customColor";

interface CardProps {
  item: any;
  action?: boolean;
}

const CustomCard: React.FC<CardProps> = ({ item, action = true }) => {
  return (
    <Card
      elevation={0}
      sx={{
        maxWidth: { xs: 320, md: 360 },
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        overflow: "hidden",
        bgcolor: "#fff",
        border: "1px solid rgba(4,176,168,0.14)",
        boxShadow: "0 16px 40px -26px rgba(4,20,19,0.35)",
        transition: "border-color .3s ease",
        "&:hover": { borderColor: "rgba(4,176,168,0.4)" },
        "&:hover .cc-media img": { transform: "scale(1.06)" },
        "&:hover .cc-cta": { gap: "10px" },
      }}
    >
      {item?.image && (
        <Box
          className="cc-media"
          sx={{
            position: "relative",
            width: "100%",
            height: 210,
            overflow: "hidden",
            "& img": {
              transition: "transform .5s cubic-bezier(0.22,1,0.36,1)",
            },
          }}
        >
          {Array.isArray(item?.image) ? (
            <ImageSlider imageArrays={item?.image} />
          ) : (
            <Image
              src={item?.image}
              alt={item?.title || "Service image"}
              fill
              sizes="(max-width: 900px) 100vw, 360px"
              style={{ objectFit: "cover" }}
              loading="lazy"
              quality={85}
            />
          )}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(4,20,19,0.82) 0%, rgba(4,20,19,0.32) 46%, rgba(4,20,19,0.04) 100%)",
            }}
          />
          <Box
            aria-hidden
            sx={{
              position: "absolute",
              left: 0,
              bottom: 0,
              width: 44,
              height: 3,
              bgcolor: customColor.primary,
            }}
          />
          <Typography
            component="h3"
            sx={{
              position: "absolute",
              left: 16,
              right: 16,
              bottom: 14,
              color: "#fff",
              fontWeight: 800,
              fontSize: { xs: "17px", md: "19px" },
              letterSpacing: "-0.01em",
              lineHeight: 1.25,
              textShadow: "0 2px 10px rgba(0,0,0,0.45)",
            }}
          >
            {item?.title}
          </Typography>
        </Box>
      )}
      <CardContent sx={{ flexGrow: 1, pt: 2.5, px: 2.5 }}>
        {!item?.image && (
          <Typography
            gutterBottom
            component="h3"
            sx={{ fontWeight: 800, fontSize: "18px", letterSpacing: "-0.01em" }}
          >
            {item?.title}
          </Typography>
        )}
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", lineHeight: 1.7, fontSize: "13.5px" }}
        >
          {item?.description}
        </Typography>
      </CardContent>
      {action && (
        <CardActions sx={{ pt: 0, pb: 2.5, px: 2.5 }}>
          <Button
            component={Link}
            href={item?.path}
            size="small"
            disableElevation
            endIcon={<ArrowForwardRounded />}
            className="cc-cta"
            sx={{
              textTransform: "none",
              fontWeight: 700,
              borderRadius: 999,
              px: 2.25,
              py: 0.9,
              color: "#fff",
              bgcolor: customColor.primary,
              transition: "gap .25s ease, background-color .25s ease, box-shadow .25s ease",
              boxShadow: "0 12px 26px -14px rgba(4,176,168,0.6)",
              "&:hover": { bgcolor: customColor.secondary },
            }}
          >
            Learn More
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

const ImageSlider = memo(({ imageArrays }: any) => {
  const allImages = imageArrays?.flat();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % allImages?.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [allImages?.length]);

  return (
    <img
      src={allImages[index]?.src}
      alt={allImages[index]?.title || "dashboard"}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
      }}
    />
  );
});
ImageSlider.displayName = "ImageSlider";

export default CustomCard;
