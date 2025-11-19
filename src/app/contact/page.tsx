"use client";

import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/reuseable/HeroSection";
import ContactSection from "@/components/sections/ContactSection";

export default function ContactPage() {
  const heroImage =
    "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80";

  return (
    <MainLayout>
      <div className="w-full min-h-screen">
        {/* Hero Section */}
        <HeroSection
          imageUrl={heroImage}
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

