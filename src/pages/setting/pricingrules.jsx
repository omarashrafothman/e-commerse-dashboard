import React from "react";
import Layout from "./layout";
import WarningBox from "@/components/warningBox/WarningBox";
import Input from "@/components/inputs/Input";

function Pricingrules() {
  return (
    <Layout>
      <div className="pricingRuleContainer">
        <div className="supplierSettingOptions">
          <h4>Pricing rules</h4>
          <p>
            Pricing rule will apply automatically when you push products from
            Dsers to Shopify Click here to get more information.
          </p>
        </div>
        <div>
          <div className="generalOrderItem d-flex ">
            <div class="form-check ">
              <input
                class="form-check-input "
                type="checkbox"
                id="flexSwitchCheckChecked"
              />
            </div>
            <div className="generalOrderItemData d-flex flex-column">
              <p className="gray">
                Apply currency rate to the pricing rules when you publish
                products to Shopify. The Global Pricing Rules work differently
                If you are not selling in USD on Shopify and do not want to
                activate this feature. Please calculate the multipliers
                accordingly.
              </p>
            </div>
          </div>
        </div>
        <div className="dsNinjaContainer">
          <div className="dsNinjaHead d-flex align-items-center justify-content-between px-2">
            <h4>ds-ninja</h4>
            <div class="form-check form-switch">
              <input
                class="form-check-input "
                type="checkbox"
                id="flexSwitchCheckChecked"
              />
            </div>
          </div>
          <br />
          <div className="generalOrderItem d-flex my-3">
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
          <WarningBox />
          <div className="productCostBox">
            <div className="productCostBoxItem d-flex align-items-center">
              <div className="productItemCost">
                <p>Product cost X</p>
              </div>
              <div className="productItemInput">
                <input type="number" className="form-control" />
              </div>
              <div>
                <p className="productItemPrice">= your product price</p>
              </div>
            </div>
            <div className="productCostBoxItem d-flex align-items-center">
              <div className="productItemCost d-flex align-items-center">
                {/*      <div class="form-check form-switch">
                  <input
                    class="form-check-input "
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                  />
                </div>*/}
                <p className="m-0">Product cost X</p>
              </div>
              <div className="productItemInput">
                <input type="number" className="form-control" />
              </div>
              <div className="">
                <p className="productItemPrice">= your product price</p>
              </div>
            </div>
          </div>
          <div className="supplierSettingOptions">
            <h4>Assign cents</h4>
            <br />
            <p>
              You can set specific cent value for your retail price. We wil use
              this value when forming the final price for your items (e.g., If
              you want the cost of your product to be xx.99 then add 99 to the
              fields below).
            </p>
          </div>
          <br />
          <div className="assignBoxContainer d-flex align-items-center justify-content-between">
            <div className="assignBox d-flex flex-column">
              <div className="d-flex align-items-center assignBoxLeft">
                <input type="checkbox" checked />
                <p className="m-0">Assign cents</p>
              </div>

              <div class="input-group assignBoxRight">
                <input type="number" class="form-control" />
              </div>
            </div>
            <div className="assignBox d-flex flex-column">
              <div className="d-flex align-items-center assignBoxLeft">
                <input type="checkbox" />
                <p className="m-0">Assign compare at cents</p>
              </div>

              <div class="input-group assignBoxRight">
                <input type="number" class="form-control" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Pricingrules;
