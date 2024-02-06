import React from "react";
import TitleHeader from "@/components/titleHeader/TitleHeader";
import Input from "@/components/inputs/Input";
import dolarSign from "../assets/icons/dollar-sign.png";
import help from "../assets/icons/help-circle (1).png";
import alert from "../assets/icons/alert-circle.png";
import { useEffect, useState } from "react";
import Link from "next/link";
import InboxItem from "@/components/inboxitem/InboxItem";
import { Offcanvas } from "react-bootstrap";
import Image from "next/image";
import featuredIcon from "../assets/images/webp/Featured icon.png";
import infoCost from "../assets/icons/info (1).png";
// edge  start
export const runtime = "experimental-edge"; // 'nodejs' is the default
export const dynamic = "force-dynamic"; // static by default, unless reading the request

export function GET(request) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}
// edge  end
function inbox() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    document.title = "Inbox";
  }, []);
  return (
    <div className="main">
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement={"end"}
        className="w-50"
      >
        <div>
          <Offcanvas.Header>
            <Image src={featuredIcon} />
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="">
              <h4>Product variant is missing</h4>
              <div className="costChanged d-flex align-items-center w-100 costChangeIbnox">
                <Image src={infoCost} />
                <div className="d-flex  flex-column">
                  <h5>Cost changed</h5>
                  <p className="">
                    Shopify product Patience Games 3D Cube Puzzle Maze variants
                    are not available. Make sure keep your product up to date.
                    the following variants are not available:
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between missingItem">
                <p>Variants</p>
                <p>SKU</p>
                <p>Color</p>
                <p>Shopify ID</p>
              </div>
              <div className="d-flex align-items-center justify-content-between missingItem">
                <p>In Shop</p>
                <p>454654-blue</p>
                <p>Blue</p>
                <p>4564654564</p>
              </div>
            </div>
            <div className="d-flex justify-content-end btnsforUpdate ">
              <div className="d-flex align-items-center">
                <div className="deleteAndEdit">
                  <button className="btn " onClick={handleClose}>
                    Cancel
                  </button>

                  <button className="btn edit ">Put offine</button>
                  <button className="btn edit ">Mapping</button>
                  <button className="btn edit ">Ok</button>
                </div>
              </div>
            </div>
          </Offcanvas.Body>
        </div>
      </Offcanvas>
      <div className="container3">
        <TitleHeader title={"Inbox"} />
        <div className="container1">
          <div className="mainContent">
            <div className="orderSearchBox d-flex  align-items-center ">
              <div className="searchBox mt-4">
                <span className="searchSvgIcon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M17.7637 17.5L14.1387 13.875M16.097 9.16667C16.097 12.8486 13.1122 15.8333 9.43034 15.8333C5.74844 15.8333 2.76367 12.8486 2.76367 9.16667C2.76367 5.48477 5.74844 2.5 9.43034 2.5C13.1122 2.5 16.097 5.48477 16.097 9.16667Z"
                      stroke="#667085"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <div class="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search mail"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                </div>
              </div>
              <button className="btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <path
                    d="M14.5 13.3335L9.83333 13.3335M7.16667 13.3335L2.5 13.3335M14.5 8.00016L8.5 8.00016M5.83333 8.00016L2.5 8.00016M14.5 2.66683L11.1667 2.66683M8.5 2.66683L2.5 2.66683M9.83333 15.3335L9.83333 11.3335M5.83333 10.0002L5.83333 6.00016M11.1667 4.66683L11.1667 0.66683"
                    stroke="#344054"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="inboxDataContainer">
              <div className="dayOfInbox">
                <div className="dayOfInboxHeadind">
                  <h5>2023-11-21</h5>
                </div>
                <div className="inboxItemsBox d-flex flex-column">
                  <InboxItem
                    statusClases={
                      "productStatus d-flex align-items-center justify-content-center success"
                    }
                    statusImage={dolarSign}
                    data={"Product cost has changed: Joint Support Knee Pads"}
                  />
                  <InboxItem
                    statusClases={
                      "productStatus d-flex align-items-center justify-content-center success"
                    }
                    statusImage={dolarSign}
                    data={"Product cost has changed: Joint Support Knee Pads"}
                  />
                  <InboxItem
                    statusClases={
                      "productStatus d-flex align-items-center justify-content-center warning"
                    }
                    statusImage={help}
                    data={"Product cost has changed: Joint Support Knee Pads"}
                  />
                </div>
              </div>
              <div className="dayOfInbox">
                <div className="dayOfInboxHeadind">
                  <h5>2023-10-8</h5>
                </div>
                <div className="inboxItemsBox d-flex flex-column">
                  <InboxItem
                    statusClases={
                      "productStatus d-flex align-items-center justify-content-center success"
                    }
                    statusImage={dolarSign}
                    data={"Product cost has changed: Joint Support Knee Pads"}
                  />
                  <InboxItem
                    statusClases={
                      "productStatus d-flex align-items-center justify-content-center danger"
                    }
                    statusImage={alert}
                    data={"Product cost has changed: Joint Support Knee Pads"}
                  />
                  <InboxItem
                    statusClases={
                      "productStatus d-flex align-items-center justify-content-center warning"
                    }
                    statusImage={help}
                    data={"Product cost has changed: Joint Support Knee Pads"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default inbox;
