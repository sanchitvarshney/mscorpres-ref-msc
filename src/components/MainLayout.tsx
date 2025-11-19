import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer";
import CTABanner from "./reuseable/CTABanner";

type MasterProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MasterProps> = ({ children }) => {
  return (
    <div className="w-full h-full ">
      <Header />

      <main>{children}</main>
      <CTABanner />
      <Footer />
    </div>
  );
};

export default MainLayout;
