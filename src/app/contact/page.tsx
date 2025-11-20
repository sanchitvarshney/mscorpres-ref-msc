"use client";

import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/reuseable/HeroSection";
import ContactSection from "@/components/sections/ContactSection";

export default function ContactPage() {

  return (
    <MainLayout>
      <div className="w-full min-h-screen">
        {/* Hero Section */}
        <HeroSection
          imageUrl={"/images/contact.avif"}
          alt="Contact Us Hero"
          subtitle="CONTACT US"
          title="Get In Touch With Us"
          description="Have questions or need assistance? We're here to help you with all your electronics and technology needs. Reach out to us and let's start a conversation."
          height={{
            xs: "60vh",
            md: "calc(100vh - 168px)",
          }}
          minHeight={{
            xs: "400px",
            md: "500px",
          }}
        />

        {/* Contact Section */}
        <ContactSection
          title="Get In Touch"
          subtitle="Have questions or need assistance? We're here to help you with all your electronics and technology needs. Reach out to us and let's start a conversation."
        />
      </div>
    </MainLayout>
  );
}

