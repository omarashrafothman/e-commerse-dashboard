import React, { useState } from "react";
import TitleHeader from "@/components/titleHeader/TitleHeader";
import Link from "next/link";
import arrowLeft from "../../assets/icons/arrow-left black.png";
import Image from "next/image";
import { useRouter } from "next/router";

// edge  start
export const runtime = "experimental-edge"; // 'nodejs' is the default
export const dynamic = "force-dynamic"; // static by default, unless reading the request

export function GET(request) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}
// edge  end

function TrackingItem({ id }) {
  const router = useRouter();
  const [orderd, setOrderd] = useState(true);
  const [inTransit, setInTransit] = useState(true);
  const [PickUp, setPickup] = useState(true);
  const [Delivered, setDelivered] = useState(false);

  return (
    <div className="main">
      <div className="container3">
        <TitleHeader title={"Tracking"} />
        <div className="container1">
          <Link href="/tracking" className="backLink">
            <Image src={arrowLeft} />
          </Link>
          <div className="d-flex justify-content-center align-items-center  orderNumber ordersNumberBox  w-100">
            <p className="m-0">TRACKING ORDER NO - #{router.query.sku}</p>
          </div>
          <div className="d-flex justify-content-start align-items-center orderId">
            <p className="m-0">
              order id <span>#{router.query.sku}</span>
            </p>
          </div>
          <div className="setTrackingStatus d-flex align-items-center">
            <p className="m-0">Set tracking status manually</p>
            <div>
              <select class="form-select">
                <option selected>In transit</option>
                <option value="1">Orderd</option>
                <option value="2">Pick Up</option>
                <option value="3">Delivered</option>
              </select>
            </div>
          </div>
          <div className="orderTrackingStatusDiagram d-flex align-items-center justify-content-between">
            <div className="d-flex flex-column orderTrackingStatusDiagramItem">
              <div className="orderStutsWhen d-flex flex-column justify-content-center align-items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6M10 21C10 21.5523 9.55228 22 9 22C8.44772 22 8 21.5523 8 21C8 20.4477 8.44772 20 9 20C9.55228 20 10 20.4477 10 21ZM21 21C21 21.5523 20.5523 22 20 22C19.4477 22 19 21.5523 19 21C19 20.4477 19.4477 20 20 20C20.5523 20 21 20.4477 21 21Z"
                      stroke={orderd ? "#53D2B7" : "#667085"}
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <p className="m-0">Orderd</p>
            </div>
            <span className={orderd ? "loaded ok" : "loaded"}></span>
            <div className="d-flex flex-column orderTrackingStatusDiagramItem align-items-center justify-content-center">
              <div className="orderStutsWhen d-flex flex-column justify-content-center align-items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_7437_20054)">
                      <path
                        d="M16.167 16V3H1.16699V16H16.167ZM16.167 16H23.167V11L20.167 8H16.167V16ZM8.16699 18.5C8.16699 19.8807 7.0477 21 5.66699 21C4.28628 21 3.16699 19.8807 3.16699 18.5C3.16699 17.1193 4.28628 16 5.66699 16C7.0477 16 8.16699 17.1193 8.16699 18.5ZM21.167 18.5C21.167 19.8807 20.0477 21 18.667 21C17.2863 21 16.167 19.8807 16.167 18.5C16.167 17.1193 17.2863 16 18.667 16C20.0477 16 21.167 17.1193 21.167 18.5Z"
                        stroke={inTransit ? "#53D2B7" : "#ccc"}
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_7437_20054">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0.166992)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <p className="m-0">In transit</p>
            </div>
            <span className={inTransit ? "loaded ok" : "loaded"}></span>
            <div className="d-flex flex-column orderTrackingStatusDiagramItem align-items-center justify-content-center">
              <div className="orderStutsWhen d-flex flex-column justify-content-center align-items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M16.833 9.3999L7.83301 4.2099M3.60301 6.9599L12.333 12.0099L21.063 6.9599M12.333 22.0799V11.9999M21.333 15.9999V7.9999C21.3326 7.64918 21.2401 7.30471 21.0645 7.00106C20.889 6.69742 20.6367 6.44526 20.333 6.2699L13.333 2.2699C13.029 2.09437 12.6841 2.00195 12.333 2.00195C11.9819 2.00195 11.637 2.09437 11.333 2.2699L4.33301 6.2699C4.02927 6.44526 3.77699 6.69742 3.60147 7.00106C3.42595 7.30471 3.33337 7.64918 3.33301 7.9999V15.9999C3.33337 16.3506 3.42595 16.6951 3.60147 16.9987C3.77699 17.3024 4.02927 17.5545 4.33301 17.7299L11.333 21.7299C11.637 21.9054 11.9819 21.9979 12.333 21.9979C12.6841 21.9979 13.029 21.9054 13.333 21.7299L20.333 17.7299C20.6367 17.5545 20.889 17.3024 21.0645 16.9987C21.2401 16.6951 21.3326 16.3506 21.333 15.9999Z"
                      stroke={PickUp ? "#53D2B7" : "#667085"}
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <p className="m-0">Pick Up</p>
            </div>
            <span className={Delivered ? "loaded ok" : "loaded"}></span>
            <div className="d-flex flex-column orderTrackingStatusDiagramItem align-items-center justify-content-center">
              <div className="orderStutsWhen d-flex flex-column justify-content-center align-items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="19"
                    viewBox="0 0 21 19"
                    fill="none"
                  >
                    <path
                      stroke={Delivered ? "#53D2B7" : "#667085"}
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.9937 1.31677L6.06035 12.8334L2.89368 9.4501C2.31035 8.9001 1.39368 8.86677 0.727018 9.33344C0.0770176 9.81677 -0.106316 10.6668 0.293684 11.3501L4.04368 17.4501C4.41035 18.0168 5.04368 18.3668 5.76035 18.3668C6.44368 18.3668 7.09368 18.0168 7.46035 17.4501C8.06035 16.6668 19.5103 3.01677 19.5103 3.01677C21.0103 1.48344 19.1937 0.133436 17.9937 1.3001V1.31677Z"
                      fill={Delivered ? "#53D2B7" : "#667085"}
                    />
                  </svg>
                </div>
              </div>
              <p className="m-0">Delivered</p>
            </div>
          </div>
          <div className="originCountry d-flex flex-column">
            <h4>Origin Country</h4>
            <div className="originStatus d-flex align-items-center justify-content-between ">
              <span>
                <p className="arrive">020-12-08 18:22</p>
              </span>
              <span>
                <p className="arrive">MEMPHIS, TN</p>
              </span>
              <span>
                <p className="arrive">Arrived at FedEx location</p>
              </span>
            </div>
            <div className="originStatus d-flex align-items-center justify-content-between">
              <span>
                <p>020-12-08 18:22</p>
              </span>
              <span>
                <p>MEMPHIS, TN</p>
              </span>
              <span>
                <p>Arrived at FedEx location</p>
              </span>
            </div>
            <div className="originStatus d-flex align-items-center justify-content-between">
              <span>
                <p>020-12-08 18:22</p>
              </span>
              <span>
                <p>MEMPHIS, TN</p>
              </span>
              <span>
                <p>Arrived at FedEx location</p>
              </span>
            </div>
            <div className="originStatus d-flex align-items-center justify-content-between">
              <span>
                <p>020-12-08 18:22</p>
              </span>
              <span>
                <p>MEMPHIS, TN</p>
              </span>
              <span>
                <p>Arrived at FedEx location</p>
              </span>
            </div>
            <div className="originStatus d-flex align-items-center justify-content-between">
              <span>
                <p>020-12-08 18:22</p>
              </span>
              <span>
                <p>MEMPHIS, TN</p>
              </span>
              <span>
                <p>Left FedEx origin facility</p>
              </span>
            </div>
            <div className="originStatus d-flex align-items-center justify-content-between">
              <span>
                <p>020-12-08 18:22</p>
              </span>
              <span>
                <p>MEMPHIS, TN</p>
              </span>
              <span>
                <p>Arrived at FedEx location</p>
              </span>
            </div>
          </div>
          <div className="ablNotification">
            <p>
              You can enable email notifications about tracking statues changes
              to your customer in <Link href="/setting">settings</Link>
            </p>
          </div>
          <div className="d-flex align-items-center justify-content-end my-4">
            <div className="btnWithIcon  mx-1">
              <button className="btn ">Cancel</button>
            </div>
            <div className="btnBox mx-1">
              <button className="btn">Retrack</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrackingItem;
