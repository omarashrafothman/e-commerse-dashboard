import Header from "@/components/header/Header";
import SideBar from "@/components/sideBar/SideBar";
import React from "react";

export default function MainLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <SideBar />
    </div>
  );
}
