import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer";
import CTABanner from "./reuseable/CTABanner";
import BackgroundDecor from "./reuseable/BackgroundDecor";

type MasterProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MasterProps> = ({ children }) => {
  return (
    <div className="w-full h-full" style={{ position: "relative", isolation: "isolate" }}>
      <BackgroundDecor />

      {/* <div className="w-full fixed top-0 z-[999]"> */}
        <Header />
      {/* </div> */}

      <main style={{ position: "relative", zIndex: 1,  }}>{children}</main>
      <CTABanner />
      <Footer />
    </div>
  );
};

export default MainLayout;
