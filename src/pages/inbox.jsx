import React from "react";
import TitleHeader from "@/components/titleHeader/TitleHeader";
import Input from "@/components/inputs/Input";
import dolarSign from "../assets/icons/dollar-sign.png";
import help from "../assets/icons/help-circle (1).png";
import alert from "../assets/icons/alert-circle.png";
import { useEffect } from "react";
import InboxItem from "@/components/inboxitem/InboxItem";
// edge  start
export const runtime = "experimental-edge"; // 'nodejs' is the default
export const dynamic = "force-dynamic"; // static by default, unless reading the request

export function GET(request) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}
// edge  end
function inbox() {
  useEffect(() => {
    document.title = "Inbox";
  }, []);
  return (
    <div className="main">
      <div className="container3">
        <TitleHeader title={"Inbox"} />
        <div className="container1">
          <div className="mainContent">
            <div className="orderSearchBox d-flex  align-items-center ">
              <Input
                holder={"Search mail"}
                type={"text"}
                classes={"form-control"}
              />
              <button className="btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <path
                    d="M14.5 13.3335L9.83333 13.3335M7.16667 13.3335L2.5 13.3335M14.5 8.00016L8.5 8.00016M5.83333 8.00016L2.5 8.00016M14.5 2.66683L11.1667 2.66683M8.5 2.66683L2.5 2.66683M9.83333 15.3335L9.83333 11.3335M5.83333 10.0002L5.83333 6.00016M11.1667 4.66683L11.1667 0.66683"
                    stroke="#344054"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="inboxDataContainer">
              <div className="dayOfInbox">
                <div className="dayOfInboxHeadind">
                  <h5>2023-11-21</h5>
                </div>
                <div className="inboxItemsBox d-flex flex-column">
                  <InboxItem
                    statusClases={
                      "productStatus d-flex align-items-center justify-content-center success"
                    }
                    statusImage={dolarSign}
                    data={"Product cost has changed: Joint Support Knee Pads"}
                  />
                  <InboxItem
                    statusClases={
                      "productStatus d-flex align-items-center justify-content-center success"
                    }
                    statusImage={dolarSign}
                    data={"Product cost has changed: Joint Support Knee Pads"}
                  />
                  <InboxItem
                    statusClases={
                      "productStatus d-flex align-items-center justify-content-center warning"
                    }
                    statusImage={help}
                    data={"Product cost has changed: Joint Support Knee Pads"}
                  />
                </div>
              </div>
              <div className="dayOfInbox">
                <div className="dayOfInboxHeadind">
                  <h5>2023-10-8</h5>
                </div>
                <div className="inboxItemsBox d-flex flex-column">
                  <InboxItem
                    statusClases={
                      "productStatus d-flex align-items-center justify-content-center success"
                    }
                    statusImage={dolarSign}
                    data={"Product cost has changed: Joint Support Knee Pads"}
                  />
                  <InboxItem
                    statusClases={
                      "productStatus d-flex align-items-center justify-content-center danger"
                    }
                    statusImage={alert}
                    data={"Product cost has changed: Joint Support Knee Pads"}
                  />
                  <InboxItem
                    statusClases={
                      "productStatus d-flex align-items-center justify-content-center warning"
                    }
                    statusImage={help}
                    data={"Product cost has changed: Joint Support Knee Pads"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default inbox;
