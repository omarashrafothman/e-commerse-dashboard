import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import AccordionSideBar from "../accordion/AccordionSideBar";

function SideBar() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="sideBar d-flex flex-column">
      <AccordionSideBar />
    </div>
  );
}

export default SideBar;
