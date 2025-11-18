"use client";

import Carousel from "@/components/Carousel";
import CustomCard from "@/components/reuseable/CustomCard";
import { cardsData } from "@/dummydata/dummyData";
import { containerVariants, itemVariants, serviceCardVariants, servicesContainerVariants, titleVariants } from "@/utils/animationVarients/animation";
import {
  AccessTimeOutlined,
  ShieldOutlined,
  TrackChangesOutlined,
} from "@mui/icons-material";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";

export const certificationItems: any[] = [
  {
    id: 1,
    title: "ISO Certified",
    icon: (
      <ShieldOutlined color="primary" sx={{ fontSize: { xs: 30, md: 60 } }} />
    ),
  },
  {
    id: 2,
    title: "Quality Assured",
    icon: (
      <WorkspacePremiumOutlinedIcon
        color="primary"
        sx={{ fontSize: { xs: 30, md: 60 } }}
      />
    ),
  },
  {
    id: 3,
    title: "On-Time Delivery",
    icon: (
      <AccessTimeOutlined
        color="primary"
        sx={{ fontSize: { xs: 30, md: 60 } }}
      />
    ),
  },
  {
    id: 4,
    title: "100% Satisfaction",
    icon: (
      <TrackChangesOutlined
        color="primary"
        sx={{ fontSize: { xs: 30, md: 60 } }}
      />
    ),
  },
];




const HomePage = () => {
 

  return (
    <div className="w-full h-full">
      <Carousel />
      <motion.div
        className="p-4 grid grid-cols-1 sm:grid-cols-1  md:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {certificationItems.map((item: any) => (
          <motion.div
            key={item.id}
            className="bg-white px-4 py-6 rounded-md  flex flex-col items-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div>{item.icon}</div>
            <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
          </motion.div>
        ))}
      </motion.div>
      <div>
        <motion.div
          className="w-full flex flex-col justify-center items-center px-4 py-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={titleVariants}>
            <Typography
              variant="h5"
              component={"span"}
              sx={{ fontWeight: "bold" }}
            >
              Our Services
            </Typography>
          </motion.div>
          <motion.div variants={titleVariants}>
            <Typography
              variant="subtitle1"
              component={"span"}
              sx={{ fontSize: "14px" }}
            >
              We provide high-quality, reliable services designed to support
              your business with efficiency and excellence.
            </Typography>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-4 gap-4 py-4"
            variants={servicesContainerVariants}
          >
            {cardsData?.map((item: any) => (
              <motion.div key={item.id} variants={serviceCardVariants}>
                <CustomCard item={item} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
