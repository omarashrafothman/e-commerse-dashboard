import React from "react";
import Layout from "./layout";
function notification() {
  return (
    <Layout>
      <div className="supplierSettingOptions">
        <h4>Notification feature</h4>
        <p>
          If you activate this feature, DSers will monitor out-of-stock
          products, price changes, AliExpress cancelled orders, product SKU
          changes and notifications will be sent to your DSers account.
        </p>
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
          <h4>Inventory</h4>
          <p>Get notified when supplies price changed on AliExpress</p>
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
          <h4>Price</h4>
          <p>Get notified when an order is cancelled on AliExpress</p>
        </div>
      </div>{" "}
      <div className="generalOrderItem d-flex ">
        <div class="form-check form-switch">
          <input
            class="form-check-input "
            type="checkbox"
            id="flexSwitchCheckChecked"
          />
        </div>
        <div className="generalOrderItemData d-flex flex-column">
          <h4>Cancelled order</h4>
          <p>Get notified when an order is cancelled on AliExpress</p>
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
          <h4>SKU changes</h4>
          <p>Get notified when a product SKU changed on AliExpress</p>
        </div>
      </div>
    </Layout>
  );
}

export default notification;
