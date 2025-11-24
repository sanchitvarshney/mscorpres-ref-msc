"use client";

import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/reuseable/HeroSection";
import ContactSection from "@/components/sections/ContactSection";

export default function ContactPage() {
  return (
    <MainLayout>
      <div className="w-full min-h-screen">
        {/* Hero Section */}
        {/* <HeroSection
          subtitle="CONTACT US"
          description="Have questions or need assistance? We're here to help you with all your electronics and technology needs. Reach out to us and let's start a conversation."
          title="Get In Touch With Us"
          alt="Contact Us Hero"
          height={{
            xs: "60vh",
            md: "calc(100vh - 148px)",
          }}
          minHeight={{
            xs: "400px",
            md: "500px",
          }}
        /> */}

        {/* Contact Section */}
        <ContactSection
          title="Get In Touch"
          subtitle="Have questions or need assistance? We're here to help you with all your electronics and technology needs. Reach out to us and let's start a conversation."
        />
        <div className="location h-[400px]  mt-[20px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.3480654851155!2d77.4005377751758!3d28.529255988763705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce9007ea30749%3A0xef89bba15224429e!2sMsCorpres%20Automation%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1744777356264!5m2!1sen!2sin"
            className="w-full h-full location"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </MainLayout>
  );
}
