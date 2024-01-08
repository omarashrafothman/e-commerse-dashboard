import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import AccordionSideBar from "../accordion/AccordionSideBar";
import Link from "next/link";
import Image from "next/image";
import setting from "../../assets/icons/setting.png";

function SideBar() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="sideBar d-flex flex-column justify-content-between">
      <AccordionSideBar />
      <div className="setting">
        <ul className="AccordionSideBarList w-100">
          <Link href="/dashboard" className="w-100">
            <li className="AccordionSideBarListItem">
              <Image src={setting} />
              <p>settings</p>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
