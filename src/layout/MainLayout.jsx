import Header from "@/components/header/Header";
import SideBar from "@/components/sideBar/SideBar";
import React from "react";
export const runtime = "edge";
export default function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="w-100 d-flex">
        {children}
        <SideBar />
      </div>
    </div>
  );
}
