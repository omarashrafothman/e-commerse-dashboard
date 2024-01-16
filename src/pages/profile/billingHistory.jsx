import React from "react";
import ProfileLayout from "./layout";
import Image from "next/image";
import arrowLeft from "../../assets/icons/arrow-left black.png";
import arrowRight from "../../assets/icons/arrow-right black.png";
import Link from "next/link";
import { NavLink } from "react-bootstrap";
// edge  start
export const runtime = "edge"; // 'nodejs' is the default
export const dynamic = "force-dynamic"; // static by default, unless reading the request

export function GET(request) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}
// edge  end
function BillingHistory() {
  return (
    <ProfileLayout>
      <div className="profileForm">
        <div className="billingHistoryHeader d-flex justify-content-between align-items-center">
          <h5>Billing history</h5>
          <div className="selectBox">
            <select class="form-select" aria-label="Default select example">
              <option value="1" selected>
                Month
              </option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="tableBox">
          <table class=" billingHistoryTable">
            <thead>
              <tr>
                <th scope="col">Data</th>
                <th scope="col">Description</th>
                <th scope="col">Amount</th>
                <th scope="col">Invoice</th>
              </tr>
            </thead>
            <tbody>
              <tr className="w-100">
                <td>Nov 01, 2020</td>
                <td>Invoice for October 2023</td>
                <td>$123.79</td>
                <td className="d-flex">
                  <button className="btn one lastBtn">PDF</button>

                  <button className="btn lastBtn">View</button>
                </td>
              </tr>
              <tr className="w-100">
                <td>Nov 01, 2020</td>
                <td>Invoice for October 2023</td>
                <td>$123.79</td>
                <td className="d-flex">
                  <button className="btn one lastBtn ">PDF</button>

                  <button className="btn lastBtn ">View</button>
                </td>
              </tr>
              <tr className="w-100">
                <td>Nov 01, 2020</td>
                <td>Invoice for October 2023</td>
                <td>$123.79</td>
                <td className="d-flex">
                  <button className="btn one lastBtn">PDF</button>

                  <button className="btn lastBtn">View</button>
                </td>
              </tr>
              <tr className="w-100">
                <td>Nov 01, 2020</td>
                <td>Invoice for October 2023</td>
                <td>$123.79</td>
                <td className="d-flex">
                  <button className="btn one lastBtn">PDF</button>

                  <button className="btn lastBtn">View</button>
                </td>
              </tr>
              <tr className="w-100">
                <td>Nov 01, 2020</td>
                <td>Invoice for October 2023</td>
                <td>$123.79</td>
                <td className="d-flex">
                  <button className="btn one lastBtn">PDF</button>

                  <button className="btn lastBtn">View</button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="perviosAndNextBox d-flex align-items-center justify-content-between ">
            <div className="btnWithIcon mx-1">
              <button className="btn ">
                <Image src={arrowLeft} />
                Previous
              </button>
            </div>
            <div className="d-flex align-items-center ">
              <div className="pageNumber d-flex align-items-center justify-content-center mx-3">
                <NavLink className="w-100 " to="/">
                  <span className="w-100">1</span>
                </NavLink>
              </div>
              <div className="pageNumber d-flex align-items-center justify-content-center mx-3">
                <NavLink className="w-100 " href="#">
                  <span className="w-100">2</span>
                </NavLink>
              </div>
              <div className="pageNumber d-flex align-items-center justify-content-center mx-3">
                <NavLink className="w-100 " href="#">
                  <span className="w-100">3</span>
                </NavLink>
              </div>
              ...
              <div className="pageNumber d-flex align-items-center justify-content-center mx-3">
                <NavLink className="w-100 " href="#">
                  <span className="w-100">4</span>
                </NavLink>
              </div>
              <div className="pageNumber d-flex align-items-center justify-content-center mx-3">
                <NavLink className="w-100 " href="#">
                  <span className="w-100">5</span>
                </NavLink>
              </div>
              <div className="pageNumber d-flex align-items-center justify-content-center mx-3">
                <NavLink className="w-100 " href="#">
                  <span className="w-100">6</span>
                </NavLink>
              </div>
            </div>
            <div className="btnWithIcon mx-1">
              <button className="btn align-items-center ">
                Next
                <Image src={arrowRight} className="rev" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
}

export default BillingHistory;
