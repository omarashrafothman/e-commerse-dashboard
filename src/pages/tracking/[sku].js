import React from "react";
import TitleHeader from "@/components/titleHeader/TitleHeader";
import Link from "next/link";
import arrowLeft from "../../assets/icons/arrow-left black.png";
import Image from "next/image";
import { useRouter } from "next/router";
function TrackingItem({ id }) {
  const router = useRouter();

  return (
    <div className="main">
      <div className="container3">
        <TitleHeader title={"Tracking"} />
        <div className="container1">
          <Link href="/tracking" className="backLink">
            <Image src={arrowLeft} />
          </Link>
          <div className="d-flex justify-content-center align-items-center  orderNumber w-100">
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
          <div className="orderTrackingStatusDiagram"></div>
        </div>
      </div>
    </div>
  );
}

export default TrackingItem;
