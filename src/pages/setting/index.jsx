import React from "react";
import Layout from "./layout";
// edge  start
export const runtime = "experimental-edge"; // 'nodejs' is the default
export const dynamic = "force-dynamic"; // static by default, unless reading the request

export function GET(request) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}
// edge  end

function Index() {
  return (
    <Layout>
      <div className="generalContent">
        <div className="generalOrderContainer">
          <h3>Order Details Synchronization</h3>
          <div className="generalOrderItem d-flex ">
            <div class="form-check form-switch">
              <input
                class="form-check-input "
                type="checkbox"
                id="flexSwitchCheckChecked"
              />
            </div>
            <div className="generalOrderItemData d-flex flex-column">
              <h4>Sync Ali order number to Shopify additional details</h4>
              <p>
                If this setting is on, you Ali order number will be auto synced
                to Shopify detail page.
              </p>
            </div>
          </div>
          <div className="generalOrderItem d-flex ">
            <div class="form-check form-switch">
              <input
                class="form-check-input "
                type="checkbox"
                id="flexSwitchCheckChecked"
              />
            </div>
            <div className="generalOrderItemData d-flex flex-column">
              <h4>Sync Ali order number to Shopify additional details</h4>
              <p>
                If this setting is on, you Ali order number will be auto synced
                to Shopify detail page.
              </p>
            </div>
          </div>
          <div className="generalOrderItem d-flex ">
            <div class="form-check form-switch">
              <input
                class="form-check-input "
                type="checkbox"
                id="flexSwitchCheckChecked"
              />
            </div>
            <div className="generalOrderItemData d-flex flex-column">
              <h4>Sync Ali order number to Shopify additional details</h4>
              <p>
                If this setting is on, you Ali order number will be auto synced
                to Shopify detail page
              </p>
            </div>
          </div>
        </div>
        <div className="generalOrderContainer">
          <h3>Order Management</h3>

          <div className="generalOrderItem d-flex ">
            <div class="form-check form-switch">
              <input
                class="form-check-input "
                type="checkbox"
                id="flexSwitchCheckChecked"
              />
            </div>
            <div className="generalOrderItemData d-flex flex-column">
              <h4>Canceled orders optimization</h4>
              <p>
                Activate this feature to automatically optimize an order
                cancelled by Ali Express. The optimization by DSers will greatly
                reduce the probability for the order to be cancelled again.
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column boxWithRadio leftOver">
          <h4 className="">Fulfillment</h4>
          <div className="d-flex align-items-center radioBox">
            <input type="radio" className="" />
            <label>Fulfill order and upload tracking number after</label>
          </div>
          <div className="d-flex align-items-center radioBox">
            <input type="radio" className="" />

            <label>Fulfill order and upload tracking number after</label>
            <div className="selectBox m-3">
              <select class="form-select" aria-label="Default select example">
                <option value="1" selected>
                  12 Hours
                </option>
                <option value="2">11 Hours</option>
                <option value="3">10 Hours</option>
              </select>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column boxWithRadio">
          <h5 className="">Auto fulfill delay</h5>
          <p>When the purchase order is shipped from the supplier:</p>
          <div className="d-flex  radioBox">
            <input type="radio" className="" />
            <div className="d-flex flex-column">
              <label>Fulfill order and upload tracking number after</label>
              <p>
                After activating this feature, DSers will fulfill each product
                in the orders separately and trigger Shopify sipping
                confirmation email with the following rules: when a product in
                DSers order has a tracking number, we will fulfill that item in
                the order and then Shopify will send an email to your customer.
                Shopify will send email multiple times for the same order.
              </p>
            </div>
          </div>

          <div className="d-flex  radioBox">
            <input type="radio" className="" />
            <div className="d-flex flex-column">
              <label>Fulfill order and upload tracking number after</label>
              <p>
                After activating this feature, DSers will fulfill each product
                in the orders separately and trigger Shopify sipping
                confirmation email with the following rules: when a product in
                DSers order has a tracking number, we will fulfill that item in
                the order and then Shopify will send an email to your customer.
                Shopify will send email multiple times for the same order.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
