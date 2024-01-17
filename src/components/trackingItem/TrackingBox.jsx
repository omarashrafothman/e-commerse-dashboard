import React from "react";
import Image from "next/image";
import cart from "../../assets/icons/icons8-aliexpress 1.png";
import Link from "next/link";
function TrackingBox({
  id,
  sku,
  description,
  personName,
  personEmail,
  personCountry,
  from,
  status,
}) {
  return (
    <div className="trackingOrdersBox">
      <div className="d-flex flex-column trachingFirstDetail ">
        <div className="mb-3">
          <p>{id}</p>
        </div>
        <div className="d-flex align-items-center">
          <Image src={cart} />
          <p>{from}</p>
        </div>
      </div>
      <div className="trachingSecondDetail d-flex flex-column">
        <div className="d-flex topBox mb-2">
          <p className="num">RN9842938838CN</p>
          <div className="statusBox gray2">
            <p>Paid</p>
          </div>
          <div className="statusBox gray2">
            <p>Fulfilled</p>
          </div>
        </div>
        <div className="mb-2">
          <p className="moreDetail">
            2 x Business Aluminum Wallet Automatic Slide Card Case Carbon Fiber
            PU Leather Metal ID Credit Card Holder Clip
          </p>
        </div>
        <div className="d-flex">
          <span>
            <Link href={`/tracking/${sku}`} className="">
              A / China, SKU: {sku}-a-china
            </Link>
          </span>
          <span>
            <Link href="#" className="two">
              Joshua High Small Animals House Store
            </Link>
          </span>
        </div>
      </div>
      <div className="trachingThirdDetail d-flex justify-content-center align-items-center">
        <div className="statusBox success">
          <p>{status}</p>
        </div>
      </div>
      <div className="d-flex flex-column trachingFourthDetail">
        <h5>{personName}</h5>
        <p className="gray m-0">{personEmail}</p>
        <p className="gray m-0">{personCountry}</p>
      </div>
    </div>
  );
}

export default TrackingBox;
