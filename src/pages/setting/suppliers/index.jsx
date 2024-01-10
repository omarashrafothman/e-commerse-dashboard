import React from "react";
import Layout from "../layout";
import Image from "next/image";
import shopify from "../../../assets/images/shopify.png";
import Link from "next/link";
import { useRouter } from "next/router";

function Index() {
  const route = useRouter();
  return (
    <Layout>
      <div className="w-100">
        <div className="leftRightBtnBox my-3">
          <button
            className={
              route.pathname === "/setting/suppliers/suppliersetting"
                ? "btnactive leftBtn"
                : "leftBtn"
            }
          >
            <Link href="/setting/suppliers/suppliersetting/">Setting</Link>
          </button>
          <button
            className={
              route.pathname === "/setting/suppliers"
                ? "btnactive rightBtn"
                : "rightBtn"
            }
          >
            <Link href="/setting/suppliers/">Suppliers</Link>
          </button>
        </div>

        <div className="channelTabel">
          <div className="channelTabelHeading d-flex justify-content-between">
            <h4>Suppliers</h4>
            <div className="d-flex">
              <div className="selectBox ">
                <select class="form-select" aria-label="Default select example">
                  <option value="1" selected>
                    More Actions
                  </option>
                  <option value="2">11 Hours</option>
                  <option value="3">10 Hours</option>
                </select>
              </div>
              <div className="importsBtns">
                <button className="editBtn btn">Add supplier</button>
              </div>
            </div>
          </div>
          <div className="tableBox">
            <table class=" channelTable">
              <thead>
                <tr>
                  <th scope="col">Supplier name</th>
                  <th scope="col">Account name</th>
                  <th scope="col">Expiry</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>

                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="w-100">
                  <td className="">
                    <input type="checkbox" />
                    <Image src={shopify} />
                  </td>
                  <td>Max Smith</td>
                  <td className="expiryDate">10 Mar 2023, 9:65 pm</td>
                  <td></td>
                  <td className=""></td>
                  <td></td>

                  <td className="">
                    <div className="billingAddressBoxStatus m-0">Active</div>
                  </td>
                </tr>
                <tr className="w-100">
                  <td className="">
                    <input type="checkbox" />
                    <Image src={shopify} />
                  </td>
                  <td>Max Smith</td>
                  <td className="expiryDate">10 Mar 2023, 9:65 pm</td>
                  <td></td>
                  <td className=""></td>
                  <td></td>

                  <td className="">
                    <div className="billingAddressBoxStatus m-0">Active</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
