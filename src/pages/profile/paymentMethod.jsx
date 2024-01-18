import ProfileLayout from "./layout";
import Image from "next/image";
import masterCard from "../../assets/images/mastercard.png";
// edge  start
export const runtime = "experimental-edge"; // 'nodejs' is the default
export const dynamic = "force-dynamic"; // static by default, unless reading the request

export function GET(request) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}
// edge  end
function paymentMethod() {
  return (
    <ProfileLayout>
      <div className="profileForm">
        <div className="billingAddressHeader">
          <h5>Billing address</h5>
        </div>

        <div className="billingAddressBox">
          <div className="billingAddressBoxHeader d-flex align-items-center">
            <h5>Marcus Morris</h5>

            <div className="billingAddressBoxStatus">Primary</div>
          </div>
          <div className="visaNumber d-flex align-items-center">
            <Image src={masterCard} />
            <p>Mastercard****1290</p>
          </div>
          <p>Card expires at 09/24</p>
          <div className="deleteAndEdit">
            <button className="btn delete">Delete</button>
            <button className="btn edit">Edit</button>
          </div>
        </div>

        <div className="addNewAddressBox">
          <div className="billingAddressBoxHeader d-flex align-items-center">
            <h5>Add a new payment method</h5>
          </div>
          <br />
          <p>Please carefully read Product Terms adding your new payment.</p>
          <div className="deleteAndEdit">
            <button className="btn edit">Add a new payment</button>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
}

export default paymentMethod;
