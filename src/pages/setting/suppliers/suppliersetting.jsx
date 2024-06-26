import Layout from "../layout";
import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/router";
import PhoneNumberInput from "@/components/phoneNumberInput/PhoneNumberInput";
import plus from "../../../assets/icons/plus.png";
import { NavLink } from "@/components/navLink/NavLink";
import React, { useState, useRef } from "react";

// edge  start
export const runtime = "experimental-edge"; // 'nodejs' is the default
export const dynamic = "force-dynamic"; // static by default, unless reading the request

export function GET(request) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}
// edge  end

function Suppliersetting() {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const route = useRouter();
  return (
    <Layout>
      <div className="w-100">
        <div className="leftRightBtnBox my-3">
          <NavLink
            href={"/setting/suppliers/suppliersetting"}
            exact
            className=""
          >
            Setting
          </NavLink>
          <NavLink href={"/setting/suppliers"} exact className="">
            Suppliers
          </NavLink>
        </div>
      </div>
      <div className="supplierSettingContent">
        <div className="supplierSettingOptions">
          <h4>Phone number optimization</h4>
          <p>
            In Order for your package to the Netherlands and Finland to be
            delivered properly, please fill in a real phone number in the order.
            The Netherlands and Finland do not support the use of the Phone
            Number Optimization feature for the time being. Click her to learn
            about how to solve this problem.
          </p>
        </div>
        <div className="supplierSettingOptions">
          <h4>Overrride phone number</h4>
          <p>
            Override customer’s phone number with your own number when placing
            order on Suppliers.
          </p>
        </div>
        <div className="phoneNumberInbutBox">
          <div className="d-flex align-items-center">
            <PhoneNumberInput label={"Phone number"} />
            <div className="addBox">
              <Image src={plus} />
            </div>
          </div>
          <Link className="" href="#">
            Delete
          </Link>
        </div>
        <div className="phoneNumberInbutBox">
          <div className="d-flex align-items-center">
            <PhoneNumberInput label={"Phone number"} />
            <div className="addBox">
              <Image src={plus} />
            </div>
          </div>
          <Link className="" href="#">
            Delete
          </Link>
        </div>
        <div className="supplierSettingOptions">
          <h4>Set default phone number</h4>
          <p>
            If an order doesn’t include a phone number, the system will use the
            default phone number you set to fill it in.
          </p>
        </div>
        <div className="phoneNumberInbutBox">
          <div className="d-flex align-items-center">
            <PhoneNumberInput label={"Phone number"} />
            <div className="addBox">
              <Image src={plus} />
            </div>
          </div>
          <Link className="" href="#">
            Delete
          </Link>
        </div>
        <div className="supplierSettingOptions">
          <h4>Leave a message to Suppliers</h4>
          <p>
            AliExpress suppliers will get this message together with your order
            information.
          </p>
        </div>
        <div className="my-5 w-100 ">
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Enter Your Message</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="4"
            ></textarea>
          </div>
          <div className="importsBtns d-flex justify-content-end my-4">
            <button className="editBtn btn">Edit</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Suppliersetting;
