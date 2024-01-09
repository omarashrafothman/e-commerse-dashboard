import React from "react";
import Layout from "./layout";

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
        <div className="d-flex flex-column">
          <h4>Fulfillment</h4>
          <div className="d-flex align-items-center radioBox">
            <input type="radio" className="" />
            <label>Fulfill order and upload tracking number after</label>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
