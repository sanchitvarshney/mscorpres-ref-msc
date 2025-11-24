import {
  containerVariants,
  itemVariants,
} from "@/utils/animationVarients/animation";
import { customColor } from "@/utils/theme/customColor";
import { Box, Container, Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import FeatureCard from "./reuseable/FeatureCard";
import { Circle } from "@mui/icons-material";
interface ManufacturerSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  features?: any[];

  service: string;
 
}

const ProductLifeCycle: React.FC<ManufacturerSectionProps> = ({
  title = "IoT Manufacturing Excellence",
  subtitle = "MANUFACTURING EXCELLENCE",
  description = "We specialize in high-quality IoT device manufacturing with state-of-the-art facilities and expert craftsmanship. Our manufacturing services deliver durable, precision-engineered IoT solutions tailored to your specific connectivity and automation needs.",
  imageUrl = "/images/iot-details.avif",
  features = [],
  service,
  
}) => {
  return (
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        background: "linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Header Section */}
          <motion.div
            variants={itemVariants}
            style={{ textAlign: "center", marginBottom: "4rem" }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: "bold",
                mb: 2,
                color: "text.primary",
                fontSize: { xs: "28px", md: "36px" },
                position: "relative",
                display: "inline-block",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -10,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 60,
                  height: 3,
                  background: (theme) =>
                    `linear-gradient(90deg, transparent, ${customColor.primary}, transparent)`,
                  borderRadius: 2,
                },
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                fontSize: "16px",
                maxWidth: "800px",
                mx: "auto",
                lineHeight: 1.8,
              }}
            >
              {description}
            </Typography>
          </motion.div>

          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              gap: 4,
              alignItems: "center",

              mb: 5,
            }}
          >
            <Box sx={{ flex: 1, width: { xs: "100%", md: "40%" } }}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                    color: "text.primary",
                    fontSize: { xs: "22px", md: "28px" },
                  }}
                >
                  {service}
                </Typography>
                <Divider />
             
                  {features.map((item, index) => (
                    <div className="flex gap-4 mt-4 " key={item.id || index}>
                      <Circle
                        sx={{
                          fontSize: 16,
                          color: customColor.primary,
                          mt: 1,
                        }}
                      />
                      <div>
                        <Typography variant="h6" sx={{fontWeight: 600, fontSize:16}}>{item.title}</Typography>
                        <Typography variant="body1" sx={{fontSize:14, lineHeight: 1.8, textAlign:"justify", color: "text.secondary"}}>{item.description}</Typography>
                      </div>
                    </div>
                  ))}
              
              </motion.div>
            </Box>
            <Box sx={{ flex: 1, width: { xs: "100%", md: "60%" } }}>
              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: 3,
                    overflow: "hidden",

                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,

                      zIndex: 1,
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: { xs: 300, md: 400 },
                    }}
                  >
                    <Image
                      src={imageUrl}
                      alt="Manufacturing"
                      fill
                      style={{ objectFit: "contain" }}
                      loading="lazy"
                      quality={85}
                    />
                  </Box>
                </Box>
              </motion.div>
            </Box>
          </Box>

        
        </motion.div>
      </Container>
    </Box>
  );
};

export default ProductLifeCycle;
