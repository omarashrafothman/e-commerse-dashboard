import React from "react";
import Layout from "./layout";
import Image from "next/image";
import shopify from "../../assets/images/shopify.png";

function channels() {
  return (
    <Layout>
      <div className="channelContainer">
        <div className="channelTabel">
          <div className="channelTabelHeading d-flex justify-content-between">
            <h4>Accounts</h4>
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
                <button className="editBtn btn">Edit on import list</button>
              </div>
            </div>
          </div>
          <div className="tableBox">
            <table class=" channelTable">
              <thead>
                <tr>
                  <th scope="col">Type</th>
                  <th scope="col">Account name</th>
                  <th scope="col">Store name</th>
                  <th scope="col">Store URL</th>
                  <th scope="col">Access token</th>
                  <th scope="col">Expiry</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="w-100">
                  <td className=" ">
                    <input type="checkbox" /> <Image src={shopify} />
                  </td>
                  <td>Max Smith</td>
                  <td>Shopify</td>
                  <td>http:mystore.com</td>
                  <td className="accesstokenStatusSuccess">Enabled</td>
                  <td className="expiryDate">10 Mar 2023,9:65pm</td>

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
                  <td>Shopify</td>
                  <td>http:mystore.com</td>
                  <td className="accesstokenStatusSuccess">Enabled</td>
                  <td className="expiryDate">10 Mar 2023,9:65pm</td>

                  <td className="">
                    <div className="billingAddressBoxStatus m-0">Active</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="channelTabel">
          <div className="channelTabelHeading d-flex justify-content-between">
            <h4>Funnels</h4>
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
                <button className="editBtn btn">Edit on import list</button>
              </div>
            </div>
          </div>
          <div className="tableBox">
            <table class=" channelTable">
              <thead>
                <tr>
                  <th scope="col">Type</th>
                  <th scope="col">Account name</th>
                  <th scope="col">Store name</th>
                  <th scope="col">Store URL</th>
                  <th scope="col">Access token</th>
                  <th scope="col">Expiry</th>
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
                  <td>Shopify</td>
                  <td>http:mystore.com</td>
                  <td className="accesstokenStatusSuccess">Enabled</td>
                  <td className="expiryDate">10 Mar 2023,9:65pm</td>

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
                  <td>Shopify</td>
                  <td>http:mystore.com</td>
                  <td className="accesstokenStatusSuccess">Enabled</td>
                  <td className="expiryDate">10 Mar 2023,9:65pm</td>

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

export default channels;
