import React from "react";
import Button from "../components/Buttons/Button";
import TitleHeader from "@/components/titleHeader/TitleHeader";
import Input from "../components/inputs/Input";
import Image from "next/image";
import OrderBox from "@/components/orderBox/orderBox";
import { useState, useEffect } from "react";

import OffcanvasComponent from "../components/offcanvas/RightOffcanvas";

import dangerIcon from "../assets/icons/Featured icon (3).png";

// edge  start
export const runtime = "experimental-edge"; // 'nodejs' is the default
export const dynamic = "force-dynamic"; // static by default, unless reading the request

export function GET(request) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}
// edge  end

export default function orders() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  function handleShow() {
    setShow(true);
  }

  const [show2, setShowTwo] = useState(true);
  const handleClose2 = () => setShowTwo(false);
  const handleShow2 = () => setShowTwo(true);

  const [show3, setShowThree] = useState(true);
  const handleClose3 = () => setShowThree(false);
  const handleShow3 = () => setShowThree(true);

  const [show4, setShowFour] = useState(true);
  const handleClose4 = () => setShowFour(false);
  const handleShow4 = () => setShowFour(true);

  const [show5, setShowFive] = useState(true);
  const handleClose5 = () => setShowFive(false);
  const handleShow5 = () => setShowFive(true);

  const [allSelected, setAllSelected] = useState(false);
  useEffect(() => {
    document.title = "Orders";
  }, []);
  return (
    <div className="main grayBgColor">
      <div className=" ">
        <OffcanvasComponent
          plasment={"end"}
          close={handleClose2}
          component={
            <div className="d-flex flex-column ">
              <div>
                <div className="customerName">
                  <h4>Add order number</h4>
                </div>
                <div className="customerData">
                  <p className="m-0 whatData">
                    Add AliExpress or CJ Dropshipping order number if you
                    manually ordered items on these suppliers. Learn more about
                    order fulfillment in DS Ninja.
                  </p>
                </div>
                <div className="mt-3">
                  <Input
                    classes={"form-control"}
                    holder={"ex.6852314"}
                    label={"Order number"}
                    type={"number"}
                  />
                </div>
              </div>
              <div className="shippingBtns  d-flex align-items-center end ">
                <div className="btnWithIcon  mx-2">
                  <button className="btn" onClick={handleClose2}>
                    Cancel
                  </button>
                </div>
                <div className="importsBtns">
                  <button className="editBtn btn">Save</button>
                </div>
              </div>
            </div>
          }
          w={"w-25"}
          showState={show2}
        />

        <OffcanvasComponent
          plasment={"end"}
          close={handleClose3}
          component={
            <div className="d-flex flex-column ">
              <div>
                <div className="customerName">
                  <h4>Edit order number</h4>
                </div>
                <div className="customerData">
                  <p className="m-0 whatData">
                    Are you sure to change the order number #1894174518972?
                  </p>
                </div>
                <div className="mt-3">
                  <Input
                    classes={"form-control"}
                    holder={"ex.6852314"}
                    label={"New number"}
                    type={"number"}
                  />
                </div>
              </div>
              <div className="shippingBtns  d-flex align-items-center end ">
                <div className="btnWithIcon  mx-2">
                  <button className="btn" onClick={handleClose3}>
                    Cancel
                  </button>
                </div>
                <div className="importsBtns">
                  <button className="editBtn btn">Save</button>
                </div>
              </div>
            </div>
          }
          w={"w-25"}
          showState={show3}
        />

        <OffcanvasComponent
          plasment={"end"}
          close={handleClose5}
          component={
            <div className="d-flex flex-column ">
              <div>
                <div className="customerName">
                  <h4>Add note</h4>
                </div>
                <div className="customerData">
                  <p className="m-0 whatData">
                    Note is visible only in DS Ninja
                  </p>
                </div>
                <div className="mt-3">
                  <Input
                    classes={"form-control"}
                    holder={"ex.hellothere"}
                    label={"Enter note"}
                    type={"number"}
                  />
                </div>
              </div>
              <div className="shippingBtns  d-flex align-items-center end ">
                <div className="btnWithIcon  mx-2">
                  <button className="btn" onClick={handleClose4}>
                    Cancel
                  </button>
                </div>
                <div className="importsBtns">
                  <button className="editBtn btn">Save</button>
                </div>
              </div>
            </div>
          }
          w={"w-25"}
          showState={show5}
        />
        <OffcanvasComponent
          plasment={"end"}
          close={handleClose4}
          component={
            <div>
              <div className="ProductStatisticsContainer d-flex flex-column">
                <div className="ProductStatisticsIcon">
                  <Image src={dangerIcon} />
                </div>
                <div>
                  <h3 className="ProductStatisticsHeading">
                    Delete order number
                  </h3>
                </div>
                <div className="my-2">
                  <p className="m-0">
                    Are you sure you want to delete the order number?
                  </p>
                </div>
              </div>
              <br />
              <br />
              <br />
              <div className="d-flex justify-content-end cancelAndDelete">
                <div className="deleteAndEdit d-flex align-items-center">
                  <div className="btnWithIcon  mx-2">
                    <button className="btn" onClick={handleClose5}>
                      Cancel
                    </button>
                  </div>
                  <button className="btn delete">Delete</button>
                </div>
              </div>
            </div>
          }
          w={"w-25"}
          showState={show4}
        />
      </div>
      <div className="container3 ">
        <TitleHeader title={"Orders"} />
        <div className="container1 ">
          <div className="mainContent">
            <div className="orderBigWidget d-flex align-items-center  justify-content-between">
              <div className="orderBigWidgetText d-flex align-items-center flex-wrap">
                <div className="orderNumber">
                  <h4>2</h4>
                </div>
                <div className="d-flex flex-column orderBigWidgetTextMain">
                  <h3>Orders from suppliers have been found.</h3>
                  <p>Save time by processing up to 1000 orders at once</p>
                </div>
              </div>
              <div
                className="btnBox"
                onClick={() => {
                  if (allSelected == false) {
                    setAllSelected(true);
                  } else {
                    setAllSelected(false);
                  }
                }}
              >
                <Button content={"Order all products"} classes={"btn"} />
              </div>
            </div>
            <div className="tablesContainer">
              <div className="orderSearchBox d-flex  align-items-center ">
                <div className="searchBox mt-4 ">
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
                      placeholder="Search for orders or products"
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

              <OrderBox
                selected={allSelected}
                statusCountent={"To order"}
                status={"statusBox toOrder"}
                statusColor={"btn toOrder2"}
              />
              <OrderBox
                selected={allSelected}
                statusCountent={"Awaiting Payment"}
                status={"statusBox Awaiting"}
                statusColor={"btn Awaiting2"}
              />
              <OrderBox
                selected={allSelected}
                statusCountent={"In Processing"}
                status={"statusBox Processing"}
                statusColor={"btn Processing2"}
                btnAdded={<button className="btn">hello</button>}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
