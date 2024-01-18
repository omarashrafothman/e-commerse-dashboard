import React from "react";
import { useEffect } from "react";
import TitleHeader from "@/components/titleHeader/TitleHeader";
import Input from "@/components/inputs/Input";
import Image from "next/image";
// import cart from "../assets/icons/icons8-aliexpress 1.png";
import Link from "next/link";
import trackingProducts from "../../local-json/trackingProduct.json";
import TrackingBox from "@/components/trackingItem/TrackingBox";
// edge  start
export const runtime = "experimental-edge"; // 'nodejs' is the default
export const dynamic = "force-dynamic"; // static by default, unless reading the request

export function GET(request) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}
// edge  end
export default function tracking() {
  useEffect(() => {
    document.title = "Tracking";
  }, []);
  return (
    <div className="main grayBgColor">
      <div className="container3">
        <TitleHeader title={"Tracking"} />
        <div className="container1">
          <div className="shipmentsBox d-flex justify-content-between">
            <div className="TotalShipments d-flex flex-column">
              <h5>Total shipments: </h5>
              <p>2</p>
            </div>
            <div className="d-flex align-items-center justify-content-between w-75">
              <div className="shipmentsItem d-flex flex-column">
                <div className="statusBox success">
                  <p>Pending</p>
                </div>
                <div className="shipmentsItemCount">
                  <p>1</p>
                </div>
                <div className="shipmentsItemPercentage">
                  <p>50%</p>
                </div>
              </div>
              <div className="shipmentsItem d-flex flex-column">
                <div className="statusBox ">
                  <p>In transit</p>
                </div>
                <div className="shipmentsItemCount">
                  <p>1</p>
                </div>
                <div className="shipmentsItemPercentage">
                  <p>50%</p>
                </div>
              </div>
              <div className="shipmentsItem d-flex flex-column">
                <div className="statusBox pickup">
                  <p>Pickup</p>
                </div>
                <div className="shipmentsItemCount">
                  <p>1</p>
                </div>
                <div className="shipmentsItemPercentage">
                  <p>25%</p>
                </div>
              </div>
              <div className="shipmentsItem d-flex flex-column">
                <div className="statusBox success">
                  <p>Delivered</p>
                </div>
                <div className="shipmentsItemCount">
                  <p>1</p>
                </div>
                <div className="shipmentsItemPercentage">
                  <p>100%</p>
                </div>
              </div>
              <div className="shipmentsItem d-flex flex-column">
                <div className="statusBox danger">
                  <p>Expired</p>
                </div>
                <div className="shipmentsItemCount">
                  <p>0</p>
                </div>
                <div className="shipmentsItemPercentage">
                  <p>0%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="trackingContainer">
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
            <div className="trackingOrdersContainer">
              {trackingProducts &&
                trackingProducts.map((item) => (
                  <TrackingBox
                    id={item.id}
                    sku={item.sku}
                    status={item.status}
                    from={item.from}
                    personName={item.person}
                    personEmail={item.personEmail}
                    personCountry={item.address}
                    description={item.description}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}