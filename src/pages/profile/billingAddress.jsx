import React from "react";
import ProfileLayout from "./layout";
// edge  start
export const runtime = "edge"; // 'nodejs' is the default
export const dynamic = "force-dynamic"; // static by default, unless reading the request

export function GET(request) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}
// edge  end
function BillingAddress() {
  return (
    <ProfileLayout>
      <div className="profileForm">
        <div className="billingAddressHeader">
          <h5>Billing address</h5>
        </div>

        <div className="billingAddressBox">
          <div className="billingAddressBoxHeader d-flex align-items-center">
            <h5>Address 1</h5>

            <div className="billingAddressBoxStatus">Primary</div>
          </div>
          <p>Ap #285-7189 Ullamcorper Avemue Amesbury HI 93373 US</p>
          <div className="deleteAndEdit">
            <button className="btn delete">Delete</button>
            <button className="btn edit">Edit</button>
          </div>
        </div>

        <div className="addNewAddressBox">
          <div className="billingAddressBoxHeader d-flex align-items-center">
            <h5>Add new address</h5>
          </div>
          <br />
          <p>
            Writing headlines for blog posts is much science and probably cool
            audience
          </p>
          <div className="deleteAndEdit">
            <button className="btn edit">New address</button>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
}

export default BillingAddress;
