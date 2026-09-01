"use client";

import { Box, Typography } from "@mui/material";
import { PlaceOutlined } from "@mui/icons-material";
import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/reuseable/HeroSection";
import ContactSection from "@/components/sections/ContactSection";
import { customColor } from "@/utils/theme/customColor";

export default function ContactPage() {
  return (
    <MainLayout>
      <div className="w-full min-h-screen">
      

        <ContactSection
          title="Get In Touch"
          subtitle="Have questions or need assistance? We're here to help you with all your electronics and technology needs. Reach out to us and let's start a conversation."
        />

        <Box
          sx={{
            position: "relative",
            width: "100%",
            borderTop: `3px solid ${customColor.primary}`,
          }}
        >
         
          <Box
            component="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.3480654851155!2d77.4005377751758!3d28.529255988763705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce9007ea30749%3A0xef89bba15224429e!2sMsCorpres%20Automation%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1744777356264!5m2!1sen!2sin"
            title="MsCorpres location map"
            loading="lazy"
            sx={{
              display: "block",
              width: "100%",
              height: { xs: 380, md: 480 },
              border: 0,
            }}
          />
        </Box>
      </div>
    </MainLayout>
  );
}
