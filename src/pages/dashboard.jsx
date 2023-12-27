import React from "react";
import Header from "../components/header/Header";
import SideBar from "@/components/sideBar/SideBar";
import Widget from "@/components/widget/Widget";
import dec from "../assets/images/Group 42.png";

export default function dashboard() {
  return (
    <div className="main">
      <div className="d-flex widgetBoxContainer align-items-center justify-content-between flex-wrap">
        <Widget status={"increase"} src={dec} />
        <Widget status={"decrease"} />
        <Widget />
        <Widget />
      </div>
    </div>
  );
}
