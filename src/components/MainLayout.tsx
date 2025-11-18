import React from "react";
import Header from "./Header/Header";

type MasterProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MasterProps> = ({ children }) => {
  return (
    <div className="w-full h-full ">
      <Header />

      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
