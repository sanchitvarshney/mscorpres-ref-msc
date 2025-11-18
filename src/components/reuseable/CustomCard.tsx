"use client";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface CardProps {
  item: any
  action?: boolean;
}

const CustomCard: React.FC<CardProps> = ({
  item,
  action = true,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {item?.image && (
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={item?.image}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h6" sx={{fontWeight: 600}} component="div">
          {item?.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {item?.description}
        </Typography>
      </CardContent>
      {action && (
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      )}
    </Card>
  );
};

export default CustomCard;
