"use client";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "next/link";

// Helper function to convert service title to URL-friendly ID
const titleToId = (title: string): string => {
  return title.toLowerCase().replace(/\s+/g, "-");
};

interface CardProps {
  item: any
  action?: boolean;
}

const CustomCard: React.FC<CardProps> = ({
  item,
  action = true,
}) => {
  return (
    <Card 
      sx={{ 
        maxWidth: { xs: 300, md: 345},
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
        },
      }}
    >
      {item?.image && (
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: 200,
            overflow: 'hidden',
          }}
        >
          <CardMedia
            component="img"
            alt={item?.title || "Service image"}
            height="200"
            image={item?.image}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          />
          {/* Text Overlay on Image */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
              p: 2,
              color: 'white',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '18px', md: '20px' },
                textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                lineHeight: 1.2,
              }}
            >
              {item?.title}
            </Typography>
          </Box>
        </Box>
      )}
      <CardContent sx={{ flexGrow: 1, pt: 3 }}>
        {!item?.image && (
          <Typography gutterBottom variant="h6" sx={{fontWeight: 600}} component="div">
            {item?.title}
          </Typography>
        )}
        <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
          {item?.description}
        </Typography>
      </CardContent>
      {action && (
        <CardActions sx={{ pt: 0, pb: 2, px: 2 }}>
          <Button 
            component={Link}
            href={item?.title ? `/services#${titleToId(item.title)}` : "/services"}
            size="small" 
            variant="contained"
            sx={{
              textTransform: 'none',
              fontWeight: 600,
              borderRadius: 2,
            }}
          >
            Learn More
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default CustomCard;
