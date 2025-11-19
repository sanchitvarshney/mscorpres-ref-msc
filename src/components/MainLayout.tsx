import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer";

type MasterProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MasterProps> = ({ children }) => {
  return (
    <div className="w-full h-full ">
      <Header />

      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
