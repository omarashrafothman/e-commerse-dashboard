import React from "react";
import Button from "../components/Buttons/Button";
import TitleHeader from "@/components/titleHeader/TitleHeader";
import Input from "../components/inputs/Input";
import Image from "next/image";
import OrderBox from "@/components/orderBox/orderBox";
import { useState, useEffect } from "react";

// edge  start
export const runtime = "edge"; // 'nodejs' is the default
export const dynamic = "force-dynamic"; // static by default, unless reading the request

export function GET(request) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}
// edge  end

export default function orders() {
  const [allSelected, setAllSelected] = useState(false);
  useEffect(() => {
    document.title = "Orders";
  }, []);
  return (
    <div className="main">
      <div className="container3">
        <TitleHeader title={"Orders"} />
        <div className="container1">
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
                <Input
                  holder={"Search for orders or products"}
                  type={"text"}
                  classes={"form-control"}
                />
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

              <OrderBox selected={allSelected} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
