import React from "react";
import Link from "next/link";

export default function OfferBox() {
  return (
    <div className="offerBox d-flex align-items-center justify-content-center ">
      <p>
        <Link href="#">Upgrade now</Link> and take advantage of our annual
        discounts (up to 20% off)
      </p>
    </div>
  );
}
