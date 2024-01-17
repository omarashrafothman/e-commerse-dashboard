import Widget from "@/components/widget/Widget";
import increase from "../assets/images/webp/Group 233 1.webp";
import decrease from "../assets/images/webp/Group 42.webp";
import TitleHeader from "@/components/titleHeader/TitleHeader";
import Example from "@/components/charts/DashboardChart";
import Input from "@/components/inputs/Input";
import { useEffect } from "react";

export const runtime = "experimental-edge"; // 'nodejs' is the default
export const dynamic = "force-dynamic"; // static by default, unless reading the request

export function GET(request) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}

export default function dashboard() {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  return (
    <div className="main grayBgColor">
      <div className="container3">
        <TitleHeader title={"Dashboard"} />
        <div className="container1">
          <div className="d-flex widgetBoxContainer align-items-center justify-content-between flex-wrap">
            <Widget
              status={"increase"}
              forWhat={"Subscribes"}
              num={"486"}
              source={increase}
              percentage={"+10%"}
            />
            <Widget
              status={"increase"}
              forWhat={"Retention"}
              num={"65%"}
              source={increase}
              percentage={"+12%"}
            />
            <Widget
              status={"decrease"}
              forWhat={"Subscription"}
              num={"256 Days"}
              source={decrease}
              percentage={"-5%"}
            />
            <Widget
              status={"decrease"}
              forWhat={"Per User"}
              num={"$561.16"}
              source={decrease}
              percentage={"-1%"}
            />
          </div>

          <div className="tablesContainer">
            <div className="chartNameAndFilter d-flex align-items-center justify-content-between mb-4">
              <div>
                <h5>New Signups</h5>
              </div>
              <div>
                <select class="form-select" aria-label="Default select example">
                  <option value="1" selected>
                    30 Days
                  </option>
                  <option value="2">30 - 60 Days</option>
                  <option value="3">All Time</option>
                </select>
              </div>
            </div>
            <Example />
          </div>
          <br />
          <div className="tablesContainer">
            <div className="orderSearchBox d-flex  align-items-center ">
              <Input
                holder={"Search for orders or products"}
                type={"text"}
                classes={"form-control"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
